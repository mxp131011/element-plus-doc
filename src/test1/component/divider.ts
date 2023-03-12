const Attributes = `
| Name             | Description                                                | Type                                                                                                                                        | Default    |
| ---------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| direction        | Set divider's direction                                    | ^[enum]\`'horizontal' | 'vertical'\`                                                                                                         | horizontal |
| border-style     | Set the style of divider                                   | ^[enum]\`'none' | 'solid' | 'hidden' | 'dashed' | ...\` [css/border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style) | solid      |
| content-position | the position of the customized content on the divider line | ^[enum]\`'left' | 'right' | 'center' \`                                                                                                     | center     |
`;
const Slots = `
| Name    | Description                            |
| ------- | -------------------------------------- |
| default | customized content on the divider line |
`;

export default {
  attributes: Attributes,
  slots: Slots,
};
