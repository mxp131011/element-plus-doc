const Attributes = `
| Name  | Description                | Type                  | Default                |
| ----- | -------------------------- | --------------------- | ---------------------- |
| color | SVG tag's fill attribute   | ^[string]             | inherit from color     |
| size  | SVG icon size, size x size | ^[number] / ^[string] | inherit from font size |
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
