import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'height', description: { cn: 'height of scrollbar', en: 'height of scrollbar' }, type: 'string', default: '—', value: ['number'] },
    { name: 'max-height', description: { cn: 'max height of scrollbar', en: 'max height of scrollbar' }, type: 'string', default: '—', value: ['number'] },
    {
      name: 'native',
      description: { cn: 'whether to use the native scrollbar style', en: 'whether to use the native scrollbar style' },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    {
      name: 'wrap-style',
      description: { cn: 'style of wrap container', en: 'style of wrap container' },
      type: 'string',
      default: 'CSSProperties[]',
      value: ['object'],
    },
    { name: 'wrap-class', description: { cn: 'class of wrap container', en: 'class of wrap container' }, type: 'string', default: '—', value: [''] },
    { name: 'view-style', description: { cn: 'style of view', en: 'style of view' }, type: 'string', default: 'CSSProperties[]', value: ['object'] },
    { name: 'view-class', description: { cn: 'class of view', en: 'class of view' }, type: 'string', default: '—', value: [''] },
    {
      name: 'noresize',
      description: {
        cn: 'do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance',
        en: 'do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance',
      },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    { name: 'tag', description: { cn: 'element tag of the view', en: 'element tag of the view' }, type: 'string', default: 'div', value: [''] },
    { name: 'always', description: { cn: 'always show scrollbar', en: 'always show scrollbar' }, type: 'boolean', default: 'false', value: [''] },
    { name: 'min-size', description: { cn: 'minimum size of scrollbar', en: 'minimum size of scrollbar' }, type: 'number', default: '20', value: [''] },
  ],
  events: [
    {
      name: 'scroll',
      description: { cn: 'triggers when scrolling, return distance of scrolling', en: 'triggers when scrolling, return distance of scrolling' },
      type: 'function',
      param: '',
    },
  ],
  exposes: [
    { name: 'handleScroll', description: { cn: 'handle scroll event', en: 'handle scroll event' }, type: 'function', param: '' },
    {
      name: 'scrollTo',
      description: { cn: 'scrolls to a particular set of coordinates', en: 'scrolls to a particular set of coordinates' },
      type: 'function',
      param: '',
    },
    { name: 'setScrollTop', description: { cn: 'Set distance to scroll top', en: 'Set distance to scroll top' }, type: 'function', param: '' },
    { name: 'setScrollLeft', description: { cn: 'Set distance to scroll left', en: 'Set distance to scroll left' }, type: 'function', param: '' },
    { name: 'update', description: { cn: 'update scrollbar state manually', en: 'update scrollbar state manually' }, type: 'function', param: '' },
    { name: 'wrapRef', description: { cn: 'scrollbar wrap ref', en: 'scrollbar wrap ref' }, type: 'object', param: '' },
  ],
  slots: [{ name: 'default', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
