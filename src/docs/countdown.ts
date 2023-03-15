import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: '', description: { cn: 'target time', en: 'target time' }, type: 'number', default: '—', value: ['Dayjs'] },
    {
      name: '',
      description: { cn: 'Formatting the countdown display', en: 'Formatting the countdown display' },
      type: 'string',
      default: 'HH:mm:ss',
      value: [''],
    },
    { name: '', description: { cn: 'Sets the prefix of a countdown', en: 'Sets the prefix of a countdown' }, type: 'string', default: '—', value: [''] },
    { name: '', description: { cn: 'Sets the suffix of a countdown', en: 'Sets the suffix of a countdown' }, type: 'string', default: '—', value: [''] },
    { name: '', description: { cn: 'countdown titles', en: 'countdown titles' }, type: 'string', default: '—', value: [''] },
    { name: '', description: { cn: 'Styles countdown values', en: 'Styles countdown values' }, type: 'string', default: 'CSSProperties[]', value: ['object'] },
  ],
  events: [
    { name: '', description: { cn: 'Time difference change event', en: 'Time difference change event' }, type: 'function', param: '' },
    { name: '', description: { cn: 'countdown end event', en: 'countdown end event' }, type: 'function', param: '' },
  ],
  exposes: [{ name: 'displayValue', description: { cn: 'current display value', en: 'current display value' }, type: 'object', param: '' }],
  slots: [
    { name: 'prefix', description: { cn: 'countdown value prefix', en: 'countdown value prefix' } },
    { name: 'suffix', description: { cn: 'countdown value suffix', en: 'countdown value suffix' } },
    { name: 'title', description: { cn: 'countdown title', en: 'countdown title' } },
  ],
};
export default doc;
