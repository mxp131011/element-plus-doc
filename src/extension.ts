import * as vscode from 'vscode';
import * as htmlLanguageService from 'vscode-html-languageservice';
import { addTagLink } from './utils/findTagResult';
import { type ExtensionLanguage } from '@/types/index';
import { ElementHoverProvier } from './hover-tips/element-hover-provider';
import { MyCompletionItemProvider } from './completion/MyCompletionItemProvider';

/**
 * 激活的入口
 */
export function activate(context: vscode.ExtensionContext) {
  const languageServiceHtml = htmlLanguageService.getLanguageService();

  /** 语言 */
  const language: ExtensionLanguage = vscode.env.language === 'zh-cn' ? 'zh-CN' : 'en-US';

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
          const htmlDocument = languageServiceHtml.parseHTMLDocument(newDocument); // 把document解析成类似于虚拟dom树的形式
          return addTagLink(htmlDocument.roots, [], document, language);
        },
      }
    )
  );

  /** 当用户输入那些字符时触发补全 */
  const triggerCharacters = ['', ' ', ':', '<', '""', '=', "'", '/', '@', '(', '-'];

  /** 用户输入时添加智能补全 */
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      [
        { scheme: 'file', pattern: '**/*.vue' },
        { scheme: 'file', pattern: '**/*.jsx' },
        { scheme: 'file', pattern: '**/*.tsx' },
      ],
      new MyCompletionItemProvider(language),
      ...triggerCharacters
    )
  );

  // 注册 hover 提示
  context.subscriptions.push(vscode.languages.registerHoverProvider([{ language: 'vue', scheme: 'file' }], new ElementHoverProvier()));
}

/**
 * 销毁函数
 */
export function deactivate() {
  console.log('elementv-snippet is now deactivate~');
}
