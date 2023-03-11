import type { TagDoc } from '@/types/tag-doc';
const files = require.context('./modules', true, /\.ts$/);

/**
 * 所有文档
 */
export const AllDocuments = files.keys().reduce<Record<string, TagDoc.TagDocInstance>>((module, path) => {
  const name = `${path.replace(/^\.\/|.ts$/g, '')}`;
  module[name] = files(path).default;
  return module;
}, {});

/** 把所有竖线替换为ASCII字符集 解决表格不能渲染的问题 */
for (const tag in AllDocuments) {
  const tagDoc = AllDocuments[tag]!;
  for (const key in tagDoc) {
    if (key === 'events' || key === 'exposes') {
      const element = tagDoc[key]!;
      element.forEach((item) => {
        item.tsType = item.tsType.replace('|', '&#124;');
      });
    }
  }
}
