import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/skeleton.html#skeleton-item-api',
  attributes: [
    {
      name: 'variant',
      description: { cn: '当前渲染 skeleton 类型', en: 'The current rendering skeleton type' },
      type: 'enum',
      default: "'text'",
      value: ['p', 'text', 'h1', 'h3', 'caption', 'button', 'image', 'circle', 'rect'],
    },
  ],
};
export default doc;
