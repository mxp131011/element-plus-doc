const Attributes = `
| Name                  | Description                          | Type                                     | Default |
| --------------------- | ------------------------------------ | ---------------------------------------- | ------- |
| model-value / v-model | binding value                        | ^[string] / ^[number] / ^[boolean]       | —       |
| label                 | the value of Radio                   | ^[string] / ^[number] / ^[boolean]       | —       |
| disabled              | whether Radio is disabled            | ^[boolean]                               | false   |
| border                | whether to add a border around Radio | ^[boolean]                               | false   |
| size                  | size of the Radio                    | ^[enum]\`'large' | 'default' | 'small'\` | —       |
| name                  | native \`name\` attribute              | ^[string]                                | —       |
`;
const Events = `
| Name   | Description                           | Type                                                      |
| ------ | ------------------------------------- | --------------------------------------------------------- |
| change | triggers when the bound value changes | ^[Function]\`(value: string | number | boolean) => void\` |
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
