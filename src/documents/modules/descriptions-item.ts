import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/descriptions.html#descriptions-item-attributes',
  attributes: [
    {
      name: 'label',
      description: { cn: '标签文本', en: 'label text' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'span',
      description: { cn: '列的数量', en: 'colspan of column' },
      type: 'number',
      default: '1',
      value: [],
    },
    {
      name: 'width',
      description: {
        cn: '列的宽度，不同行相同列的宽度按最大值设定（如无 `border` ，宽度包含标签与内容）',
        en: 'column width, the width of the same column in different rows is set by the max value (If no <code>border</code>, width contains label and content)',
      },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'min-width',
      description: {
        cn: '列的最小宽度，与 `width` 的区别是 `width` 是固定的，`min-width` 会把剩余宽度按比例分配给设置了 `min-width` 的列（如无 `border` ，宽度包含标签与内容）',
        en: 'column minimum width, columns with <code>width</code> has a fixed width, while columns with <code>min-width</code> has a width that is distributed in proportion (If no<code>border</code>, width contains label and content)',
      },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'align',
      description: {
        cn: '列的内容对齐方式（如无 `border` ，对标签和内容均生效）',
        en: 'column content alignment (If no <code>border</code>, effective for both label and content)',
      },
      type: 'enum',
      default: "'left'",
      value: ['left', 'center', 'right'],
    },
    {
      name: 'label-align',
      description: {
        cn: '列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 `border` ，请使用 `align` 参数）',
        en: 'column label alignment, if omitted, the value of the above <code>align</code> attribute will be applied (If no <code>border</code>, please use <code>align</code> attribute)',
      },
      type: 'enum',
      default: '—',
      value: ['left', 'center', 'right'],
    },
    {
      name: 'class-name',
      description: { cn: '列的内容自定义类名', en: 'column content custom class name' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'label-class-name',
      description: { cn: '列标签自定义类名', en: 'column label custom class name' },
      type: 'string',
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
    },
    {
      name: 'label',
      description: { cn: '自定义标签', en: 'custom label' },
    },
  ],
};
export default doc;
