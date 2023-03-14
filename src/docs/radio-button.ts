import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'label', description: { cn: 'the value of Radio', en: 'the value of Radio' }, type: 'string', default: '—', value: ['number'] },
    { name: 'disabled', description: { cn: 'whether Radio is disabled', en: 'whether Radio is disabled' }, type: 'boolean', default: 'false', value: [''] },
    { name: 'name', description: { cn: "native 'name' attribute", en: "native 'name' attribute" }, type: 'string', default: '—', value: [''] },
  ],
  slots: [{ name: 'default', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
