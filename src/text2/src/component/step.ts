const Attributes = `
| Name        | Description                                                              | Type                  | Accepted Values                           | Default |
| ----------- | ------------------------------------------------------------------------ | --------------------- | ----------------------------------------- | ------- |
| title       | step title                                                               | string                | —                                         | —       |
| description | step description                                                         | string                | —                                         | —       |
| icon        | step custom icon. Icons can be passed via named slot as well             | \`string | Component\` | —                                         | —       |
| status      | current status. It will be automatically set by Steps if not configured. | string                | wait / process / finish / error / success | —       |
`;
const Slots = `
| Name        | Description      |
| ----------- | ---------------- |
| icon        | custom icon      |
| title       | step title       |
| description | step description |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
