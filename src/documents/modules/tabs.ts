import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/tabs.html',
  attributes: [
    {
      name: 'model-value',
      description: { cn: '绑定值，选中选项卡的 name', en: 'binding value, name of the selected tab' },
      type: ['string', 'number'],
      default: '-',
      value: [],
    },
    {
      name: 'type',
      description: { cn: '风格类型', en: 'type of Tab' },
      type: 'string',
      default: '—',
      value: ['border-card', 'card'],
    },
    {
      name: 'closable',
      description: { cn: '标签是否可关闭', en: 'whether Tab is closable' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'addable',
      description: { cn: '标签是否可增加', en: 'whether Tab is addable' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'editable',
      description: { cn: '标签是否同时可增加和关闭', en: 'whether Tab is addable and closable' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'tab-position',
      description: { cn: '选项卡所在位置', en: 'position of tabs' },
      type: 'string',
      default: "'top'",
      value: ['top', 'right', 'bottom', 'left'],
    },
    {
      name: 'stretch',
      description: { cn: '标签的宽度是否自撑开', en: 'whether width of tab automatically fits its container' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'before-leave',
      description: {
        cn: '切换标签之前的钩子函数， 若返回 `false`  或者返回被 reject 的 `Promise`，则阻止切换。',
        en: 'hook function before switching tab. If `false` is returned or a `Promise` is returned and then is rejected, switching will be prevented',
      },
      type: 'function(activename, oldactivename)',
      default: '—',
      value: [],
    },
  ],
  events: [
    {
      name: 'tab-click',
      description: { cn: 'tab 被选中时触发', en: 'triggers when a tab is clicked' },
      type: 'function',
      param: '(pane: TabsPaneContext, ev: Event)',
    },
    {
      name: 'tab-change',
      description: { cn: '`activeName` 改变时触发', en: 'triggers when `activeName` is changed' },
      type: 'function',
      param: '(name: TabPaneName)',
    },
    {
      name: 'tab-remove',
      description: { cn: '点击 tab 移除按钮时触发', en: 'triggers when tab-remove button is clicked' },
      type: 'function',
      param: '(name: TabPaneName)',
    },
    {
      name: 'tab-add',
      description: { cn: '点击 tab 新增按钮时触发', en: 'triggers when tab-add button is clicked' },
      type: 'function',
      param: '',
    },
    {
      name: 'edit',
      description: { cn: '点击 tab 的新增或移除按钮后触发', en: 'triggers when tab-add button or tab-remove is clicked' },
      type: 'function',
      param: "(paneName: TabPaneName &#124; undefined, action: 'remove' &#124; 'add')",
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '默认插槽', en: 'customize default content' },
      subtags: ['Tab-pane'],
    },
  ],
};
export default doc;
