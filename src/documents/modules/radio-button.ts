import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/radio.html#radiobutton-api',
  attributes: [
    {
      name: 'label',
      description: { cn: '单选框的值', en: 'the value of Radio' },
      type: ['string', 'number', 'boolean'],
      default: '—',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用单选框', en: 'whether Radio is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'name',
      description: { cn: '原生 `name` 属性', en: "native 'name' attribute" },
      type: 'string',
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '默认插槽内容', en: 'customize default content' },
    },
  ],
};
export default doc;
