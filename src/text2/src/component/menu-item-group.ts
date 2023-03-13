const Attributes = `
| Name  | Description | Type   | Accepted Values | Default |
| ----- | ----------- | ------ | --------------- | ------- |
| title | group title | string | —               | —       |
`;
const Slots = `
| Name  | Description               | Subtags   |
| ----- | ------------------------- | --------- |
| —     | customize default content | Menu-Item |
| title | customize group title     | —         |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
