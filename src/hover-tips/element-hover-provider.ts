import { Hover, type HoverProvider, type MarkdownString, Position, type ProviderResult, Range, type TextDocument, workspace } from 'vscode';

import { type ElDocument, localDocument } from '@/document';
import { HoverDocumentGenerator } from '@/utils/document-generator';
import { toKebabCase } from '../utils';
import { type ExtensionConfigutation, type ExtensionLanguage } from '../index';
import { type TagObject } from '.';

export class ElementHoverProvier implements HoverProvider {
  private _position!: Position;

  private _document!: TextDocument;

  private tagReg = /<([\w-]+)\s*/g;

  private attrReg = /(?:\(|\s*)([\w-]+)=?/;

  public provideHover(document: TextDocument, position: Position): ProviderResult<Hover> {
    this._document = document;
    this._position = position;

    const tag: TagObject | undefined = this.getTag();

    if (!/^[E|e]l/.test(tag?.text || '')) {
      // 如果不是element的标签(E|el开头) 则返回 null 表示没有hover
      return null;
    }

    const attr = this.getAttr();
    const range = this.getHoverRange(attr);

    return this.getHoverInstance(tag, attr, range);
  }

  /**
   * 获取标签
   */
  public getTag(): TagObject | undefined {
    let line = this._position.line;
    let tag: TagObject | string | undefined = undefined;
    let txt = this.getTextAfterPosition(this._position);

    // 向前搜索 最多十行 搜索标签
    while (this._position.line - line < 10 && line >= 0) {
      if (line !== this._position.line) {
        txt = this._document.lineAt(line).text;
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
    const txt = this.getTextAfterPosition(this._position);
    const end = txt.length;
    const start = txt.lastIndexOf(' ', this._position.character) + 1;
    const parsedTxt = this._document.getText(new Range(this._position.line, start, this._position.line, end));
    return this.matchAttr(this.attrReg, parsedTxt);
  }

  /**
   * 获取高亮范围
   * @param attr - 属性名称
   */
  public getHoverRange(attr: string): Range {
    const line = this._document.lineAt(this._position.line).text;
    const start = line.indexOf(attr);
    const end = start + attr.length;
    const range = new Range(this._position.line, start, this._position.line, end);
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
      (this._position.line === line && (/^\s*[^<]+\s*>[^</>]*$/.test(txt) || /[^<>]*<$/.test(txt[txt.length - 1] || '')))
    ) {
      return 'break';
    }
    while ((match = reg.exec(txt))) {
      arr.push({
        text: match[1] || '',
        offset: this._document.offsetAt(new Position(line, match.index)),
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
  public getTextBeforePosition(position: Position): string {
    const wordRange = this._document.getWordRangeAtPosition(position);
    const start = new Position(position.line, 0);
    const end = wordRange?.end || position;
    const range = new Range(start, end);
    return this._document.getText(range);
  }

  /**
   * 获取当前位置直到单词结束的内容
   * @param position - 文档位置
   */
  public getTextAfterPosition(position: Position): string {
    const wordRange = this._document.getWordRangeAtPosition(position);
    const start = new Position(position.line, 0);
    let endIndex = (wordRange?.end || position).character;
    const text = this._document.lineAt(position).text;
    while (endIndex < text.length && /[\w-]/.test(text.charAt(endIndex))) {
      endIndex++;
    }
    const end = new Position(position.line, endIndex);
    const range = new Range(start, end);
    return this._document.getText(range);
  }

  /**
   * 获取Hover实例
   * @param tag - 标签
   * @param attr - 属性
   * @param range - 区域
   */
  public getHoverInstance(tag: TagObject | undefined, attr: string, range: Range) {
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('elementv-snippet');
    const language = config?.language || 'zh-CN';

    const kebabCaseTag = toKebabCase(tag?.text) as keyof (typeof localDocument)[typeof language];
    const kebabCaseAttr = toKebabCase(attr);

    return this.createHoverInstance(language, kebabCaseTag, kebabCaseAttr, range);
  }

  /**
   * 创建Hover实例
   * @param language - 语言
   * @param tag - 标签
   * @param attr - 属性
   * @param range - 范围
   */
  public createHoverInstance<T extends ExtensionLanguage>(language: T, tag: keyof (typeof localDocument)[T], attr: string, range: Range): Hover | null {
    const document = localDocument[language];
    const newAttr = tag === attr ? '' : attr;

    if (tag in document) {
      const tagDocument = document[tag] || {};
      const hoverMarkdownStrings: MarkdownString[] = [];
      Object.keys(tagDocument).forEach((key: string) => {
        const hoverMarkdownString: MarkdownString = HoverDocumentGenerator.getInstance().generate<ElDocument>(
          tagDocument,
          key,
          tag as string,
          newAttr,
          language
        );
        if (hoverMarkdownString) {
          hoverMarkdownStrings.push(hoverMarkdownString);
        }
      });
      return new Hover(hoverMarkdownStrings, range);
    } else {
      return null;
    }
  }
}
