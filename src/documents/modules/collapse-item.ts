import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/collapse.html#collapse-item-attributes',
  attributes: [
    {
      name: 'name',
      description: { cn: '唯一标志符', en: 'unique identification of the panel' },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'title',
      description: { cn: '面板标题', en: 'title of the panel' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用', en: 'disable the collapse item' },
      type: 'boolean',
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: '—',
      description: { cn: '折叠项内容', en: 'content of Collapse Item' },
    },
    {
      name: 'title',
      description: { cn: '折叠项的标题', en: 'content of Collapse Item title' },
    },
  ],
};
export default doc;
