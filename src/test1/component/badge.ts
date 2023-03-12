const Attributes = `
| Name   | Description                                                                   | Type                                                               | Default |
| ------ | ----------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------- |
| value  | display value.                                                                | ^[string] / ^[number]                                              | ''      |
| max    | maximum value, shows \`{max}+\` when exceeded. Only works if value is a number. | ^[number]                                                          | 99      |
| is-dot | if a little dot is displayed.                                                 | ^[boolean]                                                         | false   |
| hidden | hidden badge.                                                                 | ^[boolean]                                                         | false   |
| type   | badge type.                                                                   | ^[enum]\`'primary' | 'success' | 'warning' | 'danger' | 'info'\` | danger  |
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
