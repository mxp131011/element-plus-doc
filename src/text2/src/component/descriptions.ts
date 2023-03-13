const Attributes = `
| Name      | Description                                | Type    | Accepted Values         | Default    |
| --------- | ------------------------------------------ | ------- | ----------------------- | ---------- |
| border    | with or without border                     | boolean | —                       | false      |
| column    | numbers of \`Descriptions Item\` in one line | number  | —                       | 3          |
| direction | direction of list                          | string  | vertical / horizontal   | horizontal |
| size      | size of list                               | string  | large / default / small | default    |
| title     | title text, display on the top left        | string  | —                       | —          |
| extra     | extra text, display on the top right       | string  | —                       | —          |
`;

const Slots = `
| Name  | Description                                 | Subtags           |
| ----- | ------------------------------------------- | ----------------- |
| —     | customize default content                   | Descriptions Item |
| title | custom title, display on the top left       | —                 |
| extra | custom extra area, display on the top right | —                 |
`;

export default {
  attributes: Attributes,
  slots: Slots,
};
