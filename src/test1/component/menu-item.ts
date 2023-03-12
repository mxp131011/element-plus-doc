const Attributes = `
| Name     | Description           | Type        | Accepted Values | Default |
| -------- | --------------------- | ----------- | --------------- | ------- |
| index    | unique identification | string/null | —               | null    |
| route    | Vue Router object     | object      | —               | —       |
| disabled | whether disabled      | boolean     | —               | false   |
`;
const Events = `
| Name  | Description                                 | Parameters             |
| ----- | ------------------------------------------- | ---------------------- |
| click | callback function when menu-item is clicked | el: menu-item instance |
`;
const Slots = `
| Name  | Description               |
| ----- | ------------------------- |
| —     | customize default content |
| title | customize title content   |
`;
export default {
  attributes: Attributes,
  events: Events,
  slots: Slots,
};
