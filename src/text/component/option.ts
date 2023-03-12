const Attributes = `
| Name     | Description                                 | Type                               | Accepted Values | Default |
| -------- | ------------------------------------------- | ---------------------------------- | --------------- | ------- |
| value    | value of option                             | string / number / boolean / object | —               | —       |
| label    | label of option, same as \`value\` if omitted | string/number                      | —               | —       |
| disabled | whether option is disabled                  | boolean                            | —               | false   |
`;
const Slots = `
| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
