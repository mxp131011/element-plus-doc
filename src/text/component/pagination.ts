const Attributes = `
| Name                                | Description                                                                                                                     | Type                                                                              | Default                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------ |
| small                               | whether to use small pagination                                                                                                 | ^[boolean]                                                                        | false                                |
| background                          | whether the buttons have a background color                                                                                     | ^[boolean]                                                                        | false                                |
| page-size / v-model:page-size       | item count of each page                                                                                                         | ^[number]                                                                         | 10                                   |
| default-page-size                   | default initial value of page size                                                                                              | ^[number]                                                                         | -                                    |
| total                               | total item count                                                                                                                | ^[number]                                                                         | —                                    |
| page-count                          | total page count. Set either \`total\` or \`page-count\` and pages will be displayed; if you need \`page-sizes\`, \`total\` is required | ^[number]                                                                         | —                                    |
| pager-count                         | number of pagers. Pagination collapses when the total page count exceeds this value                                             | ^[number]\`5 | 7 | 9 | 11 | 13 | 15 | 17 | 19 | 21\`                        | 7                                    |
| current-page / v-model:current-page | current page number                                                                                                             | ^[number]                                                                         | 1                                    |
| default-current-page                | default initial value of current-page                                                                                           | ^[number]                                                                         | -                                    |
| layout                              | layout of Pagination, elements separated with a comma                                                                           | ^[string]\`string (consists of sizes, prev, pager, next, jumper, ->, total, slot)\` | prev, pager, next, jumper, ->, total |
| page-sizes                          | options of item count per page                                                                                                  | ^[array]\`number[]\`                                                                | [10, 20, 30, 40, 50, 100]            |
| popper-class                        | custom class name for the page size Select's dropdown                                                                           | ^[string]                                                                         | —                                    |
| prev-text                           | text for the prev button                                                                                                        | ^[string]                                                                         | —                                    |
| prev-icon                           | icon for the prev button, higher priority of \`prev-text\`                                                                        | ^[string] / ^[Component]                                                          | ArrowLeft                            |
| next-text                           | text for the next button                                                                                                        | ^[string]                                                                         | —                                    |
| next-icon                           | icon for the next button, higher priority of \`next-text\`                                                                        | ^[string] / ^[Component]                                                          | ArrowRight                           |
| disabled                            | whether Pagination is disabled                                                                                                  | ^[boolean]                                                                        | false                                |
| hide-on-single-page                 | whether to hide when there's only one page                                                                                      | ^[boolean]                                                                        | -                                    |
`;

const Events = `
| Name           | Description                                                       | Type                                 |
| -------------- | ----------------------------------------------------------------- | ------------------------------------ |
| size-change    | triggers when \`page-size\` changes                                 | ^[Function]\`(value: number) => void\` |
| current-change | triggers when \`current-page\` changes                              | ^[Function]\`(value: number) => void\` |
| prev-click     | triggers when the prev button is clicked and current page changes | ^[Function]\`(value: number) => void\` |
| next-click     | triggers when the next button is clicked and current page changes | ^[Function]\`(value: number) => void\` |
 `;
const Slots = `
| Name    | Description                                                         |
| ------- | ------------------------------------------------------------------- |
| default | custom content. To use this, you need to declare \`slot\` in \`layout\` |
`;
export default {
  attributes: Attributes,
  events: Events,
  slots: Slots,
};
