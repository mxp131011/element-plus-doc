import { MarkdownString } from 'vscode';
import type { ExtensionLanguage } from '@/types/index';
import type { Document } from '@/types/document';

export class HoverDocumentGenerator {
  // eslint-disable-next-line no-use-before-define
  private static instance: HoverDocumentGenerator;

  /**
   * 生成属性文档表格
   * @template T type extends BaseDocument
   * @param {T} document - 文档 具体标签对应的文档
   * @param {string} tag - 标签
   * @param {string} attribute - 属性 在标签的属性上悬停时具有
   * @param {string} language - 语言
   * @returns {*} {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateAttribute(document: Document.DocumentInstance, tag: string, attribute: string, language: ExtensionLanguage): MarkdownString {
    let isUndefined = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true);
    const attributes = document.attributes || []; // 取得属性列表
    if (attributes.length) {
      // 生成表头
      if (language === 'zh-CN') {
        markdownString.appendMarkdown(`### ${tag} 属性 \r`);
        markdownString.appendMarkdown('| 属性 | 说明 | 类型 | 默认值 |\r');
      } else {
        markdownString.appendMarkdown(`### ${tag} Attributes \r`);
        markdownString.appendMarkdown('| Attributes | Description | Type | Default |\r');
      }
      markdownString.appendMarkdown('|------|------|------|------|\r');
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      attributes.forEach((row: Document.Attribute) => {
        markdownString.appendMarkdown(
          `| \`${row.name}\` | ${language === 'zh-CN' ? row.description.cn : row.description.en} | \`${row.type}\` | \`${row.default}\` |\r`
        );
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = attributes.find((_row: Document.Attribute) => _row.name === attribute);
      if (row) {
        markdownString.appendMarkdown(
          `| \`${row.name}\` | ${language === 'zh-CN' ? row.description.cn : row.description.en} | \`${row.type}\` | \`${row.default}\` |\r`
        );
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true);
    }
    return markdownString;
  }

  /**
   * 生成方法文档表格
   * @template T type extends BaseDocument
   * @param {T} document - 文档 具体标签对应的文档
   * @param {string} tag - 标签
   * @param {string} attribute - 属性 在标签的属性上悬停时具有
   * @param {string} language - 语言
   * @returns {*} {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateExposes(document: Document.DocumentInstance, tag: string, attribute: string, language: ExtensionLanguage): MarkdownString {
    let isUndefined = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true);
    const methods = document.exposes || [];
    if (methods.length) {
      if (language === 'zh-CN') {
        markdownString.appendMarkdown(`### ${tag} 方法\r`);
        markdownString.appendMarkdown('| 方法 | 说明 | 参数 |\r');
      } else {
        markdownString.appendMarkdown(`### ${tag} Method\r`);
        markdownString.appendMarkdown('| Method | Description | Parameters |\r');
      }
      markdownString.appendMarkdown('|------|------|------|\r');
    }

    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      methods.forEach((row: Document.Expose) => {
        markdownString.appendMarkdown(`| ${row.name} | ${language === 'zh-CN' ? row.description.cn : row.description.en} | ${row.type} |\r`);
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = methods.find((_row: Document.Expose) => _row.name === attribute);
      if (row) {
        markdownString.appendMarkdown(`| ${row.name} | ${language === 'zh-CN' ? row.description.cn : row.description.en} | ${row.type}|\r`);
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true);
    }
    return markdownString;
  }

  /**
   * 生成事件文档表格
   * @template T type extends BaseDocument
   * @param {T} document - 文档 具体标签对应的文档
   * @param {string} tag - 标签
   * @param {string} attribute - 属性 在标签的属性上悬停时具有
   * @param {string} language - 语言
   * @returns {*} {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateEvents(document: Document.DocumentInstance, tag: string, attribute: string, language: ExtensionLanguage): MarkdownString {
    let isUndefined = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true);
    const events = document.events || [];
    if (events.length) {
      if (language === 'zh-CN') {
        markdownString.appendMarkdown(`### ${tag} 事件\r`);
        markdownString.appendMarkdown('| 方法 | 说明 | 参数 |\r');
      } else {
        markdownString.appendMarkdown(`### ${tag} Event\r`);
        markdownString.appendMarkdown('| Event | Description | Parameters |\r');
      }
      markdownString.appendMarkdown('|------|------|------|\r');
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      events.forEach((row: Document.Event) => {
        markdownString.appendMarkdown(`| ${row.name} | ${language === 'zh-CN' ? row.description.cn : row.description.en} | ${row.type}|\r`);
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = events.find((_row: Document.Event) => _row.name === attribute);
      if (row) {
        markdownString.appendMarkdown(`|${row.name} | ${language === 'zh-CN' ? row.description.cn : row.description.en} | ${row.type}|\r`);
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true);
    }
    return markdownString;
  }

  /**
   * 生成插槽文档表格
   * @template T type extends BaseDocument
   * @param {T} document - 文档 具体标签对应的文档
   * @param {string} tag - 标签
   * @param {string} attribute - 属性 在标签的属性上悬停时具有
   * @param {string} language - 语言
   * @returns {*} {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  private generateSlots(document: Document.DocumentInstance, tag: string, attribute: string, language: ExtensionLanguage): MarkdownString {
    let isUndefined = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true);
    const slots = document.slots || [];
    if (slots.length) {
      if (language === 'zh-CN') {
        markdownString.appendMarkdown(`### ${tag} 插槽\r`);
        markdownString.appendMarkdown('| 插槽 | 说明 |\r');
      } else {
        markdownString.appendMarkdown(`### ${tag} Slot\r`);
        markdownString.appendMarkdown('| Slot | Description |\r');
      }
      markdownString.appendMarkdown('|------|------|\r');
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      slots.forEach((row: Document.Slot) => {
        markdownString.appendMarkdown(`| \`${row.name}\` | ${language === 'zh-CN' ? row.description.cn : row.description.en} |\r`);
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = slots.find((_row: Document.Slot) => _row.name === attribute);
      if (row) {
        markdownString.appendMarkdown(`| \`${row.name}\` | ${language === 'zh-CN' ? row.description.cn : row.description.en} |\r`);
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true);
    }
    return markdownString;
  }

  /**
   * 生成其他文档表格
   * @template T type extends BaseDocument
   * @param {T} document - 文档 具体标签对应的文档
   * @param {string} tag - 标签
   * @param {string} attribute - 属性 文档对象具体的属性值
   * @memberof HoverDocumentGenerator
   */
  private generateOther(document: Document.DocumentInstance, tag: string, attribute: string): MarkdownString {
    let isUndefined = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true);
    const _attribute = document[attribute as keyof typeof document] || undefined;
    const attributes = (_attribute && Array.isArray(_attribute) ? _attribute : []) as Document.Attribute[];
    if (attributes.length) {
      markdownString.appendMarkdown(`### ${tag} ${attribute} \r`);
      const keys = Object.keys(attributes[0] || {});
      markdownString.appendMarkdown(`| ${keys.join('|')} |\r`);
      markdownString.appendMarkdown(`| ${keys.map(() => '---').join('|')} |\r`);
      // 遍历属性值值生成文档
      attributes.forEach((row: Document.Attribute) => {
        let str = '|';
        keys.forEach((key) => {
          str += `${(row as any)[key]}|`;
        });
        str += '\r';
        markdownString.appendMarkdown(str);
      });
      isUndefined = false;
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true);
    }
    return markdownString;
  }

  /**
   * 宣统提示文档生成入口
   * @template T 文档类型
   * @param {T} document - 文档
   * @param {string} key - 属性key
   * @param {string} tag - 文档标签
   * @param {string} attr - 文档属性
   * @param {ExtensionLanguage} language - 语言
   * @returns {*} {MarkdownString}
   * @memberof HoverDocumentGenerator
   */
  public generate(document: Document.DocumentInstance, key: string, tag: string, attr: string, language: ExtensionLanguage): MarkdownString {
    let markdownString: MarkdownString = new MarkdownString('');
    switch (key) {
      case 'attributes':
        markdownString = this.generateAttribute(document, tag, attr, language);
        break;
      case 'exposes':
        markdownString = this.generateExposes(document, tag, attr, language);
        break;
      case 'events':
        markdownString = this.generateEvents(document, tag, attr, language);
        break;
      case 'slots':
        markdownString = this.generateSlots(document, tag, attr, language);
        break;
      default:
        // 生成其他文档时 属性为key
        markdownString = this.generateOther(document, tag, key);
    }
    return markdownString;
  }

  public static getInstance(): HoverDocumentGenerator {
    if (!this.instance) {
      this.instance = new HoverDocumentGenerator();
    }
    return this.instance;
  }
}
