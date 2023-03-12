const Attributes = `
| Name        | Description        | Type   | Acceptable Value | Default |
| ----------- | ------------------ | ------ | ---------------- | ------- |
| image       | image URL          | string | —                | —       |
| image-size  | image size (width) | number | —                | —       |
| description | description        | string | —                | —       |
`;

const Slots = `
| Name        | Description           |
| ----------- | --------------------- |
| default     | Custom bottom content |
| image       | Custom image          |
| description | Custom description    |
`;

export default {
  attributes: Attributes,
  slots: Slots,
};
