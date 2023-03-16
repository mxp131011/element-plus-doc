import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/menu.html#submenu-attributes',
  attributes: [
    {
      name: 'index',
      description: { cn: '唯一标志', en: 'unique identification' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'popper-class',
      description: { cn: '为 popper 添加类名', en: 'custom class name for the popup menu' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'show-timeout',
      description: { cn: '展开 sub-menu 的延时', en: 'timeout before showing a sub-menu' },
      type: 'number',
      default: '300',
      value: [],
    },
    {
      name: 'hide-timeout',
      description: { cn: '收起 sub-menu 的延时', en: 'timeout before hiding a sub-menu' },
      type: 'number',
      default: '300',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用', en: 'whether the sub-menu is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'popper-append-to-body',
      description: {
        cn: '是否将弹出菜单插入至 body 元素。 在菜单的定位出现问题时，可尝试修改该属性 （已废弃）',
        en: 'whether to append the popup menu to body. If the positioning of the menu is wrong, you can try setting this prop',
      },
      type: 'boolean',
      default: 'level one SubMenu: true / other SubMenus: false',
      value: [],
    },
    {
      name: 'teleported',
      description: {
        cn: '是否将 popup 的下拉列表插入至 body 元素. (一级子菜单：true / 非一级子菜单：false)',
        en: 'whether popup menu is teleported to the body.(level one SubMenu: true / other SubMenus: false)',
      },
      type: 'boolean',
      default: '',
      value: [],
    },
    {
      name: 'popper-offset',
      description: { cn: '弹出窗口偏移', en: 'offset of the popper' },
      type: 'number',
      default: '6',
      value: [],
    },
    {
      name: 'expand-close-icon',
      description: {
        cn: '父菜单展开且子菜单关闭时的图标， `expand-close-icon` 和 `expand-open-icon` 需要一起配置才能生效',
        en: 'Icon when menu are expanded and submenu are closed, `expand-close-icon` and `expand-open-icon` need to be passed together to take effect',
      },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'expand-open-icon',
      description: {
        cn: '父菜单展开且子菜单打开时的图标， `expand-open-icon` 和 `expand-close-icon` 需要一起配置才能生效',
        en: 'Icon when menu are expanded and submenu are opened, `expand-open-icon` and `expand-close-icon` need to be passed together to take effect',
      },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'collapse-close-icon',
      description: {
        cn: '父菜单收起且子菜单关闭时的图标， `expand-close-icon` 和 `expand-open-icon` 需要一起配置才能生效',
        en: 'Icon when menu are collapsed and submenu are closed, `collapse-close-icon` and `collapse-open-icon` need to be passed together to take effect',
      },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'collapse-open-icon',
      description: {
        cn: '父菜单收起且子菜单打开时的图标， `expand-open-icon` 和 `expand-close-icon` 需要一起配置才能生效',
        en: 'Icon when menu are collapsed and submenu are opened, `collapse-open-icon` and `collapse-close-icon` need to be passed together to take effect',
      },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: 'customize default content', en: 'customize default content' },
      subtags: ['SubMenu', 'Menu-Item', 'Menu-Item-Group'],
    },
    {
      name: 'title',
      description: { cn: '自定义标题内容', en: 'customize title content' },
    },
  ],
};
export default doc;
