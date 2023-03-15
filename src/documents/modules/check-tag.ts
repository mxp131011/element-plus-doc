import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/tag.html#checktag-属性',
  attributes: [
    {
      name: 'checked',
      description: { cn: '是否选中', en: 'is checked' },
      type: 'boolean',
      default: '—',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: '点击 Check Tag 时触发的事件', en: 'triggers when Check Tag is clicked' },
      type: 'function',
      param: '',
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
