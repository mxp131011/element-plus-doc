import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'title',
      description: { cn: 'group title', en: 'group title' },
      type: 'string',
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: '—',
      description: { cn: 'customize default content', en: 'customize default content' },
    },
    {
      name: 'title',
      description: { cn: 'customize group title', en: 'customize group title' },
    },
  ],
};
export default doc;
