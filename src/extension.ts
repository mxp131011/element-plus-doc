import * as vscode from 'vscode';
import { useDocLink, useRegisterDocumentLinkProvider, useRegisterHoverProvider } from '@/extension/index';

/**
 * 激活的入口
 */
export function activate(context: vscode.ExtensionContext) {
  console.log('插件已启用');

  let disposableList: vscode.Disposable[] = [];
  disposableList = setSubscriptions(context);

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(() => {
      // 手动销毁
      disposableList.forEach((item) => {
        item.dispose();
      });
      disposableList = setSubscriptions(context);
    })
  );
}

/**
 * 销毁函数
 */
export function deactivate() {
  console.log('插件已经销毁');
}

/**
 * 注册
 */
function setSubscriptions(context: vscode.ExtensionContext): vscode.Disposable[] {
  const docLink = useDocLink();
  const registerDocumentLinkProvider = useRegisterDocumentLinkProvider();
  const registerHoverProvider = useRegisterHoverProvider();
  context.subscriptions.push(docLink);
  context.subscriptions.push(registerDocumentLinkProvider);
  context.subscriptions.push(registerHoverProvider);
  return [docLink, registerDocumentLinkProvider, registerHoverProvider];
}
