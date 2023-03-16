import * as vscode from 'vscode';
import { allDocuments } from '@/documents/index';
import type { BaseLanguage } from '@/types/index';
import type { TagDoc } from '@/types/tag-doc';
import { matchAttr } from '@/utils/global';

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

  public constructor(lang: BaseLanguage, document: vscode.TextDocument, position: vscode.Position) {
    this.lang = lang;
    this.document = document;
    this.position = position;
  }

  /**
   * 获取当前行的属性（如没有则返回空字符串）
   */
  public getAttr(): string {
    const txt = this.getTextBeforePosition(this.position).replace(/"[^'"]*(\s*)[^'"]*$/, '');
    const end = this.position.character;
    const start = txt.lastIndexOf(' ', end) + 1;
    const parsedTxt = this.document.getText(new vscode.Range(this.position.line, start, this.position.line, end));
    return matchAttr(parsedTxt);
  }

  /**
   * 获取属性的可选值
   * @param tag - 标签
   * @param attr - 属性
   */
  public getAttrOptionValues(tag: string, attr: string): string[] {
    const attrList = attr.split(':'); // 解决 v-model:model-value 形式的属性
    const newAttr = attrList.length > 1 && attrList[1] ? attrList[1] : attr; // 如果是v-model:model-value 形式的属性取冒号后面的
    const docAttrs = allDocuments[tag]!.attributes || [];
    const attribute = docAttrs.find((item) => item.name === newAttr);
    if (!attribute) {
      return [];
    }
    // 如果有可选值就用可选值如果没有就判断类型是否为布尔类型如果是布尔l就设置为 ['true', 'false'] ，最后在判断是否有默认值如果有默认值就设置为默认值
    const newVale =
      attribute.value.length > 0 ? attribute.value : attribute.type === 'boolean' ? ['true', 'false'] : attribute.default ? [attribute.default] : [];
    return newVale.map((item) => (item === null ? 'null' : item));
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
   * 获取属性值的提示
   * @param tag - 标签
   * @param attr - 属性
   */
  public getAttrValSuggest(tag: string, attr: string): vscode.CompletionItem[] {
    const completionItems: vscode.CompletionItem[] = [];
    const values = this.getAttrOptionValues(tag, attr);
    values.forEach((item) => {
      if (item && /\w+/.test(item)) {
        completionItems.push({
          kind: vscode.CompletionItemKind.Value,
          label: `${item}`,
          sortText: `0${item}`,
          insertText: item,
          detail: `ElementPlusDoc`,
        });
      }
    });
    return completionItems;
  }

  /**
   * 获取事件名称提示
   * @param tag - 标签
   */
  public getEventSuggest(tag: string): vscode.CompletionItem[] {
    const completionItems: vscode.CompletionItem[] = [];
    const events: TagDoc.Event[] = allDocuments?.[tag]?.events || [];
    const lang = this.lang === 'zh-CN' ? 'cn' : 'en';
    events.forEach((event: TagDoc.Event) => {
      completionItems.push({
        kind: vscode.CompletionItemKind.Event,
        label: `${event.name}`,
        sortText: `0${event.name}`,
        detail: `ElementPlusDoc`,
        insertText: event.name,
        documentation: event.description[lang],
      });
    });
    return completionItems;
  }

  /**
   * 获取属性的提示信息
   * @param tag - 标签
   */
  public getAttrSuggest(tag: string): vscode.CompletionItem[] {
    const completionItems: vscode.CompletionItem[] = [];
    const attributes: TagDoc.Attribute[] = allDocuments?.[tag]?.attributes || [];
    attributes.forEach((attribute: TagDoc.Attribute) => {
      completionItems.push({
        kind: vscode.CompletionItemKind.Property,
        label: `${attribute.name}`,
        sortText: `0${attribute.name}`,
        detail: `ElementPlusDoc`,
        documentation: this.lang === 'zh-CN' ? attribute.description.cn : attribute.description.en,
        insertText: attribute.name,
      });
    });
    return completionItems;
  }

  /**
   * 获取标签提示
   */
  public getTagSuggest(prefixList: string[]): vscode.CompletionItem[] {
    const completionItems: vscode.CompletionItem[] = [];
    Object.keys(allDocuments).forEach((key) => {
      prefixList.forEach((prefix) => {
        const tag = `${prefix}-${key}`;
        completionItems.push({
          kind: vscode.CompletionItemKind.Class,
          label: tag,
          sortText: `0${tag}`,
          detail: `ElementPlusDoc`,
          insertText: new vscode.SnippetString().appendText(tag).appendTabstop().appendText('>').appendTabstop().appendText(`</${tag}>`),
        });
      });
    });
    return completionItems;
  }
}
