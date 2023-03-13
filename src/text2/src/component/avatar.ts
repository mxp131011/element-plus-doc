const Attributes = `
| Name    | Description                                               | Type                                                              | Default |
| ------- | --------------------------------------------------------- | ----------------------------------------------------------------- | ------- |
| icon    | representation type to icon, more info on icon component. | ^[string] / ^[Component]                                          | —       |
| size    | avatar size.                                              | ^[number] / ^[enum]\`'large' | 'default' | 'small'\`              | default |
| shape   | avatar shape.                                             | ^[enum]\`'circle' | 'square'\`                                     | circle  |
| src     | the source of the image for an image avatar.              | \`string\`                                                          | —       |
| src-set | native attribute \`srcset\` of image avatar.                | \`string\`                                                          | —       |
| alt     | native attribute \`alt\` of image avatar.                   | \`string\`                                                          | —       |
| fit     | set how the image fit its container for an image avatar.  | ^[enum]\`'fill' | 'contain' | 'cover' | 'none' | 'scale-down'\` | cover   |
`;
const Events = `
| Name  | Description                    | Type                            |
| ----- | ------------------------------ | ------------------------------- |
| error | trigger when image load error. | ^[Function]\`(e: Event) => void\` |
`;
const Slots = `
| Name    | Description               |
| ------- | ------------------------- |
| default | customize avatar content. |
`;

export default {
  attributes: Attributes,
  events: Events,
  slots: Slots,
};
