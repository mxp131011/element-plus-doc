import { MarkdownString } from 'vscode';
import type { BaseLanguage } from '@/types/index';
import type { TagDoc } from '@/types/tag-doc';

export class GetDocUtil {
  /** 语言 */
  private lang: BaseLanguage;

  public constructor(lang: BaseLanguage) {
    this.lang = lang;
  }

  /**
   * 得到对外暴露的属性的文档
   */
  public getExposesDoc(tagDoc: TagDoc.TagDocInstance, tag: string) {
    const mdList: MarkdownString[] = [];

    const bodyList = this._getMDMultipleTableBody(tagDoc, 'exposes');
    if (bodyList.length > 0) {
      const mdStr = new MarkdownString('', true);
      const titleList = this._getMDTableTitle(tag, 'exposes');
      [...titleList, ...bodyList].forEach((item) => {
        mdStr.appendMarkdown(item);
      });
      mdList.push(mdStr);
    }

    return mdList;
  }

  /**
   * 得到单个属性的文档
   */
  public getSingleDoc(tagDoc: TagDoc.TagDocInstance, tag: string, attr: string) {
    let key: keyof TagDoc.TagDocInstance | undefined = undefined;
    const mdList: MarkdownString[] = [];
    for (key in tagDoc) {
      const tagDocItem = tagDoc[key!]?.find((item) => item.name === attr);
      if (tagDocItem) {
        const bodyList = this._getMDSingleTableBody(tagDocItem, key!);
        const titleList = this._getMDTableTitle(tag, key!);
        const mdStr = new MarkdownString('', true);
        [...titleList, ...bodyList].forEach((item) => {
          mdStr.appendMarkdown(item);
        });
        mdList.push(mdStr);
        return mdList;
      }
    }
    return mdList;
  }

  /**
   * 得到所有的文档
   */
  public getAllDoc(tagDoc: TagDoc.TagDocInstance, tag: string) {
    let key: keyof TagDoc.TagDocInstance | undefined = undefined;
    const mdList: MarkdownString[] = [];
    for (key in tagDoc) {
      const bodyList = this._getMDMultipleTableBody(tagDoc, key!);
      if (bodyList.length > 0) {
        const mdStr = new MarkdownString('', true);
        const titleList = this._getMDTableTitle(tag, key!);
        [...titleList, ...bodyList].forEach((item) => {
          mdStr.appendMarkdown(item);
        });
        mdList.push(mdStr);
      }
    }
    return mdList;
  }

  /**
   * 得到多个属性
   */
  private _getMDMultipleTableBody(tagDoc: TagDoc.TagDocInstance, key: keyof TagDoc.TagDocInstance) {
    const list: string[] = [];
    const docLang = this.lang === 'zh-CN' ? 'cn' : 'en';
    if (key === 'attributes') {
      (tagDoc[key] || []).forEach((row) => {
        list.push(`| \`${row.name}\` | ${row.description[docLang]} | \`${this._getTypeMD(row.type)}\` | \`${row.default}\` |\r`);
      });
    } else if (key === 'events') {
      (tagDoc[key] || []).forEach((row) => {
        list.push(`| \`${row.name}\` | ${row.description[docLang]} | \`${this._getTypeMD(row.type)}\` |\r`);
      });
    } else if (key === 'slots') {
      (tagDoc[key] || []).forEach((row) => {
        list.push(`| \`${row.name}\` | ${row.description[docLang]} |\r`);
      });
    } else if (key === 'exposes') {
      (tagDoc[key] || []).forEach((row) => {
        list.push(`| \`${row.name}\` | ${row.description[docLang]} | \`${this._getTypeMD(row.type)}\` |\r`);
      });
    }
    return list;
  }

  /**
   * 得到单个属性
   */
  private _getMDSingleTableBody<T extends keyof TagDoc.TagDocInstance>(row: Required<TagDoc.TagDocInstance>[T][number], key: T) {
    const list: string[] = [];
    const docLang = this.lang === 'zh-CN' ? 'cn' : 'en';
    if (key === 'attributes') {
      const newRow = row as TagDoc.Attribute;
      list.push(`| \`${newRow.name}\` | ${row.description[docLang]} | \`${this._getTypeMD(newRow.type)}\` | \`${newRow.default}\` |\r`);
    } else if (key === 'events') {
      const newRow = row as TagDoc.Event;
      list.push(`| \`${newRow.name}\` | ${newRow.description[docLang]} | \`${this._getTypeMD(newRow.type)}\` |\r`);
    } else if (key === 'slots') {
      const newRow = row as TagDoc.Slot;
      list.push(`| \`${newRow.name}\` | ${newRow.description[docLang]} |\r`);
    } else if (key === 'exposes') {
      const newRow = row as TagDoc.Expose;
      list.push(`| \`${newRow.name}\` | ${newRow.description[docLang]} | \`${this._getTypeMD(newRow.type)}\` |\r`);
    }
    return list;
  }

  /**
   * 得到提示文档的表头
   */
  private _getMDTableTitle(tag: string, key: keyof TagDoc.TagDocInstance) {
    const docTitles = {
      cn: { attributes: '属性', events: '事件', slots: '插槽', exposes: '对外暴露' },
      en: { attributes: 'Attributes', events: 'Events', slots: 'Slots', exposes: 'Exposes' },
    };
    const tableTitles = {
      cn: { name: '名称', description: '说明', type: '类型', default: '默认值' },
      en: { name: 'Name', description: 'Description', type: 'Type', default: 'Default' },
    };
    const docTitle = this.lang === 'zh-CN' ? docTitles.cn : docTitles.en;
    const tableTitle = this.lang === 'zh-CN' ? tableTitles.cn : tableTitles.en;
    const list: string[] = [];
    switch (key) {
      case 'attributes':
        list.push(`### ${tag} ${docTitle.attributes}\r`);
        list.push(`| ${tableTitle.name} | ${tableTitle.description} | ${tableTitle.type} | ${tableTitle.default} |\r`);
        list.push('|------|------|------|------|\r');
        break;
      case 'events':
        list.push(`### ${tag} ${docTitle.events}\r`);
        list.push(`| ${tableTitle.name} | ${tableTitle.description} | ${tableTitle.type} |\r`);
        list.push('|------|------|------|\r');
        break;
      case 'slots':
        list.push(`### ${tag} ${docTitle.slots} \r`);
        list.push(`| ${tableTitle.name} | ${tableTitle.description} |\r`);
        list.push('|------|------|\r');
        break;
      case 'exposes':
        list.push(`### ${tag} ${docTitle.exposes}\r`);
        list.push(`| ${tableTitle.name} | ${tableTitle.description} | ${tableTitle.type} |\r`);
        list.push('|------|------|------|\r');
        break;
      default:
        break;
    }
    return list;
  }

  /**
   * 把属性的类型字段转为Markdown字符串
   * @param type - 类型
   */
  private _getTypeMD(type: string[] | string) {
    let newType = '';
    if (Array.isArray(type)) {
      type.forEach((item) => {
        newType += `\`${item || '—'}\` / `;
      });
      newType.trim().substring(0, newType.lastIndexOf('/'));
    } else {
      newType = `\`${type || '—'}\``;
    }
    return newType;
  }
}
