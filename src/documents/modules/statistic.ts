import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/statistic.html',
  attributes: [
    {
      name: 'value',
      description: { cn: '数字内容', en: 'Numerical content' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'decimal-separator',
      description: { cn: '设置小数点符号', en: 'Setting the decimal point' },
      type: 'string',
      default: '.',
      value: [],
    },
    {
      name: 'formatter',
      description: {
        cn: '自定义数字格式化,TS 类型：(value: number) => string &#124; number',
        en: 'Custom numerical presentation. TS Type: (value: number) => string &#124; number',
      },
      type: 'function',
      default: 'number`',
      value: ['valuenumbergtstring'],
    },
    {
      name: 'group-separator',
      description: {
        cn: '设置千分位标识符',
        en: 'Sets the thousandth identifier',
      },
      type: 'string',
      default: ',',
      value: [],
    },
    {
      name: 'precision',
      description: { cn: '数字精度', en: 'numerical precision' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'prefix',
      description: { cn: '设置数字的前缀', en: 'Sets the prefix of a number' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'suffix',
      description: { cn: '设置数字的后缀', en: 'Sets the suffix of a number' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'title',
      description: { cn: '数字标题', en: 'Numeric titles' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'value-style',
      description: {
        cn: '数字样式。 TS类型: CSSProperties &#124; CSSProperties[] &#124; string[] &#124; string',
        en: 'Styles numeric values. TS Type: CSSProperties &#124; CSSProperties[] &#124; string[] &#124; string',
      },
      type: ['string', 'object'],
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: 'prefix',
      description: { cn: '倒计时值前缀', en: 'Numeric prefix' },
    },
    {
      name: 'suffix',
      description: { cn: '倒计时后缀', en: 'Suffixes for numeric values' },
    },
    {
      name: 'title',
      description: { cn: '倒计时标题', en: 'Numeric titles' },
    },
  ],
};
export default doc;
