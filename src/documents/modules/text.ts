import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/text.html',
  attributes: [
    {
      name: 'type',
      description: { cn: '类型', en: 'text type' },
      type: 'enum',
      default: "'success'",
      value: ['primary', 'success', 'warning', 'danger', 'info'],
    },
    {
      name: 'size',
      description: { cn: '大小', en: 'text size' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'truncated',
      description: { cn: '显示省略号', en: 'render ellipsis' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'tag',
      description: { cn: '自定义元素标签', en: 'custom element tag' },
      type: 'string',
      default: 'span',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '默认内容', en: 'default content' },
    },
  ],
};
export default doc;
