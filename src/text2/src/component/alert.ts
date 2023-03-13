const Attributes = `
| Name        | Description                              | Type                                                  | Default   | Required |
| ----------- | ---------------------------------------- | ----------------------------------------------------- | --------- | -------- |
| title       | alert title.                             | ^[string]                                             | —         | No       |
| type        | alert type.                              | ^[enum]\`'success' | 'warning' | 'info' | 'error' \` | \`info\`    | No       |
| description | descriptive text.                        | ^[string]                                             | —         | No       |
| closable    | whether alert can be dismissed.          | ^[boolean]                                            | \`true\`    | No       |
| center      | whether content is placed in the center. | ^[boolean]                                            | \`false\`   | No       |
| close-text  | customized close button text.            | ^[string]                                             | —         | No       |
| show-icon   | whether a type icon is displayed.        | ^[boolean]                                            | \`false\`   | No       |
| effect      | theme style.                             | ^[enum]\`'light' | 'dark'\`                            | \`'light'\` | No       |
`;

const Events = `
| Name  | Description                   | Type                                     |
| ----- | ----------------------------- | ---------------------------------------- |
| close | trigger when alert is closed. | ^[Function]\`(event: MouseEvent) => void\` |
`;

const Slots = `
| Name    | Description                       |
| ------- | --------------------------------- |
| default | content of the alert description. |
| title   | content of the alert title.       |
`;

export default {
  attributes: Attributes,
  events: Events,
  slots: Slots,
};
