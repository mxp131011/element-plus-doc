const Attributes = `
| Name     | Description               | Type                               | Default |
| -------- | ------------------------- | ---------------------------------- | ------- |
| label    | the value of Radio        | ^[string] / ^[number] / ^[boolean] | —       |
| disabled | whether Radio is disabled | ^[boolean]                         | false   |
| name     | native 'name' attribute   | ^[string]                          | —       |
`;
const Slots = `
| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
