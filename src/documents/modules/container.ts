import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/container.html',
  attributes: [
    {
      name: 'direction',
      description: {
        cn: '子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal',
        en: 'vertical when nested with `el-header` or `el-footer`; horizontal otherwise',
      },
      type: 'enum',
      default: "'vertical'",
      value: ['horizontal', 'vertical'],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
      subtags: ['Container', 'Header', 'Aside', 'Main', 'Footer'],
    },
  ],
};
export default doc;
