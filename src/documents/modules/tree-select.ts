import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/tree-select.html',
  attributes: [
    {
      name: 'tree',
      description: { cn: '参照`el-tree`组件的，事件、方法、属性、插槽', en: 'Refer to the `el-tree` component, events, methods, Attributes、Slots' },
      type: 'object',
      default: '',
      value: [],
    },
    {
      name: 'select',
      description: { cn: '参照`el-select`组件的，事件、方法、属性、插槽', en: 'Refer to the `el-select` component, events, methods, Attributes、Slots' },
      type: 'object',
      default: '',
      value: [],
    },
  ],
};
export default doc;
