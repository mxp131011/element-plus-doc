const Attributes = `
| Name                  | Description                                                                                                                             | Type                                | Accepted Values       | Default           |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------------------- | ----------------- |
| model-value / v-model | binding value, name of the selected tab                                                                                                 | string / number                     | —                     | name of first tab |
| type                  | type of Tab                                                                                                                             | string                              | card/border-card      | —                 |
| closable              | whether Tab is closable                                                                                                                 | boolean                             | —                     | false             |
| addable               | whether Tab is addable                                                                                                                  | boolean                             | —                     | false             |
| editable              | whether Tab is addable and closable                                                                                                     | boolean                             | —                     | false             |
| tab-position          | position of tabs                                                                                                                        | string                              | top/right/bottom/left | top               |
| stretch               | whether width of tab automatically fits its container                                                                                   | boolean                             | -                     | false             |
| before-leave          | hook function before switching tab. If \`false\` is returned or a \`Promise\` is returned and then is rejected, switching will be prevented | Function(activeName, oldActiveName) | —                     | —                 |
`;
const Events = `
| Name       | Description                                           | Parameters                                                          |
| ---------- | ----------------------------------------------------- | ------------------------------------------------------------------- |
| tab-click  | triggers when a tab is clicked                        | (pane: \`TabsPaneContext\`, ev: \`Event\`)                              |
| tab-change | triggers when \`activeName\` is changed                 | (name: \`TabPaneName\`)                                               |
| tab-remove | triggers when tab-remove button is clicked            | (name: \`TabPaneName\`)                                               |
| tab-add    | triggers when tab-add button is clicked               | —                                                                   |
| edit       | triggers when tab-add button or tab-remove is clicked | (paneName: \`TabPaneName | undefined\`, action: \`'remove' | 'add'\`) |
`;
const Slots = `
| Name | Description               | Subtags  |
| ---- | ------------------------- | -------- |
| -    | customize default content | Tab-pane |
`;
export default {
  attributes: Attributes,
  events: Events,
  slots: Slots,
};
