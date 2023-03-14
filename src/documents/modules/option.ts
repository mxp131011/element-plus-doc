import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/select.html#option-attributes',
  attributes: [
    {
      name: 'value',
      description: { cn: '选项的值', en: 'value of option' },
      type: ['string', 'number', 'boolean', 'object'],
      default: '—',
      value: [],
    },
    {
      name: 'label',
      description: { cn: '选项的标签，若不设置则默认与 <code>value</code> 相同', en: 'label of option, same as <code>value</code> if omitted' },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用该选项', en: 'whether option is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '默认插槽', en: 'customize default content' },
    },
  ],
};
export default doc;
