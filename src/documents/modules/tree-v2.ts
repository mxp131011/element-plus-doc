import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/tree-v2.html',
  attributes: [
    {
      name: 'data',
      description: { cn: '展示数据', en: 'tree data' },
      type: 'array',
      default: '—',
      value: [],
    },
    {
      name: 'empty-text',
      description: { cn: '内容为空的时候展示的文本', en: 'text displayed when data is void' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'props',
      description: { cn: '配置选项，具体看下表', en: 'configuration options, see the following table' },
      type: 'object',
      default: '—',
      value: [],
    },
    {
      name: 'highlight-current',
      description: { cn: '是否高亮当前选中节点', en: 'whether current node is highlighted' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'expand-on-click-node',
      description: {
        cn: '是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点',
        en: 'whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.',
      },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'check-on-click-node',
      description: {
        cn: '是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点',
        en: 'whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox.',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'default-expanded-keys',
      description: { cn: '默认展开的节点的 key 的数组', en: 'array of keys of initially expanded nodes' },
      type: 'array',
      default: '—',
      value: [],
    },
    {
      name: 'show-checkbox',
      description: { cn: '节点是否可被选择', en: 'whether node is selectable' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'check-strictly',
      description: {
        cn: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 `false`',
        en: 'whether checked state of a node not affects its father and child nodes when <code>show-checkbox</code> is <code>true</code>',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'default-checked-keys',
      description: { cn: '默认勾选的节点的 key 的数组', en: 'array of keys of initially checked nodes' },
      type: 'array',
      default: '—',
      value: [],
    },
    {
      name: 'current-node-key',
      description: { cn: '当前选中的节点', en: 'key of initially selected node' },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'filter-method',
      description: {
        cn: '对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示， 返回 <code>false</code> 则表示这个节点会被隐藏',
        en: 'this function will be executed on each node when use filter method. if return <code>false</code>, tree node will be hidden.',
      },
      type: 'function(value, data)',
      default: '—',
      value: [],
    },
    {
      name: 'indent',
      description: { cn: '相邻级节点间的水平缩进，单位为像素', en: 'horizontal indentation of nodes in adjacent levels in pixels' },
      type: 'number',
      default: '16',
      value: [],
    },
    {
      name: 'icon',
      description: { cn: '自定义树节点的图标', en: 'custom tree node icon' },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'item-size',
      description: { cn: '自定义树节点的高度', en: 'custom tree node height' },
      type: 'number',
      default: '26',
      value: [],
    },
  ],
  events: [
    {
      name: 'node-click',
      description: { cn: '当节点被点击的时候触发', en: 'triggers when a node is clicked' },
      type: 'function',
      tsType: '(data: TreeNodeData, node: TreeNode, e: MouseEvent)',
    },
    {
      name: 'node-contextmenu',
      description: { cn: '当节点被鼠标右键点击时会触发该事件', en: 'triggers when a node is clicked by right button' },
      type: 'function',
      tsType: '(e: Event, data: TreeNodeData, node: TreeNode)',
    },
    {
      name: 'check-change',
      description: { cn: '节点选中状态发生变化时的回调', en: 'triggers when the selected state of the node changes' },
      type: 'function',
      tsType: '(data: TreeNodeData, checked: boolean)',
    },
    {
      name: 'check',
      description: { cn: '当复选框被点击的时候触发', en: 'triggers after clicking the checkbox of a node' },
      type: 'function',
      tsType: '(data: TreeNodeData, info: { checkedKeys: TreeKey[],checkedNodes: TreeData, halfCheckedKeys: TreeKey[], halfCheckedNodes: TreeData,})',
    },
    {
      name: 'current-change',
      description: { cn: '当前选中节点变化时触发的事件', en: 'triggers when current node changes' },
      type: 'function',
      tsType: '(data: TreeNodeData, node: TreeNode)',
    },
    {
      name: 'node-expand',
      description: { cn: '节点被展开时触发的事件', en: 'triggers when current node open' },
      type: 'function',
      tsType: '(data: TreeNodeData, node: TreeNode)',
    },
    {
      name: 'node-collapse',
      description: { cn: '节点被收起时触发的事件', en: 'triggers when current node close' },
      type: 'function',
      tsType: '(data: TreeNodeData, node: TreeNode)',
    },
  ],
  exposes: [
    {
      name: 'filter',
      description: { cn: '对树节点进行筛选操作', en: 'filter all tree nodes, filtered nodes will be hidden' },
      type: 'function',
      tsType: '(query: string)',
    },
    {
      name: 'getCheckedNodes',
      description: {
        cn: '若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前被选中的节点所组成的数组',
        en: 'If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently selected array of nodes',
      },
      type: 'function',
      tsType: '(leafOnly: boolean)',
    },
    {
      name: 'getCheckedKeys',
      description: {
        cn: '若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前被选中的节点的 key 所组成的数组',
        en: "If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently selected array of node's keys",
      },
      type: 'function',
      tsType: '(leafOnly: boolean)',
    },
    {
      name: 'setCheckedKeys',
      description: { cn: '通过 keys 设置目前勾选的节点', en: 'set certain nodes to be checked' },
      type: 'function',
      tsType: '(keys: TreeKey[])',
    },
    {
      name: 'setChecked',
      description: { cn: '通过 key 设置某个节点的勾选状态', en: 'set node to be checked or not' },
      type: 'function',
      tsType: '(key: TreeKey, checked: boolean)',
    },
    {
      name: 'setExpandedKeys',
      description: { cn: '设置当前展开的节点', en: 'set certain nodes to be expanded' },
      type: 'function',
      tsType: '',
    },
    {
      name: 'getHalfCheckedNodes',
      description: {
        cn: '如果节点可用被选中 (即 <code>show-checkbox</code> 为 <code>true</code>), 它将返回当前半选中的节点组成的数组',
        en: 'If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently half selected array of nodes',
      },
      type: 'function',
      tsType: '',
    },
    {
      name: 'getHalfCheckedKeys',
      description: {
        cn: '若节点可被选中(即 <code>show-checkbox</code> 为 <code>true</code>)，则返回目前半选中的节点的 key 所组成的数组',
        en: "If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently half selected array of node's keys",
      },
      type: 'function',
      tsType: '',
    },
    {
      name: 'getCurrentKey',
      description: {
        cn: '获取当前被选中节点的 key，若没有节点被选中则返回 `undefined`',
        en: "return the highlight node's key (`undefined` if no node is highlighted)",
      },
      type: 'function',
      tsType: '',
    },
    {
      name: 'getCurrentNode',
      description: {
        cn: '获取当前被选中节点的 data，若没有节点被选中则返回 `undefined`',
        en: "return the highlight node's data (`undefined` if no node is highlighted)",
      },
      type: 'function',
      tsType: '',
    },
    {
      name: 'setCurrentKey',
      description: { cn: '通过 key 设置某个节点的当前选中状态', en: 'set highlighted node by key' },
      type: 'function',
      tsType: '(key: TreeKey)',
    },
    {
      name: 'getNode',
      description: { cn: '通过 key 或 data 获取节点', en: 'get node by key or data' },
      type: 'function',
      tsType: '(data: TreeKey | TreeNodeData)',
    },
    {
      name: 'expandNode',
      description: { cn: '展开指定节点', en: 'expand specified node' },
      type: 'function',
      tsType: '(node: TreeNode)',
    },
    {
      name: 'collapseNode',
      description: { cn: '折叠指定节点', en: 'collapse specified node' },
      type: 'function',
      tsType: '(node: TreeNode)',
    },
    {
      name: 'setData',
      description: {
        cn: '当数据量非常庞大的时候，总是使用响应式数据将导致性能表现不佳，所以我们提供一种显式设置的方式来避免此种情况',
        en: 'When the data is very large, using reactive data will cause the poor performance, so we provide a way to avoid this situation',
      },
      type: 'function',
      tsType: '(data: TreeData)',
    },
  ],
  slots: [
    {
      name: 'default',
      description: {
        cn: 'Custom content for tree nodes. The scope parameter is <code>{ node: TreeNode, data: TreeNodeData }</code>',
        en: 'Custom content for tree nodes. The scope parameter is <code>{ node: TreeNode, data: TreeNodeData }</code>',
      },
    },
  ],
  childAttributes: [
    {
      name: 'Props',
      list: [
        {
          name: 'value',
          description: {
            cn: '每个树节点用来作为唯一标识的属性，在整棵树中应该是唯一的',
            en: 'unique identity key name for nodes, its value should be unique across the whole tree',
          },
          type: ['string', 'number'],
          default: 'id',
          value: [],
        },
        {
          name: 'label',
          description: { cn: '指定节点标签为节点对象的某个属性值', en: "specify which key of node object is used as the node's label" },
          type: 'string',
          default: 'label',
          value: [],
        },
        {
          name: 'children',
          description: { cn: '指定子树为节点对象的某个属性值', en: "specify which node object is used as the node's subtree" },
          type: 'string',
          default: 'children',
          value: [],
        },
        {
          name: 'disabled',
          description: { cn: '指定节点选择框是否禁用为节点对象的某个属性值', en: "specify which key of node object represents if node's checkbox is disabled" },
          type: 'string',
          default: 'disabled',
          value: [],
        },
      ],
    },
  ],
};
export default doc;
