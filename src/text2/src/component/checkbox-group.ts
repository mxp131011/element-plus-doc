const Attributes = `
| Name                  | Description                                       | Type                                     | Default |
| --------------------- | ------------------------------------------------- | ---------------------------------------- | ------- |
| model-value / v-model | binding value                                     | ^[object]\`string[] | number[]\`          | []      |
| size                  | size of checkbox                                  | ^[enum]\`'large' | 'default' | 'small'\` | —       |
| disabled              | whether the nesting checkboxes are disabled       | ^[boolean]                               | false   |
| min                   | minimum number of checkbox checked                | ^[number]                                | —       |
| max                   | maximum number of checkbox checked                | ^[number]                                | —       |
| label                 | label for screen reader                           | ^[string]                                | —       |
| text-color            | font color when button is active                  | ^[string]                                | #ffffff |
| fill                  | border and background color when button is active | ^[string]                                | #409EFF |
| tag                   | element tag of the checkbox group                 | ^[string]                                | div     |
| validate-event        | whether to trigger form validation                | ^[boolean]                               | true    |
`;

const Events = `
| Name   | Description                             | Type                                               |
| ------ | --------------------------------------- | -------------------------------------------------- |
| change | triggers when the binding value changes | ^[Function]\`(value: string[] | number[]) => void\` |
`;
const Slots = `
| Name    | Description               | Subtags                    |
| ------- | ------------------------- | -------------------------- |
| default | customize default content | Checkbox / Checkbox-button |
`;

export default {
  attributes: Attributes,
  events: Events,
  slots: Slots,
};
