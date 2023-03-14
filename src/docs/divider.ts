import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'direction',
      description: { cn: "Set divider's direction", en: "Set divider's direction" },
      type: 'enum',
      default: "'vertical'`",
      value: ['horizontal'],
    },
    {
      name: 'border-style',
      description: { cn: 'Set the style of divider', en: 'Set the style of divider' },
      type: 'enum',
      default: "'solid'",
      value: ['none'],
    },
    {
      name: 'content-position',
      description: { cn: 'the position of the customized content on the divider line', en: 'the position of the customized content on the divider line' },
      type: 'enum',
      default: "'right'",
      value: ['left'],
    },
  ],
  slots: [{ name: 'default', description: { cn: 'customized content on the divider line', en: 'customized content on the divider line' } }],
};
export default doc;
