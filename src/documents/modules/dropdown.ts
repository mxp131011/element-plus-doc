import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/dropdown.html#dropdown-attributes',
  attributes: [
    {
      name: 'type',
      description: {
        cn: '菜单按钮类型，同 `Button` 组件一样，仅在 `split-button` 为 true 的情况下有效。',
        en: 'menu button type, refer to `Button` Component, only works when `split-button` is true',
      },
      type: 'string',
      default: '—',
      value: ['primary', 'success', 'warning', 'danger', 'info'],
    },
    {
      name: 'size',
      description: { cn: '菜单尺寸，在 split-button 为 true 的情况下也对触发按钮生效。', en: 'menu size, also works on the split button' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'max-height',
      description: { cn: '菜单最大高度', en: 'the max height of menu' },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'split-button',
      description: { cn: '下拉触发元素呈现为按钮组', en: 'whether a button group is displayed' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用', en: 'Whether to disable' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'placement',
      description: { cn: '菜单弹出位置', en: 'placement of pop menu' },
      type: 'string',
      default: 'bottom',
      value: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'],
    },
    {
      name: 'trigger',
      description: { cn: '触发下拉的行为', en: 'how to trigger' },
      type: 'string',
      default: 'hover',
      value: [],
    },
    {
      name: 'hide-on-click',
      description: { cn: '是否在点击菜单项后隐藏菜单', en: 'whether to hide menu after clicking menu-item' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'show-timeout',
      description: {
        cn: '展开下拉菜单的延时，仅在 trigger 为 hover 时有效',
        en: 'Delay time before show a dropdown (only works when trigger is `hover`)',
      },
      type: 'number',
      default: '250',
      value: [],
    },
    {
      name: 'hide-timeout',
      description: {
        cn: '收起下拉菜单的延时（仅在 trigger 为 hover 时有效）',
        en: 'Delay time before hide a dropdown (only works when trigger is `hover`)',
      },
      type: 'number',
      default: '150',
      value: [],
    },
    {
      name: 'role',
      description: {
        cn: '下拉菜单的 ARIA 属性。 根据具体场景，您可能想要将此更改为“navigation”',
        en: "The ARIA role attribute for the dropdown menu. Depending on the use case, you may want to change this to 'navigation'",
      },
      type: 'string',
      default: "'menu'",
      value: [],
    },
    {
      name: 'tabindex',
      description: {
        cn: 'Dropdown 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)',
        en: '[tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Dropdown',
      },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'popper-class',
      description: { cn: '自定义浮层类名', en: "custom class name for Dropdown's dropdown" },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'popper-options',
      description: {
        cn: '自定义 popper 选项，更多请参考[popper.js](https://popper.js.org/docs/v2/)',
        en: 'Customized popper option，更多请参考[popper.js](https://popper.js.org/docs/v2/)',
      },
      type: 'object',
      default: "{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}",
      value: [],
    },
    {
      name: 'teleported',
      description: { cn: '是否将下拉列表插入至 `body` 元素', en: 'whether the dropdown popup is teleported to the body' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
  ],
  events: [
    {
      name: 'click',
      description: {
        cn: '`split-button` 为 true 时，点击左侧按钮的回调',
        en: 'if `split-button` is `true`, triggers when left button is clicked',
      },
      type: 'function',
      param: '',
    },
    {
      name: 'command',
      description: { cn: '点击菜单项触发的事件回调', en: 'triggers when a dropdown item is clicked,' },
      type: 'function',
      param: {
        cn: 'dropdown-item 的指令',
        en: 'the command dispatched from the dropdown item',
      },
    },
    {
      name: 'visible-change',
      description: { cn: '下拉框出现/隐藏时触发', en: 'triggers when the dropdown appears/disappears' },
      type: 'function',
      param: {
        cn: '出现则为 true，隐藏则为 false',
        en: 'true when it appears, and false otherwise',
      },
    },
  ],
  exposes: [
    {
      name: 'handleOpen',
      description: { cn: '打开下拉菜单', en: 'open the dropdown menu' },
      type: 'function',
      param: '',
    },
    {
      name: 'handleClose',
      description: { cn: '关闭下拉菜单', en: 'close the dropdown menu' },
      type: 'function',
      param: '',
    },
  ],
  slots: [
    {
      name: 'default',
      description: {
        cn: '下拉菜单的内容。 注意：必须是有效的 html DOM 元素 (例如 `&lt;span&gt;, &lt;button&gt; etc.`) 或 el-component，以附加监听触发器',
        en: 'content of Dropdown. Notice: Must be a valid html dom element (ex. `&lt;span&gt;, &lt;button&gt; etc.`) or `el-component`, to attach the trigger listener',
      },
    },
    {
      name: 'dropdown',
      description: {
        cn: '下拉列表，通常是 `&lt;el-dropdown-menu&gt;` 组件',
        en: 'content of the Dropdown Menu, usually a `&lt;el-dropdown-menu&gt;` element',
      },
      subtags: ['Dropdown-Menu'],
    },
  ],
};
export default doc;
