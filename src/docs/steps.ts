import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'space',
      description: {
        cn: 'the spacing of each step, will be responsive if omitted. Supports percentage.',
        en: 'the spacing of each step, will be responsive if omitted. Supports percentage.',
      },
      type: 'number / string',
      default: '—',
      value: [],
    },
    {
      name: 'direction',
      description: { cn: 'display direction', en: 'display direction' },
      type: 'string',
      default: 'horizontal',
      value: [],
    },
    {
      name: 'active',
      description: { cn: 'current activation step', en: 'current activation step' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'process-status',
      description: { cn: 'status of current step', en: 'status of current step' },
      type: 'string',
      default: 'process',
      value: [],
    },
    {
      name: 'finish-status',
      description: { cn: 'status of end step', en: 'status of end step' },
      type: 'string',
      default: 'finish',
      value: [],
    },
    {
      name: 'align-center',
      description: { cn: 'center title and description', en: 'center title and description' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'simple',
      description: { cn: 'whether to apply simple theme', en: 'whether to apply simple theme' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  slots: [
    {
      name: '-',
      description: { cn: 'customize default content', en: 'customize default content' },
    },
  ],
};
export default doc;
