import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'model-value / v-model',
      description: { cn: 'currently active panel', en: 'currently active panel' },
      type: 'string (accordion mode) / array (non-accordion mode)',
      default: '—',
      value: [],
    },
    {
      name: 'accordion',
      description: { cn: 'whether to activate accordion mode', en: 'whether to activate accordion mode' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  events: [{ name: 'change', description: { cn: 'triggers when active panels change', en: 'triggers when active panels change' }, type: '', tsType: '' }],
  slots: [{ name: '-', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
