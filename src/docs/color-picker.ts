import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'model-value / v-model', description: { cn: 'binding value', en: 'binding value' }, type: 'string', default: '—', value: [''] },
    {
      name: 'disabled',
      description: { cn: 'whether to disable the ColorPicker', en: 'whether to disable the ColorPicker' },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    { name: 'size', description: { cn: 'size of ColorPicker', en: 'size of ColorPicker' }, type: 'enum', default: "'default'", value: ['large'] },
    {
      name: 'show-alpha',
      description: { cn: 'whether to display the alpha slider', en: 'whether to display the alpha slider' },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    { name: 'color-format', description: { cn: 'color format of v-model', en: 'color format of v-model' }, type: 'enum', default: "'hsv'", value: ['hsl'] },
    {
      name: 'popper-class',
      description: { cn: "custom class name for ColorPicker's dropdown", en: "custom class name for ColorPicker's dropdown" },
      type: 'string',
      default: '—',
      value: [''],
    },
    { name: 'predefine', description: { cn: 'predefined color options', en: 'predefined color options' }, type: 'object', default: '—', value: ['codestring'] },
    {
      name: 'validate-event',
      description: { cn: 'whether to trigger form validation', en: 'whether to trigger form validation' },
      type: 'boolean',
      default: 'true',
      value: [''],
    },
    { name: 'tabindex', description: { cn: 'ColorPicker tabindex', en: 'ColorPicker tabindex' }, type: 'string', default: '0', value: ['number'] },
    {
      name: 'label<a11ytag></a11ytag>',
      description: { cn: 'ColorPicker aria-label', en: 'ColorPicker aria-label' },
      type: 'string',
      default: '—',
      value: [''],
    },
    { name: 'id', description: { cn: 'ColorPicker id', en: 'ColorPicker id' }, type: 'string', default: '—', value: [''] },
  ],
  events: [
    { name: 'change', description: { cn: 'triggers when input value changes', en: 'triggers when input value changes' }, type: 'function', param: '' },
    {
      name: 'active-change',
      description: { cn: 'triggers when the current active color changes', en: 'triggers when the current active color changes' },
      type: 'function',
      param: '',
    },
  ],
  exposes: [{ name: 'color', description: { cn: 'current color object', en: 'current color object' }, type: 'object', param: '' }],
};
export default doc;
