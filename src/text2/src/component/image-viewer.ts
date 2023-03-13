const Attributes = `
| Name                  | Description                                                                                                                   | Type               | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------- |
| url-list           | preview link list.                                                                                                            | \`string[]\`         | \`[]\`    |
| z-index             | preview backdrop z-index.                                                                                                     | \`number | string\` | —       |
| initial-index       | the initial preview image index, less than or equal to the length of \`url-list\`.                                              | \`number\`           | \`0\`     |
| infinite            | whether preview is infinite.                                                                                                  | \`boolean\`          | \`true\`  |
| hide-on-click-modal | whether user can emit close event when clicking backdrop.                                                                     | \`boolean\`          | \`false\` |
| teleported          | whether to append image itself to body. A nested parent element attribute transform should have this attribute set to \`true\`. | \`boolean\`          | \`false\` |
| zoom-rate           | the zoom rate of the image viewer zoom event                                                                                  | \`number\`           | \`1.2\`   |
`;
const Events = `
| Name     | Description                                                                                       | Type                      |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------- |
| close  | trigger when clicking on close button or when \`hide-on-click-modal\` enabled clicking on backdrop. | \`() => void\`              |
| switch | trigger when switching images.                                                                    | \`(index: number) => void\` |
`;
const Exposes = `
| Method        | Description           | Parameters                                            |
| ------------- | --------------------- | ----------------------------------------------------- |
| setActiveItem | manually switch image | index of the image to be switched to, starting from 0 |
`;

export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
};
