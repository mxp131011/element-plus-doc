import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'name',
      description: { cn: 'name of the item, can be used in <code>setActiveItem</code>', en: 'name of the item, can be used in <code>setActiveItem</code>' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'label',
      description: { cn: 'text content for the corresponding indicator', en: 'text content for the corresponding indicator' },
      type: 'string',
      default: '—',
      value: [],
    },
  ],
  slots: [{ name: '—', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
