const Attributes = `
| Attribute         | Description                    | Type                                                                | Default |
| ----------------- | ------------------------------ | ------------------------------------------------------------------- | ------- |
| value             | Numerical content              | ^[number]                                                           | 0       |
| decimal-separator | Setting the decimal point      | ^[string]                                                           | .       |
| formatter         | Custom numerical presentation  | ^[Function]\`(value: number) => string | number\`                    | —       |
| group-separator   | Sets the thousandth identifier | ^[string]                                                           | ,       |
| precision         | numerical precision            | ^[number]                                                           | 0       |
| prefix            | Sets the prefix of a number    | ^[string]                                                           | —       |
| suffix            | Sets the suffix of a number    | ^[string]                                                           | —       |
| title             | Numeric titles                 | ^[string]                                                           | —       |
| value-style       | Styles numeric values          | ^[string] / ^[object]\`CSSProperties | CSSProperties[] | string[]\` | —       |
`;
const Slots = `
| Name   | Description                 |
| ------ | --------------------------- |
| prefix | Numeric prefix              |
| suffix | Suffixes for numeric values |
| title  | Numeric titles              |
`;
const Exposes = `
| Name         | Description           | Type                             |
| ------------ | --------------------- | -------------------------------- |
| displayValue | current display value | ^[object]\`Ref<string | number>\` |
`;

export default {
  attributes: Attributes,
  exposes: Exposes,
  slots: Slots,
};
