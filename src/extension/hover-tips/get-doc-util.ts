import { MarkdownString } from 'vscode';
import type { BaseLanguage } from '@/types/index';
import type { TagDoc } from '@/types/tag-doc';

export class GetDocUtil {
  /**
   * 生成属性文档
   * @param tagDoc - 文档 具体标签对应的文档
   * @param tag - 标签
   * @param attr - 属性 在标签的属性上悬停时具有
   * @param lang - 语言
   */
  public getAttributeDoc(tagDoc: TagDoc.TagDocInstance, tag: string, attr: string, lang: BaseLanguage): MarkdownString | undefined {
    let nullDoc = true; // 文档是否为空
    const mdStr: MarkdownString = new MarkdownString('', true);
    mdStr.supportHtml = true;
    const attrList = tagDoc.attributes || []; // 取得属性列表

    if (attrList.length) {
      // 生成表头
      if (lang === 'zh-CN') {
        mdStr.appendMarkdown(`### ${tag} 属性 \r`);
        mdStr.appendMarkdown('| <div style="width: 80px;">名称</div> | 说明 | 类型 | <div style="width: 80px;">默认值</div>  |\r');
      } else {
        mdStr.appendMarkdown(`### ${tag} Attributes \r`);
        mdStr.appendMarkdown('| Name | Description | Type | Default |\r');
      }
      mdStr.appendMarkdown('|------|------|------|------|\r');
    }
    const docLang = lang === 'zh-CN' ? 'cn' : 'en';
    if (!attr) {
      // 属性 和标签一样 显示全部
      attrList.forEach((row: TagDoc.Attribute) => {
        mdStr.appendMarkdown(`| \`${row.name}\` | ${row.description[docLang]} | ${this._getTypeMD(row.type)} | \`${row.default}\` |\r`);
        nullDoc = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = attrList.find((_row: TagDoc.Attribute) => _row.name === attr);
      if (row) {
        mdStr.appendMarkdown(`| \`${row.name}\` | ${row.description[docLang]} | \`${this._getTypeMD(row.type)}\` | \`${row.default}\` |\r`);
        nullDoc = false;
      }
    }
    if (nullDoc) {
      return undefined;
    }
    return mdStr;
  }

  /**
   * 生成标签对外暴露出的属性或方法的文档
   * @param tagDoc - 具体标签对应的文档
   * @param tag - 标签
   * @param attr - 属性
   * @param lang - 语言
   */
  public getExposeDoc(tagDoc: TagDoc.TagDocInstance, tag: string, attr: string, lang: BaseLanguage): MarkdownString | undefined {
    let nullDoc = true; // 文档是否为空
    const mdStr: MarkdownString = new MarkdownString('', true);
    const exposeList = tagDoc.exposes || [];
    if (exposeList.length) {
      if (lang === 'zh-CN') {
        mdStr.appendMarkdown(`### ${tag} 对外暴露\r`);
        mdStr.appendMarkdown('| 名称 | 说明 | 类型 |\r');
      } else {
        mdStr.appendMarkdown(`### ${tag} Method\r`);
        mdStr.appendMarkdown('| Name | Description | Type |\r');
      }
      mdStr.appendMarkdown('|------|------|------|\r');
    }
    const docLang = lang === 'zh-CN' ? 'cn' : 'en';
    if (!attr) {
      // 属性 和标签一样 显示全部
      exposeList.forEach((row: TagDoc.Expose) => {
        mdStr.appendMarkdown(`| \`${row.name}\` | ${row.description[docLang]} | \`${this._getTypeMD(row.type)}\` |\r`);
        nullDoc = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = exposeList.find((_row: TagDoc.Expose) => _row.name === attr);
      if (row) {
        mdStr.appendMarkdown(`| \`${row.name}\` | ${row.description[docLang]} | \`${this._getTypeMD(row.type)}\` |\r`);
        nullDoc = false;
      }
    }
    if (nullDoc) {
      return undefined;
    }
    return mdStr;
  }

  /**
   * 生成标签对应的事件文档
   * @param tagDoc - 具体标签对应的文档
   * @param tag - 标签
   * @param attr - 属性
   * @param lang - 语言
   */
  public getEventDoc(tagDoc: TagDoc.TagDocInstance, tag: string, attr: string, lang: BaseLanguage): MarkdownString {
    let nullDoc = true; // 文档是否为空
    let mdStr: MarkdownString = new MarkdownString('', true);
    const events = tagDoc.events || [];
    if (events.length) {
      if (lang === 'zh-CN') {
        mdStr.appendMarkdown(`### ${tag} 事件\r`);
        mdStr.appendMarkdown('| 名称 | 说明 | 类型 |\r');
      } else {
        mdStr.appendMarkdown(`### ${tag} Event\r`);
        mdStr.appendMarkdown('| Name | Description | Type |\r');
      }
      mdStr.appendMarkdown('|------|------|------|\r');
    }
    const docLang = lang === 'zh-CN' ? 'cn' : 'en';
    if (!attr) {
      // 属性 和标签一样 显示全部
      events.forEach((row: TagDoc.Event) => {
        mdStr.appendMarkdown(`| \`${row.name}\` | ${row.description[docLang]} | \`${this._getTypeMD(row.type)}\` |\r`);
        nullDoc = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = events.find((_row: TagDoc.Event) => _row.name === attr);
      if (row) {
        mdStr.appendMarkdown(`| \`${row.name}\` | ${row.description[docLang]} | \`${this._getTypeMD(row.type)}\` |\r`);
        nullDoc = false;
      }
    }
    if (nullDoc) {
      mdStr = new MarkdownString('', true);
    }
    return mdStr;
  }

  /**
   * 生成插槽文档
   * @param tagDoc - 具体标签对应的文档
   * @param tag - 标签
   * @param attr - 属性
   * @param lang - 语言
   */
  public getSlotDoc(tagDoc: TagDoc.TagDocInstance, tag: string, attr: string, lang: BaseLanguage): MarkdownString {
    let nullDoc = true; // 文档是否为空
    let mdStr: MarkdownString = new MarkdownString('', true);
    mdStr.supportHtml = true;
    const slots = tagDoc.slots || [];
    if (slots.length) {
      if (lang === 'zh-CN') {
        mdStr.appendMarkdown(`### ${tag} 插槽\r`);
        mdStr.appendMarkdown('| 插槽 | 说明 |\r');
      } else {
        mdStr.appendMarkdown(`### ${tag} Slot\r`);
        mdStr.appendMarkdown('| Slot | Description |\r');
      }
      mdStr.appendMarkdown('|------|------|\r');
    }
    const docLang = lang === 'zh-CN' ? 'cn' : 'en';
    if (attr.length === 0) {
      // 属性 和标签一样 显示全部
      slots.forEach((row: TagDoc.Slot) => {
        mdStr.appendMarkdown(`| \`${row.name}\` | ${row.description[docLang]} |\r`);
        nullDoc = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = slots.find((_row: TagDoc.Slot) => _row.name === attr);
      if (row) {
        mdStr.appendMarkdown(`| \`${row.name}\` | ${row.description[docLang]} |\r`);
        nullDoc = false;
      }
    }
    if (nullDoc) {
      mdStr = new MarkdownString('', true);
    }
    return mdStr;
  }

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
