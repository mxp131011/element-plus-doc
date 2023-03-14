import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'type',
      description: {
        cn: 'menu button type, refer to <code>Button</code> Component, only works when <code>split-button</code> is true',
        en: 'menu button type, refer to <code>Button</code> Component, only works when <code>split-button</code> is true',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'size',
      description: { cn: 'menu size, also works on the split button', en: 'menu size, also works on the split button' },
      type: 'string',
      default: 'default',
      value: [],
    },
    { name: 'max-height', description: { cn: 'the max height of menu', en: 'the max height of menu' }, type: 'string / number', default: '—', value: [] },
    {
      name: 'split-button',
      description: { cn: 'whether a button group is displayed', en: 'whether a button group is displayed' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    { name: 'disabled', description: { cn: 'Whether to disable', en: 'Whether to disable' }, type: 'boolean', default: 'false', value: [] },
    { name: 'placement', description: { cn: 'placement of pop menu', en: 'placement of pop menu' }, type: 'string', default: 'bottom', value: [] },
    { name: 'trigger', description: { cn: 'how to trigger', en: 'how to trigger' }, type: 'string', default: 'hover', value: [] },
    {
      name: 'hide-on-click',
      description: { cn: 'whether to hide menu after clicking menu-item', en: 'whether to hide menu after clicking menu-item' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'show-timeout',
      description: {
        cn: 'Delay time before show a dropdown (only works when trigger is <code>hover</code>)',
        en: 'Delay time before show a dropdown (only works when trigger is <code>hover</code>)',
      },
      type: 'number',
      default: '250',
      value: [],
    },
    {
      name: 'hide-timeout',
      description: {
        cn: 'Delay time before hide a dropdown (only works when trigger is <code>hover</code>)',
        en: 'Delay time before hide a dropdown (only works when trigger is <code>hover</code>)',
      },
      type: 'number',
      default: '150',
      value: [],
    },
    {
      name: 'role',
      description: {
        cn: "The ARIA role attribute for the dropdown menu. Depending on the use case, you may want to change this to 'navigation'",
        en: "The ARIA role attribute for the dropdown menu. Depending on the use case, you may want to change this to 'navigation'",
      },
      type: 'string',
      default: "'menu'",
      value: [],
    },
    {
      name: 'tabindex',
      description: {
        cn: '<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a> of Dropdown',
        en: '<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a> of Dropdown',
      },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'popper-class',
      description: { cn: "custom class name for Dropdown's dropdown", en: "custom class name for Dropdown's dropdown" },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'popper-options',
      description: {
        cn: '<a href="https://popper.js.org/docs/v2/">popper.js</a> parameters',
        en: '<a href="https://popper.js.org/docs/v2/">popper.js</a> parameters',
      },
      type: 'object',
      default: "<code>{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}</code>",
      value: [],
    },
    {
      name: 'teleported',
      description: { cn: 'whether the dropdown popup is teleported to the body', en: 'whether the dropdown popup is teleported to the body' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
  ],
  events: [
    {
      name: 'click',
      description: {
        cn: 'if <code>split-button</code> is <code>true</code>, triggers when left button is clicked',
        en: 'if <code>split-button</code> is <code>true</code>, triggers when left button is clicked',
      },
      type: '',
      tsType: '',
    },
    { name: 'command', description: { cn: 'triggers when a dropdown item is clicked', en: 'triggers when a dropdown item is clicked' }, type: '', tsType: '' },
    {
      name: 'visible-change',
      description: { cn: 'triggers when the dropdown appears/disappears', en: 'triggers when the dropdown appears/disappears' },
      type: '',
      tsType: '',
    },
  ],
  exposes: [
    { name: '', description: { cn: 'open the dropdown menu', en: 'open the dropdown menu' }, type: '', tsType: '' },
    { name: '', description: { cn: 'close the dropdown menu', en: 'close the dropdown menu' }, type: '', tsType: '' },
  ],
  slots: [
    {
      name: '—',
      description: {
        cn: 'content of Dropdown. Notice: Must be a valid html dom element (ex. <code>&lt;span>, &lt;button> etc.</code>) or <code>el-component</code>, to attach the trigger listener',
        en: 'content of Dropdown. Notice: Must be a valid html dom element (ex. <code>&lt;span>, &lt;button> etc.</code>) or <code>el-component</code>, to attach the trigger listener',
      },
    },
    {
      name: 'dropdown',
      description: {
        cn: 'content of the Dropdown Menu, usually a <code>&lt;el-dropdown-menu></code> element',
        en: 'content of the Dropdown Menu, usually a <code>&lt;el-dropdown-menu></code> element',
      },
    },
  ],
};
export default doc;
