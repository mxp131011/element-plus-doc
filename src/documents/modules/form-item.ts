import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/form.html#formitem-api',
  attributes: [
    {
      name: 'prop',
      description: {
        cn: "`model` 的键名。 它可以是一个路径数组(例如 ['a', 'b', 0])。 在定义了 `validate`、`resetFields` 的方法时，该属性是必填的",
        en: "A key of <code>model</code>. It could be an array of property paths (e.g <code>['a', 'b', 0]</code>). In the use of <code>validate</code> and <code>resetFields</code> method, the attribute is required.",
      },
      type: ['string', 'array'],
      default: '—',
      value: ['string'],
    },
    {
      name: 'label',
      description: { cn: '标签文本', en: 'Label text.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'label-width',
      description: {
        cn: "标签宽度，例如 '50px'。 可以使用 `auto` 。",
        en: "Width of label, e.g. <code>'50px'</code>. <code>'auto'</code> is supported.",
      },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'required',
      description: {
        cn: '是否为必填项，如不设置，则会根据校验规则确认',
        en: 'Whether the field is required or not, will be determined by validation rules if omitted.',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'rules',
      description: {
        cn: '表单验证规则, 具体配置见下表, 更多内容可以参考 [async-validator](https://github.com/yiminghe/async-validator) ',
        en: 'Validation rules of form, more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).',
      },
      type: 'object',
      default: '—',
      value: [],
    },
    {
      name: 'error',
      description: {
        cn: '表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 error，并显示该错误信息。',
        en: 'Field error message, set its value and the field will validate error and show this message immediately.',
      },
      type: 'string',
      default: '—',
      value: [],
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
      description: { cn: '是否在行内显示校验信息', en: 'Inline style validate message.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'size',
      description: { cn: '用于控制该表单域下组件的默认尺寸', en: 'Control the size of components in this form-item.' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'for',
      description: { cn: '和原生标签相同能力', en: 'Same as for in native label.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'validate-status',
      description: { cn: 'formitem 校验的状态', en: 'Validation state of formItem.' },
      type: 'enum',
      default: "'error'",
      value: ['', 'error', 'validating', 'success'],
    },
  ],
  exposes: [
    {
      name: 'size',
      description: { cn: '表单项大小', en: 'Form item size.' },
      type: 'object',
      param: "ComputedRef<'' &#124; 'large' &#124; 'default' &#124; 'small'>",
    },
    {
      name: 'validateMessage',
      description: { cn: '校验消息', en: 'Validation message.' },
      type: 'object',
      param: 'Ref<string>',
    },
    {
      name: 'validateState',
      description: { cn: '校验状态', en: 'Validation state.' },
      type: 'object',
      param: "Ref<'' &#124; 'error' &#124; 'validating' &#124; 'success'>",
    },
    {
      name: 'validate',
      description: { cn: '验证表单项', en: 'Validate form item.' },
      type: 'function',
      param: '(trigger: string, callback?: FormValidateCallback &#124; undefined) => FormValidationResult',
    },
    {
      name: 'resetField',
      description: { cn: '对该表单项进行重置，将其值重置为初始值并移除校验结果', en: 'Reset current field and remove validation result.' },
      type: 'function',
      param: '() => void',
    },
    {
      name: 'clearValidate',
      description: { cn: '移除该表单项的校验结果', en: 'Remove validation status of the field.' },
      type: 'function',
      param: '() => void',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '表单的内容', en: 'Content of Form Item.' },
    },
    {
      name: 'label',
      description: { cn: '标签位置显示的内容,参数为：{ label: string }', en: 'Custom content to display on label. parameter: { label: string }' },
    },
    {
      name: 'error',
      description: {
        cn: '验证错误信息的显示内容,参数为：{ label: string }',
        en: 'Custom content to display validation message.  parameter: { label: string }',
      },
    },
  ],
};
export default doc;
