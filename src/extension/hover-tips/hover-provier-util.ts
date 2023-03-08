import * as vscode from 'vscode';
import { matchAttr, matchTag } from '@/utils/global';

export class HoverProvierUtil {
  /** 当前的代码文档 */
  private document: vscode.TextDocument;

  /** 当前光标所在位置 */
  private position: vscode.Position;

  /** 标签属性匹配的正则表达式 (注意要去掉空格或者反尖括号或者等于符号) */
  private attrReg = /(?:\(|\s*)[A-Za-z]([\w-:]+)[A-Za-z0-9]/;

  public constructor(document: vscode.TextDocument, position: vscode.Position) {
    this.position = position;
    this.document = document;
  }

  /**
   * 获取光标所在位置的标签（如:el-input）
   */
  public getTag(): string | undefined {
    let line = this.position.line; // 得到当前光标所在行 （从零开始）
    let tag: string | undefined = undefined;
    let txt = this.getTextBeforePosition(this.position);

    /** 得到光标所在位置所属的的element-plus标签 （向前搜索，最多五十行） */
    while (this.position.line - line < 50 && line >= 0) {
      if (line !== this.position.line) {
        txt = this.document.lineAt(line).text;
      }
      tag = matchTag(txt, this.position, line);
      if (tag === 'return___tag___external') {
        // 如果不是在标签中就不用循环了直接返回undefined
        return undefined;
      }
      if (tag) {
        return tag.trim();
      }
      line--;
    }
    return undefined;
  }

  /**
   * 得到当前光标所指的标签属性
   */
  public getAttr(): string {
    const txt = this.getTextAfterPosition(this.position);
    const end = txt.length;
    const start = txt.lastIndexOf(' ', this.position.character) + 1;
    const parsedTxt = this.document.getText(new vscode.Range(this.position.line, start, this.position.line, end));
    return matchAttr(this.attrReg, parsedTxt).trim();
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
   * @param position - 当前光标位置
   */
  public getTextAfterPosition(position: vscode.Position): string {
    const wordRange = this.document.getWordRangeAtPosition(position); // 得到当前光标所在的单词的范围
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
}
