import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/space.html',
  attributes: [
    {
      name: 'alignment',
      description: { cn: '对齐的方式', en: 'Controls the alignment of items' },
      type: 'enum',
      default: "'normal'",
      value: ['normal', 'flex-start', 'flex-end', 'center', 'end', 'self-start', 'self-end', 'baseline', 'stretch', 'safe', 'unsafe'],
    },
    {
      name: 'class',
      description: { cn: '类名', en: 'Classname' },
      type: ['string', 'object', 'array'],
      default: '—',
      value: ['object'],
    },
    {
      name: 'direction',
      description: { cn: '排列的方向', en: 'Placement direction' },
      type: 'enum',
      default: "'horizontal'",
      value: ['vertical', 'horizontal'],
    },
    {
      name: 'prefixCls',
      description: { cn: '给 space-items 的类名前缀', en: 'Prefix for space-items' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'style',
      description: {
        cn: '额外样式. TS类型：CSSProperties | CSSProperties[] | string[] | string',
        en: 'Extra style rules. TS Type：CSSProperties | CSSProperties[] | string[] | string',
      },
      type: ['string', 'object'],
      default: 'CSSProperties[]',
      value: ['object'],
    },
    {
      name: 'spacer',
      description: { cn: '间隔符', en: 'Spacer' },
      type: ['string', 'number', 'VNode'],
      default: '—',
      value: ['number'],
    },
    {
      name: 'size',
      description: { cn: '间隔大小', en: 'Spacing size' },
      type: ['enum', 'number', '[number, number]'],
      default: "'small'",
      value: ['default', 'small', 'large'],
    },
    {
      name: 'wrap',
      description: { cn: '设置是否自动折行', en: 'Auto wrapping' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'fill',
      description: { cn: '子元素是否填充父容器', en: 'Whether to fill the container' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'fill-ratio',
      description: { cn: '填充父容器的比例', en: 'Ratio of fill' },
      type: 'number',
      default: '100',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '需要添加间隔的元素', en: 'Items to be spaced' },
    },
  ],
};
export default doc;
