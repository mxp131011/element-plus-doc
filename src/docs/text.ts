import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'type', description: { cn: 'text type', en: 'text type' }, type: 'enum', default: "'success'", value: ['primary'] },
    { name: 'size', description: { cn: 'text size', en: 'text size' }, type: 'enum', default: "'default'", value: ['large'] },
    { name: 'truncated', description: { cn: 'render ellipsis', en: 'render ellipsis' }, type: 'boolean', default: 'false', value: [''] },
    { name: 'tag', description: { cn: 'custom element tag', en: 'custom element tag' }, type: 'string', default: 'span', value: [''] },
  ],
  slots: [{ name: 'default', description: { cn: 'default content', en: 'default content' } }],
};
export default doc;
