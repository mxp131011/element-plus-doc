const Attributes = `
| Name                      | Description                                                                                                                    | Type                                     | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------- |
| model                     | Data of form component.                                                                                                        | ^[object]\`Record<string, any>\`           | —       |
| rules                     | Validation rules of form.                                                                                                      | ^[object]\`FormRules\`                     | —       |
| inline                    | Whether the form is inline.                                                                                                    | ^[boolean]                               | false   |
| label-position            | Position of label. If set to \`'left'\` or \`'right'\`, \`label-width\` prop is also required.                                       | ^[enum]\`'left' | 'right' | 'top'\`      | right   |
| label-width               | Width of label, e.g. \`'50px'\`. All its direct child form items will inherit this value. \`auto\` is supported.                   | ^[string] / ^[number]                    | —       |
| label-suffix              | Suffix of the label.                                                                                                           | ^[string]                                | —       |
| hide-required-asterisk    | Whether to hide required fields should have a red asterisk (star) beside their labels.                                         | ^[boolean]                               | false   |
| require-asterisk-position | Position of asterisk.                                                                                                          | ^[enum]\`'left' | 'right'\`               | left    |
| show-message              | Whether to show the error message.                                                                                             | ^[boolean]                               | true    |
| inline-message            | Whether to display the error message inline with the form item.                                                                | ^[boolean]                               | false   |
| status-icon               | Whether to display an icon indicating the validation result.                                                                   | ^[boolean]                               | false   |
| validate-on-rule-change   | Whether to trigger validation when the \`rules\` prop is changed.                                                                | ^[boolean]                               | true    |
| size                      | Control the size of components in this form.                                                                                   | ^[enum]\`'large' | 'default' | 'small'\` | —       |
| disabled                  | Whether to disable all components in this form. If set to \`true\`, it will override the \`disabled\` prop of the inner component. | ^[boolean]                               | false   |
| scroll-to-error           | When validation fails, scroll to the first error form entry.                                                                   | ^[boolean]                               | false   |
`;

const Events = `
| Name     | Description                             | Type                                                                         |
| -------- | --------------------------------------- | ---------------------------------------------------------------------------- |
| validate | triggers after a form item is validated | ^[Function]\`(prop: FormItemProp, isValid: boolean, message: string) => void\` |
`;

const Exposes = `
| Name          | Description                                                        | Type                                                                                                                                               |
| ------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| validate      | Validate the whole form. Receives a callback or returns \`Promise\`. | ^[Function]\`(callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void>\`                                         |
| validateField | Validate specified fields.                                         | ^[Function]\`(props?: FormItemProp | FormItemProp[], callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void>\` |
| resetFields   | Reset specified fields and remove validation result.               | ^[Function]\`(props?: FormItemProp | FormItemProp[]) => void\`                                                                                      |
| scrollToField | Scroll to the specified fields.                                    | ^[Function]\`(prop: FormItemProp) => void\`                                                                                                          |
| clearValidate | Clear validation message for specified fields.                     | ^[Function]\`(props?: FormItemProp | FormItemProp[]) => void\`                                                                                      |
| validate      | Validate the whole form. Receives a callback or returns \`Promise\`. | \`(callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<boolean>\`                               |
| validateField | Validate specified fields.                                         | \`(props?: Arrayable<FormItemProp>, callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise<void>\` |
| resetFields   | Reset specified fields and remove validation result.               | \`(props?: Arrayable<FormItemProp>) => void\`                                                                                      |
| scrollToField | Scroll to the specified fields.                                    | \`(prop: FormItemProp) => void\`                                                                                                   |
| clearValidate | Clear validation message for specified fields.                     | \`(props?: Arrayable<FormItemProp>) => void\`  
`;
const Slots = `
| Name    | Description               | Subtags  |
| ------- | ------------------------- | -------- |
| default | customize default content | FormItem |
 `;

export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
  slots: Slots,
};
