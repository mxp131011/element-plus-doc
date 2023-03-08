import { type Node } from 'vscode-html-languageservice';
import * as vscode from 'vscode';
import { type DocumentLink, Range } from 'vscode';
import { type BaseLanguage } from '@/types/index';

/**
 * tag对应的文档链接
 */
const tagDocObj: Record<string, string> = {
  'el-table-column': 'table',
  'el-input-search': 'input',
  'el-row': 'layout',
  'el-col': 'layout',
  'el-header': 'container',
  'el-main': 'container',
  'el-footer': 'container',
  'el-aside': 'container',
  'el-breadcrumb-item': 'breadcrumb',
  'el-radio-group': 'radio',
  'el-checkbox-group': 'checkbox',
  'el-tab-pane': 'tabs',
  'el-menu-item': 'menu',
  'el-submenu': 'menu',
  'el-anchor-link': 'anchor',
  'el-timeline-item': 'timeline',
  'el-collapse-item': 'collapse',
  'el-descriptions-item': 'descriptions',
  'el-dropdown-menu': 'dropdown',
  'el-dropdown-item': 'dropdown',
  'el-carousel-item': 'carousel',
  'el-step': 'steps',
  'el-form-item': 'form',
};

/**
 * 给element-plus的每个组件添加官方文档链接
 */
export function useDocLink(list: Node[], result: DocumentLink[], document: vscode.TextDocument, lang: BaseLanguage) {
  /** 文档基础链接 */
  const basUrl = 'https://element-plus.org/';

  /** 文档的语言 */
  for (const item of list) {
    // 判断tag是不是以el-开头
    if (item.tag && item.tag.startsWith('el-')) {
      // 如果存在就添加链接
      if (item.tag in tagDocObj) {
        const range: Range = new Range(document.positionAt(item.start + 1), document.positionAt(item.start + Number(item.tag?.length) + 1));
        result.push({ range, target: vscode.Uri.parse(`${basUrl}/${lang}/component/${tagDocObj[item.tag]}.html`) });
      }
    }
    // 递归遍历
    item.children && useDocLink(item.children, result, document, lang);
  }

  return result;
}
