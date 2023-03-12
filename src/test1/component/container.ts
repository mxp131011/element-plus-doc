const Attributes = `
| Name      | Description                         | Type                                | Default                                                                    |
| --------- | ----------------------------------- | ----------------------------------- | -------------------------------------------------------------------------- |
| direction | layout direction for child elements | ^[enum]\`'horizontal' | 'vertical'\` | vertical when nested with \`el-header\` or \`el-footer\`; horizontal otherwise |
`;
const Slots = `
| Name    | Description               | Subtags                                    |
| ------- | ------------------------- | ------------------------------------------ |
| default | customize default content | Container / Header / Aside / Main / Footer |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
