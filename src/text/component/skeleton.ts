const Attributes = `
| Name       | Description                                                      | Type      | Default |
| ---------- | ---------------------------------------------------------------- | --------- | ------- |
| \`animated\` | whether showing the animation                                    | \`boolean\` | \`false\` |
| \`count\`    | how many fake items to render to the DOM                         | \`number\`  | \`1\`     |
| \`loading\`  | whether showing the real DOM                                     | \`boolean\` | \`false\` |
| \`rows\`     | numbers of the row, only useful when no template slot were given | \`number\`  | \`3\`     |
| \`throttle\` | Rendering delay in milliseconds                                  | \`number\`  | \`0\`     |
`;
const Slots = `
| Name       | Description                        | Scope             |
| ---------- | ---------------------------------- | ----------------- |
| \`default\`  | Real rendering DOM                 | \`$attrs\`          |
| \`template\` | Custom rendering skeleton template | \`{ key: number }\` |
`;

export default {
  attributes: Attributes,
  slots: Slots,
};
