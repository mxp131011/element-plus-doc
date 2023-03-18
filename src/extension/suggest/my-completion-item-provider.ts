import { CompletionUtil } from './suggest-util';
import type * as vscode from 'vscode';
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
  public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position): vscode.CompletionItem[] | null {
    const completionUtil = new CompletionUtil(this.lang, document, position);
    const beforeText = completionUtil.getTextBeforePosition(position);
    let tag: string = getTag(document, beforeText, position) || '';
    const kebabCaseTag = toKebabCase(tag);
    const attr = completionUtil.getAttr();
    const prefix = this.prefixList.find((pre) => kebabCaseTag.startsWith(`${pre}-`));

    // 如果是映射组件就使用映射逐渐对应的值所谓tag
    if (tag && tag in mapComponent) {
      tag = mapComponent[tag]!;
    }

    // 如果只有以此前缀开头的标签才视作element-plus的标签
    if (tag && prefix) {
      const componentName = kebabCaseTag.replace(`${prefix}-`, '');
      if (isAttrValSuggest(attr)) {
        return completionUtil.getAttrValSuggest(componentName, attr); // 属性值的建议
      } else if (isEventSuggest(beforeText)) {
        return completionUtil.getEventSuggest(componentName); // 事件的建议
      } else if (isAttrSuggest(beforeText)) {
        return completionUtil.getAttrSuggest(componentName); // 属性的建议
      }
    } else if (isTagSuggest(tag, beforeText)) {
      return completionUtil.getTagSuggest(this.prefixList); // 标签的建议
    }
    return null;
  }
}
