import type { TagDoc } from '@/types/tag-doc';

const attributes: TagDoc.Attribute[] = [
  {
    name: 'size',
    description: {
      cn: 'control the size of buttons in this button-group',
      en: 'control the size of buttons in this button-group',
    },
    type: ['large', 'default', 'small'],
    default: '—',
  },
  {
    name: 'type',
    description: {
      cn: 'control the type of buttons in this button-group',
      en: 'control the type of buttons in this button-group',
    },
    type: ['primary', 'success', 'warning', 'danger', 'info'],
    default: '—',
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
