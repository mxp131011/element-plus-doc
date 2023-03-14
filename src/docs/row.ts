import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'gutter', description: { cn: 'grid spacing', en: 'grid spacing' }, type: 'number', default: '0', value: [''] },
    {
      name: 'justify',
      description: { cn: 'horizontal alignment of flex layout', en: 'horizontal alignment of flex layout' },
      type: 'enum',
      default: "'end'",
      value: ['start'],
    },
    {
      name: 'align',
      description: { cn: 'vertical alignment of flex layout', en: 'vertical alignment of flex layout' },
      type: 'enum',
      default: "'middle'",
      value: ['top'],
    },
    { name: 'tag', description: { cn: 'custom element tag', en: 'custom element tag' }, type: 'string', default: 'div', value: [''] },
  ],
  slots: [{ name: 'default', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
