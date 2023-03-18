import { type Position, type TextDocument, workspace } from 'vscode';
import { verifyUrl } from '@/utils/verify';
import type { BaseLanguage, BaseUrl } from '@/types/index';

/**
 * 获取光标鼠标悬停时所在位置的标签（如:el-input）
 */
export function getTag(document: TextDocument, text: string, position: Position): string | undefined {
  let line = position.line; // 得到当前光标所在行 （从零开始）
  let tag: string | undefined = undefined;
  let newText = text;

  /** 得到光标所在位置所属的的element-plus标签 （向前搜索，最多五十行） */
  while (position.line - line < 50 && line >= 0) {
    if (line !== position.line) {
      newText = document.lineAt(line).text;
    }
    tag = matchTag(newText, position, line);
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
 * 匹配标签
 * @param txt - 待匹配字符
 */
export function matchTag(txt: string, position: Position, line: number): string | undefined {
  // 如果是在标签之外就返回
  if (
    /<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) ||
    (position.line === line && (/^\s*[^<]+\s*>[^</>]*$/.test(txt) || /[^<>]*<$/.test(txt[txt.length - 1] || '')))
  ) {
    return 'return___tag___external';
  }
  // 正则匹配标签 (以尖括号加大小写字母开头，中间可有多个单词或者下划线中横线，然后在跟一个或多个大小写字母，最后跟空格或者反尖括号或者三种换行符)
  const reg = /<[A-Za-z]([\w-]*)([A-Za-z]+)(\s|>|\r?\n|(?<!\n)\r)*/g;
  const match: RegExpMatchArray | null = txt.match(reg);
  const tag = match ? match.pop()?.trim().replace('<', '') : undefined;
  return tag || undefined;
}

/**
 * 匹配属性
 * @param txt - 匹配文本
 */
export function matchAttr(txt: string): string {
  let match: RegExpMatchArray | null = null;
  // 标签属性匹配的正则表达式
  const reg = /(?:\(|\s*)[A-Za-z]([\w-:]+)[A-Za-z0-9]/;
  match = txt.match(reg);
  if (!/"[^"]*"/.test(txt) && match) {
    return match[0] || '';
  }
  return '';
}

/**
 * 驼峰转横线,且全部小写
 * @param str - 待转换的串
 */
export function toKebabCase(str: string | undefined) {
  let newStr = str || '';

  // 如果已经是中横线写法就不处理 仅在最后转小写 （防止 BASE-INPUT 被转成 b-a-s-e--i-n-p-u-t）
  if (str && str.indexOf('-') <= 1) {
    newStr = str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
    newStr = newStr.startsWith('-') ? newStr.slice(1) : newStr; // 如果首字母是大写，会多一个_，这里去掉
  }
  return newStr.toLowerCase();
}

/**
 * 得到官网
 */
export function getOfficialWebsite(lang: BaseLanguage): BaseUrl {
  /** 中文官网 */
  const cnUrl = workspace.getConfiguration().get<string>('website.chinese') || '';
  const cnUrlNew: BaseUrl = verifyUrl(cnUrl) ? cnUrl : 'https://element-plus.org/zh-CN/';

  /** 英文官网 */
  const enUrl = workspace.getConfiguration().get<string>('website.english') || '';
  const enUrlNew: BaseUrl = verifyUrl(enUrl) ? enUrl : 'https://element-plus.org/en-US/';

  /** 最终的官网 */
  return lang === 'zh-CN' ? cnUrlNew : enUrlNew;
}

/**
 * 得到包含el的自定义前缀 (仅保留前四个)
 */
export function getCustomPrefix(): string[] {
  const customPrefixSet = workspace.getConfiguration().get('customPrefix');

  // 得到自定义前缀
  const customPrefix: string[] = Array.isArray(customPrefixSet) ? customPrefixSet : [];
  const newList: string[] = [];
  customPrefix.forEach((item) => {
    const newItem = item.replace(/[^a-zA-Z0-9]/g, '');
    newItem && newList.push(newItem);
  });
  newList.unshift('el');
  const prefixList: string[] = [...new Set(newList)].splice(0, 3);
  return prefixList;
}

/**
 * 得到映射组件 (已经驼峰转横线)
 */
export function getMapComponent(): Record<string, string> {
  /** 映射组件 */
  const mapComponent = workspace.getConfiguration().get<Record<string, string>>('mapComponent') || {};
  const obj = typeof mapComponent === 'object' && !Array.isArray(mapComponent) ? mapComponent : {};
  const newObj: Record<string, string> = {};
  for (const key in obj) {
    newObj[toKebabCase(key)] = toKebabCase(obj[key]);
  }
  return newObj;
}
