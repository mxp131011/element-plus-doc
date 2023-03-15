import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'span', description: { cn: 'number of column the grid spans', en: 'number of column the grid spans' }, type: 'number', default: '24', value: [] },
    {
      name: 'offset',
      description: { cn: 'number of spacing on the left side of the grid', en: 'number of spacing on the left side of the grid' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'push',
      description: { cn: 'number of columns that grid moves to the right', en: 'number of columns that grid moves to the right' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'pull',
      description: { cn: 'number of columns that grid moves to the left', en: 'number of columns that grid moves to the left' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'xs',
      description: {
        cn: '<code>&lt;768px</code> Responsive columns or column props object',
        en: '<code>&lt;768px</code> Responsive columns or column props object',
      },
      type: 'number',
      default: '—',
      value: ['object'],
    },
    {
      name: 'sm',
      description: { cn: '<code>≥768px</code> Responsive columns or column props object', en: '<code>≥768px</code> Responsive columns or column props object' },
      type: 'number',
      default: '—',
      value: ['object'],
    },
    {
      name: 'md',
      description: { cn: '<code>≥992px</code> Responsive columns or column props object', en: '<code>≥992px</code> Responsive columns or column props object' },
      type: 'number',
      default: '—',
      value: ['object'],
    },
    {
      name: 'lg',
      description: {
        cn: '<code>≥1200px</code> Responsive columns or column props object',
        en: '<code>≥1200px</code> Responsive columns or column props object',
      },
      type: 'number',
      default: '—',
      value: ['object'],
    },
    {
      name: 'xl',
      description: {
        cn: '<code>≥1920px</code> Responsive columns or column props object',
        en: '<code>≥1920px</code> Responsive columns or column props object',
      },
      type: 'number',
      default: '—',
      value: ['object'],
    },
    { name: 'tag', description: { cn: 'custom element tag', en: 'custom element tag' }, type: 'string', default: 'div', value: [] },
  ],
  slots: [{ name: 'default', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
