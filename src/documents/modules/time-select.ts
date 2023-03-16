import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/time-select.html',
  attributes: [
    {
      name: 'model-value',
      description: { cn: '选中项绑定值', en: 'binding value' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '禁用状态', en: 'whether TimeSelect is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'editable',
      description: { cn: '文本框可输入', en: 'whether the input is editable' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'clearable',
      description: { cn: '是否显示清除按钮', en: 'whether to show clear button' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'size',
      description: { cn: '输入框尺寸', en: 'size of Input' },
      type: 'string',
      default: 'default',
      value: ['large', 'default', 'small'],
    },
    {
      name: 'placeholder',
      description: { cn: '非范围选择时的占位内容', en: 'placeholder in non-range mode' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'name',
      description: { cn: '原生属性', en: 'same as `name` in native input' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'effect',
      description: {
        cn: 'Tooltip 主题，内置了 `dark` / `light` 两种主题',
        en: 'Tooltip theme, built-in theme: `dark` / `light`',
      },
      type: 'string',
      default: 'light',
      value: ['light', 'dark'],
    },
    {
      name: 'prefix-icon',
      description: { cn: '自定义前缀图标组件', en: 'Custom prefix icon component' },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'clear-icon',
      description: { cn: '自定义清除图标组件', en: 'Custom clear icon component' },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'start',
      description: { cn: '开始时间', en: 'start time' },
      type: 'string',
      default: '09:00',
      value: [],
    },
    {
      name: 'end',
      description: { cn: '结束时间', en: 'end time' },
      type: 'string',
      default: '18:00',
      value: [],
    },
    {
      name: 'step',
      description: { cn: '间隔时间', en: 'time step' },
      type: 'string',
      default: '00:30',
      value: [],
    },
    {
      name: 'min-time',
      description: { cn: '最早时间点，早于该时间的时间段将被禁用', en: 'minimum time, any time before this time will be disabled' },
      type: 'string',
      default: '00:00',
      value: [],
    },
    {
      name: 'max-time',
      description: { cn: '最晚时间点，晚于该时间的时间段将被禁用', en: 'maximum time, any time after this time will be disabled' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'format',
      description: {
        cn: '设置时间格式,详见[格式表示](https://day.js.org/docs/en/display/format#list-of-all-available-formats)',
        en: 'set format of time. see more at [formats](https://day.js.org/docs/en/display/format#list-of-all-available-formats)',
      },
      type: 'string',
      default: 'HH:mm',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: '用户确认选定的值时触发', en: 'triggers when user confirms the value' },
      type: 'function',
      param: 'val，组件绑定值',
    },
    {
      name: 'blur',
      description: { cn: '在组件 Input 失去焦点时触发', en: 'triggers when Input blurs' },
      type: 'function',
      param: '(event: FocusEvent)',
    },
    {
      name: 'focus',
      description: { cn: '在组件 Input 获得焦点时触发', en: 'triggers when Input focuses' },
      type: 'function',
      param: '(event: FocusEvent)',
    },
  ],
  exposes: [
    {
      name: 'focus',
      description: { cn: '使 input 获取焦点', en: 'focus the Input component' },
      type: 'function',
      param: '',
    },
    {
      name: 'blur',
      description: { cn: '使 input 失去焦点', en: 'blur the Input component' },
      type: 'function',
      param: '',
    },
  ],
};
export default doc;
