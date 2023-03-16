import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/carousel.html#carousel-item-attributes',
  attributes: [
    {
      name: 'name',
      description: { cn: '幻灯片的名字，可用作 `setActiveItem` 的参数', en: 'name of the item, can be used in <code>setActiveItem</code>' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'label',
      description: { cn: '该幻灯片所对应指示器的文本', en: 'text content for the corresponding indicator' },
      type: 'string',
      default: '—',
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
