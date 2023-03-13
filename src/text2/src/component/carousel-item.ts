const Attributes = `
| Name  | Description                                      | Type   | Accepted Values | Default |
| ----- | ------------------------------------------------ | ------ | --------------- | ------- |
| name  | name of the item, can be used in \`setActiveItem\` | string | —               | —       |
| label | text content for the corresponding indicator     | string | —               | —       |
`;
const Slots = `
| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
`;

export default {
  attributes: Attributes,
  slots: Slots,
};
