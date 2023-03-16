import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/descriptions.html',
  attributes: [
    {
      name: 'border',
      description: { cn: '是否带有边框', en: 'with or without border' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'column',
      description: { cn: '一行 `Descriptions Item` 的数量', en: 'numbers of `Descriptions Item` in one line' },
      type: 'number',
      default: '3',
      value: [],
    },
    {
      name: 'direction',
      description: { cn: '排列的方向', en: 'direction of list' },
      type: 'enum',
      default: 'horizontal',
      value: ['vertical', 'horizontal'],
    },
    {
      name: 'size',
      description: { cn: 'size of list', en: 'size of list' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'title',
      description: { cn: '标题文本，显示在左上方', en: 'title text, display on the top left' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'extra',
      description: { cn: '操作区文本，显示在右上方', en: 'extra text, display on the top right' },
      type: 'string',
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
      subtags: ['Descriptions Item'],
    },
    {
      name: 'title',
      description: { cn: '自定义标题，显示在左上方', en: 'custom title, display on the top left' },
    },
    {
      name: 'extra',
      description: { cn: '自定义操作区，显示在右上方', en: 'custom extra area, display on the top right' },
    },
  ],
};
export default doc;
