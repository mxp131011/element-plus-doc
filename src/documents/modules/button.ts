import type { TagDoc } from '@/types/tag-doc';

const doc: TagDoc.TagDocInstance = {
  url: 'component/button.html',
  attributes: [
    {
      name: 'size',
      description: {
        cn: '尺寸',
        en: 'button size',
      },
      type: 'enum',
      default: '',
      value: ['large', 'default', 'small'],
    },
    {
      name: 'type',
      description: {
        cn: '类型',
        en: 'button type',
      },
      type: 'enum',
      default: '',
      value: ['primary', 'success', 'warning', 'danger', 'info'],
    },
    {
      name: 'plain',
      description: {
        cn: '是否为朴素按钮',
        en: "determine whether it's a plain button",
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'text',
      description: {
        cn: '是否为文字按钮',
        en: "determine whether it's a text button",
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'bg',
      description: {
        cn: '是否显示文字按钮背景颜色',
        en: 'determine whether the text button background color is always on',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'link',
      description: {
        cn: '是否为链接按钮',
        en: "determine whether it's a link button",
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'round',
      description: {
        cn: '是否为圆角按钮',
        en: "determine whether it's a round button",
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'circle',
      description: {
        cn: '是否为圆形按钮',
        en: "determine whether it's a circle button",
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'loading',
      description: {
        cn: '是否为加载中状态',
        en: 'customize loading icon component',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'loading-icon',
      description: {
        cn: '自定义加载中状态图标组件',
        en: 'customize loading icon component',
      },
      type: ['string', 'Component'],
      default: 'Loading',
      value: [],
    },
    {
      name: 'disabled',
      description: {
        cn: '按钮是否为禁用状态',
        en: 'disable the button',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'icon',
      description: {
        cn: '图标组件',
        en: 'icon class name',
      },
      type: ['string', 'Component'],
      default: '',
      value: [],
    },
    {
      name: 'autofocus',
      description: {
        cn: '原生 `autofocus` 属性',
        en: "same as native button's `autofocus`",
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'native-type',
      description: {
        cn: '原生 `type` 属性',
        en: "same as native button's `type`",
      },
      type: 'enum',
      default: '',
      value: ['button', 'submit', 'reset'],
    },
    {
      name: 'auto-insert-space',
      description: {
        cn: '自动在两个中文字符之间插入空格',
        en: 'automatically insert a space between two chinese characters',
      },
      type: 'boolean',
      default: '',
      value: [],
    },
    {
      name: 'color',
      description: {
        cn: '自定义按钮颜色, 并自动计算 `hover` 和 `active` 触发后的颜色',
        en: 'custom button color, automatically calculate `hover` and active `color`',
      },
      type: 'string',
      default: '',
      value: [],
    },
    {
      name: 'dark',
      description: {
        cn: 'dark 模式, 意味着自动设置 `color` 为 dark 模式的颜色',
        en: 'dark mode, which automatically converts `color` to dark mode colors',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: {
        cn: '自定义默认内容',
        en: 'customize default content',
      },
    },
    {
      name: 'loading',
      description: {
        cn: '自定义加载中组件',
        en: 'customize loading component',
      },
    },
    {
      name: 'icon',
      description: {
        cn: '自定义图标组件',
        en: 'customize icon component',
      },
    },
  ],
  exposes: [
    {
      name: 'ref',
      description: {
        cn: '按钮 html 元素',
        en: 'button html element',
      },
      type: 'object',
      tsType: 'Ref<HTMLButtonElement>',
    },
    {
      name: 'size',
      description: {
        cn: '按钮尺寸',
        en: 'button size',
      },
      type: 'object',
      tsType: `ComputedRef<'' | 'small' | 'default' | 'large'>`,
    },
    {
      name: 'type',
      description: {
        cn: '按钮类型',
        en: 'button type',
      },
      type: `object`,
      tsType: `ComputedRef<'' | 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text'>`,
    },
    {
      name: 'disabled',
      description: {
        cn: '按钮禁用状态',
        en: 'button disabled',
      },
      type: 'object',
      tsType: 'ComputedRef<boolean>',
    },
    {
      name: 'shouldAddSpace',
      description: {
        cn: '是否在两个字符之间插入空格',
        en: 'whether adding space',
      },
      type: 'object',
      tsType: 'ComputedRef<boolean>',
    },
  ],
};

export default doc;
