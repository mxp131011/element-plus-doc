const Attributes = `
| Name               | Description                                           | Type    | Accepted Values     | Default    |
| ------------------ | ----------------------------------------------------- | ------- | ------------------- | ---------- |
| height             | height of the carousel                                | string  | —                   | —          |
| initial-index      | index of the initially active slide (starting from 0) | number  | —                   | 0          |
| trigger            | how indicators are triggered                          | string  | hover/click         | hover      |
| autoplay           | whether automatically loop the slides                 | boolean | —                   | true       |
| interval           | interval of the auto loop, in milliseconds            | number  | —                   | 3000       |
| indicator-position | position of the indicators                            | string  | outside/none        | —          |
| arrow              | when arrows are shown                                 | string  | always/hover/never  | hover      |
| type               | type of the Carousel                                  | string  | card                | —          |
| loop               | display the items in loop                             | boolean | -                   | true       |
| direction          | display direction                                     | string  | horizontal/vertical | horizontal |
| pause-on-hover     | pause autoplay when hover                             | boolean | -                   | true       |
`;

const Events = `
| Name   | Description                             | Parameters                                                   |
| ------ | --------------------------------------- | ------------------------------------------------------------ |
| change | triggers when the active slide switches | index of the new active slide, index of the old active slide |
`;

const Exposes = `
| Exposes        | Description                  | Parameters                                                                                               |
| ------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------- |
| setActiveItem | manually switch slide        | index of the slide to be switched to, starting from 0; or the \`name\` of corresponding \`el-carousel-item\` |
| prev          | switch to the previous slide | —                                                                                                        |
| next          | switch to the next slide     | —                                                                                                        |
`;

export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
  slots: Slots,
};
