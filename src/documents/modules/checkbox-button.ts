import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/checkbox.html#checkboxbutton-api',
  attributes: [
    {
      name: 'label',
      description: {
        cn: '选中状态的值，只有在绑定对象类型为 `array` 时有效。',
        en: 'value of the checkbox when used inside a <code>checkbox-group</code>',
      },
      type: ['string', 'number', 'boolean', 'object'],
      default: '—',
      value: [],
    },
    {
      name: 'true-label',
      description: { cn: '选中时的值', en: "value of the checkbox if it's checked" },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'false-label',
      description: { cn: '没有选中时的值', en: "value of the checkbox if it's not checked" },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用', en: 'whether the checkbox is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'name',
      description: { cn: '原生 name 属性', en: "native 'name' attribute" },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'checked',
      description: { cn: '当前是否勾选', en: 'if the checkbox is checked' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  events: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
      type: 'function',
      param: '',
    },
  ],
};
export default doc;
