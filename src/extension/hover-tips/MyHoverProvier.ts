import * as vscode from 'vscode';
import type { BaseLanguage } from '@/types/index';
import { HoverProvierUtil } from './hover-provier-util';
import { AllDocuments } from '@/documents/index';
import { GetDocUtil } from './get-doc-util';
import { toKebabCase } from '@/utils/global';

export class MyHoverProvier implements vscode.HoverProvider {
  /** 语言 */
  private lang: BaseLanguage;

  public constructor(lang: BaseLanguage) {
    this.lang = lang;
  }

  public provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    const hoverProvierUtil = new HoverProvierUtil(document, position);
    const tag: string | undefined = hoverProvierUtil.getTag();
    if (!/^[E|e]l/.test(tag || '')) {
      // 如果不是element的标签(E|el开头) 则返回 null 表示没有hover
      return null;
    } else {
      const attr = hoverProvierUtil.getAttr();
      const range = hoverProvierUtil.getHoverRange(attr);
      const kebabCaseTag = toKebabCase(tag);
      let kebabCaseAttr = toKebabCase(attr === 'v-model' ? 'model-value' : attr);
      const attrArr = kebabCaseAttr.split(':'); // 解决 v-model:model-value 形式的属性
      kebabCaseAttr = attrArr.length > 1 && attrArr[1] ? attrArr[1] : kebabCaseAttr; // 如果是v-model:model-value 形式的属性取冒号后面的
      kebabCaseAttr = kebabCaseTag === kebabCaseAttr ? '' : kebabCaseAttr; // 如果属性和标签相等就设置为空
      if (kebabCaseTag in AllDocuments && Boolean(AllDocuments[kebabCaseTag])) {
        const mdStrList: vscode.MarkdownString[] = []; // hover提示的Markdown列表
        const tagDoc = AllDocuments[kebabCaseTag]!;
        const getDocUtil = new GetDocUtil();
        // 循环生成对应的Markdown
        for (const key in tagDoc) {
          let mdStr: vscode.MarkdownString | undefined = undefined;
          switch (key) {
            case 'attributes':
              mdStr = getDocUtil.getAttributeDoc(tagDoc, kebabCaseTag, kebabCaseAttr, this.lang);
              break;
            case 'events':
              mdStr = getDocUtil.getEventDoc(tagDoc, kebabCaseTag, kebabCaseAttr, this.lang);
              break;
            case 'slots':
              mdStr = getDocUtil.getSlotDoc(tagDoc, kebabCaseTag, kebabCaseAttr, this.lang);
              break;
            case 'exposes':
              mdStr = getDocUtil.getExposeDoc(tagDoc, kebabCaseTag, kebabCaseAttr, this.lang);
              break;
            default:
              mdStr = undefined;
          }
          mdStr && mdStrList.push(mdStr);
        }
        return new vscode.Hover(mdStrList, range);
      } else {
        return null;
      }
    }
  }
}
