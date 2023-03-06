import * as vscode from "vscode";
import * as htmlLanguageService from "vscode-html-languageservice";
import findTagResult from "./utils/findTagResult";

import { ElementHoverProvier } from "./hover-tips/element-hover-provider";
import { ElementCompletionItemProvider } from "./completion/element-completion-item-povider";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "elementv-snippet" is now active!'
  );

  const languageServiceHtml = htmlLanguageService.getLanguageService();

  vscode.languages.registerDocumentLinkProvider(
    {
      scheme: "file",
      pattern: "**/*.vue",
    },
    {
      provideDocumentLinks(document) {
        const htmlDocument = languageServiceHtml.parseHTMLDocument(
          document as any
        );
        return findTagResult(htmlDocument.roots, [], document, /^el-/);
      },
    }
  );

  // 注册 completion 提示
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      [
        {
          language: "vue",
          scheme: "file",
        },
      ],
      new ElementCompletionItemProvider(),
      "",
      " ",
      ":",
      "<",
      '""',
      "=",
      "'",
      "/",
      "@",
      "(",
      "-"
    )
  );

  // 注册 hover 提示
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(
      [
        {
          language: "vue",
          scheme: "file",
        },
      ],
      new ElementHoverProvier()
    )
  );
}

export function deactivate() {
  console.log("elementv-snippet is now deactivate~");
}
