import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/cascader.html#cascaderpanel-api',
  attributes: [
    {
      name: 'model-value',
      description: { cn: '选中项绑定值', en: 'binding value' },
      type: ['string', 'array', 'object'],
      default: '—',
      value: [],
    },
    {
      name: 'options',
      description: {
        cn: '选项的数据源， value 和 label 可以通过 CascaderProps 自定义. (Record<string, unknown>[])',
        en: 'data of the options, the key of `value` and `label` can be customize by `CascaderProps`. (Record<string, unknown>[])',
      },
      type: 'object',
      default: '—',
      value: [],
    },
    {
      name: 'props',
      description: {
        cn: '配置选项, 请参阅下面 `props` 表。',
        en: 'configuration options, see the following `props` table.',
      },
      type: 'object',
      default: '—',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: '当选中节点变化时触发', en: 'triggers when the binding value changes' },
      type: 'function',
      param: '(value: CascaderValue) => void',
    },
    {
      name: 'expand-change',
      description: { cn: '当展开节点发生变化时触发', en: 'triggers when expand option changes' },
      type: 'function',
      param: '(value: CascaderNodePathValue) => void',
    },
    {
      name: 'close',
      description: {
        cn: '面板的关闭事件，提供给 Cascader 以便做更好的判断。',
        en: 'close panel event, provided to Cascader to put away the panel judgment.',
      },
      type: 'function',
      param: '() => void',
    },
  ],
  exposes: [
    {
      name: 'getCheckedNodes',
      description: {
        cn: '获取一个当前选中节点的数组。(仅仅是传单) 是否只返回叶选中的节点，默认是 `false`',
        en: 'get an array of currently selected node,(leafOnly) whether only return the leaf checked nodes, default is `false`',
      },
      type: 'function',
      param: '(leafOnly: boolean) => CascaderNode[] &#124; undefined',
    },
    {
      name: 'clearCheckedNodes',
      description: { cn: '清空选中的节点', en: 'clear checked nodes' },
      type: 'function',
      param: '() => void',
    },
  ],
  slots: [
    {
      name: 'default',
      description: {
        cn: '下级节点的自定义内容，它们分别是当前节点对象和节点数据. 参数：{ node: any, data: any }',
        en: 'the custom content of cascader node, which are current Node object and node data respectively. parameter：{ node: any, data: any }',
      },
    },
  ],
  childAttributes: [
    {
      name: 'props',
      list: [
        {
          name: 'expandTrigger',
          description: { cn: '次级菜单的展开方式', en: 'trigger mode of expanding options' },
          type: 'enum',
          default: "'click'",
          value: ['click', 'hover'],
        },
        {
          name: 'multiple',
          description: { cn: '是否多选', en: 'whether multiple selection is enabled' },
          type: 'boolean',
          default: 'false',
          value: [],
        },
        {
          name: 'checkStrictly',
          description: { cn: '是否严格的遵守父子节点不互相关联', en: 'whether checked state of a node not affects its parent and child nodes' },
          type: 'boolean',
          default: 'false',
          value: [],
        },
        {
          name: 'emitPath',
          description: {
            cn: '在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值',
            en: "when checked nodes change, whether to emit an array of node's path, if false, only emit the value of node.",
          },
          type: 'boolean',
          default: 'true',
          value: [],
        },
        {
          name: 'lazy',
          description: { cn: '是否动态加载子节点，需与 `lazyLoad` 方法结合使用', en: 'whether to dynamic load child nodes, use with `lazyload` attribute' },
          type: 'boolean',
          default: 'false',
          value: [],
        },
        {
          name: 'lazyLoad',
          description: { cn: '加载动态数据的方法，仅在 `lazy` 为 true 时有效', en: 'method for loading child nodes data, only works when `lazy` is true' },
          type: 'function(node: Node, resolve: Resolve) => void',
          default: 'true',
          value: [],
        },
        {
          name: 'value',
          description: { cn: '指定选项的值为选项对象的某个属性值', en: "specify which key of node object is used as the node's value" },
          type: 'string',
          default: 'value',
          value: [],
        },
        {
          name: 'label',
          description: { cn: '指定选项标签为选项对象的某个属性值', en: "specify which key of node object is used as the node's label" },
          type: 'string',
          default: 'label',
          value: [],
        },
        {
          name: 'children',
          description: { cn: '指定选项的子选项为选项对象的某个属性值', en: "specify which key of node object is used as the node's children" },
          type: 'string',
          default: 'children',
          value: [],
        },
        {
          name: 'disabled',
          description: { cn: '指定选项的禁用为选项对象的某个属性值', en: "specify which key of node object is used as the node's disabled" },
          type: 'string',
          default: 'disabled',
          value: [],
        },
        {
          name: 'leaf',
          description: { cn: '指定选项的叶子节点的标志位为选项对象的某个属性值', en: "specify which key of node object is used as the node's leaf field" },
          type: 'string',
          default: 'leaf',
          value: [],
        },
        {
          name: 'hoverThreshold',
          description: { cn: 'hover 时展开菜单的灵敏度阈值', en: 'hover threshold of expanding options' },
          type: 'number',
          default: '500',
          value: [],
        },
      ],
    },
  ],
};
export default doc;
