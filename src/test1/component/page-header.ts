const Attributes = `
| Name    | Description    | Type                  | Accepted Values | Default |
| ------- | -------------- | --------------------- | --------------- | ------- |
| icon    | icon component | \`string | Component\` | —               | Back    |
| title   | main title     | string                | —               | Back    |
| content | content        | string                | —               | —       |
`;
const Events = `
| Name | Description                         | Parameters |
| ---- | ----------------------------------- | ---------- |
| back | triggers when right side is clicked | —          |
`;
const Slots = `
| Name       | Description        |
| ---------- | ------------------ |
| icon       | custom icon        |
| title      | title content      |
| content    | content            |
| extra      | extra              |
| breadcrumb | breadcrumb content |
| default    | main content       |
`;
export default {
  attributes: Attributes,
  events: Events,
  slots: Slots,
};
