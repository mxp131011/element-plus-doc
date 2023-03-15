import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'type', description: { cn: 'type', en: 'type' }, type: 'enum', default: "'success'", value: ['primary'] },
    {
      name: 'underline',
      description: { cn: 'whether the component has underline', en: 'whether the component has underline' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: 'whether the component is disabled', en: 'whether the component is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'href',
      description: { cn: "same as native hyperlink's <code>href</code>", en: "same as native hyperlink's <code>href</code>" },
      type: 'string',
      default: '—',
      value: [],
    },
    { name: 'icon', description: { cn: 'icon component', en: 'icon component' }, type: 'string', default: '—', value: ['Component'] },
  ],
  slots: [
    { name: 'default', description: { cn: 'customize default content', en: 'customize default content' } },
    { name: 'icon', description: { cn: 'customize icon component', en: 'customize icon component' } },
  ],
};
export default doc;
