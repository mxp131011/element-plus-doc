import * as vscode from 'vscode';
import { AllDocuments } from '@/documents/index';
import type { BaseLanguage } from '@/types/index';
import type { TagDoc } from '@/types/tag-doc';

/**
 *当输入单词或触发字符时补全
 */
export class CompletionUtil {
  /** 语言 */
  private lang: BaseLanguage;

  /** 当前的文档（整个代码文件） */
  private document: vscode.TextDocument;

  /** 当前光标的位置 */
  private position: vscode.Position;

  /** 匹配标签正则  */
  private readonly attrReg = /(?:\(|\s*)([\w-]+)=['"][^'"]*/;

  /** 匹配属性正则  */
  private readonly tagStartReg = /<([\w-]*)$/;

  public constructor(lang: BaseLanguage, document: vscode.TextDocument, position: vscode.Position) {
    this.lang = lang;
    this.document = document;
    this.position = position;
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
   * 获取属性值
   * @param tag - 标签
   * @param attr - 属性
   */
  public getAttrValues(tag: string, attr: string): string[] {
    const attributes = AllDocuments[tag]!.attributes || [];
    const attribute: TagDoc.Attribute | undefined = attributes.find((_attribute) => _attribute.name === attr);
    if (!attribute) {
      return [];
    }
    const valueList = Array.isArray(attribute?.value) ? attribute.value : attribute?.value ? [attribute.value] : [];
    const values = valueList.map((item) => item.trim());
    return values;
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
   * 获取当前光标所在单词之前的内容 (包含该单词，且只取当前行)
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
  public isAttrValueStart(tag: string | undefined, attr: string) {
    return Boolean(tag) && Boolean(attr);
  }

  /**
   * 是否位属性的开始
   * @param tag - 标签
   */
  public isAttrStart(tag: string | undefined) {
    const preText = this.getTextBeforePosition(this.position);
    return tag && / :?[\w-]*$/.test(preText);
  }

  /**
   * 是否为方法的开始
   * @param tag - 标签
   */
  public isEventStart(tag: string | undefined) {
    const preText = this.getTextBeforePosition(this.position);
    return tag && / @[\w-]*$/.test(preText);
  }

  /**
   * 获取属性值的提示信息
   * @param tag - 标签
   * @param attr - 属性
   */
  public getAttrValueCompletionItems(tag: string, attr: string): vscode.CompletionItem[] {
    const completionItems: vscode.CompletionItem[] = [];

    const values = this.getAttrValues(tag, attr);

    values.forEach((value) => {
      if (/\w+/.test(value)) {
        completionItems.push({
          label: `${value}`,
          sortText: `0${value}`,
          detail: `${tag}-${attr}`,
          kind: vscode.CompletionItemKind.Value,
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
  public getEventCompletionItems(tag: string): vscode.CompletionItem[] {
    const completionItems: vscode.CompletionItem[] = [];
    const preText = this.getTextBeforePosition(this.position);
    const prefix = preText.replace(/.*@([\w-]*)$/, '$1');
    const events: TagDoc.Event[] = AllDocuments?.[tag]?.events || [];
    const likeTag = events.filter((evnet: TagDoc.Event) => evnet.name.includes(prefix));
    likeTag.forEach((event: TagDoc.Event) => {
      const start = preText.lastIndexOf('@') + 1;
      const end = start + prefix.length;
      const startPos = new vscode.Position(this.position.line, start);
      const endPos = new vscode.Position(this.position.line, end);
      const range = new vscode.Range(startPos, endPos);
      completionItems.push({
        label: `${event.name}`,
        sortText: `0${event.name}`,
        detail: `${tag} Event`,
        documentation: this.lang === 'zh-CN' ? event.description.cn : event.description.en,
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
    const preText = this.getTextBeforePosition(this.position);
    const prefix = preText.replace(/.*[\s@:]/g, '');
    const attributes: TagDoc.Attribute[] = AllDocuments?.[tag]?.attributes || [];
    const likeTag = attributes.filter((attribute: TagDoc.Attribute) => attribute.name.includes(prefix));
    likeTag.forEach((attribute: TagDoc.Attribute) => {
      const start = Math.max(preText.lastIndexOf(' '), preText.lastIndexOf(':')) + 1;
      const end = start + prefix.length;
      const startPos = new vscode.Position(this.position.line, start);
      const endPos = new vscode.Position(this.position.line, end);
      const range = new vscode.Range(startPos, endPos);
      completionItems.push({
        label: `${attribute.name}`,
        sortText: `0${attribute.name}`,
        detail: `${tag} Attribute`,
        documentation: this.lang === 'zh-CN' ? attribute.description.cn : attribute.description.en,
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
