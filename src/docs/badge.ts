import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'value', description: { cn: 'display value.', en: 'display value.' }, type: 'string', default: "''", value: ['number'] },
    {
      name: 'max',
      description: {
        cn: 'maximum value, shows <code>{max}+</code> when exceeded. Only works if value is a number.',
        en: 'maximum value, shows <code>{max}+</code> when exceeded. Only works if value is a number.',
      },
      type: 'number',
      default: '99',
      value: [''],
    },
    {
      name: 'is-dot',
      description: { cn: 'if a little dot is displayed.', en: 'if a little dot is displayed.' },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    { name: 'hidden', description: { cn: 'hidden badge.', en: 'hidden badge.' }, type: 'boolean', default: 'false', value: [''] },
    { name: 'type', description: { cn: 'badge type.', en: 'badge type.' }, type: 'enum', default: "'success'", value: ['primary'] },
  ],
  slots: [{ name: 'default', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
