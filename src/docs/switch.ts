import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'model-value / v-model',
      description: {
        cn: "binding value, it should be equivalent to either <code>active-value</code> or <code>inactive-value</code>, by default it's <code>boolean</code> type",
        en: "binding value, it should be equivalent to either <code>active-value</code> or <code>inactive-value</code>, by default it's <code>boolean</code> type",
      },
      type: 'boolean / string / number',
      default: '—',
      value: [],
    },
    { name: 'disabled', description: { cn: 'whether Switch is disabled', en: 'whether Switch is disabled' }, type: 'boolean', default: 'false', value: [] },
    {
      name: 'loading',
      description: { cn: 'whether Switch is in loading state', en: 'whether Switch is in loading state' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    { name: 'size', description: { cn: 'size of Switch', en: 'size of Switch' }, type: 'string', default: 'default', value: [] },
    { name: 'width', description: { cn: 'width of Switch', en: 'width of Switch' }, type: 'number / string', default: '—', value: [] },
    {
      name: 'inline-prompt',
      description: {
        cn: 'whether icon or text is displayed inside dot, only the first character will be rendered for text',
        en: 'whether icon or text is displayed inside dot, only the first character will be rendered for text',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'active-icon',
      description: {
        cn: 'component of the icon displayed when in <code>on</code> state, overrides <code>active-text</code>',
        en: 'component of the icon displayed when in <code>on</code> state, overrides <code>active-text</code>',
      },
      type: '`string',
      default: '—',
      value: [],
    },
    {
      name: 'inactive-icon',
      description: {
        cn: 'component of the icon displayed when in <code>off</code> state, overrides <code>inactive-text</code>',
        en: 'component of the icon displayed when in <code>off</code> state, overrides <code>inactive-text</code>',
      },
      type: '`string',
      default: '—',
      value: [],
    },
    {
      name: 'active-text',
      description: { cn: 'text displayed when in <code>on</code> state', en: 'text displayed when in <code>on</code> state' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'inactive-text',
      description: { cn: 'text displayed when in <code>off</code> state', en: 'text displayed when in <code>off</code> state' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'active-value',
      description: { cn: 'switch value when in <code>on</code> state', en: 'switch value when in <code>on</code> state' },
      type: 'boolean / string / number',
      default: 'true',
      value: [],
    },
    {
      name: 'inactive-value',
      description: { cn: 'switch value when in <code>off</code> state', en: 'switch value when in <code>off</code> state' },
      type: 'boolean / string / number',
      default: 'false',
      value: [],
    },
    {
      name: 'active-color',
      description: {
        cn: 'background color when in <code>on</code> state ( deprecated, use CSS var <code>--el-switch-on-color</code> instead )',
        en: 'background color when in <code>on</code> state ( deprecated, use CSS var <code>--el-switch-on-color</code> instead )',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'inactive-color',
      description: {
        cn: 'background color when in <code>off</code> state ( deprecated, use CSS var <code>--el-switch-off-color</code> instead )',
        en: 'background color when in <code>off</code> state ( deprecated, use CSS var <code>--el-switch-off-color</code> instead )',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'border-color',
      description: {
        cn: 'border color of the switch ( deprecated, use CSS var <code>--el-switch-border-color</code> instead )',
        en: 'border color of the switch ( deprecated, use CSS var <code>--el-switch-border-color</code> instead )',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    { name: 'name', description: { cn: 'input name of Switch', en: 'input name of Switch' }, type: 'string', default: '—', value: [] },
    {
      name: 'validate-event',
      description: { cn: 'whether to trigger form validation', en: 'whether to trigger form validation' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'before-change',
      description: {
        cn: 'before-change hook before the switch state changes. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, will stop switching',
        en: 'before-change hook before the switch state changes. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, will stop switching',
      },
      type: '`() => promise<boolean></boolean>',
      default: '—',
      value: [],
    },
  ],
  events: [{ name: 'change', description: { cn: 'triggers when value changes', en: 'triggers when value changes' }, type: 'function', param: '' }],
  exposes: [{ name: 'focus', description: { cn: 'focus the Switch component', en: 'focus the Switch component' }, type: 'function', param: '' }],
};
export default doc;
