import { CompletionUtil } from './suggest-util';
import * as vscode from 'vscode';
import { type BaseLanguage } from '@/types/index';
import { getTag, mapComponent, toKebabCase } from '@/utils/global';
import { isAttrSuggest, isAttrValSuggest, isEventSuggest, isTagSuggest } from '@/utils/verify';

/**
 * 当输入单词或触发字符时补全
 */
export class MyCompletionItemProvider implements vscode.CompletionItemProvider {
  /** 默认语言 */
  private lang: BaseLanguage;

  /** 自定义前缀数组 */
  private prefixList: string[];

  public constructor(lang: BaseLanguage, prefixList: string[]) {
    this.lang = lang;
    this.prefixList = prefixList;
  }

  /**
   * 提供自动完成提示
   * @param document - 文档
   * @param position - 位置
   */
  public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position): Promise<vscode.CompletionItem[] | null> {
    return new Promise<vscode.CompletionItem[] | null>((resolve, reject) => {
      setTimeout(() => {
        const completionUtil = new CompletionUtil(this.lang, document, position);
        console.log('aaa====', vscode.window.activeTextEditor?.selection.active || position, position, vscode.window.activeTextEditor?.selection.active);
        const beforeText = completionUtil.getTextBeforePosition(vscode.window.activeTextEditor?.selection.active || position);
        const tag: string = toKebabCase(getTag(document, beforeText, position));
        const newTag: string = tag && tag in mapComponent ? mapComponent[tag]! : tag; // 如果是映射组件就使用映射逐渐对应的值所对应的tag
        const attr = completionUtil.getAttr();
        const prefix = this.prefixList.find((pre) => newTag.startsWith(`${pre}-`));

        // 如果只有以此前缀开头的标签才视作element-plus的标签
        if (tag && prefix) {
          const componentName = newTag.replace(`${prefix}-`, '');
          if (isAttrValSuggest(attr)) {
            console.log('aaa1====', attr, prefix);
            resolve(completionUtil.getAttrValSuggest(componentName, attr)); // 属性值的建议
          } else if (isEventSuggest(beforeText)) {
            console.log('aaa2====', attr, prefix);
            resolve(completionUtil.getEventSuggest(componentName)); // 事件的建议
          } else if (isAttrSuggest(beforeText)) {
            console.log('aaa3====', attr, prefix);
            resolve(completionUtil.getAttrSuggest(componentName)); // 属性的建议
          }
        } else if (isTagSuggest(tag, beforeText)) {
          console.log('aaa4====', attr, prefix);
          resolve(completionUtil.getTagSuggest(this.prefixList)); // 标签的建议
        }
        reject(null);
      }, 300);
    });
  }
}
