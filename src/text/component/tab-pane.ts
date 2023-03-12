const Attributes = `
| Name     | Description                                                                          | Type            | Accepted Values | Default                                                                        |
| -------- | ------------------------------------------------------------------------------------ | --------------- | --------------- | ------------------------------------------------------------------------------ |
| label    | title of the tab                                                                     | string          | —               | —                                                                              |
| disabled | whether Tab is disabled                                                              | boolean         | —               | false                                                                          |
| name     | identifier corresponding to the name of Tabs, representing the alias of the tab-pane | string / number | —               | ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is '0' |
| closable | whether Tab is closable                                                              | boolean         | —               | false                                                                          |
| lazy     | whether Tab is lazily rendered                                                       | boolean         | —               | false                                                                          |
`;
const Slots = `
| Name  | Description        |
| ----- | ------------------ |
| -     | Tab-pane's content |
| label | Tab-pane's label   |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
