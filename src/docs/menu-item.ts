import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'index', description: { cn: 'unique identification', en: 'unique identification' }, type: 'string/null', default: 'null', value: [] },
    { name: 'route', description: { cn: 'Vue Router object', en: 'Vue Router object' }, type: 'object', default: '—', value: [] },
    { name: 'disabled', description: { cn: 'whether disabled', en: 'whether disabled' }, type: 'boolean', default: 'false', value: [] },
  ],
  events: [
    {
      name: 'click',
      description: { cn: 'callback function when menu-item is clicked', en: 'callback function when menu-item is clicked' },
      type: '',
      tsType: '',
    },
  ],
  slots: [
    { name: '—', description: { cn: 'customize default content', en: 'customize default content' } },
    { name: 'title', description: { cn: 'customize title content', en: 'customize title content' } },
  ],
};
export default doc;
