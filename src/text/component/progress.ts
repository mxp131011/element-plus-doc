const Attributes = `
| Name           | Description                                                                           | Type                  | Accepted Values           | Default |
| -------------- | ------------------------------------------------------------------------------------- | --------------------- | ------------------------- | ------- |
| percentage     | percentage, **required**                                                              | number                | (0-100)                   | 0       |
| type           | the type of progress bar                                                              | string                | line/circle/dashboard     | line    |
| stroke-width   | the width of progress bar                                                             | number                | —                         | 6       |
| text-inside    | whether to place the percentage inside progress bar, only works when \`type\` is 'line' | boolean               | —                         | false   |
| status         | the current status of progress bar                                                    | string                | success/exception/warning | —       |
| indeterminate  | set indeterminate progress                                                            | boolean               | -                         | false   |
| duration       | control the animation duration of indeterminate progress                              | number                | -                         | 3       |
| color          | background color of progress bar. Overrides \`status\` prop                             | string/function/array | —                         | ''      |
| width          | the canvas width of circle progress bar                                               | number                | —                         | 126     |
| show-text      | whether to show percentage                                                            | boolean               | —                         | true    |
| stroke-linecap | circle/dashboard type shape at the end path                                           | string                | butt/round/square         | round   |
| format         | custom text format                                                                    | function(percentage)  | —                         | —       |
`;
const Slots = `
| Name    | Description                                       |
| ------- | ------------------------------------------------- |
| default | Customized content, parameter is \`{ percentage }\` |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
