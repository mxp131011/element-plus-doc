import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'model-value / v-model', description: { cn: 'binding value', en: 'binding value' }, type: 'string', default: '—', value: ['number'] },
    {
      name: 'size',
      description: { cn: 'the size of radio buttons or bordered radios', en: 'the size of radio buttons or bordered radios' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'disabled',
      description: { cn: 'whether the nesting radios are disabled', en: 'whether the nesting radios are disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'text-color',
      description: { cn: 'font color when button is active', en: 'font color when button is active' },
      type: 'string',
      default: '#ffffff',
      value: [],
    },
    {
      name: 'fill',
      description: { cn: 'border and background color when button is active', en: 'border and background color when button is active' },
      type: 'string',
      default: '#409EFF',
      value: [],
    },
    {
      name: 'validate-event',
      description: { cn: 'whether to trigger form validation', en: 'whether to trigger form validation' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'label<a11ytag></a11ytag>',
      description: { cn: 'same as <code>aria-label</code> in RadioGroup', en: 'same as <code>aria-label</code> in RadioGroup' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'name',
      description: { cn: 'native <code>name</code> attribute', en: 'native <code>name</code> attribute' },
      type: 'string',
      default: '—',
      value: [],
    },
    { name: 'id', description: { cn: 'native <code>id</code> attribute', en: 'native <code>id</code> attribute' }, type: 'string', default: '—', value: [] },
  ],
  events: [
    { name: 'change', description: { cn: 'triggers when the bound value changes', en: 'triggers when the bound value changes' }, type: 'function', param: '' },
  ],
  slots: [{ name: 'default', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
