import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'index',
      description: { cn: 'unique identification', en: 'unique identification' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'popper-class',
      description: { cn: 'custom class name for the popup menu', en: 'custom class name for the popup menu' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'show-timeout',
      description: { cn: 'timeout before showing a sub-menu', en: 'timeout before showing a sub-menu' },
      type: 'number',
      default: '300',
      value: [],
    },
    {
      name: 'hide-timeout',
      description: { cn: 'timeout before hiding a sub-menu', en: 'timeout before hiding a sub-menu' },
      type: 'number',
      default: '300',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: 'whether the sub-menu is disabled', en: 'whether the sub-menu is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'popper-append-to-body(deprecated)',
      description: {
        cn: 'whether to append the popup menu to body. If the positioning of the menu is wrong, you can try setting this prop',
        en: 'whether to append the popup menu to body. If the positioning of the menu is wrong, you can try setting this prop',
      },
      type: 'boolean',
      default: 'level one SubMenu: true / other SubMenus: false',
      value: [],
    },
    {
      name: 'teleported',
      description: { cn: 'whether popup menu is teleported to the body', en: 'whether popup menu is teleported to the body' },
      type: 'boolean',
      default: 'level one SubMenu: true / other SubMenus: false',
      value: [],
    },
    {
      name: 'popper-offset',
      description: { cn: 'offset of the popper', en: 'offset of the popper' },
      type: 'number',
      default: '6',
      value: [],
    },
    {
      name: 'expand-close-icon',
      description: {
        cn: 'Icon when menu are expanded and submenu are closed, <code>expand-close-icon</code> and <code>expand-open-icon</code> need to be passed together to take effect',
        en: 'Icon when menu are expanded and submenu are closed, <code>expand-close-icon</code> and <code>expand-open-icon</code> need to be passed together to take effect',
      },
      type: '`string',
      default: '—',
      value: [],
    },
    {
      name: 'expand-open-icon',
      description: {
        cn: 'Icon when menu are expanded and submenu are opened, <code>expand-open-icon</code> and <code>expand-close-icon</code> need to be passed together to take effect',
        en: 'Icon when menu are expanded and submenu are opened, <code>expand-open-icon</code> and <code>expand-close-icon</code> need to be passed together to take effect',
      },
      type: '`string',
      default: '—',
      value: [],
    },
    {
      name: 'collapse-close-icon',
      description: {
        cn: 'Icon when menu are collapsed and submenu are closed, <code>collapse-close-icon</code> and <code>collapse-open-icon</code> need to be passed together to take effect',
        en: 'Icon when menu are collapsed and submenu are closed, <code>collapse-close-icon</code> and <code>collapse-open-icon</code> need to be passed together to take effect',
      },
      type: '`string',
      default: '—',
      value: [],
    },
    {
      name: 'collapse-open-icon',
      description: {
        cn: 'Icon when menu are collapsed and submenu are opened, <code>collapse-open-icon</code> and <code>collapse-close-icon</code> need to be passed together to take effect',
        en: 'Icon when menu are collapsed and submenu are opened, <code>collapse-open-icon</code> and <code>collapse-close-icon</code> need to be passed together to take effect',
      },
      type: '`string',
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: 'customize default content', en: 'customize default content' },
    },
    {
      name: 'title',
      description: { cn: 'customize title content', en: 'customize title content' },
    },
  ],
};
export default doc;
