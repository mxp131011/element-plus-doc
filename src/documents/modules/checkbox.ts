import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/checkbox.html',
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
      description: {
        cn: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）',
        en: 'value of the Checkbox when used inside a <code>checkbox-group</code>',
      },
      type: ['string', 'number', 'boolean', 'object'],
      default: '—',
      value: [],
    },
    {
      name: 'true-label',
      description: { cn: '选中时的值', en: "value of the Checkbox if it's checked" },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'false-label',
      description: { cn: '没有选中时的值', en: "value of the Checkbox if it's not checked" },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用', en: 'whether the Checkbox is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'border',
      description: { cn: '是否显示边框', en: 'whether to add a border around Checkbox' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'size',
      description: { cn: 'Checkbox 的尺寸', en: 'size of the Checkbox' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
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
      description: { cn: '当前是否勾选', en: 'if the Checkbox is checked' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'indeterminate',
      description: { cn: '设置不确定状态，仅负责样式控制', en: 'Set indeterminate state, only responsible for style control' },
      type: 'boolean',
      default: 'false',
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
      name: 'tabindex',
      description: { cn: '输入框的 tabindex', en: 'input tabindex' },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'id',
      description: { cn: 'input id', en: 'input id' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'controls',
      description: {
        cn: '与 <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls">aria-controls</a>一致, 当 `indeterminate` 为 `true` 时生效',
        en: 'same as <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls">aria-controls</a>, takes effect when <code>indeterminate</code> is <code>true</code>',
      },
      type: 'boolean',
      default: '—',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: '当绑定值变化时触发的事件', en: 'triggers when the binding value changes' },
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
