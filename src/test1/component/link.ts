const Attributes = `
| Name      | Description                         | Type                                                                            | Default |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------- | ------- |
| type      | type                                | ^[enum]\`'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'\` | default |
| underline | whether the component has underline | ^[boolean]                                                                      | true    |
| disabled  | whether the component is disabled   | ^[boolean]                                                                      | false   |
| href      | same as native hyperlink's \`href\`   | ^[string]                                                                       | —       |
| icon      | icon component                      | ^[string] / ^[Component]                                                        | —       |
`;
const Slots = `
| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
| icon    | customize icon component  |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
