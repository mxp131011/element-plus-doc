import type { Position } from 'vscode';

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
  const tag = match ? match.pop()?.replace('<', '') : undefined;
  return tag || undefined;
}

/**
 * 匹配属性
 * @param reg - 匹配模式
 * @param txt - 匹配文本
 */
export function matchAttr(reg: RegExp, txt: string): string {
  let match: RegExpMatchArray | null = null;
  match = txt.match(reg);
  if (!/"[^"]*"/.test(txt) && match) {
    return match[0] || '';
  }
  return '';
}

/**
 * 驼峰转横线
 * @param str - 待转换的串
 */
export function toKebabCase(str: string | undefined) {
  if (str === undefined) {
    return '';
  }
  let temp = str.replace(/[A-Z]/g, (match) => {
    return `-${match.toLowerCase()}`;
  });
  if (temp.startsWith('-')) {
    // 如果首字母是大写，执行replace时会多一个_，这里需要去掉
    temp = temp.slice(1);
  }
  return temp;
}
