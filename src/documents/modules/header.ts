import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/container.html#header-api',
  attributes: [
    {
      name: 'height',
      description: { cn: '顶栏高度', en: 'height of the header' },
      type: 'string',
      default: "'60px'",
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
