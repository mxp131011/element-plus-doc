import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/timeline.html#timeline-item-属性',
  attributes: [
    {
      name: 'timestamp',
      description: { cn: '时间戳', en: 'timestamp content' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'hide-timestamp',
      description: { cn: '是否隐藏时间戳', en: 'whether to show timestamp' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'center',
      description: { cn: '是否垂直居中', en: 'Whether vertically centered' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'placement',
      description: { cn: '时间戳位置', en: 'position of timestamp' },
      type: 'enum',
      default: 'bottom',
      value: ['top', 'bottom'],
    },
    {
      name: 'type',
      description: { cn: '节点类型', en: 'node type' },
      type: 'enum',
      default: '—',
      value: ['primary', 'success', 'warning', 'danger', 'info'],
    },
    {
      name: 'color',
      description: { cn: '节点颜色,支持 hsl / hsv / hex / rgb 格式的颜色', en: 'background color of node, support hsl / hsv / hex / rgb' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'size',
      description: { cn: '节点尺寸', en: 'node size' },
      type: 'enum',
      default: 'normal',
      value: ['normal', 'large'],
    },
    {
      name: 'icon',
      description: { cn: '自定义图标', en: 'icon component' },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'hollow',
      description: { cn: '是否空心点', en: 'icon is hollow' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  slots: [
    { name: 'default', description: { cn: 'Timeline-Item 的内容', en: 'Custom content for timeline item' } },
    { name: 'dot', description: { cn: '自定义节点', en: 'Custom defined node' } },
  ],
};
export default doc;
