import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/select.html#option-group-attributes',
  attributes: [
    {
      name: 'label',
      description: { cn: '分组的组名', en: 'name of the group' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否将该分组下所有选项置为禁用', en: 'whether to disable all options in this group' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
      subtags: ['Option'],
    },
  ],
};
export default doc;
