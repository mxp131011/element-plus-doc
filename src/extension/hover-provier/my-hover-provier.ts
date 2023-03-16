import * as vscode from 'vscode';
import type { BaseLanguage, BaseUrl } from '@/types/index';
import { HoverProvierUtil } from './hover-provier-util';
import { allDocuments } from '@/documents/index';
import { getDirectives } from '@/documents/directives/directive';
import { GetDocUtil } from './get-doc-util';
import { getTag, toKebabCase } from '@/utils/global';
import type { TagDoc } from '@/types/tag-doc';

export class MyHoverProvier implements vscode.HoverProvider {
  /** 语言 */
  private lang: BaseLanguage;

  /** 自定义前缀数组 */
  private prefixList: string[];

  /** 官网基础链接 （必须以斜杠结尾） */
  private officialWebsite: BaseUrl;

  public constructor(lang: BaseLanguage, prefixList: string[], officialWebsite: BaseUrl) {
    this.lang = lang;
    this.prefixList = prefixList;
    this.officialWebsite = officialWebsite;
  }

  public provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    const hoverProvierUtil = new HoverProvierUtil(document, position);
    const tag: string | undefined = getTag(document, hoverProvierUtil.getTextBeforePosition(position), position);
    const attr = hoverProvierUtil.getAttr();
    const range = hoverProvierUtil.getHoverRange(attr);
    const kebabCaseTag = toKebabCase(tag);
    const prefix = this.prefixList.find((pre) => kebabCaseTag.startsWith(`${pre}-`));
    const directives = getDirectives(this.officialWebsite);
    // 如果有指令优先用指令
    if (tag && attr) {
      for (const iterator of directives) {
        const directive = iterator.list.find((item) => item.name === attr);
        if (directive) {
          let md: vscode.MarkdownString | undefined = undefined;
          if (directive.name === iterator.name) {
            md = new GetDocUtil(this.lang, this.officialWebsite).getAllDirectiveDoc(iterator);
          } else {
            md = new GetDocUtil(this.lang, this.officialWebsite).getSingleDirectiveDoc(directive, directive.name, iterator.url);
          }
          return new vscode.Hover(md, range);
        }
      }
    }

    // 不是指令这看是不是element-plus组件
    if (prefix) {
      // 如果只有以此前缀开头的标签才视作element-plus的标签
      let kebabCaseAttr = toKebabCase(attr === 'v-model' ? 'model-value' : attr);
      const attrArr = kebabCaseAttr.split(':'); // 解决 v-model:model-value 形式的属性
      const componentName = kebabCaseTag.replace(`${prefix}-`, '');
      kebabCaseAttr = attrArr.length > 1 && attrArr[1] ? attrArr[1] : kebabCaseAttr; // 如果是v-model:model-value 形式的属性取冒号后面的
      if (componentName in allDocuments && Boolean(allDocuments[componentName])) {
        const tagDoc = allDocuments[componentName]!;
        let md: vscode.MarkdownString | undefined = undefined;
        if (kebabCaseTag === kebabCaseAttr) {
          // 属性 和标签一样 显示全部
          md = new GetDocUtil(this.lang, this.officialWebsite).getAllDoc(tagDoc as TagDoc.TagDocInstance, componentName);
        } else if (kebabCaseAttr === 'ref') {
          // 如果是ref就显示整个对外暴露的文档
          md = new GetDocUtil(this.lang, this.officialWebsite).getExposesDoc(tagDoc as TagDoc.TagDocInstance, componentName);
        } else {
          // 属性和标签不一样 显示标签下的某个属性的信息
          md = new GetDocUtil(this.lang, this.officialWebsite).getSingleDoc(tagDoc as TagDoc.TagDocInstance, componentName, kebabCaseAttr);
        }
        return md && md.value !== '' ? new vscode.Hover(md, range) : null;
      }
    }
    return null;
  }
}
