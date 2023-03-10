import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'image', description: { cn: 'image URL', en: 'image URL' }, type: 'string', default: '—', value: [] },
    { name: 'image-size', description: { cn: 'image size (width)', en: 'image size (width)' }, type: 'number', default: '—', value: [] },
    { name: 'description', description: { cn: 'description', en: 'description' }, type: 'string', default: '—', value: [] },
  ],
  slots: [
    { name: 'default', description: { cn: 'Custom bottom content', en: 'Custom bottom content' } },
    { name: 'image', description: { cn: 'Custom image', en: 'Custom image' } },
    { name: 'description', description: { cn: 'Custom description', en: 'Custom description' } },
  ],
};
export default doc;
