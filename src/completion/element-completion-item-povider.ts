import type { TagObject } from '@/hover-tips/index';
import {
  type CompletionItem,
  CompletionItemKind,
  type CompletionItemProvider,
  type CompletionList,
  Position,
  type ProviderResult,
  Range,
  SnippetString,
  type TextDocument,
  workspace,
} from 'vscode';

import { type DocumentAttribute, type DocumentEvent, localDocument } from '@/document';
import { type ExtensionConfigutation, type ExtensionLanguage } from '../index';

export class ElementCompletionItemProvider implements CompletionItemProvider {
  private defLanguage: ExtensionLanguage = 'zh-CN';

  private _document!: TextDocument;

  private _position!: Position;

  private tagReg = /<([\w-]+)\s*/g;

  private attrReg = /(?:\(|\s*)([\w-]+)=['"][^'"]*/;

  private tagStartReg = /<([\w-]*)$/;

  /**
   * 获取前置标签
   */
  public getPreTag(): TagObject | undefined {
    let line = this._position.line;
    let tag: TagObject | string | undefined = undefined;
    let txt = this.getTextBeforePosition(this._position);

    while (this._position.line - line < 10 && line >= 0) {
      if (line !== this._position.line) {
        txt = this._document.lineAt(line).text;
      }
      tag = this.matchTag(this.tagReg, txt, line);
      if (tag === 'break') {
        return undefined;
      }
      if (tag) {
        return tag as TagObject;
      }
      line--;
    }
    return undefined;
  }

  /**
   * 获取前置属性
   */
  public getPreAttr(): string {
    const txt = this.getTextBeforePosition(this._position).replace(/"[^'"]*(\s*)[^'"]*$/, '');
    const end = this._position.character;
    const start = txt.lastIndexOf(' ', end) + 1;
    const parsedTxt = this._document.getText(new Range(this._position.line, start, this._position.line, end));
    return this.matchAttr(this.attrReg, parsedTxt);
  }

  /**
   * 匹配属性
   * @param reg - 匹配模式
   * @param txt - 匹配文本
   */
  public matchAttr(reg: RegExp, txt: string): string {
    let match: RegExpExecArray | null = null;
    match = reg.exec(txt);
    if (!/"[^"]*"/.test(txt) && match) {
      return match[1] || '';
    }
    return '';
  }

  /**
   * 匹配标签
   * @param reg - 匹配模式
   * @param txt - 匹配文本
   * @param line - 当前行
   */
  public matchTag(reg: RegExp, txt: string, line: number): TagObject | string | undefined {
    let match: RegExpExecArray | null = null;
    const arr: TagObject[] = [];

    if (
      /<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) ||
      (this._position.line === line && (/^\s*[^<]+\s*>[^</>]*$/.test(txt) || /[^<>]*<$/.test(txt[txt.length - 1] || '')))
    ) {
      return 'break';
    }
    while ((match = reg.exec(txt))) {
      arr.push({
        text: match[1] || '',
        offset: this._document.offsetAt(new Position(line, match.index)),
      });
    }
    return arr.pop();
  }

  /**
   * 获取当前位置之前的字符串
   * @param position - 位置
   */
  public getTextBeforePosition(position: Position): string {
    const start = new Position(position.line, 0);
    const range = new Range(start, position);
    return this._document.getText(range);
  }

  /**
   * 是否位属性值的开始
   * @param tag - 标签
   * @param attr - 属性
   */
  public isAttrValueStart(tag: Record<string, any> | undefined, attr: string) {
    return Boolean(tag) && Boolean(attr);
  }

  /**
   * 是否位属性的开始
   * @param tag - 标签
   */
  public isAttrStart(tag: TagObject | undefined) {
    const preText = this.getTextBeforePosition(this._position);
    return tag && / :?[\w-]*$/.test(preText);
  }

  /**
   * 是否为方法的开始
   * @param tag - 标签
   */
  public isEventStart(tag: TagObject | undefined) {
    const preText = this.getTextBeforePosition(this._position);
    return tag && / @[\w-]*$/.test(preText);
  }

  /**
   * 获取属性值
   * @param tag - 标签
   * @param attr - 属性
   */
  public getAttrValues(tag: string, attr: string): string[] {
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('element-ui-helper');
    const language = config?.language || this.defLanguage;
    const document: Record<string, any> | undefined = localDocument[language];
    const attributes: DocumentAttribute[] = document?.[tag].attributes || [];
    const attribute: DocumentAttribute | undefined = attributes.find((_attribute) => _attribute.name === attr);
    if (!attribute) {
      return [];
    }
    const values = attribute.value.split(/[,/\\]/).map((item) => item.trim());
    return values;
  }

  /**
   * 获取属性值的提示信息
   * @param tag - 标签
   * @param attr - 属性
   */
  public getAttrValueCompletionItems(tag: string, attr: string): CompletionItem[] {
    const completionItems: CompletionItem[] = [];
    const values = this.getAttrValues(tag, attr);
    values.forEach((value) => {
      if (/\w+/.test(value)) {
        completionItems.push({
          label: `${value}`,
          sortText: `0${value}`,
          detail: `${tag}-${attr}`,
          kind: CompletionItemKind.Value,
          insertText: value,
        });
      }
    });
    return completionItems;
  }

  /**
   * 获取事件名称提示
   * @param tag - 标签
   */
  public getEventCompletionItems(tag: string): CompletionItem[] {
    const completionItems: CompletionItem[] = [];
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('element-ui-helper');
    const language = config?.language || this.defLanguage;
    const document: Record<string, any> | undefined = localDocument[language];
    const preText = this.getTextBeforePosition(this._position);
    const prefix = preText.replace(/.*@([\w-]*)$/, '$1');
    const events: DocumentEvent[] = document?.[tag]?.events || [];
    const likeTag = events.filter((evnet: DocumentEvent) => evnet.name.includes(prefix));
    likeTag.forEach((event: DocumentEvent) => {
      const start = preText.lastIndexOf('@') + 1;
      const end = start + prefix.length;
      const startPos = new Position(this._position.line, start);
      const endPos = new Position(this._position.line, end);
      const range = new Range(startPos, endPos);
      completionItems.push({
        label: `${event.name}`,
        sortText: `0${event.name}`,
        detail: `${tag} Event`,
        documentation: event.description,
        kind: CompletionItemKind.Value,
        insertText: event.name,
        range,
      });
    });
    return completionItems;
  }

  /**
   * 获取属性的提示信息
   * @param tag - 标签
   */
  public getAttrCompletionItems(tag: string): CompletionItem[] {
    const completionItems: CompletionItem[] = [];
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('element-ui-helper');
    const language = config?.language || this.defLanguage;
    const document: Record<string, any> | undefined = localDocument[language];
    const preText = this.getTextBeforePosition(this._position);
    const prefix = preText.replace(/.*[\s@:]/g, '');
    const attributes: DocumentAttribute[] = document?.[tag].attributes || [];
    const likeTag = attributes.filter((attribute: DocumentAttribute) => attribute.name.includes(prefix));
    likeTag.forEach((attribute: DocumentAttribute) => {
      const start = Math.max(preText.lastIndexOf(' '), preText.lastIndexOf(':')) + 1;
      const end = start + prefix.length;
      const startPos = new Position(this._position.line, start);
      const endPos = new Position(this._position.line, end);
      const range = new Range(startPos, endPos);
      completionItems.push({
        label: `${attribute.name}`,
        sortText: `0${attribute.name}`,
        detail: `${tag} Attribute`,
        documentation: attribute.description,
        kind: CompletionItemKind.Value,
        insertText: attribute.name,
        range,
      });
    });
    return completionItems;
  }

  /**
   * 是否位标签的开始
   */
  public isTagStart(): boolean {
    const txt = this.getTextBeforePosition(this._position);
    return this.tagStartReg.test(txt);
  }

  /**
   * 获取标签提示
   */
  public getTagCompletionItems(): CompletionItem[] {
    const completionItems: CompletionItem[] = [];
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('element-ui-helper');
    const language = config?.language || this.defLanguage;
    const preText = this.getTextBeforePosition(this._position);
    const document: Record<string, any> = localDocument[language] || {};
    Object.keys(document).forEach((key) => {
      const start = preText.lastIndexOf('<') + 1;
      const end = preText.length - start + 1;
      const startPos = new Position(this._position.line, start);
      const endPos = new Position(this._position.line, end);
      const range = new Range(startPos, endPos);
      completionItems.push({
        label: `${key}`,
        sortText: `0${key}`,
        detail: 'ElementUI Tag',
        kind: CompletionItemKind.Value,
        insertText: new SnippetString().appendText(`${key}`).appendTabstop().appendText('>').appendTabstop().appendText(`</${key}>`),
        range,
      });
    });
    return completionItems;
  }

  /**
   * 提供自动完成提示
   * @param document - 文档
   * @param position - 位置
   */
  public provideCompletionItems(document: TextDocument, position: Position): ProviderResult<CompletionItem[] | CompletionList> {
    this._document = document;
    this._position = position;

    const tag: TagObject | undefined = this.getPreTag();
    const attr = this.getPreAttr();

    if (!tag || !/^[E|e]l/.test(tag.text || '')) {
      // 如果不是element的标签(E|el开头) 则返回 null 表示没有hover
      return null;
    } else if (this.isAttrValueStart(tag, attr)) {
      // 如果是属性值的开始
      return this.getAttrValueCompletionItems(tag.text, attr);
    } else if (this.isEventStart(tag)) {
      // 优先判定事件
      return this.getEventCompletionItems(tag.text);
    } else if (this.isAttrStart(tag)) {
      // 判断属性
      return this.getAttrCompletionItems(tag.text);
    } else if (this.isTagStart()) {
      // 判断标签
      return this.getTagCompletionItems();
    }

    return null;
  }
}
