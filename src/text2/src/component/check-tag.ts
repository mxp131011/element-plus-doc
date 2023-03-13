const Attributes = `
| Name    | Description | Type    | Accepted Values | Default |
| ------- | ----------- | ------- | --------------- | ------- |
| checked | is checked  | boolean | true/false      | —       |
`;

const Events = `
| Name   | Description                        | Parameters |
| ------ | ---------------------------------- | ---------- |
| change | triggers when Check Tag is clicked | checked    |
`;
const Slots = `
| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
`;
export default {
  attributes: Attributes,
  events: Events,
  slots: Slots,
};
