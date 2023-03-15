import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/tag.html',
  attributes: [
    {
      name: 'type',
      description: { cn: '类型', en: 'component type' },
      type: 'enum',
      default: '—',
      value: ['success', 'info', 'warning', 'danger'],
    },
    {
      name: 'closable',
      description: { cn: '是否可关闭', en: 'whether Tag can be removed' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'disable-transitions',
      description: { cn: '是否禁用渐变动画', en: 'whether to disable animations' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'hit',
      description: { cn: '是否有边框描边', en: 'whether Tag has a highlighted border' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'color',
      description: { cn: '背景色', en: 'background color of the Tag' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'size',
      description: { cn: '尺寸', en: 'tag size' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'effect',
      description: { cn: '主题', en: 'component theme' },
      type: 'enum',
      default: "'light'",
      value: ['dark', 'light', 'plain'],
    },
    {
      name: 'round',
      description: { cn: 'Tag 是否为圆形', en: 'whether Tag is rounded' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  events: [
    {
      name: 'click',
      description: { cn: '点击 Tag 时触发的事件', en: 'triggers when Tag is clicked' },
      type: 'function',
      param: '',
    },
    {
      name: 'close',
      description: { cn: '关闭 Tag 时触发的事件', en: 'triggers when Tag is removed' },
      type: 'function',
      param: '',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
    },
  ],
};
export default doc;
