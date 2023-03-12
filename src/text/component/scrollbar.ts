const Attributes = `
| Name       | Description                                                                                                                     | Type                                                                | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------- |
| height     | height of scrollbar                                                                                                             | ^[string] / ^[number]                                               | —       |
| max-height | max height of scrollbar                                                                                                         | ^[string] / ^[number]                                               | —       |
| native     | whether to use the native scrollbar style                                                                                       | ^[boolean]                                                          | false   |
| wrap-style | style of wrap container                                                                                                         | ^[string] / ^[object]\`CSSProperties | CSSProperties[] | string[]\` | —       |
| wrap-class | class of wrap container                                                                                                         | ^[string]                                                           | —       |
| view-style | style of view                                                                                                                   | ^[string] / ^[object]\`CSSProperties | CSSProperties[] | string[]\` | —       |
| view-class | class of view                                                                                                                   | ^[string]                                                           | —       |
| noresize   | do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance | ^[boolean]                                                          | false   |
| tag        | element tag of the view                                                                                                         | ^[string]                                                           | div     |
| always     | always show scrollbar                                                                                                           | ^[boolean]                                                          | false   |
| min-size   | minimum size of scrollbar                                                                                                       | ^[number]                                                           | 20      |
`;

const Events = `
| Name   | Description                                           | Type                                                             |
| ------ | ----------------------------------------------------- | ---------------------------------------------------------------- |
| scroll | triggers when scrolling, return distance of scrolling | ^[Function]\`({ scrollLeft: number, scrollTop: number }) => void\` |
`;
const Slots = `
| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
`;
const Exposes = `
| Name          | Description                                | Type                                                                       |
| ------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| handleScroll  | handle scroll event                        | ^[Function]\`() => void\`                                                    |
| scrollTo      | scrolls to a particular set of coordinates | ^[Function]\`(options: ScrollToOptions | number, yCoord?: number) => void\` |
| setScrollTop  | Set distance to scroll top                 | ^[Function]\`(scrollTop: number) => void\`                                   |
| setScrollLeft | Set distance to scroll left                | ^[Function]\`(scrollLeft: number) => void\`                                  |
| update        | update scrollbar state manually            | ^[Function]\`() => void\`                                                    |
| wrapRef       | scrollbar wrap ref                         | ^[object]\`Ref<HTMLDivElement>\`                                             |
`;
export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
  slots: Slots,
};
