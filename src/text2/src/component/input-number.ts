const Attributes = `
| Name                                         | Description                                      | Type                                          | Default   |
| -------------------------------------------- | ------------------------------------------------ | --------------------------------------------- | --------- |
| model-value / v-model                        | binding value                                    | ^[number]                                     | —         |
| min                                          | the minimum allowed value                        | ^[number]                                     | -Infinity |
| max                                          | the maximum allowed value                        | ^[number]                                     | Infinity  |
| step                                         | incremental step                                 | ^[number]                                     | 1         |
| step-strictly                                | whether input value can only be multiple of step | ^[boolean]                                    | false     |
| precision                                    | precision of input value                         | ^[number]                                     | —         |
| size                                         | size of the component                            | ^[enum]\`'large' | 'default' | 'small'\`      | default   |
| readonly                                     | same as \`readonly\` in native input               | ^[boolean]                                    | false     |
| disabled                                     | whether the component is disabled                | ^[boolean]                                    | false     |
| controls                                     | whether to enable the control buttons            | ^[boolean]                                    | true      |
| controls-position                            | position of the control buttons                  | ^[enum]\`'' | 'right'\`                        | —         |
| name                                         | same as \`name\` in native input                   | ^[string]                                     | —         |
| label                                        | same as \`label\` in native input                  | ^[string]                                     | —         |
| placeholder                                  | same as \`placeholder\` in native input            | ^[string]                                     | —         |
| id                                           | same as \`id\` in native input                     | ^[string]                                     | —         |
| value-on-clear<VersionTag version="2.2.0" /> | value should be set when input box is cleared    | ^[number] / ^[null] / ^[enum]\`'min' | 'max'\` | —         |
| validate-event                               | whether to trigger form validation               | ^[boolean]                                    | true      |
`;

const Events = `
| Name   | Description                     | Type                                                                                    |
| ------ | ------------------------------- | --------------------------------------------------------------------------------------- |
| change | triggers when the value changes | ^[Function]\`(currentValue: number | undefined, oldValue: number | undefined) => void\` |
| blur   | triggers when Input blurs       | ^[Function]\`(event: FocusEvent) => void\`                                                |
| focus  | triggers when Input focuses     | ^[Function]\`(event: FocusEvent) => void\`                                                |
`;
const Exposes = `
| Name  | Description                      | Type                    |
| ----- | -------------------------------- | ----------------------- |
| focus | get focus the input component    | ^[Function]\`() => void\` |
| blur  | remove focus the input component | ^[Function]\`() => void\` |
`;

export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
};
