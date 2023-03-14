import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'model-value / v-model', description: { cn: 'binding value', en: 'binding value' }, type: 'object', default: 'number[]`', value: ['string'] },
    { name: 'size', description: { cn: 'size of checkbox', en: 'size of checkbox' }, type: 'enum', default: "'default'", value: ['large'] },
    {
      name: 'disabled',
      description: { cn: 'whether the nesting checkboxes are disabled', en: 'whether the nesting checkboxes are disabled' },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    {
      name: 'min',
      description: { cn: 'minimum number of checkbox checked', en: 'minimum number of checkbox checked' },
      type: 'number',
      default: '—',
      value: [''],
    },
    {
      name: 'max',
      description: { cn: 'maximum number of checkbox checked', en: 'maximum number of checkbox checked' },
      type: 'number',
      default: '—',
      value: [''],
    },
    { name: 'label', description: { cn: 'label for screen reader', en: 'label for screen reader' }, type: 'string', default: '—', value: [''] },
    {
      name: 'text-color',
      description: { cn: 'font color when button is active', en: 'font color when button is active' },
      type: 'string',
      default: '#ffffff',
      value: [''],
    },
    {
      name: 'fill',
      description: { cn: 'border and background color when button is active', en: 'border and background color when button is active' },
      type: 'string',
      default: '#409EFF',
      value: [''],
    },
    {
      name: 'tag',
      description: { cn: 'element tag of the checkbox group', en: 'element tag of the checkbox group' },
      type: 'string',
      default: 'div',
      value: [''],
    },
    {
      name: 'validate-event',
      description: { cn: 'whether to trigger form validation', en: 'whether to trigger form validation' },
      type: 'boolean',
      default: 'true',
      value: [''],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: 'triggers when the binding value changes', en: 'triggers when the binding value changes' },
      type: 'function',
      tsType: '',
    },
  ],
  slots: [{ name: 'default', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
