import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/menu.html#menu-item-group-attributes',
  attributes: [
    {
      name: 'title',
      description: { cn: '组标题', en: 'group title' },
      type: 'string',
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: '—',
      description: { cn: '默认插槽内容', en: 'customize default content' },
      subtags: ['Menu-Item'],
    },
    {
      name: 'title',
      description: { cn: '自定义组标题内容', en: 'customize group title' },
    },
  ],
};
export default doc;
