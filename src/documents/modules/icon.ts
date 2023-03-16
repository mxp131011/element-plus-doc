import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/icon.html',
  attributes: [
    {
      name: 'color',
      description: { cn: 'svg 的 fill 颜色。(默认继承颜色)', en: "SVG tag's fill attribute. (default:inherit from color)" },
      type: 'string',
      default: 'inherit from color',
      value: [],
    },
    {
      name: 'size',
      description: { cn: 'SVG 图标的大小，size x size。(默认继承字体大小)', en: 'SVG icon size, size x size. (default:inherit from font size)' },
      type: ['string', 'number'],
      default: 'inherit from font size',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: 'customize default content', en: 'customize default content' },
    },
  ],
};
export default doc;
