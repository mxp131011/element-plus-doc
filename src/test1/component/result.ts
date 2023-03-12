const Attributes = `
| Name      | Description | Type   | Accepted Values                  | Default |
| --------- | ----------- | ------ | -------------------------------- | ------- |
| title     | title       | string | —                                | —       |
| sub-title | sub title   | string | —                                | —       |
| icon      | icon type   | string | success / warning / info / error | info    |
`;
const Slots = `
| Name      | Description       |
| --------- | ----------------- |
| icon      | custom icon       |
| title     | custom title      |
| sub-title | custom sub title  |
| extra     | custom extra area |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
