import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'model-value / v-model', description: { cn: 'binding value', en: 'binding value' }, type: 'string', default: 'number[]', value: ['number'] },
    {
      name: 'options',
      description: {
        cn: 'data of the options, the key of <code>value</code> and <code>label</code> can be customize by <code>CascaderProps</code>.',
        en: 'data of the options, the key of <code>value</code> and <code>label</code> can be customize by <code>CascaderProps</code>.',
      },
      type: 'object',
      default: '—',
      value: ['codeRecordltstringunknowngt'],
    },
    {
      name: 'props',
      description: {
        cn: 'configuration options, see the following <code>CascaderProps</code> table.',
        en: 'configuration options, see the following <code>CascaderProps</code> table.',
      },
      type: 'object',
      default: '—',
      value: ['codeCascaderPropscode'],
    },
    { name: 'size', description: { cn: 'size of input', en: 'size of input' }, type: 'enum', default: "'default'", value: ['large'] },
    { name: 'placeholder', description: { cn: 'placeholder of input', en: 'placeholder of input' }, type: 'string', default: '—', value: [''] },
    { name: 'disabled', description: { cn: 'whether Cascader is disabled', en: 'whether Cascader is disabled' }, type: 'boolean', default: '—', value: [''] },
    {
      name: 'clearable',
      description: { cn: 'whether selected value can be cleared', en: 'whether selected value can be cleared' },
      type: 'boolean',
      default: '—',
      value: [''],
    },
    {
      name: 'show-all-levels',
      description: {
        cn: 'whether to display all levels of the selected value in the input',
        en: 'whether to display all levels of the selected value in the input',
      },
      type: 'boolean',
      default: 'true',
      value: [''],
    },
    {
      name: 'collapse-tags',
      description: { cn: 'whether to collapse tags in multiple selection mode', en: 'whether to collapse tags in multiple selection mode' },
      type: 'boolean',
      default: '—',
      value: [''],
    },
    {
      name: 'collapse-tags-tooltip',
      description: {
        cn: 'whether show all selected tags when mouse hover text of collapse-tags. To use this, <code>collapse-tags</code> must be true',
        en: 'whether show all selected tags when mouse hover text of collapse-tags. To use this, <code>collapse-tags</code> must be true',
      },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    { name: 'separator', description: { cn: 'option label separator', en: 'option label separator' }, type: 'string', default: "' / '", value: [''] },
    {
      name: 'filterable',
      description: { cn: 'whether the options can be searched', en: 'whether the options can be searched' },
      type: 'boolean',
      default: '—',
      value: [''],
    },
    {
      name: 'filter-method',
      description: {
        cn: 'customize search logic, the first parameter is <code>node</code>, the second is <code>keyword</code>, and need return a boolean value indicating whether it hits.',
        en: 'customize search logic, the first parameter is <code>node</code>, the second is <code>keyword</code>, and need return a boolean value indicating whether it hits.',
      },
      type: 'function',
      default: '—',
      value: ['codenodeCascaderNodekeywordstringgtbooleancode'],
    },
    {
      name: 'debounce',
      description: { cn: 'debounce delay when typing filter keyword, in milliseconds', en: 'debounce delay when typing filter keyword, in milliseconds' },
      type: 'number',
      default: '300',
      value: [''],
    },
    {
      name: 'before-filter',
      description: {
        cn: 'hook function before filtering with the value to be filtered as its parameter. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, filtering will be aborted',
        en: 'hook function before filtering with the value to be filtered as its parameter. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, filtering will be aborted',
      },
      type: 'function',
      default: '—',
      value: ['codevaluestringgtbooleancode'],
    },
    {
      name: 'popper-class',
      description: { cn: "custom class name for Cascader's dropdown", en: "custom class name for Cascader's dropdown" },
      type: 'string',
      default: "''",
      value: [''],
    },
    {
      name: 'teleported',
      description: { cn: 'whether cascader popup is teleported', en: 'whether cascader popup is teleported' },
      type: 'boolean',
      default: 'true',
      value: [''],
    },
    {
      name: 'popper-append-to-body ^(deprecated)',
      description: {
        cn: 'whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false',
        en: 'whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false',
      },
      type: 'boolean',
      default: 'true',
      value: [''],
    },
    { name: 'tag-type', description: { cn: 'tag type', en: 'tag type' }, type: 'enum', default: "'info'", value: ['success'] },
    {
      name: 'validate-event',
      description: { cn: 'whether to trigger form validation', en: 'whether to trigger form validation' },
      type: 'boolean',
      default: 'true',
      value: [''],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: 'triggers when the binding value changes', en: 'triggers when the binding value changes' },
      type: 'function',
      param: '',
    },
    {
      name: 'expand-change',
      description: { cn: 'triggers when expand option changes', en: 'triggers when expand option changes' },
      type: 'function',
      param: '',
    },
    { name: 'blur', description: { cn: 'triggers when Cascader blurs', en: 'triggers when Cascader blurs' }, type: 'function', param: '' },
    { name: 'focus', description: { cn: 'triggers when Cascader focuses', en: 'triggers when Cascader focuses' }, type: 'function', param: '' },
    {
      name: 'visible-change',
      description: { cn: 'triggers when the dropdown appears/disappears', en: 'triggers when the dropdown appears/disappears' },
      type: 'function',
      param: '',
    },
    {
      name: 'remove-tag',
      description: { cn: 'triggers when remove tag in multiple selection mode', en: 'triggers when remove tag in multiple selection mode' },
      type: 'function',
      param: '',
    },
  ],
  exposes: [
    {
      name: 'getCheckedNodes',
      description: {
        cn: 'get an array of currently selected node,(leafOnly) whether only return the leaf checked nodes, default is <code>false</code>',
        en: 'get an array of currently selected node,(leafOnly) whether only return the leaf checked nodes, default is <code>false</code>',
      },
      type: 'function',
      param: '',
    },
    { name: 'cascaderPanelRef', description: { cn: 'cascader panel ref', en: 'cascader panel ref' }, type: 'object', param: '' },
    {
      name: 'togglePopperVisible',
      description: { cn: 'toggle the visible type of popper', en: 'toggle the visible type of popper' },
      type: 'function',
      param: '',
    },
  ],
  slots: [
    {
      name: 'default',
      description: {
        cn: 'the custom content of cascader node, which are current Node object and node data respectively.',
        en: 'the custom content of cascader node, which are current Node object and node data respectively.',
      },
    },
    { name: 'empty', description: { cn: 'content when there is no matched options.', en: 'content when there is no matched options.' } },
  ],
};
export default doc;
