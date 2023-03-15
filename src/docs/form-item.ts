import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'prop',
      description: {
        cn: "A key of <code>model</code>. It could be an array of property paths (e.g <code>['a', 'b', 0]</code>). In the use of <code>validate</code> and <code>resetFields</code> method, the attribute is required.",
        en: "A key of <code>model</code>. It could be an array of property paths (e.g <code>['a', 'b', 0]</code>). In the use of <code>validate</code> and <code>resetFields</code> method, the attribute is required.",
      },
      type: 'string',
      default: '—',
      value: ['string'],
    },
    { name: 'label', description: { cn: 'Label text.', en: 'Label text.' }, type: 'string', default: '—', value: [''] },
    {
      name: 'label-width',
      description: {
        cn: "Width of label, e.g. <code>'50px'</code>. <code>'auto'</code> is supported.",
        en: "Width of label, e.g. <code>'50px'</code>. <code>'auto'</code> is supported.",
      },
      type: 'string',
      default: '—',
      value: ['number'],
    },
    {
      name: 'required',
      description: {
        cn: 'Whether the field is required or not, will be determined by validation rules if omitted.',
        en: 'Whether the field is required or not, will be determined by validation rules if omitted.',
      },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    {
      name: 'rules',
      description: {
        cn: 'Validation rules of form, see the <a href="#formitemrule">following table</a>, more advanced usage at <a href="https://github.com/yiminghe/async-validator">async-validator</a>.',
        en: 'Validation rules of form, see the <a href="#formitemrule">following table</a>, more advanced usage at <a href="https://github.com/yiminghe/async-validator">async-validator</a>.',
      },
      type: 'object',
      default: 'FormItemRule[]`',
      value: ['FormItemRule'],
    },
    {
      name: 'error',
      description: {
        cn: 'Field error message, set its value and the field will validate error and show this message immediately.',
        en: 'Field error message, set its value and the field will validate error and show this message immediately.',
      },
      type: 'string',
      default: '—',
      value: [''],
    },
    {
      name: 'show-message',
      description: { cn: 'Whether to show the error message.', en: 'Whether to show the error message.' },
      type: 'boolean',
      default: 'true',
      value: [''],
    },
    {
      name: 'inline-message',
      description: { cn: 'Inline style validate message.', en: 'Inline style validate message.' },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    {
      name: 'size',
      description: { cn: 'Control the size of components in this form-item.', en: 'Control the size of components in this form-item.' },
      type: 'enum',
      default: "'default'",
      value: ['large'],
    },
    { name: 'for', description: { cn: 'Same as for in native label.', en: 'Same as for in native label.' }, type: 'string', default: '—', value: [''] },
    {
      name: 'validate-status',
      description: { cn: 'Validation state of formItem.', en: 'Validation state of formItem.' },
      type: 'enum',
      default: "'error'",
      value: [''],
    },
  ],
  exposes: [
    { name: 'size', description: { cn: 'Form item size.', en: 'Form item size.' }, type: 'object', param: '' },
    { name: 'validateMessage', description: { cn: 'Validation message.', en: 'Validation message.' }, type: 'object', param: '' },
    { name: 'validateState', description: { cn: 'Validation state.', en: 'Validation state.' }, type: 'object', param: '' },
    { name: 'validate', description: { cn: 'Validate form item.', en: 'Validate form item.' }, type: 'function', param: '' },
    {
      name: 'resetField',
      description: { cn: 'Reset current field and remove validation result.', en: 'Reset current field and remove validation result.' },
      type: 'function',
      param: '',
    },
    {
      name: 'clearValidate',
      description: { cn: 'Remove validation status of the field.', en: 'Remove validation status of the field.' },
      type: 'function',
      param: '',
    },
  ],
  slots: [
    { name: 'default', description: { cn: 'Content of Form Item.', en: 'Content of Form Item.' } },
    { name: 'label', description: { cn: 'Custom content to display on label.', en: 'Custom content to display on label.' } },
    { name: 'error', description: { cn: 'Custom content to display validation message.', en: 'Custom content to display validation message.' } },
  ],
};
export default doc;
