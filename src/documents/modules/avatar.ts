import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/avatar.html',
  attributes: [
    {
      name: 'icon',
      description: { cn: '设置 Avatar 的图标类型，具体参考 Icon 组件', en: 'representation type to icon, more info on icon component.' },
      type: ['string', 'Component'],
      default: '—',
      value: ['string', 'Component'],
    },
    {
      name: 'size',
      description: { cn: 'Avatar 大小', en: 'avatar size.' },
      type: ['number', 'enum'],
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'shape',
      description: { cn: 'Avatar 形状.', en: 'avatar shape.' },
      type: 'enum',
      default: "'circle'",
      value: ['circle', 'square'],
    },
    {
      name: 'src',
      description: { cn: 'Avatar 图片的源地址', en: 'the source of the image for an image avatar.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'src-set',
      description: { cn: '图片 Avatar 的原生 `srcset` 属性', en: 'native attribute `srcset` of image avatar.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'alt',
      description: { cn: '图片 Avatar 的原生 alt 属性', en: 'native attribute `alt` of image avatar.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'fit',
      description: { cn: 'set how the image fit its container for an image avatar.', en: 'set how the image fit its container for an image avatar.' },
      type: 'enum',
      default: "'cover'",
      value: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    },
  ],
  events: [
    {
      name: 'error',
      description: { cn: '图片加载失败时触发', en: 'trigger when image load error.' },
      type: 'function',
      param: '',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义头像展示内容', en: 'customize avatar content.' },
    },
  ],
};
export default doc;
