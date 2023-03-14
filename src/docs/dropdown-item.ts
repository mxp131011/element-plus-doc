import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'command',
      description: {
        cn: "a command to be dispatched to Dropdown's <code>command</code> callback",
        en: "a command to be dispatched to Dropdown's <code>command</code> callback",
      },
      type: 'string/number/object',
      default: '—',
      value: [],
    },
    { name: 'disabled', description: { cn: 'whether the item is disabled', en: 'whether the item is disabled' }, type: 'boolean', default: 'false', value: [] },
    {
      name: 'divided',
      description: { cn: 'whether a divider is displayed', en: 'whether a divider is displayed' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    { name: 'icon', description: { cn: 'custom icon', en: 'custom icon' }, type: '`string', default: '—', value: [] },
  ],
  slots: [{ name: '—', description: { cn: 'customize of Dropdown Item', en: 'customize of Dropdown Item' } }],
};
export default doc;
