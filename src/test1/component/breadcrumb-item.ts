const Attributes = `
| Name    | Description                                               | Type                                    | Default |
| ------- | --------------------------------------------------------- | --------------------------------------- | ------- |
| to      | target route of the link, same as \`to\` of \`vue-router\`    | ^[string] / ^[object]\`RouteLocationRaw\` | ''      |
| replace | if \`true\`, the navigation will not leave a history record | ^[boolean]                              | false   |
`;
const Slots = `
| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
`;

export default {
  attributes: Attributes,
  slots: Slots,
};
