import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/backtop.html',
  attributes: [
    {
      name: 'target',
      description: { cn: '触发滚动的对象', en: 'the target to trigger scroll.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'visibility-height',
      description: {
        cn: '滚动高度达到此参数值才出现',
        en: 'the button will not show until the scroll height reaches this value.',
      },
      type: 'number',
      default: '200',
      value: [],
    },
    {
      name: 'right',
      description: { cn: '控制其显示位置，距离页面右边距', en: 'right distance.' },
      type: 'number',
      default: '40',
      value: [],
    },
    {
      name: 'bottom',
      description: { cn: '控制其显示位置，距离页面底部距离', en: 'bottom distance.' },
      type: 'number',
      default: '40',
      value: [],
    },
  ],
  events: [
    {
      name: 'click',
      description: { cn: '点击按钮触发的事件', en: 'triggers when click.' },
      type: 'function',
      param: '(evt: MouseEvent) =&gt; void',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content.' },
    },
  ],
};
export default doc;
