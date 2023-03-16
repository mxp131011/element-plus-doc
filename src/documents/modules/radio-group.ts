import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/radio.html#radiogroup-api',
  attributes: [
    {
      name: 'model-value',
      description: { cn: '绑定值', en: 'binding value' },
      type: ['string', 'number', 'boolean'],
      default: '—',
      value: [],
    },
    {
      name: 'size',
      description: { cn: '单选框按钮或边框按钮的大小', en: 'the size of radio buttons or bordered radios' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用', en: 'whether the nesting radios are disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'text-color',
      description: { cn: '按钮形式的 Radio 激活时的文本颜色', en: 'font color when button is active' },
      type: 'string',
      default: '#ffffff',
      value: [],
    },
    {
      name: 'fill',
      description: { cn: '按钮形式的 Radio 激活时的填充色和边框色', en: 'border and background color when button is active' },
      type: 'string',
      default: '#409EFF',
      value: [],
    },
    {
      name: 'validate-event',
      description: { cn: '输入时是否触发表单的校验', en: 'whether to trigger form validation' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'label',
      description: { cn: '与 RadioGroup 中的 aria-label 属性相同,用于无障碍访问', en: 'same as `aria-label` in RadioGroup' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'name',
      description: { cn: '原生 `name` 属性', en: 'native `name` attribute' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'id',
      description: { cn: '原生 `id` 属性', en: 'native `id` attribute' },
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
      param: '(value: string &#124; number &#124; boolean) => void',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
      subtags: ['Radio', 'RadioButton'],
    },
  ],
};
export default doc;
