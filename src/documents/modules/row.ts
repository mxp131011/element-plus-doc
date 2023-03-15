import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/layout.html#row-api',
  attributes: [
    {
      name: 'gutter',
      description: { cn: '栅格间隔', en: 'grid spacing' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'justify',
      description: { cn: 'flex 布局下的水平排列方式', en: 'horizontal alignment of flex layout' },
      type: 'enum',
      default: "'start'",
      value: ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'],
    },
    {
      name: 'align',
      description: { cn: 'flex 布局下的垂直排列方式', en: 'vertical alignment of flex layout' },
      type: 'enum',
      default: "'middle'",
      value: ['top', 'middle', 'bottom'],
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
      subtags: ['Col'],
    },
  ],
};
export default doc;
