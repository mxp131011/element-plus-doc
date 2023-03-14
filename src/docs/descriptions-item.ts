import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'label', description: { cn: 'label text', en: 'label text' }, type: 'string', default: '—', value: [] },
    { name: 'span', description: { cn: 'colspan of column', en: 'colspan of column' }, type: 'number', default: '1', value: [] },
    {
      name: 'width',
      description: {
        cn: 'column width, the width of the same column in different rows is set by the max value (If no <code>border</code>, width contains label and content)',
        en: 'column width, the width of the same column in different rows is set by the max value (If no <code>border</code>, width contains label and content)',
      },
      type: 'string / number',
      default: '—',
      value: [],
    },
    {
      name: 'min-width',
      description: {
        cn: 'column minimum width, columns with <code>width</code> has a fixed width, while columns with <code>min-width</code> has a width that is distributed in proportion (If no<code>border</code>, width contains label and content)',
        en: 'column minimum width, columns with <code>width</code> has a fixed width, while columns with <code>min-width</code> has a width that is distributed in proportion (If no<code>border</code>, width contains label and content)',
      },
      type: 'string / number',
      default: '—',
      value: [],
    },
    {
      name: 'align',
      description: {
        cn: 'column content alignment (If no <code>border</code>, effective for both label and content)',
        en: 'column content alignment (If no <code>border</code>, effective for both label and content)',
      },
      type: 'string',
      default: 'left',
      value: [],
    },
    {
      name: 'label-align',
      description: {
        cn: 'column label alignment, if omitted, the value of the above <code>align</code> attribute will be applied (If no <code>border</code>, please use <code>align</code> attribute)',
        en: 'column label alignment, if omitted, the value of the above <code>align</code> attribute will be applied (If no <code>border</code>, please use <code>align</code> attribute)',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'class-name',
      description: { cn: 'column content custom class name', en: 'column content custom class name' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'label-class-name',
      description: { cn: 'column label custom class name', en: 'column label custom class name' },
      type: 'string',
      default: '—',
      value: [],
    },
  ],
  slots: [
    { name: '—', description: { cn: 'customize default content', en: 'customize default content' } },
    { name: 'label', description: { cn: 'custom label', en: 'custom label' } },
  ],
};
export default doc;
