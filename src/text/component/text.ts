---
title: Text
lang: en-US
---

# Text

Used for text.

## Basic

:::demo Use the \`type\` attribute to define Text's type.

text/basic

:::

## Sizes

:::demo Use attribute \`size\` to set additional sizes with \`large\`, \`default\` or \`small\`.

text/sizes

:::

## Ellipsis

:::demo Pass the \`truncated\` prop to render an ellipsis when the text exceeds the width of the viewport or max-width set.

text/truncated

:::

## Override

:::demo Use attribute \`tag\` to override element

text/override

:::

## Mixed

:::demo Text mixed component

text/mixed

:::

## API

const Attributes = `

| Name      | Description        | Type                                                               | Default |
| --------- | ------------------ | ------------------------------------------------------------------ | ------- |
| type      | text type          | ^[enum]\`'primary' | 'success' | 'warning' | 'danger' | 'info'\` | —       |
| size      | text size          | ^[enum]\`'large' | 'default' | 'small'\`                           | default |
| truncated | render ellipsis    | ^[boolean]                                                         | false   |
| tag       | custom element tag | ^[string]                                                          | span    |
`;
const Slots = `

| Name    | Description     |
| ------- | --------------- |
| default | default content |

export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
  slots: Slots,
};
