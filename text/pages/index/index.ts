import type { TagDoc } from '@/types/document';

const attributes: TagDoc.Attribute[] = [
  {
    name: 'size',
    description: 'button size',
    type: `'large' | 'default' | 'small'`,
    default: '—',
  },
  {
    name: 'type',
    description: 'button type',
    type: `'primary' | 'success' | 'warning' | 'danger' | 'info'`,
    default: '—',
  },
  {
    name: 'plain',
    description: "determine whether it's a plain button",
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'text',
    description: "determine whether it's a text button",
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'bg',
    description: 'determine whether the text button background color is always on',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'link',
    description: `determine whether it's a link button`,
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'round',
    description: "determine whether it's a round button",
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'circle',
    description: "determine whether it's a circle button",
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'loading',
    description: 'customize loading icon component',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'loading-icon',
    description: 'customize loading icon component',
    type: 'string | Component',
    default: 'Loading',
  },
  {
    name: 'disabled',
    description: 'disable the button',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'icon',
    description: 'icon class name',
    type: 'string | Component',
    default: '—',
  },
  {
    name: 'autofocus',
    description: "same as native button's `autofocus`",
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'native-type',
    description: "same as native button's `type`",
    type: `'button' | 'submit' | 'reset'`,
    default: '—',
  },
  {
    name: 'color',
    description: 'custom button color, automatically calculate `hover` and active `color`',
    type: 'string',
    default: '—',
  },
  {
    name: 'dark',
    description: 'dark mode, which automatically converts `color` to dark mode colors',
    type: 'boolean',
    default: 'false',
  },
];

const slots: TagDoc.Slot[] = [
  {
    name: 'default',
    description: 'customize default content',
  },
  {
    name: 'loading',
    description: 'customize loading component',
  },
  {
    name: 'icon',
    description: 'customize icon component',
  },
];

const exposes: TagDoc.Expose[] = [
  {
    name: 'ref',
    description: 'button html element',
    type: 'Ref<HTMLButtonElement>',
  },
  {
    name: 'size',
    description: 'button size',
    type: `ComputedRef<'' | 'small' | 'default' | 'large'>`,
  },
  {
    name: 'type',
    description: 'button type',
    type: `ComputedRef<'' | 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text'>`,
  },
  {
    name: 'disabled',
    description: 'button disabled',
    type: 'ComputedRef<boolean>',
  },
  {
    name: 'shouldAddSpace',
    description: 'whether adding space',
    type: 'ComputedRef<boolean>',
  },
];

const documentInstance: TagDoc.TagDocInstance = { attributes, slots, exposes };

export default documentInstance;
