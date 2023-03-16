import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/date-picker.html',
  attributes: [
    {
      name: 'model-value',
      description: { cn: '绑定值，如果它是数组，长度应该是 2', en: 'binding value, if it is an array, the length should be 2' },
      type: ['Date', 'number', 'string', 'array'],
      default: '—',
      value: [],
    },
    {
      name: 'readonly',
      description: { cn: '只读', en: 'whether DatePicker is read only' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '禁用', en: 'whether DatePicker is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'size',
      description: { cn: '输入框尺寸', en: 'size of Input' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
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
      name: 'placeholder',
      description: { cn: '非范围选择时的占位内容', en: 'placeholder in non-range mode' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'start-placeholder',
      description: { cn: '范围选择时开始日期的占位内容', en: 'placeholder for the start date in range mode' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'end-placeholder',
      description: { cn: '范围选择时结束日期的占位内容', en: 'placeholder for the end date in range mode' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'type',
      description: { cn: '显示类型', en: 'type of the picker' },
      type: 'enum',
      default: "'date'",
      value: ['year', 'month', 'date', 'dates', 'datetime', 'week', 'datetimerange', 'daterange', 'monthrange'],
    },
    {
      name: 'format',
      description: {
        cn: '显示在输入框中的格式，详见[格式表示](https://day.js.org/docs/en/display/format#list-of-all-available-formats)',
        en: 'format of the displayed value in the input box， see more at [formats](https://day.js.org/docs/en/display/format#list-of-all-available-formats)',
      },
      type: 'string',
      default: 'YYYY-MM-DD',
      value: [],
    },
    {
      name: 'popper-class',
      description: { cn: 'DatePicker 下拉框的类名', en: "custom class name for DateTimePicker's dropdown" },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'range-separator',
      description: { cn: '选择范围时的分隔符', en: 'range separator' },
      type: 'string',
      default: "'-'",
      value: [],
    },
    {
      name: 'default-value',
      description: { cn: '可选，选择器打开时默认显示的时间', en: 'optional, default date of the calendar' },
      type: ['Date', '[Date, Date]'],
      default: '—',
      value: [],
    },
    {
      name: 'default-time',
      description: {
        cn: '选择日期后的默认时间值。 如未指定则默认时间值为 `00:00:00`',
        en: 'the default time value after picking a date. Time <code>00:00:00</code> will be used if not specified',
      },
      type: ['Date', '[Date, Date]'],
      default: '—',
      value: [],
    },
    {
      name: 'value-format',
      description: {
        cn: '可选，绑定值的格式。 不指定则绑定值为 Date 对象',
        en: 'optional, format of binding value. If not specified, the binding value will be a Date object',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'id',
      description: { cn: '等价于原生 input `id` 属性', en: 'same as <code>id</code> in native input' },
      type: ['string', '[string, string]'],
      default: '—',
      value: [],
    },
    {
      name: 'name',
      description: { cn: '等价于原生 input `name` 属性', en: 'same as <code>name</code> in native input' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'unlink-panels',
      description: { cn: '在范围选择器里取消两个日期面板之间的联动', en: 'unlink two date-panels in range-picker' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'prefix-icon',
      description: { cn: '自定义前缀图标', en: 'Custom prefix icon component' },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'clear-icon',
      description: { cn: '自定义清除图标', en: 'Custom clear icon component' },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'shortcuts',
      description: {
        cn: '设置快捷选项，需要传入数组对象 ([{ text: string, value: date / function }])',
        en: 'an object array to set shortcut options ([{ text: string, value: date / function }])',
      },
      type: 'object',
      default: '—',
      value: [],
    },
    {
      name: 'disabled-date',
      description: {
        cn: '一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。',
        en: 'a function determining if a date is disabled with that date as its parameter. Should return a Boolean',
      },
      type: 'function(date)',
      default: '—',
      value: [],
    },
    {
      name: 'cell-class-name',
      description: { cn: '设置自定义类名', en: 'set custom className' },
      type: 'function(date)',
      default: '—',
      value: [],
    },
    {
      name: 'teleported',
      description: { cn: '是否将 datetime-picker 的下拉列表插入至 body 元素', en: 'whether datetime-picker dropdown is teleported to the body' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: '用户确认选定的值时触发', en: 'triggers when user confirms the value' },
      type: 'function',
      param: '(val: typeof v-model)',
    },
    {
      name: 'blur',
      description: { cn: '在组件 Input 失去焦点时触发', en: 'triggers when Input blurs' },
      type: 'function',
      param: '(e: FocusEvent)',
    },
    {
      name: 'focus',
      description: { cn: '在组件 Input 获得焦点时触发', en: 'triggers when Input focuses' },
      type: 'function',
      param: '(e: FocusEvent)',
    },
    {
      name: 'calendar-change',
      description: {
        cn: '如果用户没有选择日期，那默认展示当前日的月份。 你可以使用 default-value 来设置成其他的日期。',
        en: 'triggers when the calendar selected date is changed. Only for <code>datetimerange</code>',
      },
      type: 'function',
      param: '(val: [Date, Date])',
    },
    {
      name: 'visible-change',
      description: {
        cn: '当 DatePicker 的下拉列表出现/消失时触发',
        en: "triggers when the DateTimePicker's dropdown appears/disappears",
      },
      type: 'function',
      param: '(visibility: boolean)',
    },
  ],
  exposes: [
    {
      name: 'focus',
      description: { cn: '使 input 获取焦点', en: 'focus the Input component' },
      type: 'function',
      param: '',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义单元格内容', en: 'custom cell content' },
    },
    {
      name: 'range-separator',
      description: { cn: '自定义范围分割符内容', en: 'custom range separator content' },
    },
  ],
};
export default doc;
