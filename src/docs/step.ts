import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'title', description: { cn: 'step title', en: 'step title' }, type: 'string', default: '—', value: [] },
    { name: 'description', description: { cn: 'step description', en: 'step description' }, type: 'string', default: '—', value: [] },
    {
      name: 'icon',
      description: { cn: 'step custom icon. Icons can be passed via named slot as well', en: 'step custom icon. Icons can be passed via named slot as well' },
      type: '`string',
      default: '—',
      value: [],
    },
    {
      name: 'status',
      description: {
        cn: 'current status. It will be automatically set by Steps if not configured.',
        en: 'current status. It will be automatically set by Steps if not configured.',
      },
      type: 'string',
      default: '—',
      value: [],
    },
  ],
  slots: [
    { name: 'icon', description: { cn: 'custom icon', en: 'custom icon' } },
    { name: 'title', description: { cn: 'step title', en: 'step title' } },
    { name: 'description', description: { cn: 'step description', en: 'step description' } },
  ],
};
export default doc;
