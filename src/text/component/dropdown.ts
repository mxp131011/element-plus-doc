const Attributes = `
| Name           | Description                                                                                                           | Type            | Accepted Values                                          | Default                                                                    |
| -------------- | --------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------- | -------------------------------------------------------------------------- |
| type           | menu button type, refer to \`Button\` Component, only works when \`split-button\` is true                                 | string          | —                                                        | —                                                                          |
| size           | menu size, also works on the split button                                                                             | string          | large / default / small                                  | default                                                                    |
| max-height     | the max height of menu                                                                                                | string / number | —                                                        | —                                                                          |
| split-button   | whether a button group is displayed                                                                                   | boolean         | —                                                        | false                                                                      |
| disabled       | Whether to disable                                                                                                    | boolean         | —                                                        | false                                                                      |
| placement      | placement of pop menu                                                                                                 | string          | top/top-start/top-end/bottom/bottom-start/bottom-end     | bottom                                                                     |
| trigger        | how to trigger                                                                                                        | string          | hover/click/contextmenu                                  | hover                                                                      |
| hide-on-click  | whether to hide menu after clicking menu-item                                                                         | boolean         | —                                                        | true                                                                       |
| show-timeout   | Delay time before show a dropdown (only works when trigger is \`hover\`)                                                | number          | —                                                        | 250                                                                        |
| hide-timeout   | Delay time before hide a dropdown (only works when trigger is \`hover\`)                                                | number          | —                                                        | 150                                                                        |
| role           | The ARIA role attribute for the dropdown menu. Depending on the use case, you may want to change this to 'navigation' | string          | —                                                        | 'menu'                                                                     |
| tabindex       | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Dropdown                  | number          | —                                                        | 0                                                                          |
| popper-class   | custom class name for Dropdown's dropdown                                                                             | string          | —                                                        | —                                                                          |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) parameters                                                                | Object          | refer to [popper.js](https://popper.js.org/docs/v2/) doc | \`{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}\` |
| teleported     | whether the dropdown popup is teleported to the body                                                                  | boolean         | —                                                        | true                                                                       |
`;
const Slots = `
| Name     | Description                                                                                                                                   | Subtags       |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| —        | content of Dropdown. Notice: Must be a valid html dom element (ex. \`<span>, <button> etc.\`) or \`el-component\`, to attach the trigger listener | —             |
| dropdown | content of the Dropdown Menu, usually a \`<el-dropdown-menu>\` element                                                                          | Dropdown-Menu |
`;
const Events = `
| Name           | Description                                                       | Parameters                                    |
| -------------- | ----------------------------------------------------------------- | --------------------------------------------- |
| click          | if \`split-button\` is \`true\`, triggers when left button is clicked | —                                             |
| command        | triggers when a dropdown item is clicked                          | the command dispatched from the dropdown item |
| visible-change | triggers when the dropdown appears/disappears                     | true when it appears, and false otherwise     |
`;
const Exposes = `
| Method      | Description             | Parameters |
| ----------- | ----------------------- | ---------- |
| handleOpen  | open the dropdown menu  | —          |
| handleClose | close the dropdown menu | —          |
`;

export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
  slots: Slots,
};
