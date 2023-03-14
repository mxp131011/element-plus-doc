import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/tree.html',
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
      name: 'node-key',
      description: {
        cn: '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
        en: 'unique identity key name for nodes, its value should be unique across the whole tree',
      },
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
      name: 'render-after-expand',
      description: {
        cn: '是否在第一次展开某个树节点后才渲染其子节点',
        en: 'whether to render child nodes only after a parent node is expanded for the first time',
      },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'load',
      description: {
        cn: '加载子树数据的方法，仅当  <code>lazy</code> 属性为 <code>true</code> 时生效, 绑定方法说明： function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用)',
        en: 'method for loading subtree data, only works when <code>lazy</code> is <code>true</code>，binding function：function(node, resolve) ,node is the current clicked node, resolve is the callback when data loading is complete (must be called)',
      },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: 'render-content',
      description: {
        cn: '树节点的内容区的渲染函数',
        en: 'render function for tree node',
      },
      type: 'function(h, { node, data, store })',
      default: '—',
      value: [],
    },
    {
      name: 'highlight-current',
      description: { cn: '是否高亮当前选中节点，默认值是 false。', en: 'whether current node is highlighted' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'default-expand-all',
      description: { cn: '是否默认展开所有节点', en: 'whether to expand all nodes by default' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'expand-on-click-node',
      description: {
        cn: '是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。',
        en: 'whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.',
      },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'check-on-click-node',
      description: {
        cn: '是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。',
        en: 'whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox.',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'auto-expand-parent',
      description: { cn: '展开子节点的时候是否自动展开父节点', en: 'whether to expand father node when a child node is expanded' },
      type: 'boolean',
      default: 'true',
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
        cn: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false',
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
      name: 'filter-node-method',
      description: {
        cn: '对树节点进行筛选时执行的方法， 返回 <code>false</code> 则表示这个节点会被隐藏',
        en: 'this function will be executed on each node when use filter method. if return <code>false</code>, tree node will be hidden.',
      },
      type: 'function(value, data, node)',
      default: '—',
      value: [],
    },
    {
      name: 'accordion',
      description: {
        cn: '是否每次只打开一个同级树节点展开',
        en: 'whether only one node among the same level can be expanded at one time',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'indent',
      description: { cn: '相邻级节点间的水平缩进，单位为像素', en: 'horizontal indentation of nodes in adjacent levels in pixels' },
      type: 'number',
      default: '18',
      value: [],
    },
    {
      name: 'icon',
      description: { cn: '自定义树节点图标组件', en: 'custom tree node icon component' },
      type: ['string', 'Component'],
      default: '-',
      value: [],
    },
    {
      name: 'lazy',
      description: {
        cn: '是否懒加载子节点，需与 <code>load</code> 方法结合使用',
        en: 'whether to lazy load leaf node, used with <code>load</code> attribute',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'draggable',
      description: { cn: '是否开启拖拽节点功能', en: 'whether enable tree nodes drag and drop' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'allow-drag',
      description: {
        cn: '判断节点能否被拖拽 如果返回 <code>false</code> ，节点不能被拖动',
        en: 'this function will be executed before dragging a node. If <code>false</code> is returned, the node can not be dragged',
      },
      type: 'function(node)',
      default: '—',
      value: [],
    },
    {
      name: 'allow-drop',
      description: {
        cn: "拖拽时判定目标节点能否成为拖动目标位置。 如果返回 <code>false</code> ，拖动节点不能被拖放到目标节点。 <code>type</code> 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
        en: "this function will be executed before the dragging node is dropped. If <code>false</code> is returned, the dragging node can not be dropped at the target node. <code>type</code> has three possible values: 'prev' (inserting the dragging node before the target node), 'inner' (inserting the dragging node to the target node) and 'next' (inserting the dragging node after the target node)",
      },
      type: 'function(draggingNode, dropNode, type)',
      default: '—',
      value: [],
    },
  ],
  events: [
    {
      name: 'node-click',
      description: { cn: '当节点被点击的时候触发', en: 'triggers when a node is clicked' },
      type: 'function',
      param: {
        cn: '四个参数：对应于节点点击的节点对象，TreeNode 的 `node` 属性, TreeNode和事件对象',
        en: 'four parameters: node object corresponding to the node clicked, `node` property of TreeNode, TreeNode itself, event object',
      },
    },
    {
      name: 'node-contextmenu',
      description: { cn: '当某一节点被鼠标右键点击时会触发该事件', en: 'triggers when a node is clicked by right button' },
      type: 'function',
      param: {
        cn: '共四个参数，依次为：event、传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。',
        en: 'four parameters: event, `node` object corresponding to the node clicked, node property of TreeNode, TreeNode itself',
      },
    },
    {
      name: 'check-change',
      description: { cn: '当复选框被点击的时候触发', en: 'triggers when the selected state of the node changes' },
      type: 'function',
      param: {
        cn: '共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点',
        en: "three parameters: node object corresponding to the node whose selected state is changed, whether the node is selected, whether node's subtree has selected nodes",
      },
    },
    {
      name: 'check',
      description: { cn: '点击节点复选框之后触发', en: 'triggers after clicking the checkbox of a node' },
      type: 'function',
      param: {
        cn: '共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性',
        en: 'two parameters: node object corresponding to the node that is checked / unchecked, tree checked status object which has four props: checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys',
      },
    },
    {
      name: 'current-change',
      description: { cn: '当前选中节点变化时触发的事件', en: 'triggers when current node changes' },
      type: 'function',
      param: {
        cn: '共两个参数，依次为：当前节点的数据，当前节点的 Node 对象',
        en: 'two parameters: node object corresponding to the current node, `node` property of TreeNode',
      },
    },
    {
      name: 'node-expand',
      description: { cn: '节点被展开时触发的事件', en: 'triggers when current node open' },
      type: 'function',
      param: {
        cn: '共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身',
        en: 'three parameters: node object corresponding to the node opened, `node` property of TreeNode, TreeNode itself',
      },
    },
    {
      name: 'node-collapse',
      description: { cn: '节点被关闭时触发的事件', en: 'triggers when current node close' },
      type: 'function',
      param: {
        cn: '共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身',
        en: 'three parameters: node object corresponding to the node closed, `node` property of TreeNode, TreeNode itself',
      },
    },
    {
      name: 'node-drag-start',
      description: { cn: '节点开始拖拽时触发的事件', en: 'triggers when dragging starts' },
      type: 'function',
      param: {
        cn: '共两个参数，依次为：被拖拽节点对应的 Node、event',
        en: 'two parameters: node object corresponding to the dragging node, event.',
      },
    },
    {
      name: 'node-drag-enter',
      description: { cn: '拖拽进入其他节点时触发的事件', en: 'triggers when the dragging node enters another node' },
      type: 'function',
      param: {
        cn: '共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event',
        en: 'three parameters: node object corresponding to the dragging node, node object corresponding to the entering node, event.',
      },
    },
    {
      name: 'node-drag-leave',
      description: { cn: '拖拽离开某个节点时触发的事件', en: 'triggers when the dragging node leaves a node' },
      type: 'function',
      param: {
        cn: '共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event',
        en: 'three parameters: node object corresponding to the dragging node, node object corresponding to the leaving node, event.',
      },
    },
    {
      name: 'node-drag-over',
      description: { cn: '在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）', en: 'triggers when dragging over a node (like mouseover event)' },
      type: 'function',
      param: {
        cn: '共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event',
        en: 'three parameters: node object corresponding to the dragging node, node object corresponding to the dragging over node, event.',
      },
    },
    {
      name: 'node-drag-end',
      description: { cn: '拖拽结束时（可能未成功）触发的事件', en: 'triggers when dragging ends' },
      type: 'function',
      param: {
        cn: '共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event',
        en: 'four parameters: node object corresponding to the dragging node, node object corresponding to the dragging end node (may be `undefined`), node drop type (before / after / inner), event.',
      },
    },
    {
      name: 'node-drop',
      description: { cn: '拖拽成功完成时触发的事件', en: 'triggers after the dragging node is dropped' },
      type: 'function',
      param: {
        cn: '共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event',
        en: 'four parameters: node object corresponding to the dragging node, node object corresponding to the dropped node, node drop type (before / after / inner), event.',
      },
    },
  ],
  exposes: [
    {
      name: 'filter',
      description: { cn: '过滤所有树节点，过滤后的节点将被隐藏', en: 'filter all tree nodes, filtered nodes will be hidden' },
      param: {
        cn: '接收一个参数并指定为 `filter-node-method` 属性的第一个参数',
        en: 'Accept a parameter which will be used as first parameter for `filter-node-method`',
      },
    },
    {
      name: 'updateKeyChildren',
      description: {
        cn: '为节点设置新数据，只有当设置 <code>node-key</code> 属性的时候才可用',
        en: 'set new data to node, only works when <code>node-key</code> is assigned',
      },
      param: {
        cn: '(key, data) 接收两个参数: 1. 节点的 key 2. 新数据',
        en: '(key, data) Accept two parameters: 1. key of node 2. new data',
      },
    },
    {
      name: 'getCheckedNodes',
      description: {
        cn: '如果节点可以被选中，(<code>show-checkbox</code> 为 <code>true</code>), 本方法将返回当前选中节点的数组',
        en: 'If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently selected array of nodes',
      },
      param: {
        cn: '(leafOnly, includeHalfChecked) 接收两个布尔类型参数: 1. 默认值为 `false`. 若参数为 `true`, 它将返回当前选中节点的子节点 2. 默认值为 `false`. 如果参数为 `true`, 返回值包含半选中节点数据',
        en: '(leafOnly, includeHalfChecked) Accept two boolean type parameters: 1. default value is `false`. If the parameter is `true`, it only returns the currently selected array of sub-nodes. 2. default value is `false`. If the parameter is `true`, the return value contains halfchecked nodes',
      },
    },
    {
      name: 'setCheckedNodes',
      description: {
        cn: '设置目前勾选的节点，使用此方法必须提前设置 <code>node-key</code> 属性',
        en: 'set certain nodes to be checked, only works when <code>node-key</code> is assigned',
      },
      param: {
        cn: '要选中的节点构成的数组',
        en: 'an array of nodes to be checked',
      },
    },
    {
      name: 'getCheckedKeys',
      description: {
        cn: '若节点可用被选中 (<code>show-checkbox</code> 为 <code>true</code>), 它将返回当前选中节点 key 的数组',
        en: "If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently selected array of node's keys",
      },
      param: {
        cn: '(leafOnly) 接收一个布尔类型参数，默认为 `false`. 如果参数是 `true`, 它只返回当前选择的子节点数组。',
        en: '(leafOnly) Accept a boolean type parameter whose default value is `false`. If the parameter is `true`, it only returns the currently selected array of sub-nodes.',
      },
    },
    {
      name: 'setCheckedKeys',
      description: {
        cn: '设置目前选中的节点，使用此方法必须设置 <code>node-key</code> 属性',
        en: 'set certain nodes to be checked, only works when <code>node-key</code> is assigned',
      },
      param: {
        cn: '(keys, leafOnly) 接收两个参数: 1. 一个需要被选中的多节点 key 的数组 2. 一个布尔类型参数，默认为 `false`. 如果参数是 `true`, 它只返回当前选择的子节点数组。',
        en: "(keys, leafOnly) Accept two parameters: 1. an array of node's keys to be checked 2. a boolean type parameter whose default value is `false`. If the parameter is `true`, it only returns the currently selected array of sub-nodes.",
      },
    },
    {
      name: 'setChecked',
      description: {
        cn: '设置节点是否被选中, 使用此方法必须设置 <code>node-key</code> 属性',
        en: 'set node to be checked or not, only works when <code>node-key</code> is assigned',
      },
      param: {
        cn: '(key/data, checked, deep) 接收三个参数: 1. 要选中的节点的 key 或者数据 2. 一个布尔类型参数表明是否选中. 3. 一个布尔类型参数表明是否递归选中子节点',
        en: "(key/data, checked, deep) Accept three parameters: 1. node's key or data to be checked 2. a boolean typed parameter indicating checked or not. 3. a boolean typed parameter indicating deep or not.",
      },
    },
    {
      name: 'getHalfCheckedNodes',
      description: {
        cn: '如果节点可用被选中 (<code>show-checkbox</code> 为 <code>true</code>), 它将返回当前半选中的节点组成的数组',
        en: 'If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently half selected array of nodes',
      },
      param: {
        cn: '',
        en: '',
      },
    },
    {
      name: 'getHalfCheckedKeys',
      description: {
        cn: '若节点可被选中(<code>show-checkbox</code> 为 <code>true</code>)，则返回目前半选中的节点的 key 所组成的数组',
        en: "If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently half selected array of node's keys",
      },
      param: {
        cn: '',
        en: '',
      },
    },
    {
      name: 'getCurrentKey',
      description: {
        cn: '返回当前被选中节点的数据 (如果没有则返回 `null`)',
        en: "return the highlight node's key (`null` if no node is highlighted)",
      },
      param: {
        cn: '',
        en: '',
      },
    },
    {
      name: 'getCurrentNode',
      description: {
        cn: '返回当前被选中节点的数据 (如果没有则返回 `null`)',
        en: "return the highlight node's data (`null` if no node is highlighted)",
      },
      param: {
        cn: '',
        en: '',
      },
    },
    {
      name: 'setCurrentKey',
      description: {
        cn: '通过 key 设置某个节点的当前选中状态，使用此方法必须设置 <code>node-key</code> 属性',
        en: 'set highlighted node by key, only works when <code>node-key</code> is assigned',
      },
      param: {
        cn: '(key, shouldAutoExpandParent=true) 1. 待被选节点的 key， 如果为 `null`, 取消当前选中的节点 2. 是否自动展开父节点',
        en: "(key, shouldAutoExpandParent=true) 1. the node's key to be highlighted. If `null`, cancel the currently highlighted node 2. whether to automatically expand parent node",
      },
    },
    {
      name: 'setCurrentNode',
      description: {
        cn: '设置节点为选中状态，使用此方法必须设置 <code>node-key</code> 属性',
        en: 'set highlighted node, only works when <code>node-key</code> is assigned',
      },
      param: {
        cn: '(node, shouldAutoExpandParent=true) 1. 待被选中的节点 2. 是否展开父节点',
        en: '(node, shouldAutoExpandParent=true) 1. the node to be highlighted 2. whether to automatically expand parent node',
      },
    },
    {
      name: 'getNode',
      description: { cn: '根据 data 或者 key 拿到 Tree 组件中的 node', en: 'get node by data or key' },
      param: {
        cn: '(data) 节点的 data 或 key',
        en: "(data) the node's data or key",
      },
    },
    {
      name: 'remove',
      description: { cn: '删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性', en: 'remove a node, only works when node-key is assigned' },
      param: {
        cn: '(data) 要删除的节点的 data 或者 node 对象',
        en: "(data) the node's data or node to be deleted",
      },
    },
    {
      name: 'append',
      description: { cn: '为 Tree 中的一个节点追加一个子节点', en: 'append a child node to a given node in the tree' },
      param: {
        cn: '(data, parentNode) 1. 要追加的子节点的 data 2. 父节点的 data, key 或 node',
        en: "(data, parentNode) 1. child node's data to be appended 2. parent node's data, key or node",
      },
    },
    {
      name: 'insertBefore',
      description: { cn: '在 Tree 中给定节点前插入一个节点', en: 'insert a node before a given node in the tree' },
      param: {
        cn: '(data, refNode) 1. 要增加的节点的 data 2. 参考节点的 data, key 或 node',
        en: "(data, refNode) 1. node's data to be inserted 2. reference node's data, key or node",
      },
    },
    {
      name: 'insertAfter',
      description: { cn: '在 Tree 中给定节点后插入一个节点', en: 'insert a node after a given node in the tree' },
      param: {
        cn: '(data, refNode) 1. 要增加的节点的 data 2. 参考节点的 data, key 或 node',
        en: "(data, refNode) 1. node's data to be inserted 2. reference node's data, key or node",
      },
    },
  ],
  slots: [
    {
      name: 'default',
      description: {
        cn: '自定义树节点的内容， 自定义树节点的内容， 参数为  { node, data }',
        en: 'Custom content for tree nodes. The scope parameter is <code>{ node, data }</code>',
      },
    },
  ],

  childAttributes: [
    {
      name: 'Props',
      list: [
        {
          name: 'label',
          description: { cn: '指定节点标签为节点对象的某个属性值', en: "specify which key of node object is used as the node's label" },
          type: ['string', 'function(data, node)'],
          default: '',
          value: [],
        },
        {
          name: 'children',
          description: { cn: '指定子树为节点对象的某个属性值', en: "specify which node object is used as the node's subtree" },
          type: 'string',
          default: '',
          value: [],
        },
        {
          name: 'disabled',
          description: { cn: '指定节点选择框是否禁用为节点对象的某个属性值', en: "specify which key of node object represents if node's checkbox is disabled" },
          type: ['string', 'function(data, node)'],
          default: '',
          value: [],
        },
        {
          name: 'isLeaf',
          description: {
            cn: '指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效',
            en: 'specify whether the node is a leaf node, only works when lazy load is enabled',
          },
          type: ['string', 'function(data, node)'],
          default: '',
          value: [],
        },
        {
          name: 'class',
          description: { cn: '自定义节点类名', en: 'custom node class name' },
          type: ['string', 'function(data, node)'],
          default: '',
          value: [],
        },
      ],
    },
  ],
};
export default doc;
