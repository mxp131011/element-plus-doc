import { type Node } from 'vscode-html-languageservice';
import * as vscode from 'vscode';
import { AllDocuments } from '@/documents/index';
import { toKebabCase } from '@/utils/global';
import { type BaseUrl } from '@/types/index';

/**
 * 给element-plus的每个组件添加官方文档链接
 */
export function useDocLink(
  list: Node[],
  prefixList: string[],
  result: vscode.DocumentLink[],
  document: vscode.TextDocument,
  officialWebsite: BaseUrl
): vscode.ProviderResult<vscode.DocumentLink[]> {
  for (const item of list) {
    const tag = toKebabCase(item.tag?.trim() || '');
    const prefix = prefixList.find((pre) => tag.startsWith(`${pre}-`));

    if (prefix) {
      // AllDocuments包含了tag,则使用组件名称作为链接
      const componentName = tag.replace(`${prefix}-`, '');

      if (componentName in AllDocuments) {
        const range = new vscode.Range(document.positionAt(item.start + 1), document.positionAt(item.start + Number(tag.length) + 1));
        result.push({ range, target: vscode.Uri.parse(`${officialWebsite}${AllDocuments[componentName]?.url}`), tooltip: '官方文档链接' });
      }
    }
    // 递归遍历
    item.children && useDocLink(item.children, prefixList, result, document, officialWebsite);
  }

  return result;
}
