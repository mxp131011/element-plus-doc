import { MarkdownString } from 'vscode';
import type { ExtensionLanguage } from '@/types/index';
import type { Document } from '@/types/document';

export class HoverDocumentGenerator {
  // eslint-disable-next-line no-use-before-define
  private static instance: HoverDocumentGenerator;

  /**
   * 生成属性文档表格
   * @param document - 文档 具体标签对应的文档
   * @param tag - 标签
   * @param attribute - 属性 在标签的属性上悬停时具有
   * @param language - 语言
   */
  private generateAttribute(document: Document.DocumentInstance, tag: string, attribute: string, language: ExtensionLanguage): MarkdownString {
    const mdStr: MarkdownString = new MarkdownString('', true);
    const attributes = document.attributes || []; // 取得属性列表
    if (attributes.length) {
      // 生成表头
      if (language === 'zh-CN') {
        mdStr.appendMarkdown(`### ${tag} 属性 \r`);
        mdStr.appendMarkdown('| 属性 | 说明 | 类型 | 默认值 |\r');
      } else {
        mdStr.appendMarkdown(`### ${tag} Attributes \r`);
        mdStr.appendMarkdown('| Attributes | Description | Type | Default |\r');
      }
      mdStr.appendMarkdown('|------|------|------|------|\r');
    }
    const lang = language === 'zh-CN' ? 'cn' : 'en';
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      attributes.forEach((row: Document.Attribute) => {
        mdStr.appendMarkdown(`| \`${row.name}\` | ${row.description[lang]} | \`${row.type}\` | \`${row.default}\` |\r`);
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = attributes.find((_row: Document.Attribute) => _row.name === attribute);
      if (row) {
        mdStr.appendMarkdown(`| \`${row.name}\` | ${row.description[lang]} | \`${row.type}\` | \`${row.default}\` |\r`);
      }
    }
    return mdStr;
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
    let mdStr: MarkdownString = new MarkdownString('', true);
    const methods = document.exposes || [];
    if (methods.length) {
      if (language === 'zh-CN') {
        mdStr.appendMarkdown(`### ${tag} 方法\r`);
        mdStr.appendMarkdown('| 方法 | 说明 | 参数 |\r');
      } else {
        mdStr.appendMarkdown(`### ${tag} Method\r`);
        mdStr.appendMarkdown('| Method | Description | Parameters |\r');
      }
      mdStr.appendMarkdown('|------|------|------|\r');
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      methods.forEach((row: Document.Expose) => {
        mdStr.appendMarkdown(`| ${row.name} | ${language === 'zh-CN' ? row.description.cn : row.description.en} | ${row.type} |\r`);
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = methods.find((_row: Document.Expose) => _row.name === attribute);
      if (row) {
        mdStr.appendMarkdown(`| ${row.name} | ${language === 'zh-CN' ? row.description.cn : row.description.en} | ${row.type}|\r`);
        isUndefined = false;
      }
    }
    if (isUndefined) {
      mdStr = new MarkdownString('', true);
    }
    return mdStr;
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
    let mdStr: MarkdownString = new MarkdownString('', true);
    const events = document.events || [];
    if (events.length) {
      if (language === 'zh-CN') {
        mdStr.appendMarkdown(`### ${tag} 事件\r`);
        mdStr.appendMarkdown('| 方法 | 说明 | 参数 |\r');
      } else {
        mdStr.appendMarkdown(`### ${tag} Event\r`);
        mdStr.appendMarkdown('| Event | Description | Parameters |\r');
      }
      mdStr.appendMarkdown('|------|------|------|\r');
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      events.forEach((row: Document.Event) => {
        mdStr.appendMarkdown(`| ${row.name} | ${language === 'zh-CN' ? row.description.cn : row.description.en} | ${row.type}|\r`);
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = events.find((_row: Document.Event) => _row.name === attribute);
      if (row) {
        mdStr.appendMarkdown(`|${row.name} | ${language === 'zh-CN' ? row.description.cn : row.description.en} | ${row.type}|\r`);
        isUndefined = false;
      }
    }
    if (isUndefined) {
      mdStr = new MarkdownString('', true);
    }
    return mdStr;
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
    let mdStr: MarkdownString = new MarkdownString('', true);
    const slots = document.slots || [];
    if (slots.length) {
      if (language === 'zh-CN') {
        mdStr.appendMarkdown(`### ${tag} 插槽\r`);
        mdStr.appendMarkdown('| 插槽 | 说明 |\r');
      } else {
        mdStr.appendMarkdown(`### ${tag} Slot\r`);
        mdStr.appendMarkdown('| Slot | Description |\r');
      }
      mdStr.appendMarkdown('|------|------|\r');
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      slots.forEach((row: Document.Slot) => {
        mdStr.appendMarkdown(`| \`${row.name}\` | ${language === 'zh-CN' ? row.description.cn : row.description.en} |\r`);
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = slots.find((_row: Document.Slot) => _row.name === attribute);
      if (row) {
        mdStr.appendMarkdown(`| \`${row.name}\` | ${language === 'zh-CN' ? row.description.cn : row.description.en} |\r`);
        isUndefined = false;
      }
    }
    if (isUndefined) {
      mdStr = new MarkdownString('', true);
    }
    return mdStr;
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
    let mdStr: MarkdownString = new MarkdownString('', true);
    const _attribute = document[attribute as keyof typeof document] || undefined;
    const attributes = (_attribute && Array.isArray(_attribute) ? _attribute : []) as Document.Attribute[];
    if (attributes.length) {
      mdStr.appendMarkdown(`### ${tag} ${attribute} \r`);
      const keys = Object.keys(attributes[0] || {});
      mdStr.appendMarkdown(`| ${keys.join('|')} |\r`);
      mdStr.appendMarkdown(`| ${keys.map(() => '---').join('|')} |\r`);
      // 遍历属性值值生成文档
      attributes.forEach((row: Document.Attribute) => {
        let str = '|';
        keys.forEach((key) => {
          str += `${(row as any)[key]}|`;
        });
        str += '\r';
        mdStr.appendMarkdown(str);
      });
      isUndefined = false;
    }
    if (isUndefined) {
      mdStr = new MarkdownString('', true);
    }
    return mdStr;
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
    let mdStr: MarkdownString = new MarkdownString('');
    switch (key) {
      case 'attributes':
        mdStr = this.generateAttribute(document, tag, attr, language);
        break;
      case 'exposes':
        mdStr = this.generateExposes(document, tag, attr, language);
        break;
      case 'events':
        mdStr = this.generateEvents(document, tag, attr, language);
        break;
      case 'slots':
        mdStr = this.generateSlots(document, tag, attr, language);
        break;
      default:
        // 生成其他文档时 属性为key
        mdStr = this.generateOther(document, tag, key);
    }
    return mdStr;
  }

  public static getInstance(): HoverDocumentGenerator {
    if (!this.instance) {
      this.instance = new HoverDocumentGenerator();
    }
    return this.instance;
  }
}
