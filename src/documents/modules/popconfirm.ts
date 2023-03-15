import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/popconfirm.html',
  attributes: [
    {
      name: 'title',
      description: { cn: '标题', en: 'Title' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'confirm-button-text',
      description: { cn: '确认按钮文字', en: 'Confirm button text' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'cancel-button-text',
      description: { cn: '取消按钮文字', en: 'Cancel button text' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'confirm-button-type',
      description: { cn: '确认按钮类型', en: 'Confirm button type' },
      type: 'enum',
      default: "'success'",
      value: ['primary', 'success', 'warning', 'danger', 'info', 'text'],
    },
    {
      name: 'cancel-button-type',
      description: { cn: '取消按钮类型', en: 'Cancel button type' },
      type: 'enum',
      default: "'success'",
      value: ['primary', 'success', 'warning', 'danger', 'info', 'text'],
    },
    {
      name: 'icon',
      description: { cn: '自定义图标', en: 'Icon Component' },
      type: ['string', 'Component'],
      default: 'QuestionFilled',
      value: [],
    },
    {
      name: 'icon-color',
      description: { cn: 'Icon 颜色', en: 'Icon color' },
      type: 'string',
      default: '#f90',
      value: [],
    },
    {
      name: 'hide-icon',
      description: { cn: '是否隐藏 Icon', en: 'is hide Icon' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'hide-after',
      description: { cn: '关闭时的延迟', en: 'delay of disappear, in millisecond' },
      type: 'number',
      default: '200',
      value: [],
    },
    {
      name: 'teleported',
      description: { cn: '是否将 `popover` 的下拉列表插入至 body 元素', en: 'whether popconfirm is teleported to the body' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'persistent',
      description: {
        cn: '当 popover 组件长时间不触发且 `persistent` 属性设置为 `false` 时, popover 将会被删除',
        en: 'when popconfirm inactive and <code>persistent</code> is <code>false</code> , popconfirm will be destroyed',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'width',
      description: { cn: '弹层宽度，最小宽度 150px', en: 'popconfirm width, min width 150px' },
      type: ['string', 'number'],
      default: '150',
      value: [],
    },
  ],
  events: [
    {
      name: 'confirm',
      description: { cn: '点击确认按钮时触发', en: 'triggers when click confirm button' },
      type: 'function',
      param: '(e: MouseEvent) => void',
    },
    {
      name: 'cancel',
      description: { cn: '点击取消按钮时触发', en: 'triggers when click cancel button' },
      type: 'function',
      param: '(e: MouseEvent) => void',
    },
  ],
  slots: [
    {
      name: 'reference',
      description: { cn: '触发 Popconfirm 显示的 HTML 元素', en: 'HTML element that triggers Popconfirm' },
    },
  ],
};
export default doc;
