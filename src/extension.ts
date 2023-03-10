import * as vscode from 'vscode';
import * as htmlLanguageService from 'vscode-html-languageservice';
import { useDocLink } from './extension/doc-link/use-doc-link';
import { type BaseLanguage } from '@/types/index';
import { MyHoverProvier } from './extension/hover-provier/my-hover-provier';
import { MyCompletionItemProvider } from './extension/suggest/my-completion-item-provider';

/**
 * 激活的入口
 */
export function activate(context: vscode.ExtensionContext) {
  console.log('插件已启用');
  const customPrefixSet = vscode.workspace.getConfiguration().get('custom.prefix');
  // 得到自定义前缀
  let customPrefix = typeof customPrefixSet === 'string' && customPrefixSet ? customPrefixSet : '';
  customPrefix = customPrefix.replace(/[^a-zA-Z0-9，,]/g, '').replace('，', ',');
  // 所有的前缀数组
  let prefixList: string[] = customPrefix ? customPrefix.split(',') : [];
  prefixList = prefixList.splice(0, 3);
  prefixList.push('el');
  prefixList = [...new Set(prefixList)]; // 去重

  /** 语言 */
  const lang: BaseLanguage = vscode.env.language === 'zh-cn' ? 'zh-CN' : 'en-US';

  /** 添加链接 */
  context.subscriptions.push(
    vscode.languages.registerDocumentLinkProvider(
      [
        { scheme: 'file', pattern: '**/*.vue' },
        { scheme: 'file', pattern: '**/*.jsx' },
        { scheme: 'file', pattern: '**/*.tsx' },
      ],
      {
        provideDocumentLinks(document: vscode.TextDocument) {
          const newDocument: htmlLanguageService.TextDocument = { ...document, uri: document.uri.toString() };
          const htmlDocument = htmlLanguageService.getLanguageService().parseHTMLDocument(newDocument); // 把document解析成类似于虚拟dom树的形式
          return useDocLink(htmlDocument.roots, prefixList, [], document, lang);
        },
      }
    )
  );

  /** 当用户输入那些字符时触发补全 */
  const triggerCharacters = ['', ' ', ':', '<', '=', "'", '/', '@', '(', '-', '"'];

  /** 用户输入时添加智能补全 */
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      [
        { scheme: 'file', pattern: '**/*.vue' },
        { scheme: 'file', pattern: '**/*.jsx' },
        { scheme: 'file', pattern: '**/*.tsx' },
      ],
      new MyCompletionItemProvider(lang, prefixList),
      ...triggerCharacters
    )
  );

  /** 当光标移动到组件上是添加提示文档 */
  context.subscriptions.push(vscode.languages.registerHoverProvider([{ language: 'vue', scheme: 'file' }], new MyHoverProvier(lang, prefixList)));
}

/**
 * 销毁函数
 */
export function deactivate() {
  console.log('插件已经销毁');
}
