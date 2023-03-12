const Attributes = `
| Name    | Description                         | Type                                                                                         | Default |
| ------- | ----------------------------------- | -------------------------------------------------------------------------------------------- | ------- |
| gutter  | grid spacing                        | ^[number]                                                                                    | 0       |
| justify | horizontal alignment of flex layout | ^[enum]\`'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'\` | start   |
| align   | vertical alignment of flex layout   | ^[enum]\`'top' | 'middle' | 'bottom'\`                                                       | top     |
| tag     | custom element tag                  | ^[string]                                                                                    | div     |
`;
const Slots = `
| Name    | Description               | Subtags |
| ------- | ------------------------- | ------- |
| default | customize default content | Col     |
 `;
export default {
  attributes: Attributes,
  slots: Slots,
};
