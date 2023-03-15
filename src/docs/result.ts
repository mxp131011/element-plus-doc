import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'title',
      description: { cn: 'title', en: 'title' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'sub-title',
      description: { cn: 'sub title', en: 'sub title' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'icon',
      description: { cn: 'icon type', en: 'icon type' },
      type: 'string',
      default: 'info',
      value: [],
    },
  ],
  slots: [
    {
      name: 'icon',
      description: { cn: 'custom icon', en: 'custom icon' },
    },
    {
      name: 'title',
      description: { cn: 'custom title', en: 'custom title' },
    },
    {
      name: 'sub-title',
      description: { cn: 'custom sub title', en: 'custom sub title' },
    },
    {
      name: 'extra',
      description: { cn: 'custom extra area', en: 'custom extra area' },
    },
  ],
};
export default doc;
