import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'percentage',
      description: { cn: 'percentage, <strong>required</strong>', en: 'percentage, <strong>required</strong>' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'type',
      description: { cn: 'the type of progress bar', en: 'the type of progress bar' },
      type: 'string',
      default: 'line',
      value: [],
    },
    {
      name: 'stroke-width',
      description: { cn: 'the width of progress bar', en: 'the width of progress bar' },
      type: 'number',
      default: '6',
      value: [],
    },
    {
      name: 'text-inside',
      description: {
        cn: "whether to place the percentage inside progress bar, only works when <code>type</code> is 'line'",
        en: "whether to place the percentage inside progress bar, only works when <code>type</code> is 'line'",
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'status',
      description: { cn: 'the current status of progress bar', en: 'the current status of progress bar' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'indeterminate',
      description: { cn: 'set indeterminate progress', en: 'set indeterminate progress' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'duration',
      description: { cn: 'control the animation duration of indeterminate progress', en: 'control the animation duration of indeterminate progress' },
      type: 'number',
      default: '3',
      value: [],
    },
    {
      name: 'color',
      description: {
        cn: 'background color of progress bar. Overrides <code>status</code> prop',
        en: 'background color of progress bar. Overrides <code>status</code> prop',
      },
      type: 'string/function/array',
      default: "''",
      value: [],
    },
    {
      name: 'width',
      description: { cn: 'the canvas width of circle progress bar', en: 'the canvas width of circle progress bar' },
      type: 'number',
      default: '126',
      value: [],
    },
    {
      name: 'show-text',
      description: { cn: 'whether to show percentage', en: 'whether to show percentage' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'stroke-linecap',
      description: { cn: 'circle/dashboard type shape at the end path', en: 'circle/dashboard type shape at the end path' },
      type: 'string',
      default: 'round',
      value: [],
    },
    {
      name: 'format',
      description: { cn: 'custom text format', en: 'custom text format' },
      type: 'function(percentage)',
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: 'Customized content, parameter is <code>{ percentage }</code>', en: 'Customized content, parameter is <code>{ percentage }</code>' },
    },
  ],
};
export default doc;
