import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/breadcrumb.html',
  attributes: [
    {
      name: 'separator',
      description: { cn: '分隔符', en: 'separator character' },
      type: 'string',
      default: '/',
      value: [],
    },
    {
      name: 'separator-icon',
      description: { cn: '图标分隔符的组件或组件名', en: 'icon component of icon separator' },
      type: ['string', 'Component'],
      default: '-',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
      subtags: ['Breadcrumb Item'],
    },
  ],
};
export default doc;
