import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'icon', description: { cn: 'icon component', en: 'icon component' }, type: '`string', default: '—', value: [] },
    { name: 'title', description: { cn: 'main title', en: 'main title' }, type: 'string', default: 'Back', value: [] },
    { name: 'content', description: { cn: 'content', en: 'content' }, type: 'string', default: '—', value: [] },
  ],
  events: [{ name: 'back', description: { cn: 'triggers when right side is clicked', en: 'triggers when right side is clicked' }, type: '', tsType: '' }],
  slots: [
    { name: 'icon', description: { cn: 'custom icon', en: 'custom icon' } },
    { name: 'title', description: { cn: 'title content', en: 'title content' } },
    { name: 'content', description: { cn: 'content', en: 'content' } },
    { name: 'extra', description: { cn: 'extra', en: 'extra' } },
    { name: 'breadcrumb', description: { cn: 'breadcrumb content', en: 'breadcrumb content' } },
    { name: 'default', description: { cn: 'main content', en: 'main content' } },
  ],
};
export default doc;
