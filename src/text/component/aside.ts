const Attributes = `
| Name  | Description               | Type      | Default |
| ----- | ------------------------- | --------- | ------- |
| width | width of the side section | ^[string] | 300px   |
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
