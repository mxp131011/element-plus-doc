import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/statistic.html#countdown-api',
  attributes: [
    {
      name: 'value',
      description: { cn: '目标时间。TS类型：number &#124; Dayjs', en: 'target time. TS Type：number &#124; Dayjs' },
      type: ['number', 'object'],
      default: '—',
      value: [''],
    },
    {
      name: 'format',
      description: { cn: '格式化倒计时', en: 'Formatting the countdown display' },
      type: 'string',
      default: 'HH:mm:ss',
      value: [],
    },
    {
      name: 'prefix',
      description: { cn: '设置倒计时前缀', en: 'Sets the prefix of a countdown' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'suffix',
      description: { cn: '设置倒计时的后缀', en: 'Sets the suffix of a countdown' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'title',
      description: { cn: '倒计时标题', en: 'countdown titles' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'value-style',
      description: {
        cn: '倒计时值的样式,TS类型: CSSProperties &#124; CSSProperties[] &#124; string[] &#124; string',
        en: 'Styles countdown values. TSType: CSSProperties &#124; CSSProperties[] &#124; string[] &#124; string',
      },
      type: ['string', 'object'],
      default: '—',
      value: ['object'],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: '时间差改变事件', en: 'Time difference change event' },
      type: 'function',
      param: '(value: number) => void',
    },
    {
      name: 'finish',
      description: { cn: '倒计时结束事件', en: 'countdown end event' },
      type: 'function',
      param: '() => void',
    },
  ],

  slots: [
    {
      name: 'prefix',
      description: { cn: '倒计时值前缀', en: 'countdown value prefix' },
    },
    {
      name: 'suffix',
      description: { cn: '倒计时后缀', en: 'countdown value suffix' },
    },
    {
      name: 'title',
      description: { cn: '倒计时标题', en: 'countdown title' },
    },
  ],
  exposes: [
    {
      name: 'displayValue',
      description: { cn: '当前显示值', en: 'current display value' },
      type: 'object',
      param: 'Ref<string>',
    },
  ],
};
export default doc;
