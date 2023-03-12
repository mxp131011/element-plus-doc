const Attributes = `
| Name       | Description                     | Type                                                                                                                          | Default    |
| ---------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------- |
| alignment  | Controls the alignment of items | ^[enum]\`'center' | 'normal' | 'stretch' | ...\` [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) | center     |
| class      | Classname                       | ^[string] / ^[object] / ^[array]                                                                                              | —          |
| direction  | Placement direction             | ^[enum]\`'vertical' | 'horizontal'\`                                                                                           | horizontal |
| prefixCls  | Prefix for space-items          | ^[string]                                                                                                                     | —          |
| style      | Extra style rules               | ^[string] / ^[object]\`CSSProperties | CSSProperties[] | string[]\`                                                           | —          |
| spacer     | Spacer                          | ^[string] / ^[number] / ^[VNode]                                                                                              | —          |
| size       | Spacing size                    | ^[enum]\`'default' | 'small' | 'large'\` / ^[number] / ^[array]\`[number, number]\`                                             | small      |
| wrap       | Auto wrapping                   | ^[boolean]                                                                                                                    | false      |
| fill       | Whether to fill the container   | ^[boolean]                                                                                                                    | false      |
| fill-ratio | Ratio of fill                   | ^[number]                                                                                                                     | 100        |
`;
const Slots = `
| name    | description        |
| ------- | ------------------ |
| default | Items to be spaced |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
