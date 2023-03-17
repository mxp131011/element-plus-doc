import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/image.html#image-viewer-api',
  attributes: [
    {
      name: 'url-list',
      description: { cn: '用于预览的图片链接列表 ( `string[]` )', en: 'preview link list. ( `string[]` )' },
      type: 'array',
      default: '[]',
      value: ['code'],
    },
    {
      name: 'z-index',
      description: { cn: 'preview backdrop z-index.', en: 'preview backdrop z-index.' },
      type: ['number', 'string'],
      default: '—',
      value: [],
    },
    {
      name: 'initial-index',
      description: {
        cn: '初始预览图像索引，小于 url-list 的长度',
        en: 'the initial preview image index, less than or equal to the length of `url-list`.',
      },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'infinite',
      description: { cn: '是否可以无限循环预览', en: 'whether preview is infinite.' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'hide-on-click-modal',
      description: { cn: '是否可以通过点击遮罩层关闭预览', en: 'whether user can emit close event when clicking backdrop.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'teleported',
      description: {
        cn: 'image 自身是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 `true`',
        en: 'whether to append image itself to body. A nested parent element attribute transform should have this attribute set to `true`.',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'zoom-rate',
      description: { cn: '缩放事件的缩放速度', en: 'the zoom rate of the image viewer zoom event' },
      type: 'number',
      default: '1.2',
      value: [],
    },
  ],
  events: [
    {
      name: 'close',
      description: {
        cn: '当点击 X 按钮或者在 `hide-on-click-modal` 为 true 时点击遮罩层时触发',
        en: 'trigger when clicking on close button or when `hide-on-click-modal` enabled clicking on backdrop.',
      },
      type: 'function',
      param: '() =&gt; void',
    },
    {
      name: 'switch',
      description: { cn: 'trigger when switching images.', en: 'trigger when switching images.' },
      type: 'function',
      param: '(index: number) =&gt; void',
    },
  ],
  exposes: [
    {
      name: 'setActiveItem',
      description: { cn: '手动切换图片', en: 'manually switch image' },
      type: 'function',
      param: 'val,需要切换的图片的索引，从 0 开始',
    },
  ],
};
export default doc;
