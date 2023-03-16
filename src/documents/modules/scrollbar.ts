import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/scrollbar.html',
  attributes: [
    {
      name: 'height',
      description: { cn: '滚动条高度', en: 'height of scrollbar' },
      type: ['string', 'number'],
      default: '—',
      value: ['number'],
    },
    {
      name: 'max-height',
      description: { cn: '滚动条最大高度', en: 'max height of scrollbar' },
      type: ['string', 'number'],
      default: '—',
      value: ['number'],
    },
    {
      name: 'native',
      description: { cn: '是否使用原生滚动条样式', en: 'whether to use the native scrollbar style' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'wrap-style',
      description: {
        cn: 'style of wrap container。 TS类型: CSSSProperties &#124; CSSSProperties[] &#124; string[] &#124; string',
        en: 'style of wrap container.  TS Type: CSSSProperties &#124; CSSSProperties[] &#124; string[] &#124; string',
      },
      type: ['string', 'object'],
      default: '—',
      value: [],
    },
    {
      name: 'wrap-class',
      description: { cn: '包裹容器的自定义类名', en: 'class of wrap container' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'view-style',
      description: {
        cn: '视图的自定义样式。 TS类型: CSSSProperties &#124; CSSSProperties[] &#124; string[] &#124; string',
        en: 'style of view.  TS Type: CSSSProperties &#124; CSSSProperties[] &#124; string[] &#124; string',
      },
      type: ['string', 'object'],
      default: '—',
      value: [],
    },
    {
      name: 'view-class',
      description: { cn: '视图的自定义类名', en: 'class of view' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'noresize',
      description: {
        cn: '不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能',
        en: 'do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'tag',
      description: { cn: '视图的元素标签', en: 'element tag of the view' },
      type: 'string',
      default: 'div',
      value: [],
    },
    {
      name: 'always',
      description: { cn: '滚动条总是显示', en: 'always show scrollbar' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'min-size',
      description: { cn: '滚动条最小尺寸', en: 'minimum size of scrollbar' },
      type: 'number',
      default: '20',
      value: [],
    },
  ],
  events: [
    {
      name: 'scroll',
      description: { cn: '当触发滚动事件时，返回滚动的距离', en: 'triggers when scrolling, return distance of scrolling' },
      type: 'function',
      param: '',
    },
  ],
  exposes: [
    {
      name: 'handleScroll',
      description: { cn: '触发滚动事件', en: 'handle scroll event' },
      type: 'function',
      param: '() => void',
    },
    {
      name: 'scrollTo',
      description: { cn: '滚动到一组特定坐标', en: 'scrolls to a particular set of coordinates' },
      type: 'function',
      param: '(options: ScrollToOptions &#124; number, yCoord?: number) => void',
    },
    {
      name: 'setScrollTop',
      description: { cn: '设置滚动条到顶部的距离', en: 'Set distance to scroll top' },
      type: 'function',
      param: '(scrollTop: number) => void',
    },
    {
      name: 'setScrollLeft',
      description: { cn: '设置滚动条到左边的距离', en: 'Set distance to scroll left' },
      type: 'function',
      param: '(scrollLeft: number) => void',
    },
    {
      name: 'update',
      description: { cn: '手动更新滚动条状态', en: 'update scrollbar state manually' },
      type: 'function',
      param: '() => void',
    },
    {
      name: 'wrapRef',
      description: { cn: '滚动条包裹的 ref 对象', en: 'scrollbar wrap ref' },
      type: 'object',
      param: 'Ref<HTMLDivElement>',
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
