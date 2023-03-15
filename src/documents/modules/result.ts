import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/result.html',
  attributes: [
    {
      name: 'title',
      description: { cn: '标题', en: 'title' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'sub-title',
      description: { cn: '二级标题', en: 'sub title' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'icon',
      description: { cn: '图标类型', en: 'icon type' },
      type: 'string',
      default: 'info',
      value: ['success', 'warning', 'info', 'error'],
    },
  ],
  slots: [
    {
      name: 'icon',
      description: { cn: '自定义图标', en: 'custom icon' },
    },
    {
      name: 'title',
      description: { cn: '自定义标题', en: 'custom title' },
    },
    {
      name: 'sub-title',
      description: { cn: '自定义二级标题', en: 'custom sub title' },
    },
    {
      name: 'extra',
      description: { cn: '自定义底部额外区域', en: 'custom extra area' },
    },
  ],
};
export default doc;
