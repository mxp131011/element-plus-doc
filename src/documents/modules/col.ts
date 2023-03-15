import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/layout.html#col-api',
  attributes: [
    {
      name: 'span',
      description: { cn: '栅格占据的列数', en: 'number of column the grid spans' },
      type: 'number',
      default: '24',
      value: [],
    },
    {
      name: 'offset',
      description: { cn: '栅格左侧的间隔格数', en: 'number of spacing on the left side of the grid' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'push',
      description: { cn: '栅格向右移动格数', en: 'number of columns that grid moves to the right' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'pull',
      description: { cn: '栅格向左移动格数', en: 'number of columns that grid moves to the left' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'xs',
      description: {
        cn: '<code>&lt;768px</code> 响应式栅格数或者栅格属性对象({span?: number, offset?: number, pull?: number, push?: number})',
        en: '<code>&lt;768px</code> Responsive columns or column props object({span?: number, offset?: number, pull?: number, push?: number})',
      },
      type: 'number',
      default: '—',
      value: ['object'],
    },
    {
      name: 'sm',
      description: {
        cn: '<code>≥768px</code> 响应式栅格数或者栅格属性对象({span?: number, offset?: number, pull?: number, push?: number})',
        en: '<code>≥768px</code> Responsive columns or column props object({span?: number, offset?: number, pull?: number, push?: number})',
      },
      type: 'number',
      default: '—',
      value: ['object'],
    },
    {
      name: 'md',
      description: {
        cn: '<code>≥992px</code> 响应式栅格数或者栅格属性对象({span?: number, offset?: number, pull?: number, push?: number})',
        en: '<code>≥992px</code> Responsive columns or column props object({span?: number, offset?: number, pull?: number, push?: number})',
      },
      type: 'number',
      default: '—',
      value: ['object'],
    },
    {
      name: 'lg',
      description: {
        cn: '<code>≥1200px</code> 响应式栅格数或者栅格属性对象({span?: number, offset?: number, pull?: number, push?: number})',
        en: '<code>≥1200px</code> Responsive columns or column props object({span?: number, offset?: number, pull?: number, push?: number})',
      },
      type: 'number',
      default: '—',
      value: ['object'],
    },
    {
      name: 'xl',
      description: {
        cn: '<code>≥1920px</code> 响应式栅格数或者栅格属性对象{span?: number, offset?: number, pull?: number, push?: number}',
        en: '<code>≥1920px</code> Responsive columns or column props object({span?: number, offset?: number, pull?: number, push?: number})',
      },
      type: 'number',
      default: '—',
      value: ['object'],
    },
    {
      name: 'tag',
      description: { cn: '自定义元素标签', en: 'custom element tag' },
      type: 'string',
      default: 'div',
      value: [],
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
