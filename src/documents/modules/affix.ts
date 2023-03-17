import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/affix.html',
  attributes: [
    {
      name: 'offset',
      description: { cn: '偏移距离', en: 'offset distance.' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'position',
      description: { cn: '位置', en: 'position of affix.' },
      type: 'enum',
      default: "'top'",
      value: ['top', 'bottom'],
    },
    {
      name: 'target',
      description: { cn: '指定容器 (CSS 选择器)', en: 'target container. (CSS selector)' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'z-index',
      description: { cn: 'z-index', en: 'z-index of affix' },
      type: 'number',
      default: '100',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: 'fixed 状态改变时触发的事件', en: 'triggers when fixed state changed.' },
      type: 'function',
      param: '',
    },
    {
      name: 'scroll',
      description: { cn: '滚动时触发的事件', en: 'triggers when scrolling.' },
      type: 'function',
      param: '',
    },
  ],
  exposes: [
    {
      name: 'update',
      description: { cn: '手动更新固钉状态', en: 'update affix state manually' },
      type: 'function',
      param: '() =&gt; void',
    },
    {
      name: 'updateRoot',
      description: { cn: '手动更新根元素的盒模型信息', en: 'update rootRect info' },
      type: 'function',
      param: '() =&gt; void',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content.' },
    },
  ],
};
export default doc;
