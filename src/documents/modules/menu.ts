import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/menu.html',
  attributes: [
    {
      name: 'mode',
      description: { cn: '菜单展示模式', en: 'menu display mode' },
      type: 'enum',
      default: "'vertical'",
      value: ['horizontal', 'vertical'],
    },
    {
      name: 'collapse',
      description: {
        cn: '是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）',
        en: 'whether the menu is collapsed (available only in vertical mode)',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'ellipsis',
      description: {
        cn: '是否省略多余的子项（仅在横向模式生效）',
        en: 'whether the menu is ellipsis (available only in horizontal mode)',
      },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'background-color',
      description: {
        cn: '菜单的背景颜色（十六进制格式）（已被废弃，使用--bg-color）',
        en: 'background color of Menu (hex format) (deprecated, use <code>--bg-color</code> instead)',
      },
      type: 'string',
      default: '#ffffff',
      value: [],
    },
    {
      name: 'text-color',
      description: {
        cn: '文字颜色（十六进制格式）（已被废弃，使用--text-color）',
        en: 'text color of Menu (hex format) (deprecated, use <code>--text-color</code> instead)',
      },
      type: 'string',
      default: '#303133',
      value: [],
    },
    {
      name: 'active-text-color',
      description: {
        cn: '活动菜单项的文本颜色（十六进制格式）（已被废弃，使用--active-color）',
        en: 'text color of currently active menu item (hex format) (deprecated, use <code>--active-color</code> instead)',
      },
      type: 'string',
      default: '#409EFF',
      value: [],
    },
    {
      name: 'default-active',
      description: { cn: '页面加载时默认激活菜单的 index', en: 'index of active menu on page load' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'default-openeds',
      description: { cn: '默认打开的 sub-menu 的 index 的数组', en: 'array that contains indexes of currently active sub-menus' },
      type: 'array',
      default: '—',
      value: [],
    },
    {
      name: 'unique-opened',
      description: { cn: '是否只保持一个子菜单的展开', en: 'whether only one sub-menu can be active' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'menu-trigger',
      description: {
        cn: '子菜单打开的触发方式，只在 mode 为 horizontal 时有效。',
        en: "how sub-menus are triggered, only works when <code>mode</code> is 'horizontal'",
      },
      type: 'enum',
      default: "'hover'",
      value: ['hover', 'click'],
    },
    {
      name: 'router',
      description: {
        cn: '是否启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 使用 default-active 来设置加载时的激活项。',
        en: "whether <code>vue-router</code> mode is activated. If true, index will be used as 'path' to activate the route action. Use with <code>default-active</code> to set the active item on load.",
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'collapse-transition',
      description: { cn: '是否开启折叠动画', en: 'whether to enable the collapse transition' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'popper-effect',
      description: {
        cn: 'Tooltip 主题，内置了 `dark` / `light` 两种主题',
        en: 'Tooltip theme, built-in theme: <code>dark</code> / <code>light</code> when menu is collapsed',
      },
      type: 'enum',
      default: "'dark'",
      value: ['dark', 'light'],
    },
  ],
  events: [
    {
      name: 'select',
      description: { cn: '菜单激活回调', en: 'callback function when menu is activated' },
      type: 'function',
      param: 'index: 选中菜单项的 index, indexPath: 选中菜单项的 index path, item: 选中菜单项, routeResult: vue-router 的返回值（如果 router 为 true）',
    },
    {
      name: 'open',
      description: { cn: 'sub-menu 展开的回调', en: 'callback function when sub-menu expands' },
      type: 'function',
      param: 'index: 打开的 sub-menu 的 index, indexPath: 打开的 sub-menu 的 index path',
    },
    {
      name: 'close',
      description: { cn: 'sub-menu 收起的回调', en: 'callback function when sub-menu collapses' },
      type: 'function',
      param: 'index: 收起的 sub-menu 的 index, indexPath: 收起的 sub-menu 的 index path',
    },
  ],
  exposes: [
    {
      name: 'open',
      description: { cn: '展开指定的 sub-menu', en: 'open a specific sub-menu' },
      type: 'function',
      param: 'index: 需要打开的 sub-menu 的 index',
    },
    {
      name: 'close',
      description: { cn: '收起指定的 sub-menu', en: 'close a specific sub-menu' },
      type: 'function',
      param: 'index: 需要收起的 sub-menu 的 index',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
      subtags: ['SubMenu', 'Menu-Item', 'Menu-Item-Group'],
    },
  ],
};
export default doc;
