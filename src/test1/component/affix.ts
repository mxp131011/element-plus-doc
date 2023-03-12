const Attributes = `
| Name       | Description                      | Type                       | Default | Required |
| ---------- | -------------------------------- | -------------------------- | ------- | -------- |
| \`offset\`   | offset distance.                 | ^[number]                  | \`0\`     | No       |
| \`position\` | position of affix.               | ^[enum]\`'top' | 'bottom'\` | \`'top'\` | No       |
| \`target\`   | target container. (CSS selector) | ^[string]                  | —       | No       |
| \`z-index\`  | \`z-index\` of affix               | ^[number]                  | \`100\`   | No       |
`;

const Events = `
| Name     | Description                        | Type                                                                |
| -------- | ---------------------------------- | ------------------------------------------------------------------- |
| \`change\` | triggers when fixed state changed. | ^[Function]\`(fixed: boolean) => void\`                               |
| \`scroll\` | triggers when scrolling.           | ^[Function]\`(value: { scrollTop: number, fixed: boolean }) => void\` |
`;

const Exposes = `
| Method       | Description                 | Type                    |
| ------------ | --------------------------- | ----------------------- |
| \`update\`     | update affix state manually | ^[Function]\`() => void\` |
| \`updateRoot\` | update rootRect info        | ^[Function]\`() => void\` |
`;
const Slots = `
| Name      | Description                |
| --------- | -------------------------- |
| \`default\` | customize default content. |
`;

export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
  slots: Slots,
};
