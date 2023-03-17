import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/pagination.html',
  attributes: [
    {
      name: 'small',
      description: { cn: '是否使用小型分页样式', en: 'whether to use small pagination' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'background',
      description: { cn: '是否为分页按钮添加背景色', en: 'whether the buttons have a background color' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'page-size',
      description: { cn: '每页显示条目个数,支持双向绑定(v-model:page-size)', en: 'item count of each page. support(v-model:page-size)' },
      type: 'number',
      default: '10',
      value: [],
    },
    {
      name: 'default-page-size',
      description: { cn: '每页显示条目数的初始值', en: 'default initial value of page size' },
      type: 'number',
      default: '-',
      value: [],
    },
    {
      name: 'total',
      description: { cn: '总条目数', en: 'total item count' },
      type: 'number',
      default: '—',
      value: [],
    },
    {
      name: 'page-count',
      description: {
        cn: '总页数， `total` 和 `page-count` 设置任意一个就可以达到显示页码的功能；如果要支持 `page-sizes` 的更改，则需要使用 `total` 属性',
        en: 'total page count. Set either `total` or `page-count` and pages will be displayed; if you need `page-sizes`, `total` is required',
      },
      type: 'number',
      default: '—',
      value: [],
    },
    {
      name: 'pager-count',
      description: {
        cn: '设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠',
        en: 'number of pagers. Pagination collapses when the total page count exceeds this value',
      },
      type: 'number',
      default: '7',
      value: ['5'],
    },
    {
      name: 'current-page',
      description: { cn: '当前页数,支持双向绑定(v-model:current-page)', en: 'current page number. support(v-model:page-size)' },
      type: 'number',
      default: '1',
      value: [],
    },
    {
      name: 'default-current-page',
      description: { cn: '当前页数的初始值', en: 'default initial value of current-page' },
      type: 'number',
      default: '-',
      value: [''],
    },
    {
      name: 'layout',
      description: {
        cn: '组件布局，子组件名用逗号分隔,支持(sizes, prev, pager, next, jumper, -&gt;, total, slot)',
        en: 'layout of Pagination, elements separated with a comma. support(sizes, prev, pager, next, jumper, -&gt;, total, slot)',
      },
      type: 'string',
      default: 'prev, pager, next, jumper, -&gt;, total',
      value: [],
    },
    {
      name: 'page-sizes',
      description: { cn: '每页显示个数选择器的选项设置', en: 'options of item count per page' },
      type: 'array',
      default: '[10, 20, 30, 40, 50, 100]',
      value: ['codenumber'],
    },
    {
      name: 'popper-class',
      description: { cn: '每页显示个数选择器的下拉框类名', en: "custom class name for the page size Select's dropdown" },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'prev-text',
      description: { cn: '替代图标显示的上一页文字', en: 'text for the prev button' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'prev-icon',
      description: {
        cn: '上一页的图标， 比 `prev-text` 优先级更高',
        en: 'icon for the prev button, higher priority of `prev-text`',
      },
      type: ['string', 'Component'],
      default: 'ArrowLeft',
      value: [],
    },
    {
      name: 'next-text',
      description: { cn: '替代图标显示的下一页文字', en: 'text for the next button' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'next-icon',
      description: {
        cn: '下一页的图标， 比 `next-text` 优先级更高',
        en: 'icon for the next button, higher priority of `next-text`',
      },
      type: ['string', 'Component'],
      default: 'ArrowRight',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用分页', en: 'whether Pagination is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'hide-on-single-page',
      description: { cn: '只有一页时是否隐藏', en: "whether to hide when there's only one page" },
      type: 'boolean',
      default: '-',
      value: [],
    },
  ],
  events: [
    {
      name: 'size-change',
      description: { cn: '`page-size` 改变时触发', en: 'triggers when `page-size` changes' },
      type: 'function',
      param: '(value: number) =&gt; void',
    },
    {
      name: 'current-change',
      description: { cn: '`current-page` 改变时触发', en: 'triggers when `current-page` changes' },
      type: 'function',
      param: '(value: number) =&gt; void',
    },
    {
      name: 'prev-click',
      description: {
        cn: '用户点击上一页按钮改变当前页时触发',
        en: 'triggers when the prev button is clicked and current page changes',
      },
      type: 'function',
      param: '(value: number) =&gt; void',
    },
    {
      name: 'next-click',
      description: {
        cn: '用户点击下一页按钮改变当前页时触发',
        en: 'triggers when the next button is clicked and current page changes',
      },
      type: 'function',
      param: '(value: number) =&gt; void',
    },
  ],
  slots: [
    {
      name: 'default',
      description: {
        cn: '自定义内容 设置文案，需要在 `layout` 中列出 `slot`',
        en: 'custom content. To use this, you need to declare `slot` in `layout`',
      },
    },
  ],
};
export default doc;
