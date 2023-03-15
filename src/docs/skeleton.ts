import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: '<code>animated</code>',
      description: { cn: 'whether showing the animation', en: 'whether showing the animation' },
      type: '<code>boolean</code>',
      default: '<code>false</code>',
      value: [],
    },
    {
      name: '<code>count</code>',
      description: { cn: 'how many fake items to render to the DOM', en: 'how many fake items to render to the DOM' },
      type: '<code>number</code>',
      default: '<code>1</code>',
      value: [],
    },
    {
      name: '<code>loading</code>',
      description: { cn: 'whether showing the real DOM', en: 'whether showing the real DOM' },
      type: '<code>boolean</code>',
      default: '<code>false</code>',
      value: [],
    },
    {
      name: '<code>rows</code>',
      description: {
        cn: 'numbers of the row, only useful when no template slot were given',
        en: 'numbers of the row, only useful when no template slot were given',
      },
      type: '<code>number</code>',
      default: '<code>3</code>',
      value: [],
    },
    {
      name: '<code>throttle</code>',
      description: { cn: 'Rendering delay in milliseconds', en: 'Rendering delay in milliseconds' },
      type: '<code>number</code>',
      default: '<code>0</code>',
      value: [],
    },
  ],
  slots: [
    {
      name: '<code>default</code>',
      description: { cn: 'Real rendering DOM', en: 'Real rendering DOM' },
    },
    {
      name: '<code>template</code>',
      description: { cn: 'Custom rendering skeleton template', en: 'Custom rendering skeleton template' },
    },
  ],
};
export default doc;
