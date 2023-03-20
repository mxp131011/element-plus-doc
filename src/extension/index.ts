import * as vscode from 'vscode';
import { getDocLink } from '@/extension/doc-link/use-doc-link';
import * as htmlLanguageService from 'vscode-html-languageservice';
import { getCustomPrefix, getLanguage, getOfficialWebsite } from '@/utils/global';
import type { BaseLanguage } from '@/types/index';
import { MyCompletionItemProvider } from '@/extension/suggest/my-completion-item-provider';
import { MyHoverProvier } from '@/extension/hover-provier/my-hover-provier';

/**
 * 注册文档链接
 */
export function useDocLink(): vscode.Disposable {
  // 得到包含el的自定义前缀 (仅保留前四个)
  const prefixList = getCustomPrefix();
  // 语言
  const lang: BaseLanguage = getLanguage();
  // element-plus的官网链接
  const officialWebsite = getOfficialWebsite(lang);

  return vscode.languages.registerDocumentLinkProvider(
    [
      { scheme: 'file', pattern: '**/*.vue' },
      { scheme: 'file', pattern: '**/*.jsx' },
      { scheme: 'file', pattern: '**/*.tsx' },
    ],
    {
      provideDocumentLinks(document: vscode.TextDocument) {
        const newDocument: htmlLanguageService.TextDocument = { ...document, uri: document.uri.toString() };
        const htmlDocument = htmlLanguageService.getLanguageService().parseHTMLDocument(newDocument); // 把document解析成类似于虚拟dom树的形式
        return getDocLink(htmlDocument.roots, prefixList, [], document, officialWebsite);
      },
    }
  );
}

/**
 * 注册智能补全
 */
export function useRegisterDocumentLinkProvider(): vscode.Disposable {
  // 得到包含el的自定义前缀 (仅保留前四个)
  const prefixList = getCustomPrefix();
  // 语言
  const lang: BaseLanguage = getLanguage();
  // 当用户输入那些字符时触发补全
  const triggerCharacters = ['', ' ', ':', '<', '=', "'", '/', '@', '(', '-', '"', `""`, `=""`, `=''`, `="`, `='`];

  /** 用户输入时添加智能补全 */
  return vscode.languages.registerCompletionItemProvider(
    [
      { scheme: 'file', pattern: '**/*.vue' },
      { scheme: 'file', pattern: '**/*.jsx' },
      { scheme: 'file', pattern: '**/*.tsx' },
    ],
    new MyCompletionItemProvider(lang, prefixList),
    ...triggerCharacters
  );
}

/**
 * 注册 当光标移动到组件上是添加提示文档
 */
export function useRegisterHoverProvider(): vscode.Disposable {
  // 得到包含el的自定义前缀 (仅保留前四个)
  const prefixList = getCustomPrefix();
  // 语言
  const lang: BaseLanguage = getLanguage();
  // element-plus的官网链接
  const officialWebsite = getOfficialWebsite(lang);

  return vscode.languages.registerHoverProvider([{ language: 'vue', scheme: 'file' }], new MyHoverProvier(lang, prefixList, officialWebsite));
}
