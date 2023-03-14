import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'value', description: { cn: 'value of option', en: 'value of option' }, type: 'string / number / boolean / object', default: '—', value: [] },
    {
      name: 'label',
      description: { cn: 'label of option, same as <code>value</code> if omitted', en: 'label of option, same as <code>value</code> if omitted' },
      type: 'string/number',
      default: '—',
      value: [],
    },
    { name: 'disabled', description: { cn: 'whether option is disabled', en: 'whether option is disabled' }, type: 'boolean', default: 'false', value: [] },
  ],
  slots: [{ name: '—', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
