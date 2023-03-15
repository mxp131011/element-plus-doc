import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'model',
      description: { cn: 'Data of form component.', en: 'Data of form component.' },
      type: 'object',
      default: '—',
      value: ['codeRecordltstringanygtcode'],
    },
    {
      name: 'rules',
      description: { cn: 'Validation rules of form.', en: 'Validation rules of form.' },
      type: 'object',
      default: '—',
      value: ['codeFormRulescode'],
    },
    { name: 'inline', description: { cn: 'Whether the form is inline.', en: 'Whether the form is inline.' }, type: 'boolean', default: 'false', value: [] },
    {
      name: 'label-position',
      description: {
        cn: "Position of label. If set to <code>'left'</code> or <code>'right'</code>, <code>label-width</code> prop is also required.",
        en: "Position of label. If set to <code>'left'</code> or <code>'right'</code>, <code>label-width</code> prop is also required.",
      },
      type: 'enum',
      default: "'right'",
      value: ['left'],
    },
    {
      name: 'label-width',
      description: {
        cn: "Width of label, e.g. <code>'50px'</code>. All its direct child form items will inherit this value. <code>auto</code> is supported.",
        en: "Width of label, e.g. <code>'50px'</code>. All its direct child form items will inherit this value. <code>auto</code> is supported.",
      },
      type: 'string',
      default: '—',
      value: ['number'],
    },
    { name: 'label-suffix', description: { cn: 'Suffix of the label.', en: 'Suffix of the label.' }, type: 'string', default: '—', value: [] },
    {
      name: 'hide-required-asterisk',
      description: {
        cn: 'Whether to hide required fields should have a red asterisk (star) beside their labels.',
        en: 'Whether to hide required fields should have a red asterisk (star) beside their labels.',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'require-asterisk-position',
      description: { cn: 'Position of asterisk.', en: 'Position of asterisk.' },
      type: 'enum',
      default: "'right'`",
      value: ['left'],
    },
    {
      name: 'show-message',
      description: { cn: 'Whether to show the error message.', en: 'Whether to show the error message.' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'inline-message',
      description: {
        cn: 'Whether to display the error message inline with the form item.',
        en: 'Whether to display the error message inline with the form item.',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'status-icon',
      description: { cn: 'Whether to display an icon indicating the validation result.', en: 'Whether to display an icon indicating the validation result.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'validate-on-rule-change',
      description: {
        cn: 'Whether to trigger validation when the <code>rules</code> prop is changed.',
        en: 'Whether to trigger validation when the <code>rules</code> prop is changed.',
      },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'size',
      description: { cn: 'Control the size of components in this form.', en: 'Control the size of components in this form.' },
      type: 'enum',
      default: "'default'",
      value: ['large'],
    },
    {
      name: 'disabled',
      description: {
        cn: 'Whether to disable all components in this form. If set to <code>true</code>, it will override the <code>disabled</code> prop of the inner component.',
        en: 'Whether to disable all components in this form. If set to <code>true</code>, it will override the <code>disabled</code> prop of the inner component.',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'scroll-to-error',
      description: { cn: 'When validation fails, scroll to the first error form entry.', en: 'When validation fails, scroll to the first error form entry.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  events: [
    {
      name: 'validate',
      description: { cn: 'triggers after a form item is validated', en: 'triggers after a form item is validated' },
      type: 'function',
      param: '',
    },
  ],
  exposes: [
    {
      name: 'validate',
      description: {
        cn: 'Validate the whole form. Receives a callback or returns <code>Promise</code>.',
        en: 'Validate the whole form. Receives a callback or returns <code>Promise</code>.',
      },
      type: 'function',
      param: '',
    },
    { name: 'validateField', description: { cn: 'Validate specified fields.', en: 'Validate specified fields.' }, type: 'function', param: '' },
    {
      name: 'resetFields',
      description: { cn: 'Reset specified fields and remove validation result.', en: 'Reset specified fields and remove validation result.' },
      type: 'function',
      param: '',
    },
    { name: 'scrollToField', description: { cn: 'Scroll to the specified fields.', en: 'Scroll to the specified fields.' }, type: 'function', param: '' },
    {
      name: 'clearValidate',
      description: { cn: 'Clear validation message for specified fields.', en: 'Clear validation message for specified fields.' },
      type: 'function',
      param: '',
    },
    {
      name: 'validate',
      description: {
        cn: 'Validate the whole form. Receives a callback or returns <code>Promise</code>.',
        en: 'Validate the whole form. Receives a callback or returns <code>Promise</code>.',
      },
      type: '<code>(callback?: (isvalid: boolean, invalidfields?: validatefieldserror) => void) => promise&lt;boolean></code>',
      param: '',
    },
    {
      name: 'validateField',
      description: { cn: 'Validate specified fields.', en: 'Validate specified fields.' },
      type: '<code>(props?: arrayable&lt;formitemprop>, callback?: (isvalid: boolean, invalidfields?: validatefieldserror) => void) => promise&lt;void></code>',
      param: '',
    },
    {
      name: 'resetFields',
      description: { cn: 'Reset specified fields and remove validation result.', en: 'Reset specified fields and remove validation result.' },
      type: '<code>(props?: arrayable&lt;formitemprop>) => void</code>',
      param: '',
    },
    {
      name: 'scrollToField',
      description: { cn: 'Scroll to the specified fields.', en: 'Scroll to the specified fields.' },
      type: '<code>(prop: formitemprop) => void</code>',
      param: '',
    },
    {
      name: 'clearValidate',
      description: { cn: 'Clear validation message for specified fields.', en: 'Clear validation message for specified fields.' },
      type: '<code>(props?: arrayable&lt;formitemprop>) => void</code>',
      param: '',
    },
  ],
  slots: [{ name: 'default', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
