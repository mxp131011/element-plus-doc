import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/color-picker.html',
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
      description: { cn: '是否禁用', en: 'whether to disable the ColorPicker' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'size',
      description: { cn: '尺寸', en: 'size of ColorPicker' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'show-alpha',
      description: { cn: '是否支持透明度选择', en: 'whether to display the alpha slider' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'color-format',
      description: { cn: '写入 v-model 的颜色的格式', en: 'color format of v-model' },
      type: 'enum',
      default: "'hsv'",
      value: ['hsl', 'hsv', 'hex', 'rgb', 'hex', 'rgb'],
    },
    {
      name: 'popper-class',
      description: { cn: 'ColorPicker 下拉框的类名', en: "custom class name for ColorPicker's dropdown" },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'predefine',
      description: { cn: '预定义颜色. (string[])', en: 'predefined color options. (string[])' },
      type: 'array',
      default: '—',
      value: [],
    },
    {
      name: 'validate-event',
      description: { cn: '输入时是否触发表单的校验', en: 'whether to trigger form validation' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'tabindex',
      description: { cn: 'ColorPicker 的 tabindex', en: 'ColorPicker tabindex' },
      type: 'string',
      default: '0',
      value: ['number'],
    },
    {
      name: 'label',
      description: { cn: 'ColorPicker 的 aria-label,用于无障碍访问', en: 'ColorPicker aria-label' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'id',
      description: { cn: 'ColorPicker 的 id', en: 'ColorPicker id' },
      type: 'string',
      default: '—',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: '当绑定值变化时触发', en: 'triggers when input value changes' },
      type: 'function',
      param: '(value: string) => void',
    },
    {
      name: 'active-change',
      description: { cn: '面板中当前显示的颜色发生改变时触发', en: 'triggers when the current active color changes' },
      type: 'function',
      param: '(value: string) => void',
    },
  ],
  exposes: [
    {
      name: 'color',
      description: { cn: '当前色彩对象', en: 'current color object' },
      type: 'object',
      param: 'Color',
    },
  ],
};
export default doc;
