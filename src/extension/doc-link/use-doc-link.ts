import { type Node } from 'vscode-html-languageservice';
import * as vscode from 'vscode';
import { type BaseLanguage } from '@/types/index';

/**
 * 给element-plus的每个组件添加官方文档链接
 */
export function useDocLink(
  list: Node[],
  result: vscode.DocumentLink[],
  document: vscode.TextDocument,
  lang: BaseLanguage
): vscode.ProviderResult<vscode.DocumentLink[]> {
  /** 文档基础链接 */
  const basUrl = 'https://element-plus.org';

  for (const item of list) {
    // 判断tag是不是以el-开头
    if (item.tag && item.tag.startsWith('el-')) {
      // 如果存在就添加链接
      const componentName = item.tag.replace('el-', '');
      const range = new vscode.Range(document.positionAt(item.start + 1), document.positionAt(item.start + Number(item.tag?.length) + 1));
      result.push({ range, target: vscode.Uri.parse(`${basUrl}/${lang}/component/${componentName}.html`), tooltip: '官方文档链接' });
    }
    // 递归遍历
    item.children && useDocLink(item.children, result, document, lang);
  }

  return result;
}
