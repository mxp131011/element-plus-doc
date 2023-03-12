const Attributes = `
| Name           | Description                      | Type                     | Default |
| -------------- | -------------------------------- | ------------------------ | ------- |
| separator      | separator character              | ^[string]                | /       |
| separator-icon | icon component of icon separator | ^[string] / ^[Component] | -       |
`;
const Slots = `
| Name    | Description               | Subtags         |
| ------- | ------------------------- | --------------- |
| default | customize default content | Breadcrumb Item |
`;

export default {
  attributes: Attributes,
  slots: Slots,
};
