const Attributes = `
| Name                  | Description                                                                              | Type                                                       | Default |
| --------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------- |
| model-value / v-model | binding value                                                                            | ^[string]/^[number]/^[object]\`string[] | number[] | any\` | —       |
| options               | data of the options, the key of \`value\` and \`label\` can be customize by \`CascaderProps\`. | ^[object]\`Record<string, unknown>[]\`                       | —       |
| props                 | configuration options, see the following \`CascaderProps\` table.                          | ^[object]\`CascaderProps\`                                   | —       |
`;
const Events = `
| Name          | Description                                                             | Type                                                |
| ------------- | ----------------------------------------------------------------------- | --------------------------------------------------- |
| change        | triggers when the binding value changes                                 | ^[Function]\`(value: CascaderValue) => void\`         |
| expand-change | triggers when expand option changes                                     | ^[Function]\`(value: CascaderNodePathValue) => void\` |
| close         | close panel event, provided to Cascader to put away the panel judgment. | ^[Function]\`() => void\`                             |
`;
const Slots = `
| Name    | Description                                                                                    | Scope                               |
| ------- | ---------------------------------------------------------------------------------------------- | ----------------------------------- |
| default | the custom content of cascader node, which are current Node object and node data respectively. | ^[object]\`{ node: any, data: any }\` |
`;
const Exposes = `
| Name              | Description                                                                                                       | Type                                                            |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| getCheckedNodes   | get an array of currently selected node,(leafOnly) whether only return the leaf checked nodes, default is \`false\` | ^[Function]\`(leafOnly: boolean) => CascaderNode[] | undefined\` |
| clearCheckedNodes | clear checked nodes                                                                                               | ^[Function]\`() => void\`                                         |
`;
const CascaderProps = `
| Attribute      | Description                                                                                                | Type                                                | Default  |
| -------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | -------- |
| expandTrigger  | trigger mode of expanding options                                                                          | ^[enum]\`'click' | 'hover'\`                         | click    |
| multiple       | whether multiple selection is enabled                                                                      | ^[boolean]                                          | false    |
| checkStrictly  | whether checked state of a node not affects its parent and child nodes                                     | ^[boolean]                                          | false    |
| emitPath       | when checked nodes change, whether to emit an array of node's path, if false, only emit the value of node. | ^[boolean]                                          | true     |
| lazy           | whether to dynamic load child nodes, use with \`lazyload\` attribute                                         | ^[boolean]                                          | false    |
| lazyLoad       | method for loading child nodes data, only works when \`lazy\` is true                                        | ^[Function]\`(node: Node, resolve: Resolve) => void\` | —        |
| value          | specify which key of node object is used as the node's value                                               | ^[string]                                           | value    |
| label          | specify which key of node object is used as the node's label                                               | ^[string]                                           | label    |
| children       | specify which key of node object is used as the node's children                                            | ^[string]                                           | children |
| disabled       | specify which key of node object is used as the node's disabled                                            | ^[string]                                           | disabled |
| leaf           | specify which key of node object is used as the node's leaf field                                          | ^[string]                                           | leaf     |
| hoverThreshold | hover threshold of expanding options                                                                       | ^[number]                                           | 500      |
`;
export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
  slots: Slots,
  cascaderProps: CascaderProps,
};
