const Attributes = `
| Name        | Description                                               | Type                                           | Default |
| ----------- | --------------------------------------------------------- | ---------------------------------------------- | ------- |
| label       | value of the checkbox when used inside a \`checkbox-group\` | ^[string] / ^[number] / ^[boolean] / ^[object] | —       |
| true-label  | value of the checkbox if it's checked                     | ^[string] / ^[number]                          | —       |
| false-label | value of the checkbox if it's not checked                 | ^[string] / ^[number]                          | —       |
| disabled    | whether the checkbox is disabled                          | ^[boolean]                                     | false   |
| name        | native 'name' attribute                                   | ^[string]                                      | —       |
| checked     | if the checkbox is checked                                | ^[boolean]                                     | false   |
`;

const Events = `
| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
`;

export default {
  attributes: Attributes,
  events: Events,
};
