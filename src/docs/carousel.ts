import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'height', description: { cn: 'height of the carousel', en: 'height of the carousel' }, type: 'string', default: '—', value: [] },
    {
      name: 'initial-index',
      description: { cn: 'index of the initially active slide (starting from 0)', en: 'index of the initially active slide (starting from 0)' },
      type: 'number',
      default: '0',
      value: [],
    },
    { name: 'trigger', description: { cn: 'how indicators are triggered', en: 'how indicators are triggered' }, type: 'string', default: 'hover', value: [] },
    {
      name: 'autoplay',
      description: { cn: 'whether automatically loop the slides', en: 'whether automatically loop the slides' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'interval',
      description: { cn: 'interval of the auto loop, in milliseconds', en: 'interval of the auto loop, in milliseconds' },
      type: 'number',
      default: '3000',
      value: [],
    },
    {
      name: 'indicator-position',
      description: { cn: 'position of the indicators', en: 'position of the indicators' },
      type: 'string',
      default: '—',
      value: [],
    },
    { name: 'arrow', description: { cn: 'when arrows are shown', en: 'when arrows are shown' }, type: 'string', default: 'hover', value: [] },
    { name: 'type', description: { cn: 'type of the Carousel', en: 'type of the Carousel' }, type: 'string', default: '—', value: [] },
    { name: 'loop', description: { cn: 'display the items in loop', en: 'display the items in loop' }, type: 'boolean', default: 'true', value: [] },
    { name: 'direction', description: { cn: 'display direction', en: 'display direction' }, type: 'string', default: 'horizontal', value: [] },
    { name: 'pause-on-hover', description: { cn: 'pause autoplay when hover', en: 'pause autoplay when hover' }, type: 'boolean', default: 'true', value: [] },
  ],
  events: [
    {
      name: 'change',
      description: { cn: 'triggers when the active slide switches', en: 'triggers when the active slide switches' },
      type: 'function',
      param: '',
    },
  ],
  exposes: [
    { name: '', description: { cn: 'manually switch slide', en: 'manually switch slide' }, type: 'function', param: '' },
    { name: '', description: { cn: 'switch to the previous slide', en: 'switch to the previous slide' }, type: 'function', param: '' },
    { name: '', description: { cn: 'switch to the next slide', en: 'switch to the next slide' }, type: 'function', param: '' },
  ],
};
export default doc;
