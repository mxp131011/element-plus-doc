import * as vscode from 'vscode';
import type { BaseLanguage } from '@/types/index';
import { HoverProvierUtil } from './hover-provier-util';
import { AllDocuments } from '@/documents/index';
import { GetDocUtil } from './get-doc-util';
import { getTag, toKebabCase } from '@/utils/global';

export class MyHoverProvier implements vscode.HoverProvider {
  /** 语言 */
  private lang: BaseLanguage;

  public constructor(lang: BaseLanguage) {
    this.lang = lang;
  }

  public provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    const hoverProvierUtil = new HoverProvierUtil(document, position);
    const tag: string | undefined = getTag(document, hoverProvierUtil.getTextBeforePosition(position), position);
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
      if (kebabCaseTag in AllDocuments && Boolean(AllDocuments[kebabCaseTag])) {
        const tagDoc = AllDocuments[kebabCaseTag]!;
        let md: vscode.MarkdownString[] | undefined = [];
        if (kebabCaseTag === kebabCaseAttr) {
          // 属性 和标签一样 显示全部
          md = new GetDocUtil(this.lang).getAllDoc(tagDoc, kebabCaseTag);
        } else if (kebabCaseAttr === 'ref') {
          // 如果是ref就显示整个对外暴露的文档
          md = new GetDocUtil(this.lang).getExposesDoc(tagDoc, kebabCaseTag);
        } else {
          // 属性和标签不一样 显示标签下的某个属性的信息
          md = new GetDocUtil(this.lang).getSingleDoc(tagDoc, kebabCaseTag, kebabCaseAttr);
        }
        return md && md.length > 0 ? new vscode.Hover(md, range) : null;
      } else {
        return null;
      }
    }
  }
}
