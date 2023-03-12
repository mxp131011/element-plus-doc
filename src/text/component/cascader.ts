const Attributes = `
| Name                                | Description                                                                                                                                                                      | Type                                                          | Default |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------- |
| model-value / v-model               | binding value                                                                                                                                                                    | ^[string]/^[number]/^[object]\`string[] | number[] | any\`    | —       |
| options                             | data of the options, the key of \`value\` and \`label\` can be customize by \`CascaderProps\`.                                                                                         | ^[object]\`Record<string, unknown>[]\`                          | —       |
| props                               | configuration options, see the following \`CascaderProps\` table.                                                                                                                  | ^[object]\`CascaderProps\`                                      | —       |
| size                                | size of input                                                                                                                                                                    | ^[enum]\`'large' | 'default' | 'small'\`                      | —       |
| placeholder                         | placeholder of input                                                                                                                                                             | ^[string]                                                     | —       |
| disabled                            | whether Cascader is disabled                                                                                                                                                     | ^[boolean]                                                    | —       |
| clearable                           | whether selected value can be cleared                                                                                                                                            | ^[boolean]                                                    | —       |
| show-all-levels                     | whether to display all levels of the selected value in the input                                                                                                                 | ^[boolean]                                                    | true    |
| collapse-tags                       | whether to collapse tags in multiple selection mode                                                                                                                              | ^[boolean]                                                    | —       |
| collapse-tags-tooltip               | whether show all selected tags when mouse hover text of collapse-tags. To use this, \`collapse-tags\` must be true                                                                 | ^[boolean]                                                    | false   |
| separator                           | option label separator                                                                                                                                                           | ^[string]                                                     | ' / '   |
| filterable                          | whether the options can be searched                                                                                                                                              | ^[boolean]                                                    | —       |
| filter-method                       | customize search logic, the first parameter is \`node\`, the second is \`keyword\`, and need return a boolean value indicating whether it hits.                                      | ^[Function]\`(node: CascaderNode, keyword: string) => boolean\` | —       |
| debounce                            | debounce delay when typing filter keyword, in milliseconds                                                                                                                       | ^[number]                                                     | 300     |
| before-filter                       | hook function before filtering with the value to be filtered as its parameter. If \`false\` is returned or a \`Promise\` is returned and then is rejected, filtering will be aborted | ^[Function]\`(value: string) => boolean\`                       | —       |
| popper-class                        | custom class name for Cascader's dropdown                                                                                                                                        | ^[string]                                                     | ''      |
| teleported                          | whether cascader popup is teleported                                                                                                                                             | ^[boolean]                                                    | true    |
| popper-append-to-body ^(deprecated) | whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false                                                      | ^[boolean]                                                    | true    |
| tag-type                            | tag type                                                                                                                                                                         | ^[enum]\`'success' | 'info' | 'warning' | 'danger'\`         | info    |
| validate-event                      | whether to trigger form validation                                                                                                                                               | ^[boolean]                                                    | true    |
`;
const Events = `
| Name           | Description                                         | Type                                                        |
| -------------- | --------------------------------------------------- | ----------------------------------------------------------- |
| change         | triggers when the binding value changes             | ^[Function]\`(value: CascaderValue) => void\`                 |
| expand-change  | triggers when expand option changes                 | ^[Function]\`(value: CascaderValue) => void\`                 |
| blur           | triggers when Cascader blurs                        | ^[Function]\`(event: FocusEvent) => void\`                    |
| focus          | triggers when Cascader focuses                      | ^[Function]\`(event: FocusEvent) => void\`                    |
| visible-change | triggers when the dropdown appears/disappears       | ^[Function]\`(value: boolean) => void\`                       |
| remove-tag     | triggers when remove tag in multiple selection mode | ^[Function]\`(value: CascaderNode['valueByOption']) => void\` |
 `;
const Slots = `
| Name    | Description                                                                                    | Scope                               |
| ------- | ---------------------------------------------------------------------------------------------- | ----------------------------------- |
| default | the custom content of cascader node, which are current Node object and node data respectively. | ^[object]\`{ node: any, data: any }\` |
| empty   | content when there is no matched options.                                                      | —                                   |
`;
const Exposes = `
| Name                | Description                                                                                                       | Type                                                            |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| getCheckedNodes     | get an array of currently selected node,(leafOnly) whether only return the leaf checked nodes, default is \`false\` | ^[Function]\`(leafOnly: boolean) => CascaderNode[] | undefined\` |
| cascaderPanelRef    | cascader panel ref                                                                                                | ^[object]\`ComputedRef<any>\`                                     |
| togglePopperVisible | toggle the visible type of popper                                                                                 | ^[Function]\`(visible?: boolean) => void\`                        |
`;

export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
  slots: Slots,
};
