import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'model-value / v-model', description: { cn: 'binding value', en: 'binding value' }, type: 'string', default: '—', value: ['number'] },
    { name: 'label', description: { cn: 'the value of Radio', en: 'the value of Radio' }, type: 'string', default: '—', value: ['number'] },
    { name: 'disabled', description: { cn: 'whether Radio is disabled', en: 'whether Radio is disabled' }, type: 'boolean', default: 'false', value: [''] },
    {
      name: 'border',
      description: { cn: 'whether to add a border around Radio', en: 'whether to add a border around Radio' },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    { name: 'size', description: { cn: 'size of the Radio', en: 'size of the Radio' }, type: 'enum', default: "'default'", value: ['large'] },
    {
      name: 'name',
      description: { cn: 'native <code>name</code> attribute', en: 'native <code>name</code> attribute' },
      type: 'string',
      default: '—',
      value: [''],
    },
  ],
  events: [
    { name: 'change', description: { cn: 'triggers when the bound value changes', en: 'triggers when the bound value changes' }, type: 'function', param: '' },
  ],
  slots: [{ name: 'default', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
