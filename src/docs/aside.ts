import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'width', description: { cn: 'width of the side section', en: 'width of the side section' }, type: 'string', default: '300px', value: [] },
  ],
  slots: [{ name: 'default', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
