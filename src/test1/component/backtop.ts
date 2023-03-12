const Attributes = `
| Name              | Description                                                          | Type      | Default |
| ----------------- | -------------------------------------------------------------------- | --------- | ------- |
| target            | the target to trigger scroll.                                        | ^[string] | —       |
| visibility-height | the button will not show until the scroll height reaches this value. | ^[number] | 200     |
| right             | right distance.                                                      | ^[number] | 40      |
| bottom            | bottom distance.                                                     | ^[number] | 40      |
`;
const Events = `
| Name  | Description          | Parameters                             |
| ----- | -------------------- | -------------------------------------- |
| click | triggers when click. | ^[Function]\`(evt: MouseEvent) => void\` |
`;

const Slots = `
| Name    | Description                |
| ------- | -------------------------- |
| default | customize default content. |
 `;

export default {
  attributes: Attributes,
  events: Events,
  slots: Slots,
};
