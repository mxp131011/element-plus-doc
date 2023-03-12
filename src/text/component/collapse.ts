const Attributes = `
| Name                  | Description                        | Type                                                 | Accepted Values | Default |
| --------------------- | ---------------------------------- | ---------------------------------------------------- | --------------- | ------- |
| model-value / v-model | currently active panel             | string (accordion mode) / array (non-accordion mode) | —               | —       |
| accordion             | whether to activate accordion mode | boolean                                              | —               | false   |
`;
const Events = `
| Name   | Description                        | Parameters                                                          |
| ------ | ---------------------------------- | ------------------------------------------------------------------- |
| change | triggers when active panels change | (activeNames: array (non-accordion mode) / string (accordion mode)) |
`;
const Slots = `
| Name | Description               | Subtags       |
| ---- | ------------------------- | ------------- |
| -    | customize default content | Collapse Item |
`;

export default {
  attributes: Attributes,
  events: Events,
  slots: Slots,
};
