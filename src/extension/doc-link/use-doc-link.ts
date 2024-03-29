import { type Node } from 'vscode-html-languageservice';
import * as vscode from 'vscode';
import { allDocuments } from '@/documents/index';
import { mapComponent, toKebabCase } from '@/utils/global';
import { type BaseUrl } from '@/types/index';

/**
 * 给element-plus的每个组件添加官方文档链接
 */
export function getDocLink(
  list: Node[],
  prefixList: string[],
  result: vscode.DocumentLink[],
  document: vscode.TextDocument,
  officialWebsite: BaseUrl
): vscode.ProviderResult<vscode.DocumentLink[]> {
  for (const item of list) {
    const tag = toKebabCase(item.tag?.trim());
    const newTag: string = tag && tag in mapComponent ? mapComponent[tag]! : tag; // 如果是映射组件就使用映射逐渐对应的值所对应的tag
    const prefix = prefixList.find((pre) => newTag.startsWith(`${pre}-`));

    if (prefix) {
      const componentName = newTag.replace(`${prefix}-`, '');
      if (componentName in allDocuments) {
        const range = new vscode.Range(document.positionAt(item.start + 1), document.positionAt(item.start + Number(tag.length) + 1));
        result.push({ range, target: vscode.Uri.parse(`${officialWebsite}${allDocuments[componentName]?.url}`), tooltip: '官方文档链接' });
      }
    }
    // 递归遍历
    item.children && getDocLink(item.children, prefixList, result, document, officialWebsite);
  }

  return result;
}
