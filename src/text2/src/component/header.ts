const Attributes = `
| Name   | Description          | Type      | Default |
| ------ | -------------------- | --------- | ------- |
| height | height of the header | ^[string] | 60px    |
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
