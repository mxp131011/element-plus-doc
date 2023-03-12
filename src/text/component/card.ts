const Attributes = `
| Name       | Description                                                   | Type                              | Default |
| ---------- | ------------------------------------------------------------- | --------------------------------- | ------- |
| header     | title of the card. Also accepts a DOM passed by \`slot#header\` | ^[string]                         | —       |
| body-style | CSS style of card body                                        | ^[object]\`CSSProperties\`          | —       |
| shadow     | when to show card shadows                                     | ^[enum]\`always | never | hover\` | always  |
`;
const Slots = `
| Name    | Description                |
| ------- | -------------------------- |
| default | customize default content  |
| header  | content of the Card header |
`;

export default {
  attributes: Attributes,
  slots: Slots,
};
