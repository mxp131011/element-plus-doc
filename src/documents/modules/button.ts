import type { TagDoc } from '@/types/tag-doc';

const attributes: TagDoc.Attribute[] = [
  {
    name: 'size',
    description: {
      cn: 'button size',
      en: 'button size',
    },
    type: "'large' | 'default' | 'small'",
    default: '—',
  },
  {
    name: 'type',
    description: {
      cn: 'button type',
      en: 'button type',
    },
    type: "'primary' | 'success' | 'warning' | 'danger' | 'info'",
    default: '—',
  },
  {
    name: 'plain',
    description: {
      cn: "determine whether it's a plain button",
      en: "determine whether it's a plain button",
    },
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'text',
    description: {
      cn: "determine whether it's a text button",
      en: "determine whether it's a text button",
    },
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'bg',
    description: {
      cn: 'determine whether the text button background color is always on',
      en: 'determine whether the text button background color is always on',
    },
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'link',
    description: {
      cn: "determine whether it's a link button",
      en: "determine whether it's a link button",
    },
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'round',
    description: {
      cn: "determine whether it's a round button",
      en: "determine whether it's a round button",
    },
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'circle',
    description: {
      cn: "determine whether it's a circle button",
      en: "determine whether it's a circle button",
    },
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'loading',
    description: {
      cn: 'customize loading icon component',
      en: 'customize loading icon component',
    },
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'loading-icon',
    description: {
      cn: 'customize loading icon component',
      en: 'customize loading icon component',
    },
    type: 'string | Component',
    default: 'Loading',
  },
  {
    name: 'disabled',
    description: {
      cn: 'disable the button',
      en: 'disable the button',
    },
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'icon',
    description: {
      cn: 'icon class name',
      en: 'icon class name',
    },
    type: 'string | Component',
    default: '—',
  },
  {
    name: 'autofocus',
    description: {
      cn: "same as native button's `autofocus`",
      en: "same as native button's `autofocus`",
    },
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'native-type',
    description: {
      cn: "same as native button's `type`",
      en: "same as native button's `type`",
    },
    type: "'button' | 'submit' | 'reset'",
    default: '—',
  },
  {
    name: 'color',
    description: {
      cn: 'custom button color, automatically calculate `hover` and active `color`',
      en: 'custom button color, automatically calculate `hover` and active `color`',
    },
    type: 'string',
    default: '—',
  },
  {
    name: 'dark',
    description: {
      cn: 'dark mode, which automatically converts `color` to dark mode colors',
      en: 'dark mode, which automatically converts `color` to dark mode colors',
    },
    type: 'boolean',
    default: 'false',
  },
];

const slots: TagDoc.Slot[] = [
  {
    name: 'default',
    description: {
      cn: 'customize default content',
      en: 'customize default content',
    },
  },
  {
    name: 'loading',
    description: {
      cn: 'customize loading component',
      en: 'customize loading component',
    },
  },
  {
    name: 'icon',
    description: {
      cn: 'customize icon component',
      en: 'customize icon component',
    },
  },
];

const exposes: TagDoc.Expose[] = [
  {
    name: 'ref',
    description: {
      cn: 'button html element',
      en: 'button html element',
    },
    type: 'Ref<HTMLButtonElement>',
  },
  {
    name: 'size',
    description: {
      cn: 'button size',
      en: 'button size',
    },
    type: "ComputedRef<'' | 'small' | 'default' | 'large'>",
  },
  {
    name: 'type',
    description: {
      cn: 'button type',
      en: 'button type',
    },
    type: "ComputedRef<'' | 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text'>",
  },
  {
    name: 'disabled',
    description: {
      cn: 'button disabled',
      en: 'button disabled',
    },
    type: 'ComputedRef<boolean>',
  },
  {
    name: 'shouldAddSpace',
    description: {
      cn: 'whether adding space',
      en: 'whether adding space',
    },
    type: 'ComputedRef<boolean>',
  },
];
const documentInstance: TagDoc.TagDocInstance = { attributes, slots, exposes };

export default documentInstance;
