const Attributes = `
| Name     | Description                                                 | Type                  | Accepted Values | Default |
| -------- | ----------------------------------------------------------- | --------------------- | --------------- | ------- |
| command  | a command to be dispatched to Dropdown's \`command\` callback | string/number/object  | —               | —       |
| disabled | whether the item is disabled                                | boolean               | —               | false   |
| divided  | whether a divider is displayed                              | boolean               | —               | false   |
| icon     | custom icon                                                 | \`string | Component\` | —               | —       |
`;
const Slots = `
| Name | Description                |
| ---- | -------------------------- |
| —    | customize of Dropdown Item |
`;

export default {
  attributes: Attributes,
  slots: Slots,
};
