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
  ],
  events: [
    {
      name: 'change',
      description: { cn: 'triggers when the binding value changes', en: 'triggers when the binding value changes' },
      type: 'function',
      tsType: '',
    },
    {
      name: 'expand-change',
      description: { cn: 'triggers when expand option changes', en: 'triggers when expand option changes' },
      type: 'function',
      tsType: '',
    },
    {
      name: 'close',
      description: {
        cn: 'close panel event, provided to Cascader to put away the panel judgment.',
        en: 'close panel event, provided to Cascader to put away the panel judgment.',
      },
      type: 'function',
      tsType: '',
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
      tsType: '',
    },
    { name: 'clearCheckedNodes', description: { cn: 'clear checked nodes', en: 'clear checked nodes' }, type: 'function', tsType: '' },
  ],
  slots: [
    {
      name: 'default',
      description: {
        cn: 'the custom content of cascader node, which are current Node object and node data respectively.',
        en: 'the custom content of cascader node, which are current Node object and node data respectively.',
      },
    },
  ],
};
export default doc;
