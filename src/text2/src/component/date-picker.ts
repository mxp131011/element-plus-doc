const Attributes = `
| Name                  | Description                                                                                           | Type                                               | Accepted Values                                                          | Default     |
| --------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------ | ----------- |
| model-value / v-model | binding value, if it is an array, the length should be 2                                              | Date / number / string / Array                     | —                                                                        | —           |
| readonly              | whether DatePicker is read only                                                                       | boolean                                            | —                                                                        | false       |
| disabled              | whether DatePicker is disabled                                                                        | boolean                                            | —                                                                        | false       |
| size                  | size of Input                                                                                         | string                                             | large/default/small                                                      | default     |
| editable              | whether the input is editable                                                                         | boolean                                            | —                                                                        | true        |
| clearable             | whether to show clear button                                                                          | boolean                                            | —                                                                        | true        |
| placeholder           | placeholder in non-range mode                                                                         | string                                             | —                                                                        | —           |
| start-placeholder     | placeholder for the start date in range mode                                                          | string                                             | —                                                                        | —           |
| end-placeholder       | placeholder for the end date in range mode                                                            | string                                             | —                                                                        | —           |
| type                  | type of the picker                                                                                    | string                                             | year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange | date        |
| format                | format of the displayed value in the input box                                                        | string                                             | see [date formats](/en-US/component/date-picker#date-formats)            | YYYY-MM-DD  |
| popper-class          | custom class name for DatePicker's dropdown                                                           | string                                             | —                                                                        | —           |
| popper-options        | Customized popper option see more at [popper.js](https://popper.js.org/docs/v2/)                      | object                                             | —                                                                        | —           |
| range-separator       | range separator                                                                                       | string                                             | —                                                                        | '-'         |
| default-value         | optional, default date of the calendar                                                                | Date / [Date, Date]                                | —                                                                        | —           |
| default-time          | optional, the time value to use when selecting date range                                             | Date / [Date, Date]                                | —                                                                        | —           |
| value-format          | optional, format of binding value. If not specified, the binding value will be a Date object          | string                                             | see [date formats](/en-US/component/date-picker#date-formats)            | —           |
| id                    | same as \`id\` in native input                                                                          | string / [string, string]                          | —                                                                        | —           |
| name                  | same as \`name\` in native input                                                                        | string                                             | —                                                                        | —           |
| unlink-panels         | unlink two date-panels in range-picker                                                                | boolean                                            | —                                                                        | false       |
| prefix-icon           | custom prefix icon component                                                                          | \`string | Component\`                              | —                                                                        | Date        |
| clear-icon            | custom clear icon component                                                                           | \`string | Component\`                              | —                                                                        | CircleClose |
| validate-event        | whether to trigger form validation                                                                    | boolean                                            | —                                                                        | true        |
| disabled-date         | a function determining if a date is disabled with that date as its parameter. Should return a Boolean | function                                           | —                                                                        | —           |
| shortcuts             | an object array to set shortcut options                                                               | \`Array<{ text: string, value: Date | Function }>\` | —                                                                        | —           |
| cell-class-name       | set custom className                                                                                  | Function(Date)                                     | —                                                                        | —           |
| teleported            | whether date-picker dropdown is teleported to the body                                                | boolean                                            | true / false                                                             | true        |
`;
const Events = `
| Name            | Description                                                               | Parameters              |
| --------------- | ------------------------------------------------------------------------- | ----------------------- |
| change          | triggers when user confirms the value                                     | \`(val: typeof v-model)\` |
| blur            | triggers when Input blurs                                                 | \`(e: FocusEvent)\`       |
| focus           | triggers when Input focuses                                               | \`(e: FocusEvent)\`       |
| calendar-change | triggers when the calendar selected date is changed. Only for \`daterange\` | \`(val: [Date, Date])\`   |
| panel-change    | triggers when the navigation button click.                                | \`(date, mode, view)\`    |
| visible-change  | triggers when the DatePicker's dropdown appears/disappears                | \`(visibility: boolean)\` |
`;
const Exposes = `
| Exposes      | Description                 | Parameters |
| ----------- | --------------------------- | ---------- |
| focus       | focus the Input component   | —          |
| handleOpen  | open the DatePicker popper  | —          |
| handleClose | close the DatePicker popper | —          |
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
