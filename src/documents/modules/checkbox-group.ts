import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/checkbox.html#checkboxgroup-api',
  attributes: [
    {
      name: 'model-value',
      description: { cn: '绑定值. (string[] | number[])', en: 'binding value. (string[] | number[])' },
      type: 'array',
      default: '',
      value: [],
    },
    {
      name: 'size',
      description: { cn: '多选框组尺寸', en: 'size of checkbox' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用', en: 'whether the nesting checkboxes are disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'min',
      description: { cn: '可被勾选的 checkbox 的最小数量', en: 'minimum number of checkbox checked' },
      type: 'number',
      default: '—',
      value: [],
    },
    {
      name: 'max',
      description: { cn: '可被勾选的 checkbox 的最大数量', en: 'maximum number of checkbox checked' },
      type: 'number',
      default: '—',
      value: [],
    },
    {
      name: 'label',
      description: { cn: '为屏幕阅读器准备的标签', en: 'label for screen reader' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'text-color',
      description: { cn: '当按钮为活跃状态时的字体颜色', en: 'font color when button is active' },
      type: 'string',
      default: '#ffffff',
      value: [],
    },
    {
      name: 'fill',
      description: { cn: '当按钮为活跃状态时的边框和背景颜色', en: 'border and background color when button is active' },
      type: 'string',
      default: '#409EFF',
      value: [],
    },
    {
      name: 'tag',
      description: { cn: '复选框组元素标签', en: 'element tag of the checkbox group' },
      type: 'string',
      default: 'div',
      value: [],
    },
    {
      name: 'validate-event',
      description: { cn: '是否触发表单验证', en: 'whether to trigger form validation' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: '当绑定值变化时触发的事件', en: 'triggers when the binding value changes' },
      type: 'function',
      param: '(value: string[] | number[]) => void',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
      subtags: ['Checkbox', 'Checkbox-button'],
    },
  ],
};
export default doc;
