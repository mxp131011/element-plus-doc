import * as vscode from 'vscode';
import { AllDocuments } from '@/documents/index';
import type { ExtensionLanguage, TagObject } from '@/types/index';
import type { Document } from '@/types/document';

/**
 *当输入单词或触发字符时补全
 */
export class CompletionUtil {
  /** 当前的文档（整个代码文件） */
  private document: vscode.TextDocument;

  /** 当前光标的位置 */
  private position: vscode.Position;

  /** 默认语言 */
  private readonly tagReg = /<([\w-]+)\s*/g;

  /** 默认语言 */
  private readonly attrReg = /(?:\(|\s*)([\w-]+)=['"][^'"]*/;

  /** 默认语言 */
  private readonly tagStartReg = /<([\w-]*)$/;

  public constructor(_defLanguage: ExtensionLanguage, document: vscode.TextDocument, position: vscode.Position) {
    this.document = document;
    this.position = position;
  }

  /**
   * 获取前置标签
   */
  public getPreTag(): TagObject | undefined {
    let line = this.position.line;
    console.log('line====', line);
    let tag: TagObject | string | undefined = undefined;
    let txt = this.getTextBeforePosition(this.position);

    while (this.position.line - line < 10 && line >= 0) {
      if (line !== this.position.line) {
        txt = this.document.lineAt(line).text;
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
    const txt = this.getTextBeforePosition(this.position).replace(/"[^'"]*(\s*)[^'"]*$/, '');
    const end = this.position.character;
    const start = txt.lastIndexOf(' ', end) + 1;
    const parsedTxt = this.document.getText(new vscode.Range(this.position.line, start, this.position.line, end));
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
      (this.position.line === line && (/^\s*[^<]+\s*>[^</>]*$/.test(txt) || /[^<>]*<$/.test(txt[txt.length - 1] || '')))
    ) {
      return 'break';
    }
    while ((match = reg.exec(txt))) {
      arr.push({
        text: match[1] || '',
        offset: this.document.offsetAt(new vscode.Position(line, match.index)),
      });
    }
    return arr.pop();
  }

  /**
   * 获取当前位置之前的字符串
   * @param position - 位置
   */
  public getTextBeforePosition(position: vscode.Position): string {
    const start = new vscode.Position(position.line, 0);
    const range = new vscode.Range(start, position);
    return this.document.getText(range);
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
    const preText = this.getTextBeforePosition(this.position);
    return tag && / :?[\w-]*$/.test(preText);
  }

  /**
   * 是否为方法的开始
   * @param tag - 标签
   */
  public isEventStart(tag: TagObject | undefined) {
    const preText = this.getTextBeforePosition(this.position);
    return tag && / @[\w-]*$/.test(preText);
  }

  /**
   * 获取事件名称提示
   * @param tag - 标签
   */
  public getEventCompletionItems(tag: string): vscode.CompletionItem[] {
    const completionItems: vscode.CompletionItem[] = [];
    // const config = vscode.workspace.getConfiguration().get<ExtensionConfigutation>('element-ui-helper');
    // const language = config?.language || this.defLanguage;
    // const document: Record<string, any> | undefined = AllDocuments[language];
    const preText = this.getTextBeforePosition(this.position);
    const prefix = preText.replace(/.*@([\w-]*)$/, '$1');
    const events: Document.Event[] = AllDocuments?.[tag]?.events || [];
    const likeTag = events.filter((evnet: Document.Event) => evnet.name.includes(prefix));
    likeTag.forEach((event: Document.Event) => {
      const start = preText.lastIndexOf('@') + 1;
      const end = start + prefix.length;
      const startPos = new vscode.Position(this.position.line, start);
      const endPos = new vscode.Position(this.position.line, end);
      const range = new vscode.Range(startPos, endPos);
      completionItems.push({
        label: `${event.name}`,
        sortText: `0${event.name}`,
        detail: `${tag} Event`,
        documentation: event.description,
        kind: vscode.CompletionItemKind.Value,
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
  public getAttrCompletionItems(tag: string): vscode.CompletionItem[] {
    const completionItems: vscode.CompletionItem[] = [];
    // const config = vscode.workspace.getConfiguration().get<ExtensionConfigutation>('element-ui-helper');
    // const language = config?.language || this.defLanguage;
    // const document: Record<string, any> | undefined = AllDocuments;
    const preText = this.getTextBeforePosition(this.position);
    const prefix = preText.replace(/.*[\s@:]/g, '');
    const attributes: Document.Attribute[] = AllDocuments?.[tag]?.attributes || [];
    const likeTag = attributes.filter((attribute: Document.Attribute) => attribute.name.includes(prefix));
    likeTag.forEach((attribute: Document.Attribute) => {
      const start = Math.max(preText.lastIndexOf(' '), preText.lastIndexOf(':')) + 1;
      const end = start + prefix.length;
      const startPos = new vscode.Position(this.position.line, start);
      const endPos = new vscode.Position(this.position.line, end);
      const range = new vscode.Range(startPos, endPos);
      completionItems.push({
        label: `${attribute.name}`,
        sortText: `0${attribute.name}`,
        detail: `${tag} Attribute`,
        documentation: attribute.description,
        kind: vscode.CompletionItemKind.Value,
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
    const txt = this.getTextBeforePosition(this.position);
    return this.tagStartReg.test(txt);
  }

  /**
   * 获取标签提示
   */
  public getTagCompletionItems(): vscode.CompletionItem[] {
    const completionItems: vscode.CompletionItem[] = [];
    //  const language = config?.language || this.defLanguage;
    const preText = this.getTextBeforePosition(this.position);
    Object.keys(AllDocuments).forEach((key) => {
      const start = preText.lastIndexOf('<') + 1;
      const end = preText.length - start + 1;
      const startPos = new vscode.Position(this.position.line, start);
      const endPos = new vscode.Position(this.position.line, end);
      const range = new vscode.Range(startPos, endPos);
      completionItems.push({
        label: `${key}`,
        sortText: `0${key}`,
        detail: 'ElementUI Tag',
        kind: vscode.CompletionItemKind.Value,
        insertText: new vscode.SnippetString().appendText(`${key}`).appendTabstop().appendText('>').appendTabstop().appendText(`</${key}>`),
        range,
      });
    });
    return completionItems;
  }
}
