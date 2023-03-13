import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'icon',
      description: { cn: 'representation type to icon, more info on icon component.', en: 'representation type to icon, more info on icon component.' },
      type: 'string',
      default: '—',
      value: ['Component'],
    },
    { name: 'size', description: { cn: 'avatar size.', en: 'avatar size.' }, type: 'number', default: "'default'", value: ['enum'] },
    { name: 'shape', description: { cn: 'avatar shape.', en: 'avatar shape.' }, type: 'enum', default: "'square'`", value: ['circle'] },
    {
      name: 'src',
      description: { cn: 'the source of the image for an image avatar.', en: 'the source of the image for an image avatar.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'src-set',
      description: { cn: 'native attribute <code>srcset</code> of image avatar.', en: 'native attribute <code>srcset</code> of image avatar.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'alt',
      description: { cn: 'native attribute <code>alt</code> of image avatar.', en: 'native attribute <code>alt</code> of image avatar.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'fit',
      description: { cn: 'set how the image fit its container for an image avatar.', en: 'set how the image fit its container for an image avatar.' },
      type: 'enum',
      default: "'contain'",
      value: ['fill'],
    },
  ],
  events: [{ name: 'error', description: { cn: 'trigger when image load error.', en: 'trigger when image load error.' }, type: 'function', tsType: '' }],
  slots: [{ name: 'default', description: { cn: 'customize avatar content.', en: 'customize avatar content.' } }],
};
export default doc;
