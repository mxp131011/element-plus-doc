const Attributes = `
| Name   | Description                                         | Type                                                                                  | Default |
| ------ | --------------------------------------------------- | ------------------------------------------------------------------------------------- | ------- |
| span   | number of column the grid spans                     | ^[number]                                                                             | 24      |
| offset | number of spacing on the left side of the grid      | ^[number]                                                                             | 0       |
| push   | number of columns that grid moves to the right      | ^[number]                                                                             | 0       |
| pull   | number of columns that grid moves to the left       | ^[number]                                                                             | 0       |
| xs     | \`<768px\` Responsive columns or column props object  | ^[number] / ^[object]\`{span?: number, offset?: number, pull?: number, push?: number}\` | —       |
| sm     | \`≥768px\` Responsive columns or column props object  | ^[number] / ^[object]\`{span?: number, offset?: number, pull?: number, push?: number}\` | —       |
| md     | \`≥992px\` Responsive columns or column props object  | ^[number] / ^[object]\`{span?: number, offset?: number, pull?: number, push?: number}\` | —       |
| lg     | \`≥1200px\` Responsive columns or column props object | ^[number] / ^[object]\`{span?: number, offset?: number, pull?: number, push?: number}\` | —       |
| xl     | \`≥1920px\` Responsive columns or column props object | ^[number] / ^[object]\`{span?: number, offset?: number, pull?: number, push?: number}\` | —       |
| tag    | custom element tag                                  | ^[string]                                                                             | div     |
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
