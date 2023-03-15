import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/switch.html',
  attributes: [
    {
      name: 'model-value',
      description: {
        cn: '绑定值，必须等于 `active-value` 或 `inactive-value`，默认为 Boolean 类型',
        en: "binding value, it should be equivalent to either <code>active-value</code> or <code>inactive-value</code>, by default it's <code>boolean</code> type",
      },
      type: ['boolean', 'string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用', en: 'whether Switch is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'loading',
      description: { cn: '是否显示加载中', en: 'whether Switch is in loading state' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'size',
      description: { cn: 'switch 的大小', en: 'size of Switch' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'width',
      description: { cn: 'switch 的宽度', en: 'width of Switch' },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'inline-prompt',
      description: {
        cn: '无论图标或文本是否显示在点内，只会呈现文本的第一个字符',
        en: 'whether icon or text is displayed inside dot, only the first character will be rendered for text',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'active-icon',
      description: {
        cn: 'switch 状态为 `on` 时所显示图标，设置此项会忽略 `active-text`',
        en: 'component of the icon displayed when in <code>on</code> state, overrides <code>active-text</code>',
      },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'inactive-icon',
      description: {
        cn: 'switch 状态为 `off` 时所显示图标，设置此项会忽略 `inactive-text`',
        en: 'component of the icon displayed when in <code>off</code> state, overrides <code>inactive-text</code>',
      },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'active-text',
      description: { cn: 'switch 的状态为 `on` 时的文字描述', en: 'text displayed when in <code>on</code> state' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'inactive-text',
      description: { cn: 'switch 的状态为 `off` 时的文字描述', en: 'text displayed when in <code>off</code> state' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'active-value',
      description: { cn: 'switch 状态为 `on` 时的值', en: 'switch value when in <code>on</code> state' },
      type: ['boolean', 'string', 'number'],
      default: 'true',
      value: [],
    },
    {
      name: 'inactive-value',
      description: { cn: 'switch的状态为 `off` 时的值', en: 'switch value when in <code>off</code> state' },
      type: ['boolean', 'string', 'number'],
      default: 'false',
      value: [],
    },
    {
      name: 'active-color',
      description: {
        cn: '当在 on 状态时的背景颜色( 已废弃，请使用 CSS var(--el-switch-on-color) )',
        en: 'background color when in <code>on</code> state ( deprecated, use CSS var <code>--el-switch-on-color</code> instead )',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'inactive-color',
      description: {
        cn: '当在 `off` 状态时的背景颜色( 已废弃，使用 CSS var(--el-switch-of-color) )',
        en: 'background color when in <code>off</code> state ( deprecated, use CSS var <code>--el-switch-off-color</code> instead )',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'border-color',
      description: {
        cn: '开关的边框颜色 ( 已废弃，使用 CSS var(--el-switch-border-color) )',
        en: 'border color of the switch ( deprecated, use CSS var <code>--el-switch-border-color</code> instead )',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'name',
      description: { cn: 'switch 对应的 name 属性', en: 'input name of Switch' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'validate-event',
      description: { cn: '改变 switch 状态时是否触发表单的校验', en: 'whether to trigger form validation' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'before-change',
      description: {
        cn: 'switch 状态改变前的钩子， 返回 `false` 或者返回 `Promise` 且被 reject 则停止切换,TS类型：() => Promise<boolean> | boolean',
        en: 'before-change hook before the switch state changes. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, will stop switching,TS Type：() => Promise<boolean> | boolean',
      },
      type: 'function',
      default: '—',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: 'switch 状态发生变化时的回调函数', en: 'triggers when value changes' },
      type: 'function',
      param: 'val，新状态的值',
    },
  ],
  exposes: [
    {
      name: 'focus',
      description: { cn: '使 Switch 获取焦点', en: 'focus the Switch component' },
      type: 'function',
      param: '',
    },
  ],
};
export default doc;
