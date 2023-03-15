import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'model-value / v-model', description: { cn: 'binding value', en: 'binding value' }, type: 'string', default: '—', value: ['number'] },
    {
      name: 'label',
      description: {
        cn: 'value of the Checkbox when used inside a <code>checkbox-group</code>',
        en: 'value of the Checkbox when used inside a <code>checkbox-group</code>',
      },
      type: 'string',
      default: '—',
      value: ['number'],
    },
    {
      name: 'true-label',
      description: { cn: "value of the Checkbox if it's checked", en: "value of the Checkbox if it's checked" },
      type: 'string',
      default: '—',
      value: ['number'],
    },
    {
      name: 'false-label',
      description: { cn: "value of the Checkbox if it's not checked", en: "value of the Checkbox if it's not checked" },
      type: 'string',
      default: '—',
      value: ['number'],
    },
    {
      name: 'disabled',
      description: { cn: 'whether the Checkbox is disabled', en: 'whether the Checkbox is disabled' },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    {
      name: 'border',
      description: { cn: 'whether to add a border around Checkbox', en: 'whether to add a border around Checkbox' },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    { name: 'size', description: { cn: 'size of the Checkbox', en: 'size of the Checkbox' }, type: 'enum', default: "'default'", value: ['large'] },
    { name: 'name', description: { cn: "native 'name' attribute", en: "native 'name' attribute" }, type: 'string', default: '—', value: [''] },
    { name: 'checked', description: { cn: 'if the Checkbox is checked', en: 'if the Checkbox is checked' }, type: 'boolean', default: 'false', value: [''] },
    {
      name: 'indeterminate',
      description: { cn: 'Set indeterminate state, only responsible for style control', en: 'Set indeterminate state, only responsible for style control' },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    {
      name: 'validate-event',
      description: { cn: 'whether to trigger form validation', en: 'whether to trigger form validation' },
      type: 'boolean',
      default: 'true',
      value: [''],
    },
    { name: 'tabindex', description: { cn: 'input tabindex', en: 'input tabindex' }, type: 'string', default: '—', value: ['number'] },
    { name: 'id', description: { cn: 'input id', en: 'input id' }, type: 'string', default: '—', value: [''] },
    {
      name: 'controls <a11ytag></a11ytag>',
      description: {
        cn: 'same as <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls">aria-controls</a>, takes effect when <code>indeterminate</code> is <code>true</code>',
        en: 'same as <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls">aria-controls</a>, takes effect when <code>indeterminate</code> is <code>true</code>',
      },
      type: 'boolean',
      default: '—',
      value: [''],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: 'triggers when the binding value changes', en: 'triggers when the binding value changes' },
      type: 'function',
      param: '',
    },
  ],
  slots: [{ name: 'default', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
