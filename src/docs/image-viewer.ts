import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'url-list',
      description: { cn: 'preview link list.', en: 'preview link list.' },
      type: '<code>string[',
      default: '<code>[]</code>',
      value: ['code'],
    },
    { name: 'z-index', description: { cn: 'preview backdrop z-index.', en: 'preview backdrop z-index.' }, type: '`number', default: 'string`', value: [] },
    {
      name: 'initial-index',
      description: {
        cn: 'the initial preview image index, less than or equal to the length of <code>url-list</code>.',
        en: 'the initial preview image index, less than or equal to the length of <code>url-list</code>.',
      },
      type: '<code>number</code>',
      default: '<code>0</code>',
      value: [],
    },
    {
      name: 'infinite',
      description: { cn: 'whether preview is infinite.', en: 'whether preview is infinite.' },
      type: '<code>boolean</code>',
      default: '<code>true</code>',
      value: [],
    },
    {
      name: 'hide-on-click-modal',
      description: { cn: 'whether user can emit close event when clicking backdrop.', en: 'whether user can emit close event when clicking backdrop.' },
      type: '<code>boolean</code>',
      default: '<code>false</code>',
      value: [],
    },
    {
      name: 'teleported',
      description: {
        cn: 'whether to append image itself to body. A nested parent element attribute transform should have this attribute set to <code>true</code>.',
        en: 'whether to append image itself to body. A nested parent element attribute transform should have this attribute set to <code>true</code>.',
      },
      type: '<code>boolean</code>',
      default: '<code>false</code>',
      value: [],
    },
    {
      name: 'zoom-rate',
      description: { cn: 'the zoom rate of the image viewer zoom event', en: 'the zoom rate of the image viewer zoom event' },
      type: '<code>number</code>',
      default: '<code>1.2</code>',
      value: [],
    },
  ],
  events: [
    {
      name: 'close',
      description: {
        cn: 'trigger when clicking on close button or when <code>hide-on-click-modal</code> enabled clicking on backdrop.',
        en: 'trigger when clicking on close button or when <code>hide-on-click-modal</code> enabled clicking on backdrop.',
      },
      type: '<code>() => void</code>',
      tsType: '',
    },
    {
      name: 'switch',
      description: { cn: 'trigger when switching images.', en: 'trigger when switching images.' },
      type: '<code>(index: number) => void</code>',
      tsType: '',
    },
  ],
  exposes: [{ name: '', description: { cn: 'manually switch image', en: 'manually switch image' }, type: '', tsType: '' }],
};
export default doc;
