import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'alignment',
      description: { cn: 'Controls the alignment of items', en: 'Controls the alignment of items' },
      type: 'enum',
      default: "'normal'",
      value: ['center'],
    },
    { name: 'class', description: { cn: 'Classname', en: 'Classname' }, type: 'string', default: '—', value: ['object'] },
    { name: 'direction', description: { cn: 'Placement direction', en: 'Placement direction' }, type: 'enum', default: "'horizontal'`", value: ['vertical'] },
    { name: 'prefixCls', description: { cn: 'Prefix for space-items', en: 'Prefix for space-items' }, type: 'string', default: '—', value: [''] },
    { name: 'style', description: { cn: 'Extra style rules', en: 'Extra style rules' }, type: 'string', default: 'CSSProperties[]', value: ['object'] },
    { name: 'spacer', description: { cn: 'Spacer', en: 'Spacer' }, type: 'string', default: '—', value: ['number'] },
    { name: 'size', description: { cn: 'Spacing size', en: 'Spacing size' }, type: 'enum', default: "'small'", value: ['default'] },
    { name: 'wrap', description: { cn: 'Auto wrapping', en: 'Auto wrapping' }, type: 'boolean', default: 'false', value: [''] },
    { name: 'fill', description: { cn: 'Whether to fill the container', en: 'Whether to fill the container' }, type: 'boolean', default: 'false', value: [''] },
    { name: 'fill-ratio', description: { cn: 'Ratio of fill', en: 'Ratio of fill' }, type: 'number', default: '100', value: [''] },
  ],
  slots: [{ name: 'default', description: { cn: 'Items to be spaced', en: 'Items to be spaced' } }],
};
export default doc;
