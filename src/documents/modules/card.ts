import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/card.html',
  attributes: [
    {
      name: 'header',
      description: {
        cn: '卡片的标题 你既可以通过设置 header 来修改标题，也可以通过 `slot#header` 传入 DOM 节点',
        en: 'title of the card. Also accepts a DOM passed by <code>slot#header</code>',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'body-style',
      description: { cn: 'body 的 CSS 样式', en: 'CSS style of card body' },
      type: 'object',
      default: '—',
      value: ['codeCSSPropertiescode'],
    },
    {
      name: 'shadow',
      description: { cn: '设置阴影显示时机', en: 'when to show card shadows' },
      type: 'enum',
      default: "'never'",
      value: ['always', 'never', 'hover'],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
    },
    {
      name: 'header',
      description: { cn: '卡片标题内容', en: 'content of the Card header' },
    },
  ],
};
export default doc;
