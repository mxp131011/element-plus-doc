import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/skeleton.html',
  attributes: [
    {
      name: 'animated',
      description: { cn: '是否使用动画', en: 'whether showing the animation' },
      type: 'boolean',
      default: 'fals',
      value: [],
    },
    {
      name: 'count',
      description: { cn: '渲染多少个 template, 建议使用尽可能小的数字', en: 'how many fake items to render to the DOM' },
      type: 'number',
      default: '1',
      value: [],
    },
    {
      name: 'loading',
      description: { cn: '是否显示加载结束后的 DOM 结构', en: 'whether showing the real DOM' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'rows',
      description: {
        cn: '骨架屏段落数量',
        en: 'numbers of the row, only useful when no template slot were given',
      },
      type: 'number',
      default: '3',
      value: [],
    },
    {
      name: 'throttle',
      description: { cn: '渲染延迟（以毫秒为单位）', en: 'Rendering delay in milliseconds' },
      type: 'number',
      default: '0',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '正在渲染的DOM, 作用域:$attrs', en: 'Real rendering DOM. Scope: $attrs' },
    },
    {
      name: 'template',
      description: { cn: '自定义渲染 skeleton 模板, 作用域:{ key: number }', en: 'Custom rendering skeleton template. Scope: { key: number }' },
    },
  ],
};
export default doc;
