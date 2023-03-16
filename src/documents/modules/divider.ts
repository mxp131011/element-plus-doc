import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/divider.html',
  attributes: [
    {
      name: 'direction',
      description: { cn: '设置分割线方向', en: "Set divider's direction" },
      type: 'enum',
      default: "'vertical'",
      value: ['horizontal', 'vertical'],
    },
    {
      name: 'border-style',
      description: {
        cn: '设置分隔符样式,详见：[css/border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style)',
        en: 'Set the style of divider. see more at [css/border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style)',
      },
      type: 'enum',
      default: "'solid'",
      value: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
    },
    {
      name: 'content-position',
      description: { cn: '自定义分隔线内容的位置', en: 'the position of the customized content on the divider line' },
      type: 'enum',
      default: "'center'",
      value: ['left', 'right', 'center'],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '设置分割线文案的位置', en: 'customized content on the divider line' },
    },
  ],
};
export default doc;
