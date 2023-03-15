import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/notification.html',
  attributes: [
    {
      name: 'title',
      description: { cn: '标题', en: 'title' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'message',
      description: { cn: '通知栏正文内容', en: 'description text' },
      type: ['string', 'VNode'],
      default: '—',
      value: [],
    },
    {
      name: 'dangerouslyUseHTMLString',
      description: { cn: '是否将 `message` 属性作为 HTML 片段处理', en: 'whether <code>message</code> is treated as HTML string' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'type',
      description: { cn: '通知的类型', en: 'notification type' },
      type: 'enum',
      default: '—',
      value: ['success', 'warning', 'info', 'error'],
    },
    {
      name: 'icon',
      description: {
        cn: '自定义图标。 若设置了 `type` ，则 `icon` 会被覆盖',
        en: 'custom icon component. It will be overridden by <code>type</code>',
      },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'custom-class',
      description: { cn: '自定义类名', en: 'custom class name for Notification' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'duration',
      description: {
        cn: '显示时间, 单位为毫秒。 值为 0 则不会自动关闭',
        en: 'duration before close. It will not automatically close if set 0',
      },
      type: 'number',
      default: '4500',
      value: [],
    },
    {
      name: 'position',
      description: { cn: '自定义弹出位置', en: 'custom position' },
      type: 'string',
      default: 'top-right',
      value: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
    {
      name: 'show-close',
      description: { cn: '是否显示关闭按钮', en: 'whether to show a close button' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'on-close',
      description: { cn: '关闭时的回调函数', en: 'callback function when closed' },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: 'on-click',
      description: { cn: '点击 Notification 时的回调函数', en: 'callback function when notification clicked' },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: 'offset',
      description: {
        cn: '相对屏幕顶部的偏移量 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量',
        en: 'offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset',
      },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'appendTo',
      description: { cn: '设置组件的根元素', en: 'set the root element for the message' },
      type: ['string', 'HTMLElement'],
      default: 'document.body',
      value: [],
    },
    {
      name: 'zIndex',
      description: { cn: '初始 zIndex', en: 'initial zIndex' },
      type: 'number',
      default: '0',
      value: [],
    },
  ],
  exposes: [
    {
      name: 'close',
      description: { cn: '关闭当前的 Notification', en: 'close the Notification' },
      type: 'function',
      param: '',
    },
  ],
};
export default doc;
