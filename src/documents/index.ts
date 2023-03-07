import type { Document } from '@/types/document';
const files = require.context('./modules', true, /\.ts$/);

/**
 * 所有文档
 */
export const AllDocuments = files.keys().reduce<Record<string, Document.DocumentInstance>>((module, path) => {
  const name = `el-${path.replace(/^\.\/|.ts$/g, '')}`;
  module[name] = files(path).default;
  return module;
}, {});
