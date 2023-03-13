const Attributes = `
| Name                  | Description                                              | Type                                   | Accepted Values                                               | Default     |
| --------------------- | -------------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------- | ----------- |
| model-value / v-model | binding value, if it is an array, the length should be 2 | Date / number / string / Array         | —                                                             | —           |
| readonly              | whether TimePicker is read only                          | boolean                                | —                                                             | false       |
| disabled              | whether TimePicker is disabled                           | boolean                                | —                                                             | false       |
| editable              | whether the input is editable                            | boolean                                | —                                                             | true        |
| clearable             | whether to show clear button                             | boolean                                | —                                                             | true        |
| size                  | size of Input                                            | string                                 | large / default / small                                       | —           |
| placeholder           | placeholder in non-range mode                            | string                                 | —                                                             | —           |
| start-placeholder     | placeholder for the start time in range mode             | string                                 | —                                                             | —           |
| end-placeholder       | placeholder for the end time in range mode               | string                                 | —                                                             | —           |
| is-range              | whether to pick a time range                             | boolean                                | —                                                             | false       |
| arrow-control         | whether to pick time using arrow buttons                 | boolean                                | —                                                             | false       |
| popper-class          | custom class name for TimePicker's dropdown              | string                                 | —                                                             | —           |
| range-separator       | range separator                                          | string                                 | —                                                             | '-'         |
| format                | format of the displayed value in the input box           | string                                 | see [date formats](/en-US/component/date-picker#date-formats) | HH:mm:ss    |
| default-value         | optional, default date of the calendar                   | Date / [Date, Date]                    | —                                                             | —           |
| id                    | same as \`id\` in native input                             | string / [string, string]              | —                                                             | -           |
| name                  | same as \`name\` in native input                           | string                                 | —                                                             | —           |
| prefix-icon           | Custom prefix icon component                             | \`string | Component\`                  | —                                                             | Clock       |
| clear-icon            | Custom clear icon component                              | \`string | Component\`                  | —                                                             | CircleClose |
| disabled-hours        | To specify the array of hours that cannot be selected    | function                               | —                                                             | —           |
| disabled-minutes      | To specify the array of minutes that cannot be selected  | Function(selectedHour)                 | —                                                             | —           |
| disabled-seconds      | To specify the array of seconds that cannot be selected  | Function(selectedHour, selectedMinute) | —                                                             | —           |
| teleported            | whether time-picker dropdown is teleported to the body   | boolean                                | true / false                                                  | true        |
`;
const Events = `
| Name           | Description                                                | Parameters              |
| -------------- | ---------------------------------------------------------- | ----------------------- |
| change         | triggers when user confirms the value                      | \`(val: typeof v-model)\` |
| blur           | triggers when Input blurs                                  | \`(e: FocusEvent)\`       |
| focus          | triggers when Input focuses                                | \`(e: FocusEvent)\`       |
| visible-change | triggers when the TimePicker's dropdown appears/disappears | \`(visibility: boolean)\` |
`;
const Exposes = `
| Name      | Description                 | Parameters |
| ----------- | --------------------------- | ---------- |
| focus       | focus the Input component   | —          |
| blur        | blur the Input component    | —          |
| handleOpen  | open the TimePicker popper  | —          |
| handleClose | close the TimePicker popper | —          |
`;
export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
};
