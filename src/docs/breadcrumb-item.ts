import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'to',
      description: {
        cn: 'target route of the link, same as <code>to</code> of <code>vue-router</code>',
        en: 'target route of the link, same as <code>to</code> of <code>vue-router</code>',
      },
      type: 'string',
      default: "''",
      value: ['object'],
    },
    {
      name: 'replace',
      description: {
        cn: 'if <code>true</code>, the navigation will not leave a history record',
        en: 'if <code>true</code>, the navigation will not leave a history record',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: 'customize default content', en: 'customize default content' },
    },
  ],
};
export default doc;
