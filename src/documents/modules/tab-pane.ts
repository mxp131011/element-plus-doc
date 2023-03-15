import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/tabs.html#tab-pane-属性',
  attributes: [
    {
      name: 'label',
      description: { cn: '选项卡标题', en: 'title of the tab' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用', en: 'whether Tab is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'name',
      description: {
        cn: '与选项卡绑定值 value 对应的标识符，表示选项卡别名',
        en: 'identifier corresponding to the name of Tabs, representing the alias of the tab-pane',
      },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'closable',
      description: { cn: '标签是否可关闭', en: 'whether Tab is closable' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'lazy',
      description: { cn: '标签是否延迟渲染', en: 'whether Tab is lazily rendered' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: 'Tab-pane 的内容', en: "Tab-pane's content" },
    },
    {
      name: 'label',
      description: { cn: 'Tab-pane 的标题内容', en: "Tab-pane's label" },
    },
  ],
};
export default doc;
