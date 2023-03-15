import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'target', description: { cn: 'the target to trigger scroll.', en: 'the target to trigger scroll.' }, type: 'string', default: '—', value: [] },
    {
      name: 'visibility-height',
      description: {
        cn: 'the button will not show until the scroll height reaches this value.',
        en: 'the button will not show until the scroll height reaches this value.',
      },
      type: 'number',
      default: '200',
      value: [],
    },
    { name: 'right', description: { cn: 'right distance.', en: 'right distance.' }, type: 'number', default: '40', value: [] },
    { name: 'bottom', description: { cn: 'bottom distance.', en: 'bottom distance.' }, type: 'number', default: '40', value: [] },
  ],
  events: [{ name: 'click', description: { cn: 'triggers when click.', en: 'triggers when click.' }, type: 'function', param: '' }],
  slots: [{ name: 'default', description: { cn: 'customize default content.', en: 'customize default content.' } }],
};
export default doc;
