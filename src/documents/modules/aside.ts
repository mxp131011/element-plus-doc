import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/container.html#main-api',
  attributes: [
    {
      name: 'width',
      description: { cn: '侧边栏宽度', en: 'width of the side section' },
      type: 'string',
      default: "'300px'",
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
    },
  ],
};
export default doc;
