const Attributes = `
| Name            | Description                                                                                                                                                   | Type                                                | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------- |
| prop            | A key of \`model\`. It could be an array of property paths (e.g \`['a', 'b', 0]\`). In the use of \`validate\` and \`resetFields\` method, the attribute is required. | ^[string] / ^[string&#91;&#93;]                     | —       |
| label           | Label text.                                                                                                                                                   | ^[string]                                           | —       |
| label-width     | Width of label, e.g. \`'50px'\`. \`'auto'\` is supported.                                                                                                         | ^[string] / ^[number]                               | —       |
| required        | Whether the field is required or not, will be determined by validation rules if omitted.                                                                      | ^[boolean]                                          | false   |
| rules           | Validation rules of form, see the [following table](#formitemrule), more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).    | ^[object]\`FormItemRule | FormItemRule[]\`           | —       |
| error           | Field error message, set its value and the field will validate error and show this message immediately.                                                       | ^[string]                                           | —       |
| show-message    | Whether to show the error message.                                                                                                                            | ^[boolean]                                          | true    |
| inline-message  | Inline style validate message.                                                                                                                                | ^[boolean]                                          | false   |
| size            | Control the size of components in this form-item.                                                                                                             | ^[enum]\`'large' | 'default' | 'small'\`            | default |
| for             | Same as for in native label.                                                                                                                                  | ^[string]                                           | —       |
| validate-status | Validation state of formItem.                                                                                                                                 | ^[enum]\`'' | 'error' | 'validating' | 'success'\` | —       |
 `;

const Slots = `
| Name    | Description                                   | Type                         |
| ------- | --------------------------------------------- | ---------------------------- |
| default | Content of Form Item.                         | —                            |
| label   | Custom content to display on label.           | ^[object]\`{ label: string }\` |
| error   | Custom content to display validation message. | ^[object]\`{ error: string }\` |
`;

const Exposes = `
| Name            | Description                                       | Type                                                                                                 |
| --------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| size            | Form item size.                                   | ^[object]\`ComputedRef<'' | 'large' | 'default' | 'small'>\`                                        |
| validateMessage | Validation message.                               | ^[object]\`Ref<string>\`                                                                               |
| validateState   | Validation state.                                 | ^[object]\`Ref<'' | 'error' | 'validating' | 'success'>\`                                           |
| validate        | Validate form item.                               | ^[Function]\`(trigger: string, callback?: FormValidateCallback | undefined) => FormValidationResult\` |
| resetField      | Reset current field and remove validation result. | ^[Function]\`() => void\`                                                                              |
| clearValidate   | Remove validation status of the field.            | ^[Function]\`() => void\`                                                                              |
`;

export default {
  attributes: Attributes,
  exposes: Exposes,
  slots: Slots,
};
