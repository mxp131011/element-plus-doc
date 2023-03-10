import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'timestamp', description: { cn: 'timestamp content', en: 'timestamp content' }, type: 'string', default: '—', value: [] },
    { name: 'hide-timestamp', description: { cn: 'whether to show timestamp', en: 'whether to show timestamp' }, type: 'boolean', default: 'false', value: [] },
    { name: 'center', description: { cn: 'Whether vertically centered', en: 'Whether vertically centered' }, type: 'boolean', default: 'false', value: [] },
    { name: 'placement', description: { cn: 'position of timestamp', en: 'position of timestamp' }, type: 'string', default: 'bottom', value: [] },
    { name: 'type', description: { cn: 'node type', en: 'node type' }, type: 'string', default: '—', value: [] },
    { name: 'color', description: { cn: 'background color of node', en: 'background color of node' }, type: 'string', default: '—', value: [] },
    { name: 'size', description: { cn: 'node size', en: 'node size' }, type: 'string', default: 'normal', value: [] },
    { name: 'icon', description: { cn: 'icon component', en: 'icon component' }, type: '`string', default: '—', value: [] },
    { name: 'hollow', description: { cn: 'icon is hollow', en: 'icon is hollow' }, type: 'boolean', default: 'false', value: [] },
  ],
  slots: [
    { name: '—', description: { cn: 'Custom content for timeline item', en: 'Custom content for timeline item' } },
    { name: 'dot', description: { cn: 'Custom defined node', en: 'Custom defined node' } },
  ],
};
export default doc;
