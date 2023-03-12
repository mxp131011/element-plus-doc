const Attributes = `
| Name                  | Description                                                                                                                                     | Type                                | Accepted Values         | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------- | ------- |
| model-value / v-model | binding value, it should be equivalent to either \`active-value\` or \`inactive-value\`, by default it's \`boolean\` type                             | boolean / string / number           | —                       | —       |
| disabled              | whether Switch is disabled                                                                                                                      | boolean                             | —                       | false   |
| loading               | whether Switch is in loading state                                                                                                              | boolean                             | —                       | false   |
| size                  | size of Switch                                                                                                                                  | string                              | large / default / small | default |
| width                 | width of Switch                                                                                                                                 | number / string                     | —                       | —       |
| inline-prompt         | whether icon or text is displayed inside dot, only the first character will be rendered for text                                                | boolean                             | —                       | false   |
| active-icon           | component of the icon displayed when in \`on\` state, overrides \`active-text\`                                                                     | \`string | Component\`               | —                       | —       |
| inactive-icon         | component of the icon displayed when in \`off\` state, overrides \`inactive-text\`                                                                  | \`string | Component\`               | —                       | —       |
| active-text           | text displayed when in \`on\` state                                                                                                               | string                              | —                       | —       |
| inactive-text         | text displayed when in \`off\` state                                                                                                              | string                              | —                       | —       |
| active-value          | switch value when in \`on\` state                                                                                                                 | boolean / string / number           | —                       | true    |
| inactive-value        | switch value when in \`off\` state                                                                                                                | boolean / string / number           | —                       | false   |
| active-color          | background color when in \`on\` state ( deprecated, use CSS var \`--el-switch-on-color\` instead )                                                  | string                              | —                       | —       |
| inactive-color        | background color when in \`off\` state ( deprecated, use CSS var \`--el-switch-off-color\` instead )                                                | string                              | —                       | —       |
| border-color          | border color of the switch ( deprecated, use CSS var \`--el-switch-border-color\` instead )                                                       | string                              | —                       | —       |
| name                  | input name of Switch                                                                                                                            | string                              | —                       | —       |
| validate-event        | whether to trigger form validation                                                                                                              | boolean                             | —                       | true    |
| before-change         | before-change hook before the switch state changes. If \`false\` is returned or a \`Promise\` is returned and then is rejected, will stop switching | \`() => Promise<boolean> | boolean\` | —                       | —       |
`;
const Events = `
| Name   | Description                 | Parameters           |
| ------ | --------------------------- | -------------------- |
| change | triggers when value changes | value after changing |
`;
const Exposes = `
| Name   | Description                | Parameters |
| ------ | -------------------------- | ---------- |
| focus  | focus the Switch component | —          |
`;
export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
};
