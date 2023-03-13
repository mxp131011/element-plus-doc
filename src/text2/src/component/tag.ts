const Attributes = `
| Name                | Description                          | Type    | Accepted Values             | Default |
| ------------------- | ------------------------------------ | ------- | --------------------------- | ------- |
| type                | component type                       | string  | success/info/warning/danger | —       |
| closable            | whether Tag can be removed           | boolean | —                           | false   |
| disable-transitions | whether to disable animations        | boolean | —                           | false   |
| hit                 | whether Tag has a highlighted border | boolean | —                           | false   |
| color               | background color of the Tag          | string  | —                           | —       |
| size                | tag size                             | string  | large / default /small      | default |
| effect              | component theme                      | string  | dark / light / plain        | light   |
| round               | whether Tag is rounded               | boolean | —                           | false   |
`;
const Events = `
| Name  | Description                  | Parameters |
| ----- | ---------------------------- | ---------- |
| click | triggers when Tag is clicked | —          |
| close | triggers when Tag is removed | —          |
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
