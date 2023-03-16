import { MarkdownString } from 'vscode';
import type { BaseLanguage, BaseUrl } from '@/types/index';
import type { TagDoc } from '@/types/tag-doc';
import { logo } from '@/utils/img-base64';

export class GetDocUtil {
  /** 语言 */
  private lang: BaseLanguage;

  /** 官网基础链接 （必须以斜杠结尾） */
  private officialWebsite: BaseUrl;

  public constructor(lang: BaseLanguage, officialWebsite: BaseUrl) {
    this.lang = lang;
    this.officialWebsite = officialWebsite;
  }

  /**
   * 得到所有的文档
   */
  public getAllDoc(tagDoc: TagDoc.TagDocInstance, tag: string) {
    let key: keyof TagDoc.TagDocInstance | undefined = undefined;
    const mdStr = new MarkdownString('', true);
    mdStr.supportHtml = true;
    mdStr.appendMarkdown(`<img src="${logo}" width="15px" height="15px" />`);
    mdStr.appendMarkdown(`&emsp;[官网链接](${this.officialWebsite}${tagDoc.url})</br>\r`);
    for (key in tagDoc) {
      const bodyList = this._getMDMultipleTableBody(tagDoc, key!);
      if (bodyList.length > 0) {
        const titleList = key !== 'childAttributes' ? this._getMDTableTitle(tag, key!) : [];
        [...titleList, ...bodyList].forEach((item) => {
          mdStr.appendMarkdown(item);
        });
      }
      mdStr.appendMarkdown(`</br>\r`);
    }
    return mdStr;
  }

  /**
   * 得到对外暴露的属性的文档
   */
  public getExposesDoc(tagDoc: TagDoc.TagDocInstance, tag: string) {
    const mdStr = new MarkdownString('', true);
    mdStr.supportHtml = true;
    mdStr.appendMarkdown(`<img src="${logo}" width="15px" height="15px" />`);
    mdStr.appendMarkdown(`&emsp;[官网链接](${this.officialWebsite}${tagDoc.url})</br>\r`);
    const bodyList = this._getMDMultipleTableBody(tagDoc, 'exposes');
    if (bodyList.length > 0) {
      const titleList = this._getMDTableTitle(tag, 'exposes');
      [...titleList, ...bodyList].forEach((item) => {
        mdStr.appendMarkdown(item);
      });
    }
    return mdStr;
  }

  /**
   * 得到单个属性的文档
   */
  public getSingleDoc(tagDoc: TagDoc.TagDocInstance, tag: string, attr: string) {
    let key: keyof TagDoc.TagDocInstance | undefined = undefined;
    const mdStr = new MarkdownString('', true);
    mdStr.supportHtml = true;
    mdStr.appendMarkdown(`<img src="${logo}" width="15px" height="15px" />`);
    mdStr.appendMarkdown(`&emsp;[官网链接](${this.officialWebsite}${tagDoc.url})</br>\r`);
    for (key in tagDoc) {
      if (key !== 'url' && key !== 'childAttributes') {
        const item = tagDoc[key!];
        if (item) {
          const tagDocItem: TagDoc.Attribute | TagDoc.Event | TagDoc.Expose | TagDoc.Slot = (item as any[]).find((_item) => _item.name === attr);
          if (tagDocItem) {
            const bodyList = this._getMDSingleTableBody(tagDocItem, key!);
            const titleList = this._getMDTableTitle(tag, key!);

            [...titleList, ...bodyList].forEach((_item) => {
              mdStr.appendMarkdown(_item);
            });
          }
        }
      }
    }
    return mdStr;
  }

  /**
   * 得到多个属性
   */
  private _getMDMultipleTableBody(tagDoc: TagDoc.TagDocInstance, key: keyof TagDoc.TagDocInstance) {
    let list: string[] = [];
    const docLang = this.lang === 'zh-CN' ? 'cn' : 'en';
    if (key === 'attributes') {
      (tagDoc[key] || []).forEach((row) => {
        const desc = row.description[docLang] || '—';
        const type = this._getTypeMD(row);
        list.push(`| \`${row.name}\` |&emsp;&emsp;| ${desc} |&emsp;&emsp;| ${type} |&emsp;&emsp;| \`${row.default || '—'}\` | \r`);
        list.push(`|                 |&emsp;&emsp;|         |&emsp;&emsp;|         |&emsp;&emsp;|                           | \r`);
      });
    } else if (key === 'events') {
      (tagDoc[key] || []).forEach((row) => {
        const desc = row.description[docLang] || '—';
        const param = this._getParamMD(row.param, docLang);
        list.push(`| \`${row.name}\` |&emsp;&emsp;| ${desc} |&emsp;&emsp;| \`${row.type}\` |&emsp;&emsp;| ${param} | \r`);
        list.push(`|                 |&emsp;&emsp;|         |&emsp;&emsp;|                 |&emsp;&emsp;|          | \r`);
      });
    } else if (key === 'slots') {
      (tagDoc[key] || []).forEach((row) => {
        const desc = row.description[docLang] || '—';
        list.push(`| \`${row.name}\` |&emsp;&emsp;| ${desc} |&emsp;&emsp;| ${row.subtags || '—'} | \r`);
        list.push(`|                 |&emsp;&emsp;|         |&emsp;&emsp;|                       | \r`);
      });
    } else if (key === 'exposes') {
      (tagDoc[key] || []).forEach((row) => {
        const desc = row.description[docLang] || '—';
        const param = this._getParamMD(row.param, docLang);
        list.push(`| \`${row.name}\` |&emsp;&emsp;| ${desc} |&emsp;&emsp;| \`${row.type}\` |&emsp;&emsp;| ${param} | \r`);
        list.push(`|                 |&emsp;&emsp;|         |&emsp;&emsp;|                 |&emsp;&emsp;|          | \r`);
      });
    } else if (key === 'childAttributes' && tagDoc.childAttributes) {
      tagDoc.childAttributes.forEach((child) => {
        if (child.list.length > 0) {
          list = list.concat(this._getMDTableTitle(child.name, key));
          (child.list || []).forEach((row) => {
            const desc = row.description[docLang] || '—';
            const type = this._getTypeMD(row);
            list.push(`| \`${row.name}\` |&emsp;&emsp;| ${desc} |&emsp;&emsp;| ${type} |&emsp;&emsp;| \`${row.default || '—'}\` | \r`);
            list.push(`|                 |&emsp;&emsp;|         |&emsp;&emsp;|         |&emsp;&emsp;|                           | \r`);
          });
        }
      });
    }
    return list;
  }

  /**
   * 得到单个属性
   */
  private _getMDSingleTableBody<T extends keyof TagDoc.TagDocInstance>(_row: Required<TagDoc.TagDocInstance>[T][number], key: T) {
    const list: string[] = [];
    const docLang = this.lang === 'zh-CN' ? 'cn' : 'en';
    if (key === 'attributes') {
      const row = _row as TagDoc.Attribute;
      const desc = row.description[docLang] || '—';
      const type = this._getTypeMD(row);
      list.push(`| \`${row.name}\` |&emsp;&emsp;| ${desc} |&emsp;&emsp;| ${type} |&emsp;&emsp;| \`${row.default || '—'}\` | \r`);
      list.push(`|                 |&emsp;&emsp;|         |&emsp;&emsp;|         |&emsp;&emsp;|                           | \r`);
    } else if (key === 'events') {
      const row = _row as TagDoc.Event;
      const desc = row.description[docLang] || '—';
      const param = this._getParamMD(row.param, docLang);
      list.push(`| \`${row.name}\` |&emsp;&emsp;| ${desc} |&emsp;&emsp;| \`${row.type}\` |&emsp;&emsp;| ${param} | \r`);
      list.push(`|                 |&emsp;&emsp;|         |&emsp;&emsp;|                 |&emsp;&emsp;|          | \r`);
    } else if (key === 'slots') {
      const row = _row as TagDoc.Slot;
      list.push(`| \`${row.name}\` |&emsp;&emsp;| ${row.description[docLang]} |&emsp;&emsp;| ${row.subtags || '—'} | \r`);
      list.push(`|                 |&emsp;&emsp;|                             |&emsp;&emsp;|                       | \r`);
    } else if (key === 'exposes') {
      const row = _row as TagDoc.Expose;
      const desc = row.description[docLang] || '—';
      const param = this._getParamMD(row.param, docLang);
      list.push(`| \`${row.name}\` |&emsp;&emsp;| ${desc} |&emsp;&emsp;| \`${row.type}\` |&emsp;&emsp;| ${param} | \r`);
      list.push(`|                 |&emsp;&emsp;|         |&emsp;&emsp;|                 |&emsp;&emsp;|          | \r`);
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
      cn: { name: '名称', description: '说明', type: '类型', default: '默认值', parame: '参数', subtags: '子标签' },
      en: { name: 'Name', description: 'Description', type: 'Type', default: 'Default', parame: 'Parameter', subtags: 'Subtags' },
    };
    const docTitle = this.lang === 'zh-CN' ? docTitles.cn : docTitles.en;
    const tableTitle = this.lang === 'zh-CN' ? tableTitles.cn : tableTitles.en;
    const list: string[] = [];
    switch (key) {
      case 'attributes':
        list.push(`### el-${tag} ${docTitle.attributes} </br></br>\r`);
        list.push(`| ${tableTitle.name} |&emsp;&emsp;| ${tableTitle.description} |&emsp;&emsp;| ${tableTitle.type} |&emsp;&emsp;| ${tableTitle.default} | \r`);
        list.push('|:-------------------|------------|:--------------------------|------------|:-------------------|------------|:----------------------| \r');
        break;
      case 'events':
        list.push(`### el-${tag} ${docTitle.events} </br></br>\r`);
        list.push(`| ${tableTitle.name} |&emsp;&emsp;| ${tableTitle.description} |&emsp;&emsp;| ${tableTitle.type} |&emsp;&emsp;| ${tableTitle.parame} | \r`);
        list.push('|:-------------------|------------|:--------------------------|------------|:-------------------|------------|:---------------------| \r');
        break;
      case 'slots':
        list.push(`### el-${tag} ${docTitle.slots} </br></br>\r`);
        list.push(`| ${tableTitle.name} |&emsp;&emsp;| ${tableTitle.description} |&emsp;&emsp;| ${tableTitle.subtags} | \r`);
        list.push('|:-------------------|------------|:--------------------------|------------|:----------------------| \r');
        break;
      case 'exposes':
        list.push(`### el-${tag} ${docTitle.exposes} </br></br>\r`);
        list.push(`| ${tableTitle.name} |&emsp;&emsp;| ${tableTitle.description} |&emsp;&emsp;| ${tableTitle.type} |&emsp;&emsp;| ${tableTitle.parame} | \r`);
        list.push('|:-------------------|------------|:--------------------------|------------|:------------------:|------------|:---------------------| \r');
        break;
      case 'childAttributes':
        list.push(`### ${tag} </br></br>\r`);
        list.push(`| ${tableTitle.name} |&emsp;&emsp;| ${tableTitle.description} |&emsp;&emsp;| ${tableTitle.type} |&emsp;&emsp;| ${tableTitle.default} | \r`);
        list.push('|:-------------------|------------|:--------------------------|------------|:-------------------|------------|:----------------------| \r');
        break;
      default:
        break;
    }
    return list;
  }

  /**
   * 把属性的类型字段转为Markdown字符串
   * @param row - 类型
   */
  private _getTypeMD(row: TagDoc.Attribute) {
    if (Array.isArray(row.value) && row.value.length > 0) {
      return `\`${row.value.join('` / `')}\``;
    } else {
      return Array.isArray(row.type) ? `\`${row.value.join('` / `') || '—'}\`` : `\`${row.type || '—'}\``;
    }
  }

  /**
   * 把属性的参数字段转为Markdown字符串
   * @param param - 参数
   */
  private _getParamMD(param: string | { cn: string; en: string }, docLang: 'cn' | 'en') {
    if (typeof param === 'string') {
      return param || '—';
    } else {
      return param[docLang] || '—';
    }
  }
}
