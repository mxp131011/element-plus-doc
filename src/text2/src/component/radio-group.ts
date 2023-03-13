const Attributes = `
| Name                  | Description                                       | Type                               | Default |
| --------------------- | ------------------------------------------------- | ---------------------------------- | ------- |
| model-value / v-model | binding value                                     | ^[string] / ^[number] / ^[boolean] | —       |
| size                  | the size of radio buttons or bordered radios      | ^[string]                          | default |
| disabled              | whether the nesting radios are disabled           | ^[boolean]                         | false   |
| text-color            | font color when button is active                  | ^[string]                          | #ffffff |
| fill                  | border and background color when button is active | ^[string]                          | #409EFF |
| validate-event        | whether to trigger form validation                | ^[boolean]                         | true    |
| label<A11yTag />      | same as \`aria-label\` in RadioGroup                | ^[string]                          | —       |
| name                  | native \`name\` attribute                           | ^[string]                          | —       |
| id                    | native \`id\` attribute                             | ^[string]                          | —       |
`;
const Events = `
| Name   | Description                           | Type                                                      |
| ------ | ------------------------------------- | --------------------------------------------------------- |
| change | triggers when the bound value changes | ^[Function]\`(value: string | number | boolean) => void\` |
`;
const Slots = `
| Name    | Description               | Subtags             |
| ------- | ------------------------- | ------------------- |
| default | customize default content | Radio / RadioButton |
`;
export default {
  attributes: Attributes,
  events: Events,
  slots: Slots,
};
