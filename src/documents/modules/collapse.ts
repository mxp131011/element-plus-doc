import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/collapse.html',
  attributes: [
    {
      name: 'model-value',
      description: {
        cn: '当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)',
        en: 'currently active pane. (string (accordion mode) / array (non-accordion mode))',
      },
      type: ['string', 'array'],
      default: '—',
      value: [],
    },
    {
      name: 'accordion',
      description: { cn: '是否手风琴模式', en: 'whether to activate accordion mode' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: '当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)', en: 'triggers when active panels change' },
      type: 'function',
      param: '(activeNames: array (non-accordion mode) / string (accordion mode))',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
      subtags: ['Collapse Item'],
    },
  ],
};
export default doc;
