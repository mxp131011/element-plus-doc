import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'title', description: { cn: 'alert title.', en: 'alert title.' }, type: 'string', default: '—', value: [] },
    { name: 'type', description: { cn: 'alert type.', en: 'alert type.' }, type: 'enum', default: "'warning'", value: ['success'] },
    { name: 'description', description: { cn: 'descriptive text.', en: 'descriptive text.' }, type: 'string', default: '—', value: [] },
    {
      name: 'closable',
      description: { cn: 'whether alert can be dismissed.', en: 'whether alert can be dismissed.' },
      type: 'boolean',
      default: '<code>true</code>',
      value: [],
    },
    {
      name: 'center',
      description: { cn: 'whether content is placed in the center.', en: 'whether content is placed in the center.' },
      type: 'boolean',
      default: '<code>false</code>',
      value: [],
    },
    {
      name: 'close-text',
      description: { cn: 'customized close button text.', en: 'customized close button text.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'show-icon',
      description: { cn: 'whether a type icon is displayed.', en: 'whether a type icon is displayed.' },
      type: 'boolean',
      default: '<code>false</code>',
      value: [],
    },
    { name: 'effect', description: { cn: 'theme style.', en: 'theme style.' }, type: 'enum', default: "'dark'`", value: ['light'] },
  ],
  events: [{ name: 'close', description: { cn: 'trigger when alert is closed.', en: 'trigger when alert is closed.' }, type: 'function', tsType: '' }],
  slots: [
    { name: 'default', description: { cn: 'content of the alert description.', en: 'content of the alert description.' } },
    { name: 'title', description: { cn: 'content of the alert title.', en: 'content of the alert title.' } },
  ],
};
export default doc;
