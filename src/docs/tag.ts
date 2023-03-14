import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'type', description: { cn: 'component type', en: 'component type' }, type: 'string', default: '—', value: [] },
    { name: 'closable', description: { cn: 'whether Tag can be removed', en: 'whether Tag can be removed' }, type: 'boolean', default: 'false', value: [] },
    {
      name: 'disable-transitions',
      description: { cn: 'whether to disable animations', en: 'whether to disable animations' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'hit',
      description: { cn: 'whether Tag has a highlighted border', en: 'whether Tag has a highlighted border' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    { name: 'color', description: { cn: 'background color of the Tag', en: 'background color of the Tag' }, type: 'string', default: '—', value: [] },
    { name: 'size', description: { cn: 'tag size', en: 'tag size' }, type: 'string', default: 'default', value: [] },
    { name: 'effect', description: { cn: 'component theme', en: 'component theme' }, type: 'string', default: 'light', value: [] },
    { name: 'round', description: { cn: 'whether Tag is rounded', en: 'whether Tag is rounded' }, type: 'boolean', default: 'false', value: [] },
  ],
  events: [
    { name: 'click', description: { cn: 'triggers when Tag is clicked', en: 'triggers when Tag is clicked' }, type: '', tsType: '' },
    { name: 'close', description: { cn: 'triggers when Tag is removed', en: 'triggers when Tag is removed' }, type: '', tsType: '' },
  ],
  slots: [{ name: '—', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
