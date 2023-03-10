import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'model-value / v-model', description: { cn: 'binding value', en: 'binding value' }, type: 'array', default: '—', value: [] },
    { name: 'data', description: { cn: 'data source', en: 'data source' }, type: '<code>array&lt;{ key, label, disabled }></code>', default: '[ ]', value: [] },
    {
      name: 'filterable',
      description: { cn: 'whether Transfer is filterable', en: 'whether Transfer is filterable' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'filter-placeholder',
      description: { cn: 'placeholder for the filter input', en: 'placeholder for the filter input' },
      type: 'string',
      default: 'Enter keyword',
      value: [],
    },
    { name: 'filter-method', description: { cn: 'custom filter method', en: 'custom filter method' }, type: 'function', default: '—', value: [] },
    {
      name: 'target-order',
      description: {
        cn: 'order strategy for elements in the target list. If set to <code>original</code>, the elements will keep the same order as the data source. If set to <code>push</code>, the newly added elements will be pushed to the bottom. If set to <code>unshift</code>, the newly added elements will be inserted on the top',
        en: 'order strategy for elements in the target list. If set to <code>original</code>, the elements will keep the same order as the data source. If set to <code>push</code>, the newly added elements will be pushed to the bottom. If set to <code>unshift</code>, the newly added elements will be inserted on the top',
      },
      type: 'string',
      default: 'original',
      value: [],
    },
    { name: 'titles', description: { cn: 'custom list titles', en: 'custom list titles' }, type: 'array', default: "['List 1', 'List 2']", value: [] },
    { name: 'button-texts', description: { cn: 'custom button texts', en: 'custom button texts' }, type: 'array', default: '[ ]', value: [] },
    {
      name: 'render-content',
      description: { cn: 'custom render function for data items', en: 'custom render function for data items' },
      type: 'function(h, option)',
      default: '—',
      value: [],
    },
    {
      name: 'format',
      description: { cn: 'texts for checking status in list header', en: 'texts for checking status in list header' },
      type: '<code>{ nochecked, haschecked }</code>',
      default: '—',
      value: [],
    },
    {
      name: 'props',
      description: { cn: 'prop aliases for data source', en: 'prop aliases for data source' },
      type: '<code>{ key, label, disabled }</code>',
      default: '—',
      value: [],
    },
    {
      name: 'left-default-checked',
      description: { cn: 'key array of initially checked data items of the left list', en: 'key array of initially checked data items of the left list' },
      type: 'array',
      default: '[ ]',
      value: [],
    },
    {
      name: 'right-default-checked',
      description: { cn: 'key array of initially checked data items of the right list', en: 'key array of initially checked data items of the right list' },
      type: 'array',
      default: '[ ]',
      value: [],
    },
    {
      name: 'validate-event',
      description: { cn: 'whether to trigger form validation', en: 'whether to trigger form validation' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: 'triggers when data items change in the right list', en: 'triggers when data items change in the right list' },
      type: '',
      tsType: '',
    },
    {
      name: 'left-check-change',
      description: {
        cn: 'triggers when end user changes the checked state of any data item in the left list',
        en: 'triggers when end user changes the checked state of any data item in the left list',
      },
      type: '',
      tsType: '',
    },
    {
      name: 'right-check-change',
      description: {
        cn: 'triggers when end user changes the checked state of any data item in the right list',
        en: 'triggers when end user changes the checked state of any data item in the right list',
      },
      type: '',
      tsType: '',
    },
  ],
  exposes: [
    {
      name: 'clearQuery',
      description: { cn: 'clear the filter keyword of a certain panel', en: 'clear the filter keyword of a certain panel' },
      type: '',
      tsType: '',
    },
  ],
  slots: [
    {
      name: '—',
      description: {
        cn: 'Custom content for data items. The scope parameter is { option }',
        en: 'Custom content for data items. The scope parameter is { option }',
      },
    },
    { name: 'left-footer', description: { cn: 'content of left list footer', en: 'content of left list footer' } },
    { name: 'right-footer', description: { cn: 'content of right list footer', en: 'content of right list footer' } },
  ],
};
export default doc;
