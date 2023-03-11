import type { TagDoc } from '@/types/tag-doc';

const attributes: TagDoc.Attribute[] = [
  {
    name: 'size',
    description: {
      cn: 'control the size of buttons in this button-group',
      en: 'control the size of buttons in this button-group',
    },
    type: 'enum',
    default: '—',
    value: ['large', 'default', 'small'],
  },
  {
    name: 'type',
    description: {
      cn: 'control the type of buttons in this button-group',
      en: 'control the type of buttons in this button-group',
    },
    type: 'enum',
    default: '—',
    value: ['primary', 'success', 'warning', 'danger', 'info'],
  },
];

const slots: TagDoc.Slot[] = [
  {
    name: 'default',
    description: {
      cn: 'customize button group content',
      en: 'customize button group content',
    },
  },
];

const documentInstance: TagDoc.TagDocInstance = { attributes, slots };

export default documentInstance;
