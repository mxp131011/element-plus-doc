import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/select-v2.html',
  attributes: [
    {
      name: 'model-value',
      description: { cn: '绑定值', en: 'biding value' },
      type: ['string', 'number', 'boolean', 'object'],
      default: '—',
      value: [],
    },
    {
      name: 'multiple',
      description: { cn: '是否多选', en: 'is multiple' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用', en: 'is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'value-key',
      description: {
        cn: '作为 value 唯一标识的键名，绑定值为对象类型时必填',
        en: 'unique identity key name for value, required when value is an object',
      },
      type: 'string',
      default: 'value',
      value: [],
    },
    {
      name: 'size',
      description: { cn: '输入框尺寸', en: 'input box size' },
      type: 'string',
      default: 'default',
      value: ['large', 'default', 'small'],
    },
    {
      name: 'clearable',
      description: { cn: '是否可以清空选项', en: 'whether select can be cleared' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'clear-icon',
      description: { cn: '自定义清除图标', en: 'custom clear icon' },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'collapse-tags',
      description: { cn: '多选时是否将选中值按文字的形式展示', en: 'whether to collapse tags to a text when multiple selecting' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'multiple-limit',
      description: {
        cn: '多选时用户最多可以选择的项目数， 为 0 则不限制',
        en: 'maximum number of options user can select when multiple is true. No limit when set to 0',
      },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'name',
      description: { cn: 'Select 输入框的原生 name 属性', en: 'the name attribute of select input' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'effect',
      description: {
        cn: 'Tooltip 主题，内置了 <code>dark</code> / <code>light</code> 两种',
        en: 'Tooltip theme, built-in theme: <code>dark</code> / <code>light</code>',
      },
      type: 'enum',
      default: 'light',
      value: ['dark', 'light'],
    },
    {
      name: 'autocomplete',
      description: { cn: '自动完成选择输入', en: 'autocomplete of select input' },
      type: 'string',
      default: 'off',
      value: [],
    },
    {
      name: 'placeholder',
      description: { cn: 'select input的原生autocomplete属性', en: 'the autocomplete attribute of select input' },
      type: 'string',
      default: 'Please select',
      value: [],
    },
    {
      name: 'filterable',
      description: { cn: '是否可筛选', en: 'is filterable' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'allow-create',
      description: {
        cn: '是否允许用户创建新条目， 只有当 <code>filterable</code> 设置为 true 时才会生效',
        en: 'whether creating new items is allowed. To use this, <code>filterable</code> must be true',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'reserve-keyword',
      description: { cn: '筛选时，是否在选择选项后保留关键字', en: 'whether reserve the keyword after select filtered option.' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'no-data-text',
      description: {
        cn: '选项为空时显示的文本，也可以使用 empty 插槽自定义内容',
        en: 'displayed text when there is no options, you can also use slot empty',
      },
      type: 'string',
      default: '无数据',
      value: [],
    },
    {
      name: 'popper-class',
      description: { cn: '选择器下拉菜单的自定义类名', en: "custom class name for Select's dropdown" },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'teleported',
      description: { cn: '是否将下拉列表元素插入 append-to 指向的元素下', en: 'whether select dropdown is teleported to the body' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'persistent',
      description: {
        cn: '当下拉选择器未被激活并且 <code>persistent</code> 设置为 <code>false</code> ，选择器会被删除。',
        en: 'when select dropdown is inactive and <code>persistent</code> is <code>false</code>, select dropdown will be destroyed',
      },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'popper-options',
      description: {
        cn: '自定义 popper 选项，更多请参考[popper.js](https://popper.js.org/docs/v2/)',
        en: 'Customized popper option，更多请参考[popper.js](https://popper.js.org/docs/v2/)',
      },
      type: 'object',
      default: '-',
      value: [],
    },
    {
      name: 'automatic-dropdown',
      description: {
        cn: '对于不可过滤的 Select 组件，此属性决定是否在输入框获得焦点后自动弹出选项菜单',
        en: 'for non-filterable Select, this prop decides if the option menu pops up when the input is focused',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'height',
      description: { cn: '下拉菜单的高度，每一个子选项的高度是 34px', en: 'The height of the dropdown panel, 34px for each item' },
      type: 'number',
      default: '170',
      value: [],
    },
    {
      name: 'scrollbar-always-on',
      description: { cn: '是否总是展示滚动条', en: 'Controls whether the scrollbar is always displayed' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'remote',
      description: { cn: '是否从服务器搜索数据', en: 'whether search data from server' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'remote-method',
      description: {
        cn: '当输入值发生变化时被调用的函数。 其参数是当前输入值。 只有当 <code>filterable</code> 设置为 true 时才会生效',
        en: 'function that gets called when the input value changes. Its parameter is the current input value. To use this, <code>filterable</code> must be true',
      },
      type: 'function(keyword: string)',
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
      name: 'placement',
      description: { cn: '下拉框出现的位置', en: 'position of dropdown' },
      type: 'string',
      default: 'bottom-start',
      value: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'],
    },
    {
      name: 'collapse-tags-tooltip',
      description: {
        cn: '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。 只有当 <code>collapse-tags</code> 设置为 true 时才会生效。(versions >= ^2.3.0)',
        en: 'Twhether show all selected tags when mouse hover text of collapse-tags. To use this, <code>collapse-tags</code> must be true (versions >= ^2.3.0)',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: '选中值发生变化时触发', en: 'triggers when the selected value changes' },
      type: 'function',
      param: 'val，目前的选中值',
    },
    {
      name: 'visible-change',
      description: { cn: '下拉框出现/隐藏时触发', en: 'triggers when the dropdown appears/disappears' },
      type: 'function',
      param: 'val，出现则为 true，隐藏则为 false',
    },
    {
      name: 'remove-tag',
      description: { cn: '多选模式下移除tag时触发', en: 'triggers when a tag is removed in multiple mode' },
      type: 'function',
      param: 'val，移除的tag值',
    },
    {
      name: 'clear',
      description: { cn: '可清空的单选模式下用户点击清空按钮时触发', en: 'triggers when the clear icon is clicked in a clearable Select' },
      type: 'function',
      param: '',
    },
    {
      name: 'blur',
      description: { cn: '当选择器的输入框失去焦点时触发', en: 'triggers when Input blurs' },
      type: 'function',
      param: '(event: FocusEvent)',
    },
    {
      name: 'focus',
      description: { cn: '当选择器的输入框获得焦点时触发', en: 'triggers when Input focuses' },
      type: 'function',
      param: '(event: FocusEvent)',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义 Option 模板', en: 'Option renderer' },
    },
    {
      name: 'empty',
      description: { cn: '自定义当选项为空时的内容', en: 'content when options is empty' },
    },
    {
      name: 'prefix',
      description: { cn: '输入框的前缀', en: 'prefix content of input' },
    },
  ],
};
export default doc;
