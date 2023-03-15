import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/menu.html#menu-item-attributes',
  attributes: [
    {
      name: 'index',
      description: { cn: '唯一标志', en: 'unique identification' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'route',
      description: { cn: 'Vue Router 路径对象', en: 'Vue Router object' },
      type: 'object',
      default: '—',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用', en: 'whether disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  events: [
    {
      name: 'click',
      description: { cn: '菜单点击时的回调函数', en: 'callback function when menu-item is clicked' },
      type: 'function',
      param: 'el-menu-item 实例',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义标题内容', en: 'customize default content' },
    },
    {
      name: 'title',
      description: { cn: '组标题', en: 'customize title content' },
    },
  ],
};
export default doc;
