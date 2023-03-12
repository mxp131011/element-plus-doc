const Attributes = `
| Name           | Description                                                                   | Type            | Accepted Values                           | Default    |
| -------------- | ----------------------------------------------------------------------------- | --------------- | ----------------------------------------- | ---------- |
| space          | the spacing of each step, will be responsive if omitted. Supports percentage. | number / string | —                                         | —          |
| direction      | display direction                                                             | string          | vertical/horizontal                       | horizontal |
| active         | current activation step                                                       | number          | —                                         | 0          |
| process-status | status of current step                                                        | string          | wait / process / finish / error / success | process    |
| finish-status  | status of end step                                                            | string          | wait / process / finish / error / success | finish     |
| align-center   | center title and description                                                  | boolean         | —                                         | false      |
| simple         | whether to apply simple theme                                                 | boolean         | -                                         | false      |
`;
const Slots = `
| Name | Description               | Subtags |
| ---- | ------------------------- | ------- |
| -    | customize default content | Step    |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
