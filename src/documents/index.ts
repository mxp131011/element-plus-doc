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
