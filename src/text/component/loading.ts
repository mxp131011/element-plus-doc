const Slots = `
| Attribute    | Description                                                                                                                                                              | Type          | Accepted Values | Default       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | --------------- | ------------- |
| target       | the DOM node Loading needs to cover. Accepts a DOM object or a string. If it's a string, it will be passed to \`document.querySelector\` to get the corresponding DOM node | object/string | —               | document.body |
| body         | same as the \`body\` modifier of \`v-loading\`                                                                                                                               | boolean       | —               | false         |
| fullscreen   | same as the \`fullscreen\` modifier of \`v-loading\`                                                                                                                         | boolean       | —               | true          |
| lock         | same as the \`lock\` modifier of \`v-loading\`                                                                                                                               | boolean       | —               | false         |
| text         | loading text that displays under the spinner                                                                                                                             | string        | —               | —             |
| spinner      | class name of the custom spinner                                                                                                                                         | string        | —               | —             |
| background   | background color of the mask                                                                                                                                             | string        | —               | —             |
| custom-class | custom class name for Loading                                                                                                                                            | string        | —               | —             |
`;
const Directives = `
| Name                       | Description                                                  | Type    |
| -------------------------- | ------------------------------------------------------------ | ------- |
| v-loading                  | show animation while loading data                            | boolean |
| element-loading-text       | loading text that displays under the spinner                 | string  |
| element-loading-spinner    | icon of the custom spinner                                   | string  |
| element-loading-svg        | icon of the custom spinner (same as element-loading-spinner) | string  |
| element-loading-background | background color of the mask                                 | string  |
`;
export default {
  slots: Slots,
  directives: Directives,
};
