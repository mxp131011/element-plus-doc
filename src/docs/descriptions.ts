import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'border',
      description: { cn: 'with or without border', en: 'with or without border' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'column',
      description: { cn: 'numbers of <code>Descriptions Item</code> in one line', en: 'numbers of <code>Descriptions Item</code> in one line' },
      type: 'number',
      default: '3',
      value: [],
    },
    {
      name: 'direction',
      description: { cn: 'direction of list', en: 'direction of list' },
      type: 'string',
      default: 'horizontal',
      value: [],
    },
    {
      name: 'size',
      description: { cn: 'size of list', en: 'size of list' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'title',
      description: { cn: 'title text, display on the top left', en: 'title text, display on the top left' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'extra',
      description: { cn: 'extra text, display on the top right', en: 'extra text, display on the top right' },
      type: 'string',
      default: '—',
      value: [],
    },
  ],
  slots: [
    { name: '—', description: { cn: 'customize default content', en: 'customize default content' } },
    { name: 'title', description: { cn: 'custom title, display on the top left', en: 'custom title, display on the top left' } },
    { name: 'extra', description: { cn: 'custom extra area, display on the top right', en: 'custom extra area, display on the top right' } },
  ],
};
export default doc;
