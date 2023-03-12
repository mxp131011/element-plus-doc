const Attributes = `
| Name      | Description        | Type                                                               | Default |
| --------- | ------------------ | ------------------------------------------------------------------ | ------- |
| type      | text type          | ^[enum]\`'primary' | 'success' | 'warning' | 'danger' | 'info'\` | —       |
| size      | text size          | ^[enum]\`'large' | 'default' | 'small'\`                           | default |
| truncated | render ellipsis    | ^[boolean]                                                         | false   |
| tag       | custom element tag | ^[string]                                                          | span    |
`;
const Slots = `
| Name    | Description     |
| ------- | --------------- |
| default | default content |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
