import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/steps.html#step-属性',
  attributes: [
    {
      name: 'title',
      description: { cn: '标题', en: 'step title' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'description',
      description: { cn: '描述文案', en: 'step description' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'icon',
      description: { cn: 'Step 组件的自定义图标。 也支持 `slot` 方式写入', en: 'step custom icon. Icons can be passed via named slot as well' },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'status',
      description: {
        cn: '设置当前步骤的状态， 不设置则根据 steps 确定状态',
        en: 'current status. It will be automatically set by Steps if not configured.',
      },
      type: 'enum',
      default: '—',
      value: ['wait', 'process', 'finish', 'error', 'success'],
    },
  ],
  slots: [
    {
      name: 'icon',
      description: { cn: '自定义图标', en: 'custom icon' },
    },
    {
      name: 'title',
      description: { cn: '自定义标题', en: 'step title' },
    },
    {
      name: 'description',
      description: { cn: '自定义描述文案', en: 'step description' },
    },
  ],
};
export default doc;
