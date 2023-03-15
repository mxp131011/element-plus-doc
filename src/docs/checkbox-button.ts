import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'label',
      description: {
        cn: 'value of the checkbox when used inside a <code>checkbox-group</code>',
        en: 'value of the checkbox when used inside a <code>checkbox-group</code>',
      },
      type: 'string',
      default: '—',
      value: ['number'],
    },
    {
      name: 'true-label',
      description: { cn: "value of the checkbox if it's checked", en: "value of the checkbox if it's checked" },
      type: 'string',
      default: '—',
      value: ['number'],
    },
    {
      name: 'false-label',
      description: { cn: "value of the checkbox if it's not checked", en: "value of the checkbox if it's not checked" },
      type: 'string',
      default: '—',
      value: ['number'],
    },
    {
      name: 'disabled',
      description: { cn: 'whether the checkbox is disabled', en: 'whether the checkbox is disabled' },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    { name: 'name', description: { cn: "native 'name' attribute", en: "native 'name' attribute" }, type: 'string', default: '—', value: [''] },
    { name: 'checked', description: { cn: 'if the checkbox is checked', en: 'if the checkbox is checked' }, type: 'boolean', default: 'false', value: [''] },
  ],
  events: [{ name: 'default', description: { cn: 'customize default content', en: 'customize default content' }, type: 'function', param: '' }],
};
export default doc;
