const Attributes = `
| Name                          | Description                                                                                       | Type                                              | Accepted Values | Default |
| ----------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------- | --------------- | ------- |
| model-value / v-model         | visibility of Dialog                                                                              | boolean                                           | —               | —       |
| title                         | title of Dialog. Can also be passed with a named slot (see the following table)                   | string                                            | —               | —       |
| width                         | width of Dialog                                                                                   | string / number                                   | —               | 50%     |
| fullscreen                    | whether the Dialog takes up full screen                                                           | boolean                                           | —               | false   |
| top                           | value for \`margin-top\` of Dialog CSS                                                              | string                                            | —               | 15vh    |
| modal                         | whether a mask is displayed                                                                       | boolean                                           | —               | true    |
| append-to-body                | whether to append Dialog itself to body. A nested Dialog should have this attribute set to \`true\` | boolean                                           | —               | false   |
| lock-scroll                   | whether scroll of body is disabled while Dialog is displayed                                      | boolean                                           | —               | true    |
| custom-class<DeprecatedTag /> | custom class names for Dialog                                                                     | string                                            | —               | —       |
| open-delay                    | Time(milliseconds) before open                                                                    | number                                            | —               | 0       |
| close-delay                   | Time(milliseconds) before close                                                                   | number                                            | —               | 0       |
| close-on-click-modal          | whether the Dialog can be closed by clicking the mask                                             | boolean                                           | —               | true    |
| close-on-press-escape         | whether the Dialog can be closed by pressing ESC                                                  | boolean                                           | —               | true    |
| show-close                    | whether to show a close button                                                                    | boolean                                           | —               | true    |
| before-close                  | callback before Dialog closes, and it will prevent Dialog from closing                            | Function(done) (done is used to close the Dialog) | —               | —       |
| draggable                     | enable dragging feature for Dialog                                                                | boolean                                           | —               | false   |
| center                        | whether to align the header and footer in center                                                  | boolean                                           | —               | false   |
| align-center                  | whether to align the dialog both horizontally and vertically                                      | boolean                                           | —               | false   |
| destroy-on-close              | Destroy elements in Dialog when closed                                                            | boolean                                           | —               | false   |
`;

const Slots = `
| Name                   | Description                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------- |
| —                      | content of Dialog                                                                                     |
| header                 | content of the Dialog header; Replacing this removes the title, but does not remove the close button. |
| title<DeprecatedTag /> | Works the same as the header slot. Use that instead.                                                  |
| footer                 | content of the Dialog footer                                                                          |
`;

const Events = `
| Name             | Description                                      | Parameters |
| ---------------- | ------------------------------------------------ | ---------- |
| open             | triggers when the Dialog opens                   | —          |
| opened           | triggers when the Dialog opening animation ends  | —          |
| close            | triggers when the Dialog closes                  | —          |
| closed           | triggers when the Dialog closing animation ends  | —          |
| open-auto-focus  | triggers after Dialog opens and content focused  | —          |
| close-auto-focus | triggers after Dialog closed and content focused | —          |
 `;

export default {
  attributes: Attributes,
  events: Events,
  slots: Slots,
};
