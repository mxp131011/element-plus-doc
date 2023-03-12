const Attributes = `
| Name     | Description                                  | Type    | Accepted Values | Default |
| -------- | -------------------------------------------- | ------- | --------------- | ------- |
| label    | name of the group                            | string  | —               | —       |
| disabled | whether to disable all options in this group | boolean | —               | false   |
`;
const Slots = `
| Name | Description               | Subtags |
| ---- | ------------------------- | ------- |
| -    | customize default content | Option  |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
