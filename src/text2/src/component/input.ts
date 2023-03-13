const Attributes = `
| Name                  | Description                                                                                                                            | Type                                                                                                                                                | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| type                  | type of input                                                                                                                          | ^[string]\`'text' | 'textarea' | ...\` [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text    |
| model-value / v-model | binding value                                                                                                                          | ^[string] / ^[number]                                                                                                                               | —       |
| maxlength             | the max length                                                                                                                         | ^[string] / ^[number]                                                                                                                               | —       |
| minlength             | same as \`minlength\` in native input                                                                                                    | ^[number]                                                                                                                                           | —       |
| show-word-limit       | whether show word count, only works when \`type\` is 'text' or 'textarea'                                                                | ^[boolean]                                                                                                                                          | false   |
| placeholder           | placeholder of Input                                                                                                                   | ^[string]                                                                                                                                           | —       |
| clearable             | whether to show clear button, only works when \`type\` is not 'textarea'                                                                 | ^[boolean]                                                                                                                                          | false   |
| formatter             | specifies the format of the value presented input.(only works when \`type\` is 'text')                                                   | ^[Function]\`(value: string | number) => string\`                                                                                                    | —       |
| parser                | specifies the value extracted from formatter input.(only works when \`type\` is 'text')                                                  | ^[Function]\`(value: string) => string\`                                                                                                              | —       |
| show-password         | whether to show toggleable password input                                                                                              | ^[boolean]                                                                                                                                          | false   |
| disabled              | whether Input is disabled                                                                                                              | ^[boolean]                                                                                                                                          | false   |
| size                  | size of Input, works when \`type\` is not 'textarea'                                                                                     | ^[enum]\`'large' | 'default' | 'small'\`                                                                                                            | —       |
| prefix-icon           | prefix icon component                                                                                                                  | ^[string] / ^[Component]                                                                                                                            | —       |
| suffix-icon           | suffix icon component                                                                                                                  | ^[string] / ^[Component]                                                                                                                            | —       |
| rows                  | number of rows of textarea, only works when \`type\` is 'textarea'                                                                       | ^[number]                                                                                                                                           | 2       |
| autosize              | whether textarea has an adaptive height, only works when \`type\` is 'textarea'. Can accept an object, e.g. \`{ minRows: 2, maxRows: 6 }\` | ^[boolean] / ^[object]\`{ minRows?: number, maxRows?: number }\`                                                                                      | false   |
| autocomplete          | same as \`autocomplete\` in native input                                                                                                 | ^[string]                                                                                                                                           | off     |
| name                  | same as \`name\` in native input                                                                                                         | ^[string]                                                                                                                                           | —       |
| readonly              | same as \`readonly\` in native input                                                                                                     | ^[boolean]                                                                                                                                          | false   |
| max                   | same as \`max\` in native input                                                                                                          | —                                                                                                                                                   | —       |
| min                   | same as \`min\` in native input                                                                                                          | —                                                                                                                                                   | —       |
| step                  | same as \`step\` in native input                                                                                                         | —                                                                                                                                                   | —       |
| resize                | control the resizability                                                                                                               | ^[enum]\`'none' | 'both' | 'horizontal' | 'vertical'\`                                                                                             | —       |
| autofocus             | same as \`autofocus\` in native input                                                                                                    | ^[boolean]                                                                                                                                          | false   |
| form                  | same as \`form\` in native input                                                                                                         | \`string\`                                                                                                                                            | —       |
| label<A11yTag />      | same as \`aria-label\` in native input                                                                                                   | ^[string]                                                                                                                                           | —       |
| tabindex              | input tabindex                                                                                                                         | ^[string] / ^[number]                                                                                                                               | —       |
| validate-event        | whether to trigger form validation                                                                                                     | ^[boolean]                                                                                                                                          | true    |
| input-style           | the style of the input element or textarea element                                                                                     | ^[string] / ^[object]\`CSSProperties | CSSProperties[] | string[]\`                                                                                 | {}      |
`;

const Events = `
| Name   | Description                                                                                           | Type                                           |
| ------ | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| blur   | triggers when Input blurs                                                                             | ^[Function]\`(event: FocusEvent) => void\`       |
| focus  | triggers when Input focuses                                                                           | ^[Function]\`(event: FocusEvent) => void\`       |
| change | triggers when the input box loses focus or the user presses Enter, only if the modelValue has changed | ^[Function]\`(value: string | number) => void\` |
| input  | triggers when the Input value change                                                                  | ^[Function]\`(value: string | number) => void\` |
| clear  | triggers when the Input is cleared by clicking the clear button                                       | ^[Function]\`() => void\`                        |
`;
const Slots = `
| Name    | Description                                                               |
| ------- | ------------------------------------------------------------------------- |
| prefix  | content as Input prefix, only works when \`type\` is not 'textarea'         |
| suffix  | content as Input suffix, only works when \`type\` is not 'textarea'         |
| prepend | content to prepend before Input, only works when \`type\` is not 'textarea' |
| append  | content to append after Input, only works when \`type\` is not 'textarea'   |
`;
const Exposes = `
| Name           | Description                      | Type                                                    |
| -------------- | -------------------------------- | ------------------------------------------------------- |
| blur           | blur the input element           | ^[Function]\`() => void\`                                 |
| clear          | clear input value                | ^[Function]\`() => void\`                                 |
| focus          | focus the input element          | ^[Function]\`() => void\`                                 |
| input          | HTML input element               | ^[object]\`Ref<HTMLInputElement>\`                        |
| ref            | HTML element, input or textarea  | ^[object]\`Ref<HTMLInputElement | HTMLTextAreaElement>\` |
| resizeTextarea | resize textarea                  | ^[Function]\`() => void\`                                 |
| select         | select the text in input element | ^[Function]\`() => void\`                                 |
| textarea       | HTML textarea element            | ^[object]\`Ref<HTMLTextAreaElement>\`                     |
| textareaStyle  | style of textarea                | ^[object]\`Ref<StyleValue>\`                              |
`;
export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
  slots: Slots,
};
