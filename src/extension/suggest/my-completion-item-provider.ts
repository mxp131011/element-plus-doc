import { CompletionUtil } from './suggest-util';
import type * as vscode from 'vscode';
import { type BaseLanguage } from '@/types/index';
import { getTag } from '@/utils/global';
import { isAttrSuggest, isAttrValSuggest, isEventSuggest, isTagSuggest } from '@/utils/verify';

/**
 * 当输入单词或触发字符时补全
 */
export class MyCompletionItemProvider implements vscode.CompletionItemProvider {
  /**
   * 默认语言
   */
  private defLanguage: BaseLanguage;

  public constructor(defLanguage: BaseLanguage) {
    this.defLanguage = defLanguage;
  }

  /**
   * 提供自动完成提示
   * @param document - 文档
   * @param position - 位置
   */
  public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position): vscode.CompletionItem[] | null {
    const completionUtil = new CompletionUtil(this.defLanguage, document, position);
    const beforeText = completionUtil.getTextBeforePosition(position);
    const tag: string = getTag(document, beforeText, position) || '';
    const attr = completionUtil.getAttr();
    if (tag && /^[E|e]l/.test(tag || '')) {
      if (isAttrValSuggest(tag, attr)) {
        return completionUtil.getAttrValSuggest(tag, attr); // 属性值的建议
      } else if (isEventSuggest(tag, beforeText)) {
        return completionUtil.getEventSuggest(tag); // 事件的建议
      } else if (isAttrSuggest(tag, beforeText)) {
        return completionUtil.getAttrSuggest(tag); // 属性的建议
      }
    } else if (isTagSuggest(tag, beforeText)) {
      return completionUtil.getTagSuggest(); // 标签的建议
    }
    return null;
  }
}
