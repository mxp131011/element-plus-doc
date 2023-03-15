import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/message.html',
  attributes: [
    {
      name: 'message',
      description: { cn: '消息文字', en: 'message text' },
      type: ['string', 'VNode'],
      default: 'VNode',
      value: [],
    },
    {
      name: 'type',
      description: { cn: '消息类型', en: 'message type' },
      type: 'enum',
      default: "'warning'",
      value: ['success', 'warning', 'info', 'error'],
    },
    {
      name: 'icon',
      description: { cn: '自定义图标，该属性会覆盖 `type` 的图标。', en: 'custom icon component, overrides <code>type</code>' },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'dangerouslyUseHTMLString',
      description: { cn: '是否将 message 属性作为 HTML 片段处理', en: 'whether <code>message</code> is treated as HTML string' },
      type: 'boolean',
      default: 'false',
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
        cn: '显示时间，单位为毫秒。 设为 0 则不会自动关闭',
        en: 'display duration, millisecond. If set to 0, it will not turn off automatically',
      },
      type: 'number',
      default: '3000',
      value: [],
    },
    {
      name: 'show-close',
      description: { cn: '是否显示关闭按钮', en: 'whether to show a close button' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'center',
      description: { cn: '文字是否居中', en: 'whether to center the text' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'on-close',
      description: {
        cn: '关闭时的回调函数, 参数为被关闭的 message 实例',
        en: 'callback function when closed with the message instance as the parameter',
      },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: 'offset',
      description: { cn: 'Message 距离窗口顶部的偏移量', en: 'set the distance to the top of viewport' },
      type: 'number',
      default: '20',
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
      name: 'grouping',
      description: {
        cn: '合并内容相同的消息，不支持 VNode 类型的消息',
        en: 'merge messages with the same content, type of VNode message is not supported',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  exposes: [
    {
      name: 'close',
      description: { cn: '关闭当前的 Message', en: 'close the Message' },
      type: 'function',
      param: '',
    },
  ],
};
export default doc;
