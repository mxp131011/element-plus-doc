import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: '', description: { cn: 'Numerical content', en: 'Numerical content' }, type: 'number', default: '0', value: [''] },
    { name: '', description: { cn: 'Setting the decimal point', en: 'Setting the decimal point' }, type: 'string', default: '.', value: [''] },
    {
      name: '',
      description: { cn: 'Custom numerical presentation', en: 'Custom numerical presentation' },
      type: 'function',
      default: 'number`',
      value: ['valuenumbergtstring'],
    },
    { name: '', description: { cn: 'Sets the thousandth identifier', en: 'Sets the thousandth identifier' }, type: 'string', default: ',', value: [''] },
    { name: '', description: { cn: 'numerical precision', en: 'numerical precision' }, type: 'number', default: '0', value: [''] },
    { name: '', description: { cn: 'Sets the prefix of a number', en: 'Sets the prefix of a number' }, type: 'string', default: '—', value: [''] },
    { name: '', description: { cn: 'Sets the suffix of a number', en: 'Sets the suffix of a number' }, type: 'string', default: '—', value: [''] },
    { name: '', description: { cn: 'Numeric titles', en: 'Numeric titles' }, type: 'string', default: '—', value: [''] },
    { name: '', description: { cn: 'Styles numeric values', en: 'Styles numeric values' }, type: 'string', default: 'CSSProperties[]', value: ['object'] },
  ],
  exposes: [{ name: 'displayValue', description: { cn: 'current display value', en: 'current display value' }, type: 'object', param: '' }],
  slots: [
    { name: 'prefix', description: { cn: 'Numeric prefix', en: 'Numeric prefix' } },
    { name: 'suffix', description: { cn: 'Suffixes for numeric values', en: 'Suffixes for numeric values' } },
    { name: 'title', description: { cn: 'Numeric titles', en: 'Numeric titles' } },
  ],
};
export default doc;
