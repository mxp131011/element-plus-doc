import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'separator',
      description: { cn: 'separator character', en: 'separator character' },
      type: 'string',
      default: '/',
      value: [],
    },
    {
      name: 'separator-icon',
      description: { cn: 'icon component of icon separator', en: 'icon component of icon separator' },
      type: 'string',
      default: '-',
      value: ['Component'],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: 'customize default content', en: 'customize default content' },
    },
  ],
};
export default doc;
