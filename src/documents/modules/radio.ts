import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/radio.html',
  attributes: [
    {
      name: 'model-value',
      description: { cn: '选中项绑定值', en: 'binding value' },
      type: ['string', 'number', 'boolean'],
      default: '—',
      value: [],
    },
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
      name: 'border',
      description: { cn: '是否显示边框', en: 'whether to add a border around Radio' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'size',
      description: { cn: '单选框的尺寸', en: 'size of the Radio' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'name',
      description: { cn: '原始 `name` 属性', en: 'native <code>name</code> attribute' },
      type: 'string',
      default: '—',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: '绑定值变化时触发的事件', en: 'triggers when the bound value changes' },
      type: 'function',
      param: '(value: string | number | boolean) => void',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
    },
  ],
};
export default doc;
