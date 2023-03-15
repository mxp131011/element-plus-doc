import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'mode',
      description: { cn: 'menu display mode', en: 'menu display mode' },
      type: 'string',
      default: 'vertical',
      value: [],
    },
    {
      name: 'collapse',
      description: {
        cn: 'whether the menu is collapsed (available only in vertical mode)',
        en: 'whether the menu is collapsed (available only in vertical mode)',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'ellipsis',
      description: {
        cn: 'whether the menu is ellipsis (available only in horizontal mode)',
        en: 'whether the menu is ellipsis (available only in horizontal mode)',
      },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'background-color',
      description: {
        cn: 'background color of Menu (hex format) (deprecated, use <code>--bg-color</code> instead)',
        en: 'background color of Menu (hex format) (deprecated, use <code>--bg-color</code> instead)',
      },
      type: 'string',
      default: '#ffffff',
      value: [],
    },
    {
      name: 'text-color',
      description: {
        cn: 'text color of Menu (hex format) (deprecated, use <code>--text-color</code> instead)',
        en: 'text color of Menu (hex format) (deprecated, use <code>--text-color</code> instead)',
      },
      type: 'string',
      default: '#303133',
      value: [],
    },
    {
      name: 'active-text-color',
      description: {
        cn: 'text color of currently active menu item (hex format) (deprecated, use <code>--active-color</code> instead)',
        en: 'text color of currently active menu item (hex format) (deprecated, use <code>--active-color</code> instead)',
      },
      type: 'string',
      default: '#409EFF',
      value: [],
    },
    {
      name: 'default-active',
      description: { cn: 'index of active menu on page load', en: 'index of active menu on page load' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'default-openeds',
      description: { cn: 'array that contains indexes of currently active sub-menus', en: 'array that contains indexes of currently active sub-menus' },
      type: 'array',
      default: '—',
      value: [],
    },
    {
      name: 'unique-opened',
      description: { cn: 'whether only one sub-menu can be active', en: 'whether only one sub-menu can be active' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'menu-trigger',
      description: {
        cn: "how sub-menus are triggered, only works when <code>mode</code> is 'horizontal'",
        en: "how sub-menus are triggered, only works when <code>mode</code> is 'horizontal'",
      },
      type: 'string',
      default: 'hover',
      value: [],
    },
    {
      name: 'router',
      description: {
        cn: "whether <code>vue-router</code> mode is activated. If true, index will be used as 'path' to activate the route action. Use with <code>default-active</code> to set the active item on load.",
        en: "whether <code>vue-router</code> mode is activated. If true, index will be used as 'path' to activate the route action. Use with <code>default-active</code> to set the active item on load.",
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'collapse-transition',
      description: { cn: 'whether to enable the collapse transition', en: 'whether to enable the collapse transition' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'popper-effect',
      description: {
        cn: 'Tooltip theme, built-in theme: <code>dark</code> / <code>light</code> when menu is collapsed',
        en: 'Tooltip theme, built-in theme: <code>dark</code> / <code>light</code> when menu is collapsed',
      },
      type: 'string',
      default: 'dark',
      value: [],
    },
  ],
  events: [
    {
      name: 'select',
      description: { cn: 'callback function when menu is activated', en: 'callback function when menu is activated' },
      type: 'function',
      param: '',
    },
    {
      name: 'open',
      description: { cn: 'callback function when sub-menu expands', en: 'callback function when sub-menu expands' },
      type: 'function',
      param: '',
    },
    {
      name: 'close',
      description: { cn: 'callback function when sub-menu collapses', en: 'callback function when sub-menu collapses' },
      type: 'function',
      param: '',
    },
  ],
  exposes: [
    {
      name: 'open',
      description: { cn: 'open a specific sub-menu', en: 'open a specific sub-menu' },
      type: 'function',
      param: '',
    },
    {
      name: 'close',
      description: { cn: 'close a specific sub-menu', en: 'close a specific sub-menu' },
      type: 'function',
      param: '',
    },
  ],
  slots: [
    {
      name: '—',
      description: { cn: 'customize default content', en: 'customize default content' },
    },
  ],
};
export default doc;
