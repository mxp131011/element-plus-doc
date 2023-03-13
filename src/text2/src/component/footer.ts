const Attributes = `
| Name   | Description          | Type      | Default |
| ------ | -------------------- | --------- | ------- |
| height | height of the footer | ^[string] | 60px    |
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
