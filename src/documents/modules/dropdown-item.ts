import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/dropdown.html#dropdown-item-attributes',
  attributes: [
    {
      name: 'command',
      description: {
        cn: '派发到 `command` 回调函数的指令参数',
        en: "a command to be dispatched to Dropdown's `command` callback",
      },
      type: ['string', 'number', 'object'],
      default: '—',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用', en: 'whether the item is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'divided',
      description: { cn: '是否显示分隔符', en: 'whether a divider is displayed' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'icon',
      description: { cn: '自定义图标', en: 'custom icon' },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义Dropdown-Item内容', en: 'customize of Dropdown Item' },
    },
  ],
};
export default doc;
