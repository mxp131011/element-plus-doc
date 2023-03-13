const Attributes = `
| Name                  | Description                                                                                           | Type                                             | Accepted Values                                               | Default             |
| --------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------- | ------------------- |
| model-value / v-model | binding value, if it is an array, the length should be 2                                              | Date / number / string / Array                   | —                                                             | —                   |
| readonly              | whether DatePicker is read only                                                                       | boolean                                          | —                                                             | false               |
| disabled              | whether DatePicker is disabled                                                                        | boolean                                          | —                                                             | false               |
| editable              | whether the input is editable                                                                         | boolean                                          | —                                                             | true                |
| clearable             | whether to show clear button                                                                          | boolean                                          | —                                                             | true                |
| size                  | size of Input                                                                                         | string                                           | large/default/small                                           | default             |
| placeholder           | placeholder in non-range mode                                                                         | string                                           | —                                                             | —                   |
| start-placeholder     | placeholder for the start date in range mode                                                          | string                                           | —                                                             | —                   |
| end-placeholder       | placeholder for the end date in range mode                                                            | string                                           | —                                                             | —                   |
| time-arrow-control    | whether to pick time using arrow buttons                                                              | boolean                                          | —                                                             | false               |
| type                  | type of the picker                                                                                    | string                                           | year/month/date/datetime/ week/datetimerange/daterange        | date                |
| format                | format of the displayed value in the input box                                                        | string                                           | see [date formats](/en-US/component/date-picker#date-formats) | YYYY-MM-DD HH:mm:ss |
| popper-class          | custom class name for DateTimePicker's dropdown                                                       | string                                           | —                                                             | —                   |
| range-separator       | range separator                                                                                       | string                                           | —                                                             | '-'                 |
| default-value         | optional, default date of the calendar                                                                | Date / [Date, Date]                              |                                                               | —                   |
| default-time          | the default time value after picking a date. Time \`00:00:00\` will be used if not specified            | Date / [Date, Date]                              | —                                                             | —                   |
| value-format          | optional, format of binding value. If not specified, the binding value will be a Date object          | string                                           | see [date formats](https://day.js.org/docs/en/display/format) | —                   |
| id                    | same as \`id\` in native input                                                                          | string / [string, string]                        | —                                                             | —                   |
| name                  | same as \`name\` in native input                                                                        | string                                           | —                                                             | —                   |
| unlink-panels         | unlink two date-panels in range-picker                                                                | boolean                                          | —                                                             | false               |
| prefix-icon           | Custom prefix icon component                                                                          | \`string | Component\`                            | —                                                             | Date                |
| clear-icon            | Custom clear icon component                                                                           | \`string | Component\`                            | —                                                             | CircleClose         |
| shortcuts             | an object array to set shortcut options                                                               | object[{ text: string, value: date / function }] | —                                                             | —                   |
| disabled-date         | a function determining if a date is disabled with that date as its parameter. Should return a Boolean | function(Date)                                   | —                                                             | —                   |
| cell-class-name       | set custom className                                                                                  | Function(Date)                                   | —                                                             | —                   |
| teleported            | whether datetime-picker dropdown is teleported to the body                                            | boolean                                          | true / false                                                  | true                |
`;
const Events = `
| Name            | Description                                                                   | Parameters                                |
| --------------- | ----------------------------------------------------------------------------- | ----------------------------------------- |
| change          | triggers when user confirms the value                                         | component's binding value                 |
| blur            | triggers when Input blurs                                                     | \`(e: FocusEvent)\`                         |
| focus           | triggers when Input focuses                                                   | \`(e: FocusEvent)\`                         |
| calendar-change | triggers when the calendar selected date is changed. Only for \`datetimerange\` | [Date, Date]                              |
| visible-change  | triggers when the DateTimePicker's dropdown appears/disappears                | true when it appears, and false otherwise |
`;
const Exposes = `
| Exposes | Description               | Parameters |
| ------ | ------------------------- | ---------- |
| focus  | focus the Input component | —          |
`;
const Slots = `
| Name            | Description                    |
| --------------- | ------------------------------ |
| default         | custom cell content            |
| range-separator | custom range separator content |
`;

export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
  slots: Slots,
};
