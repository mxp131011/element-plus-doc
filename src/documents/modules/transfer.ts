import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/transfer.html',
  attributes: [
    {
      name: 'model-value',
      description: { cn: '选中项绑定值', en: 'binding value' },
      type: 'array',
      default: '—',
      value: [],
    },
    {
      name: 'data',
      description: { cn: 'Transfer 的数据源. TS类型：Array<{ key, label, disabled }>', en: 'data source. TS Type：Array<{ key, label, disabled }>' },
      type: 'array',
      default: '[ ]',
      value: [],
    },
    {
      name: 'filterable',
      description: { cn: '是否可搜索', en: 'whether Transfer is filterable' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'filter-placeholder',
      description: { cn: '搜索框占位符', en: 'placeholder for the filter input' },
      type: 'string',
      default: 'Enter keyword',
      value: [],
    },
    {
      name: 'filter-method',
      description: { cn: '自定义搜索方法', en: 'custom filter method' },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: 'target-order',
      description: {
        cn: '右侧列表元素的排序策略： 若为 `original`，则保持与数据源相同的顺序； 若为 `push` ，则新加入的元素排在最后； 若为 `unshift` ，则新加入的元素排在最前',
        en: 'order strategy for elements in the target list. If set to `original`, the elements will keep the same order as the data source. If set to `push`, the newly added elements will be pushed to the bottom. If set to `unshift`, the newly added elements will be inserted on the top',
      },
      type: 'enum',
      default: 'original',
      value: ['original', 'push', 'unshift'],
    },
    {
      name: 'titles',
      description: { cn: '自定义列表标题', en: 'custom list titles' },
      type: 'array',
      default: "['List 1', 'List 2']",
      value: [],
    },
    {
      name: 'button-texts',
      description: { cn: '自定义按钮文案', en: 'custom button texts' },
      type: 'array',
      default: '[ ]',
      value: [],
    },
    {
      name: 'render-content',
      description: { cn: '自定义数据项渲染函数', en: 'custom render function for data items' },
      type: 'function(h, option)',
      default: '—',
      value: [],
    },
    {
      name: 'format',
      description: {
        cn: '列表顶部勾选状态文案. TS类型：{ noChecked, hasChecked }',
        en: 'texts for checking status in list header. TS Type：{ noChecked, hasChecked }',
      },
      type: 'object',
      default: '—',
      value: [],
    },
    {
      name: 'props',
      description: { cn: '数据源的字段别名. TS类型：{ key, label, disabled }', en: 'prop aliases for data source. TS Type：{ key, label, disabled }' },
      type: 'object',
      default: '—',
      value: [],
    },
    {
      name: 'left-default-checked',
      description: { cn: '初始状态下左侧列表的已勾选项的 key 数组', en: 'key array of initially checked data items of the left list' },
      type: 'array',
      default: '[]',
      value: [],
    },
    {
      name: 'right-default-checked',
      description: { cn: '初始状态下右侧列表的已勾选项的 key 数组', en: 'key array of initially checked data items of the right list' },
      type: 'array',
      default: '[]',
      value: [],
    },
    {
      name: 'validate-event',
      description: { cn: '是否触发表单验证', en: 'whether to trigger form validation' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: '右侧列表元素变化时触发', en: 'triggers when data items change in the right list' },
      type: 'function',
      param: "当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组",
    },
    {
      name: 'left-check-change',
      description: {
        cn: '左侧列表元素被用户选中 / 取消选中时触发',
        en: 'triggers when end user changes the checked state of any data item in the left list',
      },
      type: 'function',
      param: '当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组',
    },
    {
      name: 'right-check-change',
      description: {
        cn: '右侧列表元素被用户选中 / 取消选中时触发',
        en: 'triggers when end user changes the checked state of any data item in the right list',
      },
      type: 'function',
      param: '当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组',
    },
  ],
  exposes: [
    {
      name: 'clearQuery',
      description: { cn: '清空某个面板的搜索关键词', en: 'clear the filter keyword of a certain panel' },
      type: 'function',
      param: "'left' / 'right'",
    },
  ],
  slots: [
    {
      name: '—',
      description: {
        cn: '自定义数据项的内容,参数为 { option }',
        en: 'Custom content for data items. The scope parameter is { option }',
      },
    },
    {
      name: 'left-footer',
      description: { cn: '左侧列表底部的内容', en: 'content of left list footer' },
    },
    {
      name: 'right-footer',
      description: { cn: '右侧列表底部的内容', en: 'content of right list footer' },
    },
  ],
};
export default doc;
