import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/alert.html',
  attributes: [
    {
      name: 'title',
      description: { cn: 'Alert 标题', en: 'alert title.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'type',
      description: { cn: 'Alert 类型', en: 'alert type.' },
      type: 'enum',
      default: "'info'",
      value: ['success', 'warning', 'info', 'error'],
    },
    {
      name: 'description',
      description: { cn: '描述性文本', en: 'descriptive text.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'closable',
      description: { cn: 'whether alert can be dismissed.', en: 'whether alert can be dismissed.' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'center',
      description: { cn: 'whether content is placed in the center.', en: 'whether content is placed in the center.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'close-text',
      description: { cn: '自定义关闭按钮文本', en: 'customized close button text.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'show-icon',
      description: { cn: '是否显示类型图标', en: 'whether a type icon is displayed.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'effect',
      description: { cn: '主题样式', en: 'theme style.' },
      type: 'enum',
      default: "'light'",
      value: ['light', 'dark'],
    },
  ],
  events: [
    {
      name: 'close',
      description: { cn: '关闭 Alert 时触发的事件', en: 'trigger when alert is closed.' },
      type: 'function',
      tsType: '',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: 'Alert 内容描述', en: 'content of the alert description.' },
    },
    {
      name: 'title',
      description: { cn: '标题的内容', en: 'content of the alert title.' },
    },
  ],
};
export default doc;
