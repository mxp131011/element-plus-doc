const Attributes = `
| Name                  | Description                                                                                                                                                    | Type                                           | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------- |
| model-value / v-model | binding value                                                                                                                                                  | ^[string] / ^[number] / ^[boolean]             | —       |
| label                 | value of the Checkbox when used inside a \`checkbox-group\`                                                                                                      | ^[string] / ^[number] / ^[boolean] / ^[object] | —       |
| true-label            | value of the Checkbox if it's checked                                                                                                                          | ^[string] / ^[number]                          | —       |
| false-label           | value of the Checkbox if it's not checked                                                                                                                      | ^[string] / ^[number]                          | —       |
| disabled              | whether the Checkbox is disabled                                                                                                                               | ^[boolean]                                     | false   |
| border                | whether to add a border around Checkbox                                                                                                                        | ^[boolean]                                     | false   |
| size                  | size of the Checkbox                                                                                                                                           | ^[enum]\`'large' | 'default' | 'small'\`       | —       |
| name                  | native 'name' attribute                                                                                                                                        | ^[string]                                      | —       |
| checked               | if the Checkbox is checked                                                                                                                                     | ^[boolean]                                     | false   |
| indeterminate         | Set indeterminate state, only responsible for style control                                                                                                    | ^[boolean]                                     | false   |
| validate-event        | whether to trigger form validation                                                                                                                             | ^[boolean]                                     | true    |
| tabindex              | input tabindex                                                                                                                                                 | ^[string] / ^[number]                          | —       |
| id                    | input id                                                                                                                                                       | ^[string]                                      | —       |
| controls <A11yTag />  | same as [aria-controls](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls), takes effect when \`indeterminate\` is \`true\` | ^[boolean]                                     | —       |
`;

const Events = `
| Name   | Description                             | Type                                                      |
| ------ | --------------------------------------- | --------------------------------------------------------- |
| change | triggers when the binding value changes | ^[Function]\`(value: string | number | boolean) => void\` |
`;
const Slots = `
| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
`;

export default {
  attributes: Attributes,
  events: Events,
  slots: Slots,
};
