const Attributes = `
| Attribute   | Description                      | Type                                                                | Default  |
| ----------- | -------------------------------- | ------------------------------------------------------------------- | -------- |
| value       | target time                      | ^[number] / ^[Dayjs]                                                | —        |
| format      | Formatting the countdown display | ^[string]                                                           | HH:mm:ss |
| prefix      | Sets the prefix of a countdown   | ^[string]                                                           | —        |
| suffix      | Sets the suffix of a countdown   | ^[string]                                                           | —        |
| title       | countdown titles                 | ^[string]                                                           | —        |
| value-style | Styles countdown values          | ^[string] / ^[object]\`CSSProperties | CSSProperties[] | string[]\` | —        |
`;
const Events = `
| Method | Description                  | Type                                 |
| ------ | ---------------------------- | ------------------------------------ |
| change | Time difference change event | ^[Function]\`(value: number) => void\` |
| finish | countdown end event          | ^[Function]\`() => void\`              |
`;
const Slots = `
| Name   | Description            |
| ------ | ---------------------- |
| prefix | countdown value prefix |
| suffix | countdown value suffix |
| title  | countdown title        |
`;
const Exposes = `
| Name         | Description           | Type                   |
| ------------ | --------------------- | ---------------------- |
| displayValue | current display value | ^[object]\`Ref<string>\` |
`;
export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
  slots: Slots,
};
