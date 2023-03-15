import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'small',
      description: { cn: 'whether to use small pagination', en: 'whether to use small pagination' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'background',
      description: { cn: 'whether the buttons have a background color', en: 'whether the buttons have a background color' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'page-size / v-model:page-size',
      description: { cn: 'item count of each page', en: 'item count of each page' },
      type: 'number',
      default: '10',
      value: [],
    },
    {
      name: 'default-page-size',
      description: { cn: 'default initial value of page size', en: 'default initial value of page size' },
      type: 'number',
      default: '-',
      value: [],
    },
    {
      name: 'total',
      description: { cn: 'total item count', en: 'total item count' },
      type: 'number',
      default: '—',
      value: [],
    },
    {
      name: 'page-count',
      description: {
        cn: 'total page count. Set either <code>total</code> or <code>page-count</code> and pages will be displayed; if you need <code>page-sizes</code>, <code>total</code> is required',
        en: 'total page count. Set either <code>total</code> or <code>page-count</code> and pages will be displayed; if you need <code>page-sizes</code>, <code>total</code> is required',
      },
      type: 'number',
      default: '—',
      value: [],
    },
    {
      name: 'pager-count',
      description: {
        cn: 'number of pagers. Pagination collapses when the total page count exceeds this value',
        en: 'number of pagers. Pagination collapses when the total page count exceeds this value',
      },
      type: 'number',
      default: '7',
      value: ['5'],
    },
    {
      name: 'current-page / v-model:current-page',
      description: { cn: 'current page number', en: 'current page number' },
      type: 'number',
      default: '1',
      value: [],
    },
    {
      name: 'default-current-page',
      description: { cn: 'default initial value of current-page', en: 'default initial value of current-page' },
      type: 'number',
      default: '-',
      value: [],
    },
    {
      name: 'layout',
      description: { cn: 'layout of Pagination, elements separated with a comma', en: 'layout of Pagination, elements separated with a comma' },
      type: 'string',
      default: 'prev, pager, next, jumper, ->, total',
      value: ['codestringconsistsofsizesprevpagernextjumper-gttotalslotcode'],
    },
    {
      name: 'page-sizes',
      description: { cn: 'options of item count per page', en: 'options of item count per page' },
      type: 'array',
      default: '[10, 20, 30, 40, 50, 100]',
      value: ['codenumber'],
    },
    {
      name: 'popper-class',
      description: { cn: "custom class name for the page size Select's dropdown", en: "custom class name for the page size Select's dropdown" },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'prev-text',
      description: { cn: 'text for the prev button', en: 'text for the prev button' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'prev-icon',
      description: {
        cn: 'icon for the prev button, higher priority of <code>prev-text</code>',
        en: 'icon for the prev button, higher priority of <code>prev-text</code>',
      },
      type: 'string',
      default: 'ArrowLeft',
      value: ['Component'],
    },
    {
      name: 'next-text',
      description: { cn: 'text for the next button', en: 'text for the next button' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'next-icon',
      description: {
        cn: 'icon for the next button, higher priority of <code>next-text</code>',
        en: 'icon for the next button, higher priority of <code>next-text</code>',
      },
      type: 'string',
      default: 'ArrowRight',
      value: ['Component'],
    },
    {
      name: 'disabled',
      description: { cn: 'whether Pagination is disabled', en: 'whether Pagination is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'hide-on-single-page',
      description: { cn: "whether to hide when there's only one page", en: "whether to hide when there's only one page" },
      type: 'boolean',
      default: '-',
      value: [],
    },
  ],
  events: [
    {
      name: 'size-change',
      description: { cn: 'triggers when <code>page-size</code> changes', en: 'triggers when <code>page-size</code> changes' },
      type: 'function',
      param: '',
    },
    {
      name: 'current-change',
      description: { cn: 'triggers when <code>current-page</code> changes', en: 'triggers when <code>current-page</code> changes' },
      type: 'function',
      param: '',
    },
    {
      name: 'prev-click',
      description: {
        cn: 'triggers when the prev button is clicked and current page changes',
        en: 'triggers when the prev button is clicked and current page changes',
      },
      type: 'function',
      param: '',
    },
    {
      name: 'next-click',
      description: {
        cn: 'triggers when the next button is clicked and current page changes',
        en: 'triggers when the next button is clicked and current page changes',
      },
      type: 'function',
      param: '',
    },
  ],
  slots: [
    {
      name: 'default',
      description: {
        cn: 'custom content. To use this, you need to declare <code>slot</code> in <code>layout</code>',
        en: 'custom content. To use this, you need to declare <code>slot</code> in <code>layout</code>',
      },
    },
  ],
};
export default doc;
