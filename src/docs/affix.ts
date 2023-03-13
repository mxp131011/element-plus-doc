import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'offset', description: { cn: 'offset distance.', en: 'offset distance.' }, type: 'number', default: '0', value: [''] },
    { name: 'position', description: { cn: 'position of affix.', en: 'position of affix.' }, type: 'enum', default: "'bottom'", value: ['top'] },
    {
      name: 'target',
      description: { cn: 'target container. (CSS selector)', en: 'target container. (CSS selector)' },
      type: 'string',
      default: '—',
      value: [''],
    },
    { name: 'z-index', description: { cn: 'z-index of affix', en: 'z-index of affix' }, type: 'number', default: '100', value: [''] },
  ],
  events: [
    { name: 'change', description: { cn: 'triggers when fixed state changed.', en: 'triggers when fixed state changed.' }, type: 'function', tsType: '' },
    { name: 'scroll', description: { cn: 'triggers when scrolling.', en: 'triggers when scrolling.' }, type: 'function', tsType: '' },
  ],
  exposes: [
    {
      name: '',
      description: { cn: 'update affix state manually', en: 'update affix state manually' },
      type: '^<a href="">function</a> =&gt; void',
      tsType: '',
    },
    { name: '', description: { cn: 'update rootRect info', en: 'update rootRect info' }, type: '^<a href="">function</a> =&gt; void', tsType: '' },
  ],
  slots: [{ name: 'default', description: { cn: 'customize default content.', en: 'customize default content.' } }],
};
export default doc;
