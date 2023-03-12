const Attributes = `
| Attribute                  | Description                                                                  | Type                                                | Default         |
| -------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------- | --------------- |
| message                  | message text                                                                   | string | VNode | (() => VNode)                      |                 |
| type                     | message type                                                                   | 'success' | 'warning' | 'info' | 'error' | 'info'   |—                |
| icon                     | custom icon component, overrides \`type\`                                      | string | Component                                  | —               |
| dangerouslyUseHTMLString | whether \`message\` is treated as HTML string                                  | boolean                                             | false           |
| duration                 | display duration, millisecond. If set to 0, it will not turn off automatically | number                                              | 3000            |
| show-close               | whether to show a close button                                                 | boolean                                             | false           |
| center                   | whether to center the text                                                     | boolean                                             | false           |
| on-close                 | callback function when closed with the message instance as the parameter       | function                                            | —               |
| offset                   | set the distance to the top of viewport                                        | number                                              | 20              |
| appendTo                 | set the root element for the message                                           | string | HTMLElement                                | document.body   |
| grouping                 | merge messages with the same content, type of VNode message is not supported   | boolean                                             | false           |
`;

const Exposes = `
| Method  | Description       |
| ------- | ----------------- |
| close   | close the Message |
`;
export default {
  attributes: Attributes,
  exposes: Exposes,
};
