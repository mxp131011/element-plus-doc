const Attributes = `
| Name                  | Description                                                                                                                                                    | Type                   | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------- |
| model-value / v-model | binding value                                                                                                                                                  | ^[Date]                | —       |
| range                 | time range, including start time and end time. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months. | ^[array]\`[Date, Date]\` | —       |
`;
const Slots = `
| Name      | Description                                                                                                                                                                                                                                               | Type                                                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| date-cell | \`type\` indicates which month the date belongs, optional values are prev-month, current-month, next-month; \`isSelected\` indicates whether the date is selected; \`day\` is the formatted date in the format \`YYYY-MM-DD\`; \`date\` is date the cell represents | ^[object]\`{ data: { type: 'prev-month' | 'current-month' | 'next-month', isSelected: boolean, day: string, date: Date } }\` |
| header    | content of the Calendar header                                                                                                                                                                                                                            | ^[object]\`{ date: string }\`                                                                                                  |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
