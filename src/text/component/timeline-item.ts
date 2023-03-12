const Attributes = `
| Name           | Description                 | Type                  | Accepted Values                             | Default |
| -------------- | --------------------------- | --------------------- | ------------------------------------------- | ------- |
| timestamp      | timestamp content           | string                | —                                           | —       |
| hide-timestamp | whether to show timestamp   | boolean               | —                                           | false   |
| center         | Whether vertically centered | boolean               | —                                           | false   |
| placement      | position of timestamp       | string                | top / bottom                                | bottom  |
| type           | node type                   | string                | primary / success / warning / danger / info | —       |
| color          | background color of node    | string                | hsl / hsv / hex / rgb                       | —       |
| size           | node size                   | string                | normal / large                              | normal  |
| icon           | icon component              | \`string | Component\` | —                                           | —       |
| hollow         | icon is hollow              | boolean               | —                                           | false   |
`;
const Slots = `
| Name | Description                      |
| ---- | -------------------------------- |
| —    | Custom content for timeline item |
| dot  | Custom defined node              |
`;
export default {
  attributes: Attributes,
  slots: Slots,
};
