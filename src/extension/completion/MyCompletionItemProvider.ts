import { CompletionUtil } from './completion-util';
import type * as vscode from 'vscode';
import { type BaseLanguage } from '@/types/index';

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
  public provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    const completionUtil = new CompletionUtil(this.defLanguage, document, position);
    const tag = completionUtil.getPreTag();
    console.log('tag :>> ', tag);
    //  const attr = completionUtil.getPreAttr();
    //  if (completionUtil.isAttrValueStart(tag, attr)) {
    //   // 如果是属性值的开始
    //   return completionUtil.getAttrValueCompletionItems(tag.text, attr);
    // } else
    if (!tag || !/^[E|e]l/.test(tag.text || '')) {
      // 如果不是element的标签(E|el开头) 则返回 null 表示没有hover
      return null;
    } else if (completionUtil.isEventStart(tag)) {
      // 优先判定事件
      return completionUtil.getEventCompletionItems(tag.text);
    } else if (completionUtil.isAttrStart(tag)) {
      // 判断属性
      return completionUtil.getAttrCompletionItems(tag.text);
    } else if (completionUtil.isTagStart()) {
      // 判断标签
      return completionUtil.getTagCompletionItems();
    }

    return null;
  }
}
