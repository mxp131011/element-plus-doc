import { type Node } from 'vscode-html-languageservice';
import * as vscode from 'vscode';
import { type BaseLanguage } from '@/types/index';
import { AllDocuments } from '@/documents/index';
import { toKebabCase } from '@/utils/global';

const otherLinks = {
  'button-group': 'component/button.html#buttongroup-attributes',
};

/**
 * 给element-plus的每个组件添加官方文档链接
 */
export function useDocLink(
  list: Node[],
  prefixList: string[],
  result: vscode.DocumentLink[],
  document: vscode.TextDocument,
  lang: BaseLanguage
): vscode.ProviderResult<vscode.DocumentLink[]> {
  /** 文档基础链接 */
  const basUrl = 'https://element-plus.org';

  for (const item of list) {
    const tag = toKebabCase(item.tag?.trim() || '');
    const prefix = prefixList.find((pre) => tag.startsWith(`${pre}-`));

    if (prefix) {
      // AllDocuments包含了tag,则使用组件名称作为链接
      const componentName = tag.replace(`${prefix}-`, '');
      const range = new vscode.Range(document.positionAt(item.start + 1), document.positionAt(item.start + Number(tag.length) + 1));
      if (componentName in otherLinks && otherLinks[item.tag as keyof typeof otherLinks]) {
        // 如果是在otherLinks上声明的特殊链接就使用特殊链接
        result.push({ range, target: vscode.Uri.parse(`${basUrl}/${lang}/${otherLinks[componentName as keyof typeof otherLinks]}`), tooltip: '官方文档链接' });
      } else if (componentName in AllDocuments) {
        result.push({ range, target: vscode.Uri.parse(`${basUrl}/${lang}/component/${componentName}.html`), tooltip: '官方文档链接' });
      }
    }
    // 递归遍历
    item.children && useDocLink(item.children, prefixList, result, document, lang);
  }

  return result;
}
