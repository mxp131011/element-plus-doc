import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/progress.html',
  attributes: [
    {
      name: 'percentage',
      description: { cn: '百分比，`必填`', en: 'percentage, &lt;strong&gt;required&lt;/strong&gt;' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'type',
      description: { cn: '进度条类型', en: 'the type of progress bar' },
      type: 'enum',
      default: "'line'",
      value: ['line', 'circle', 'dashboard'],
    },
    {
      name: 'stroke-width',
      description: { cn: '进度条的宽度', en: 'the width of progress bar' },
      type: 'number',
      default: '6',
      value: [],
    },
    {
      name: 'text-inside',
      description: {
        cn: "进度条显示文字内置在进度条内（仅 `type` 为 'line' 时可用）",
        en: "whether to place the percentage inside progress bar, only works when `type` is 'line'",
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'status',
      description: { cn: '进度条当前状态', en: 'the current status of progress bar' },
      type: 'enum',
      default: '—',
      value: ['success', 'exception', 'warning'],
    },
    {
      name: 'indeterminate',
      description: { cn: '是否为动画进度条', en: 'set indeterminate progress' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'duration',
      description: { cn: '控制动画进度条速度', en: 'control the animation duration of indeterminate progress' },
      type: 'number',
      default: '3',
      value: [],
    },
    {
      name: 'color',
      description: {
        cn: '进度条背景色 进度条背景色 （会覆盖 status 状态颜色）',
        en: 'background color of progress bar. Overrides `status` prop',
      },
      type: ['string', 'function', 'array'],
      default: '—',
      value: [],
    },
    {
      name: 'width',
      description: { cn: '环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）', en: 'the canvas width of circle progress bar' },
      type: 'number',
      default: '126',
      value: [],
    },
    {
      name: 'show-text',
      description: { cn: '是否显示进度条文字内容', en: 'whether to show percentage' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'stroke-linecap',
      description: { cn: 'circle/dashboard 类型路径两端的形状', en: 'circle/dashboard type shape at the end path' },
      type: 'enum',
      default: "'round'",
      value: ['butt', 'round', 'square'],
    },
    {
      name: 'format',
      description: { cn: '指定进度条文字内容', en: 'custom text format' },
      type: 'function(percentage)',
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义内容，参数为 { percentage }', en: 'Customized content, parameter is `{ percentage }`' },
    },
  ],
};
export default doc;
