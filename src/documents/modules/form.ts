import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/form.html',
  attributes: [
    {
      name: 'model',
      description: { cn: '表单数据对象。 TS类型:Record<string, any>', en: 'Data of form component. TS Type:Record<string, any>' },
      type: 'object',
      default: '—',
      value: [],
    },
    {
      name: 'rules',
      description: { cn: '表单验证规则。 TS类型:FormRules', en: 'Validation rules of form.  TS Type:FormRules' },
      type: 'object',
      default: '—',
      value: ['codeFormRulescode'],
    },
    {
      name: 'inline',
      description: { cn: '行内表单模式.', en: 'Whether the form is inline.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'label-position',
      description: {
        cn: '表单域标签的位置， 当设置为 `left` 或 `right` 时，则也需要设置 `label-width` 属性',
        en: "Position of label. If set to `'left'` or `'right'`, `label-width` prop is also required.",
      },
      type: 'enum',
      default: "'right'",
      value: ['left', 'right', 'top'],
    },
    {
      name: 'label-width',
      description: {
        cn: "标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 `auto`。",
        en: "Width of label, e.g. `'50px'`. All its direct child form items will inherit this value. `auto` is supported.",
      },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'label-suffix',
      description: { cn: '表单域标签的后缀', en: 'Suffix of the label.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'hide-required-asterisk',
      description: {
        cn: '是否隐藏必填字段标签旁边的红色星号。',
        en: 'Whether to hide required fields should have a red asterisk (star) beside their labels.',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'require-asterisk-position',
      description: { cn: '星号的位置。', en: 'Position of asterisk.' },
      type: 'enum',
      default: "'right'",
      value: ['left', 'right'],
    },
    {
      name: 'show-message',
      description: { cn: '是否显示校验错误信息', en: 'Whether to show the error message.' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'inline-message',
      description: {
        cn: '是否以行内形式展示校验信息',
        en: 'Whether to display the error message inline with the form item.',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'status-icon',
      description: { cn: '是否在输入框中显示校验结果反馈图标', en: 'Whether to display an icon indicating the validation result.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'validate-on-rule-change',
      description: {
        cn: '是否在 `rules` 属性改变后立即触发一次验证',
        en: 'Whether to trigger validation when the `rules` prop is changed.',
      },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'size',
      description: { cn: '用于控制该表单内组件的尺寸', en: 'Control the size of components in this form.' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'disabled',
      description: {
        cn: '是否禁用该表单内的所有组件。 如果设置为 `true`, 它将覆盖内部组件的 `disabled` 属性',
        en: 'Whether to disable all components in this form. If set to `true`, it will override the `disabled` prop of the inner component.',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'scroll-to-error',
      description: { cn: '当校验失败时，滚动到第一个错误表单项', en: 'When validation fails, scroll to the first error form entry.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  events: [
    {
      name: 'validate',
      description: { cn: '任一表单项被校验后触发', en: 'triggers after a form item is validated' },
      type: 'function',
      param: '(prop: FormItemProp, isValid: boolean, message: string) => void',
    },
  ],
  exposes: [
    {
      name: 'validate',
      description: {
        cn: '对整个表单的内容进行验证。 接收一个回调函数，或返回 `Promise` 。',
        en: 'Validate the whole form. Receives a callback or returns `Promise`.',
      },
      type: 'function',
      param: '(props?: Arrayable<FormItemProp>, callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void>',
    },
    {
      name: 'validateField',
      description: { cn: '验证具体的某个字段。', en: 'Validate specified fields.' },
      type: 'function',
      param: '(props?: FormItemProp &#124; FormItemProp[], callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void>',
    },
    {
      name: 'resetFields',
      description: { cn: '重置该表单项，将其值重置为初始值，并移除校验结果', en: 'Reset specified fields and remove validation result.' },
      type: 'function',
      param: '',
    },
    {
      name: 'scrollToField',
      description: { cn: '(props?: FormItemProp &#124; FormItemProp[]) => void', en: 'Scroll to the specified fields.' },
      type: 'function',
      param: '',
    },
    {
      name: 'clearValidate',
      description: { cn: '清理某个字段的表单验证信息', en: 'Clear validation message for specified fields.' },
      type: 'function',
      param: '(props?: FormItemProp &#124; FormItemProp[]) => void',
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
