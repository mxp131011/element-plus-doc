import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'header',
      description: {
        cn: 'title of the card. Also accepts a DOM passed by <code>slot#header</code>',
        en: 'title of the card. Also accepts a DOM passed by <code>slot#header</code>',
      },
      type: 'string',
      default: '—',
      value: [''],
    },
    {
      name: 'body-style',
      description: { cn: 'CSS style of card body', en: 'CSS style of card body' },
      type: 'object',
      default: '—',
      value: ['codeCSSPropertiescode'],
    },
    { name: 'shadow', description: { cn: 'when to show card shadows', en: 'when to show card shadows' }, type: 'enum', default: 'never', value: ['always'] },
  ],
  slots: [
    { name: 'default', description: { cn: 'customize default content', en: 'customize default content' } },
    { name: 'header', description: { cn: 'content of the Card header', en: 'content of the Card header' } },
  ],
};
export default doc;
