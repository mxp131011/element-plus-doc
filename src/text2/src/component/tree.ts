const Attributes = `
| Name                  | Description                                                                                                                                                                                                                                                                                                                                                                 | Type                                   | Accepted Values | Default |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | --------------- | ------- |
| data                  | tree data                                                                                                                                                                                                                                                                                                                                                                   | array                                  | —               | —       |
| empty-text            | text displayed when data is void                                                                                                                                                                                                                                                                                                                                            | string                                 | —               | —       |
| node-key              | unique identity key name for nodes, its value should be unique across the whole tree                                                                                                                                                                                                                                                                                        | string                                 | —               | —       |
| props                 | configuration options, see the following table                                                                                                                                                                                                                                                                                                                              | object                                 | —               | —       |
| render-after-expand   | whether to render child nodes only after a parent node is expanded for the first time                                                                                                                                                                                                                                                                                       | boolean                                | —               | true    |
| load                  | method for loading subtree data, only works when \`lazy\` is true                                                                                                                                                                                                                                                                                                             | function(node, resolve)                | —               | —       |
| render-content        | render function for tree node                                                                                                                                                                                                                                                                                                                                               | Function(h, \`{ node, data, store }\`)   | —               | —       |
| highlight-current     | whether current node is highlighted                                                                                                                                                                                                                                                                                                                                         | boolean                                | —               | false   |
| default-expand-all    | whether to expand all nodes by default                                                                                                                                                                                                                                                                                                                                      | boolean                                | —               | false   |
| expand-on-click-node  | whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.                                                                                                                                                                                                                                  | boolean                                | —               | true    |
| check-on-click-node   | whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox.                                                                                                                                                                                                                                | boolean                                | —               | false   |
| auto-expand-parent    | whether to expand father node when a child node is expanded                                                                                                                                                                                                                                                                                                                 | boolean                                | —               | true    |
| default-expanded-keys | array of keys of initially expanded nodes                                                                                                                                                                                                                                                                                                                                   | array                                  | —               | —       |
| show-checkbox         | whether node is selectable                                                                                                                                                                                                                                                                                                                                                  | boolean                                | —               | false   |
| check-strictly        | whether checked state of a node not affects its father and child nodes when \`show-checkbox\` is \`true\`                                                                                                                                                                                                                                                                       | boolean                                | —               | false   |
| default-checked-keys  | array of keys of initially checked nodes                                                                                                                                                                                                                                                                                                                                    | array                                  | —               | —       |
| current-node-key      | key of initially selected node                                                                                                                                                                                                                                                                                                                                              | string / number                        | —               | —       |
| filter-node-method    | this function will be executed on each node when use filter method. if return \`false\`, tree node will be hidden.                                                                                                                                                                                                                                                            | Function(value, data, node)            | —               | —       |
| accordion             | whether only one node among the same level can be expanded at one time                                                                                                                                                                                                                                                                                                      | boolean                                | —               | false   |
| indent                | horizontal indentation of nodes in adjacent levels in pixels                                                                                                                                                                                                                                                                                                                | number                                 | —               | 18      |
| icon                  | custom tree node icon component                                                                                                                                                                                                                                                                                                                                             | \`string | Component\`                  | -               | -       |
| lazy                  | whether to lazy load leaf node, used with \`load\` attribute                                                                                                                                                                                                                                                                                                                  | boolean                                | —               | false   |
| draggable             | whether enable tree nodes drag and drop                                                                                                                                                                                                                                                                                                                                     | boolean                                | —               | false   |
| allow-drag            | this function will be executed before dragging a node. If \`false\` is returned, the node can not be dragged                                                                                                                                                                                                                                                                  | Function(node)                         | —               | —       |
| allow-drop            | this function will be executed before the dragging node is dropped. If \`false\` is returned, the dragging node can not be dropped at the target node. \`type\` has three possible values: 'prev' (inserting the dragging node before the target node), 'inner' (inserting the dragging node to the target node) and 'next' (inserting the dragging node after the target node) | Function(draggingNode, dropNode, type) | —               | —       |
`;
const Exposes = `
| Name | Description | Parameters |
| --------------- | ---------------------------------------- | ---------------------------------------- |
| filter | filter all tree nodes, filtered nodes will be hidden | Accept a parameter which will be used as first parameter for filter-node-method |
| updateKeyChildren | set new data to node, only works when \`node-key\` is assigned | (key, data) Accept two parameters: 1. key of node 2. new data |
| getCheckedNodes | If the node can be selected (\`show-checkbox\` is \`true\`), it returns the currently selected array of nodes | (leafOnly, includeHalfChecked) Accept two boolean type parameters: 1. default value is \`false\`. If the parameter is \`true\`, it only returns the currently selected array of sub-nodes. 2. default value is \`false\`. If the parameter is \`true\`, the return value contains halfchecked nodes |
| setCheckedNodes | set certain nodes to be checked, only works when \`node-key\` is assigned | an array of nodes to be checked |
| getCheckedKeys | If the node can be selected (\`show-checkbox\` is \`true\`), it returns the currently selected array of node's keys | (leafOnly) Accept a boolean type parameter whose default value is \`false\`. If the parameter is \`true\`, it only returns the currently selected array of sub-nodes. |
| setCheckedKeys | set certain nodes to be checked, only works when \`node-key\` is assigned | (keys, leafOnly) Accept two parameters: 1. an array of node's keys to be checked 2. a boolean type parameter whose default value is \`false\`. If the parameter is \`true\`, it only returns the currently selected array of sub-nodes. |
| setChecked | set node to be checked or not, only works when \`node-key\` is assigned | (key/data, checked, deep) Accept three parameters: 1. node's key or data to be checked 2. a boolean typed parameter indicating checked or not. 3. a boolean typed parameter indicating deep or not. |
| getHalfCheckedNodes | If the node can be selected (\`show-checkbox\` is \`true\`), it returns the currently half selected array of nodes | - |
| getHalfCheckedKeys | If the node can be selected (\`show-checkbox\` is \`true\`), it returns the currently half selected array of node's keys | - |
| getCurrentKey | return the highlight node's key (null if no node is highlighted) | — |
| getCurrentNode | return the highlight node's data (null if no node is highlighted) | — |
| setCurrentKey | set highlighted node by key, only works when \`node-key\` is assigned | (key, shouldAutoExpandParent=true) 1. the node's key to be highlighted. If \`null\`, cancel the currently highlighted node 2. whether to automatically expand parent node |
| setCurrentNode | set highlighted node, only works when \`node-key\` is assigned | (node, shouldAutoExpandParent=true) 1. the node to be highlighted 2. whether to automatically expand parent node |
| getNode | get node by data or key | (data) the node's data or key |
| remove | remove a node, only works when node-key is assigned | (data) the node's data or node to be deleted |
| append | append a child node to a given node in the tree | (data, parentNode) 1. child node's data to be appended 2. parent node's data, key or node |
| insertBefore | insert a node before a given node in the tree | (data, refNode) 1. node's data to be inserted 2. reference node's data, key or node |
| insertAfter | insert a node after a given node in the tree | (data, refNode) 1. node's data to be inserted 2. reference node's data, key or node |
`;
const Events = `
| Name             | Description                                               | Parameters                                                                                                                                                                                       |
| ---------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| node-click       | triggers when a node is clicked                           | four parameters: node object corresponding to the node clicked, \`node\` property of TreeNode, TreeNode itself, event object                                                                       |
| node-contextmenu | triggers when a node is clicked by right button           | four parameters: event, node object corresponding to the node clicked, \`node\` property of TreeNode, TreeNode itself                                                                              |
| check-change     | triggers when the selected state of the node changes      | three parameters: node object corresponding to the node whose selected state is changed, whether the node is selected, whether node's subtree has selected nodes                                 |
| check            | triggers after clicking the checkbox of a node            | two parameters: node object corresponding to the node that is checked / unchecked, tree checked status object which has four props: checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys |
| current-change   | triggers when current node changes                        | two parameters: node object corresponding to the current node, \`node\` property of TreeNode                                                                                                       |
| node-expand      | triggers when current node open                           | three parameters: node object corresponding to the node opened, \`node\` property of TreeNode, TreeNode itself                                                                                     |
| node-collapse    | triggers when current node close                          | three parameters: node object corresponding to the node closed, \`node\` property of TreeNode, TreeNode itself                                                                                     |
| node-drag-start  | triggers when dragging starts                             | two parameters: node object corresponding to the dragging node, event.                                                                                                                           |
| node-drag-enter  | triggers when the dragging node enters another node       | three parameters: node object corresponding to the dragging node, node object corresponding to the entering node, event.                                                                         |
| node-drag-leave  | triggers when the dragging node leaves a node             | three parameters: node object corresponding to the dragging node, node object corresponding to the leaving node, event.                                                                          |
| node-drag-over   | triggers when dragging over a node (like mouseover event) | three parameters: node object corresponding to the dragging node, node object corresponding to the dragging over node, event.                                                                    |
| node-drag-end    | triggers when dragging ends                               | four parameters: node object corresponding to the dragging node, node object corresponding to the dragging end node (may be \`undefined\`), node drop type (before / after / inner), event.        |
| node-drop        | triggers after the dragging node is dropped               | four parameters: node object corresponding to the dragging node, node object corresponding to the dropped node, node drop type (before / after / inner), event.                                  |
`;
const Slots = `
| Name | Description                                                            |
| ---- | ---------------------------------------------------------------------- |
| —    | Custom content for tree nodes. The scope parameter is \`{ node, data }\` |
`;
export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
  slots: Slots,
};