import * as vscode from 'vscode';
import { AllDocuments } from '@/documents/index';
import { HoverDocumentGenerator } from './document-generator';
import { toKebabCase } from '../utils';
import type { ExtensionConfigutation, ExtensionLanguage, TagObject } from '@/types/index';

export class HoverProvierUtil {
  private document: vscode.TextDocument;

  private position: vscode.Position;

  private tagReg = /<([\w-]+)\s*/g;

  private attrReg = /(?:\(|\s*)([\w-]+)=?/;

  public constructor(document: vscode.TextDocument, position: vscode.Position) {
    this.position = position;
    this.document = document;
  }

  public provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
    this.document = document;
    this.position = position;

    const tag: TagObject | undefined = this.getTag();

    if (!/^[E|e]l/.test(tag?.text || '')) {
      // 如果不是element的标签(E|el开头) 则返回 null 表示没有hover
      return null;
    } else {
      const attr = this.getAttr();
      const range = this.getHoverRange(attr);

      return this.getHoverInstance(tag, attr, range);
    }
  }

  /**
   * 获取标签
   */
  public getTag(): TagObject | undefined {
    let line = this.position.line;
    let tag: TagObject | string | undefined = undefined;
    let txt = this.getTextAfterPosition(this.position);

    // 向前搜索 最多十行 搜索标签
    while (this.position.line - line < 10 && line >= 0) {
      if (line !== this.position.line) {
        txt = this.document.lineAt(line).text;
      }
      tag = this.matchTag(this.tagReg, txt, line);
      if (tag === 'break') {
        return undefined;
      }
      if (tag) {
        return tag as TagObject;
      }
      line--;
    }
    return undefined;
  }

  /**
   * 获取属性
   */
  public getAttr(): string {
    const txt = this.getTextAfterPosition(this.position);
    const end = txt.length;
    const start = txt.lastIndexOf(' ', this.position.character) + 1;
    const parsedTxt = this.document.getText(new vscode.Range(this.position.line, start, this.position.line, end));
    return this.matchAttr(this.attrReg, parsedTxt);
  }

  /**
   * 获取高亮范围
   * @param attr - 属性名称
   */
  public getHoverRange(attr: string): vscode.Range {
    const line = this.document.lineAt(this.position.line).text;
    const start = line.indexOf(attr);
    const end = start + attr.length;
    const range = new vscode.Range(this.position.line, start, this.position.line, end);
    return range;
  }

  /**
   * 匹配标签
   * @param reg - 匹配模式串
   * @param txt - 待匹配字符
   * @param line - 匹配行
   */
  public matchTag(reg: RegExp, txt: string, line: number): TagObject | string | undefined {
    let match: RegExpExecArray | null = null;
    const arr: TagObject[] = [];

    if (
      /<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) ||
      (this.position.line === line && (/^\s*[^<]+\s*>[^</>]*$/.test(txt) || /[^<>]*<$/.test(txt[txt.length - 1] || '')))
    ) {
      return 'break';
    }
    while ((match = reg.exec(txt))) {
      arr.push({
        text: match[1] || '',
        offset: this.document.offsetAt(new vscode.Position(line, match.index)),
      });
    }
    return arr.pop();
  }

  /**
   * 匹配标签
   * @param reg - 匹配模式
   * @param txt - 待匹配字符
   */
  public matchAttr(reg: RegExp, txt: string): string {
    let match: RegExpExecArray | null = null;
    match = reg.exec(txt);
    if (!/"[^"]*"/.test(txt) && match) {
      return match[1] || '';
    }
    return '';
  }

  /**
   * 获取前置内容
   * @param position - 位置信息
   */
  public getTextBeforePosition(position: vscode.Position): string {
    const wordRange = this.document.getWordRangeAtPosition(position);
    const start = new vscode.Position(position.line, 0);
    const end = wordRange?.end || position;
    const range = new vscode.Range(start, end);
    return this.document.getText(range);
  }

  /**
   * 获取当前位置直到单词结束的内容
   * @param position - 文档位置
   */
  public getTextAfterPosition(position: vscode.Position): string {
    const wordRange = this.document.getWordRangeAtPosition(position);
    const start = new vscode.Position(position.line, 0);
    let endIndex = (wordRange?.end || position).character;
    const text = this.document.lineAt(position).text;
    while (endIndex < text.length && /[\w-]/.test(text.charAt(endIndex))) {
      endIndex++;
    }
    const end = new vscode.Position(position.line, endIndex);
    const range = new vscode.Range(start, end);
    return this.document.getText(range);
  }

  /**
   * 获取Hover实例
   * @param tag - 标签
   * @param attr - 属性
   * @param range - 区域
   */
  public getHoverInstance(tag: TagObject | undefined, attr: string, range: vscode.Range) {
    const config = vscode.workspace.getConfiguration().get<ExtensionConfigutation>('elementv-snippet');
    const language = config?.language || 'zh-CN';

    const kebabCaseTag = toKebabCase(tag?.text);
    const kebabCaseAttr = toKebabCase(attr);

    return this.createHoverInstance(language, kebabCaseTag, kebabCaseAttr, range);
  }

  /**
   * 创建Hover实例
   * @param language - 语言
   * @param tag - 标签 (如: el-input)
   * @param attr - 属性
   * @param range - 范围
   */
  public createHoverInstance(language: ExtensionLanguage, tag: string, attr: string, range: vscode.Range): vscode.Hover | null {
    const newAttr = tag === attr ? '' : attr;

    if (tag in AllDocuments && AllDocuments[tag]) {
      const tagDocument = AllDocuments[tag]!;
      const hoverMarkdownStrings: vscode.MarkdownString[] = [];
      Object.keys(tagDocument).forEach((key: string) => {
        const hoverMarkdownString = HoverDocumentGenerator.getInstance().generate(tagDocument, key, tag, newAttr, language);
        if (hoverMarkdownString) {
          hoverMarkdownStrings.push(hoverMarkdownString);
        }
      });
      return new vscode.Hover(hoverMarkdownStrings, range);
    } else {
      return null;
    }
  }
}
