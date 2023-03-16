import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/empty.html',
  attributes: [
    {
      name: 'image',
      description: { cn: '图片地址', en: 'image URL' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'image-size',
      description: { cn: '图片大小（宽度）', en: 'image size (width)' },
      type: 'number',
      default: '—',
      value: [],
    },
    {
      name: 'description',
      description: { cn: '描述', en: 'description' },
      type: 'string',
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义底部内容', en: 'Custom bottom content' },
    },
    {
      name: 'image',
      description: { cn: '自定义图片', en: 'Custom image' },
    },
    {
      name: 'description',
      description: { cn: '自定义描述', en: 'Custom description' },
    },
  ],
};
export default doc;
