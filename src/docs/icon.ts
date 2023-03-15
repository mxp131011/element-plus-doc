import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'color',
      description: { cn: "SVG tag's fill attribute", en: "SVG tag's fill attribute" },
      type: 'string',
      default: 'inherit from color',
      value: [],
    },
    {
      name: 'size',
      description: { cn: 'SVG icon size, size x size', en: 'SVG icon size, size x size' },
      type: 'number',
      default: 'inherit from font size',
      value: ['string'],
    },
  ],
  slots: [{ name: 'default', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
