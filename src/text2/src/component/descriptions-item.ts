const Attributes = `
| Name             | Description                                                                                                                                                                                  | Type            | Accepted Values       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------------- | ------- |
| label            | label text                                                                                                                                                                                   | string          | —                     | —       |
| span             | colspan of column                                                                                                                                                                            | number          | —                     | 1       |
| width            | column width, the width of the same column in different rows is set by the max value (If no \`border\`, width contains label and content)                                                      | string / number | —                     | —       |
| min-width        | column minimum width, columns with \`width\` has a fixed width, while columns with \`min-width\` has a width that is distributed in proportion (If no\`border\`, width contains label and content) | string / number | —                     | —       |
| align            | column content alignment (If no \`border\`, effective for both label and content)                                                                                                              | string          | left / center / right | left    |
| label-align      | column label alignment, if omitted, the value of the above \`align\` attribute will be applied (If no \`border\`, please use \`align\` attribute)                                                  | string          | left / center / right | —       |
| class-name       | column content custom class name                                                                                                                                                             | string          | —                     | —       |
| label-class-name | column label custom class name                                                                                                                                                               | string          | —                     | —       |
`;
const Slots = `
| Name  | Description               |
| ----- | ------------------------- |
| —     | customize default content |
| label | custom label              |
`;

export default {
  attributes: Attributes,
  slots: Slots,
};
