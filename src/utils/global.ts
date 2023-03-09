import type { Position, TextDocument } from 'vscode';

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
