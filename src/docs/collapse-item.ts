import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'name',
      description: { cn: 'unique identification of the panel', en: 'unique identification of the panel' },
      type: 'string/number',
      default: '—',
      value: [],
    },
    { name: 'title', description: { cn: 'title of the panel', en: 'title of the panel' }, type: 'string', default: '—', value: [] },
    { name: 'disabled', description: { cn: 'disable the collapse item', en: 'disable the collapse item' }, type: 'boolean', default: '—', value: [] },
  ],
  slots: [
    { name: '—', description: { cn: 'content of Collapse Item', en: 'content of Collapse Item' } },
    { name: 'title', description: { cn: 'content of Collapse Item title', en: 'content of Collapse Item title' } },
  ],
};
export default doc;
