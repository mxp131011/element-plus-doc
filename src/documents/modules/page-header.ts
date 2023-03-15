import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/page-header.html',
  attributes: [
    {
      name: 'icon',
      description: { cn: '图标组件', en: 'icon component' },
      type: ['string', 'Component'],
      default: 'Back',
      value: [],
    },
    {
      name: 'title',
      description: { cn: '标题', en: 'main title' },
      type: 'string',
      default: 'Back',
      value: [],
    },
    {
      name: 'content',
      description: { cn: '内容', en: 'content' },
      type: 'string',
      default: '—',
      value: [],
    },
  ],
  events: [
    {
      name: 'back',
      description: { cn: '点击左侧区域触发', en: 'triggers when right side is clicked' },
      type: 'function',
      param: '',
    },
  ],
  slots: [
    {
      name: 'icon',
      description: { cn: '自定义图标', en: 'custom icon' },
    },
    {
      name: 'title',
      description: { cn: '标题内容', en: 'title content' },
    },
    {
      name: 'content',
      description: { cn: '内容', en: 'content' },
    },
    {
      name: 'extra',
      description: { cn: '扩展设置', en: 'extra' },
    },
    {
      name: 'breadcrumb',
      description: { cn: '面包屑内容', en: 'breadcrumb content' },
    },
    {
      name: 'default',
      description: { cn: '默认内容', en: 'main content' },
    },
  ],
};
export default doc;
