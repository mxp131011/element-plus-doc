import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/image.html',
  attributes: [
    {
      name: 'src',
      description: { cn: '图片源地址，同原生属性一致', en: 'image source, same as native.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'fit',
      description: {
        cn: '确定图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).',
        en: 'indicate how the image should be resized to fit its container, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).',
      },
      type: 'enum',
      default: '—',
      value: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    },
    {
      name: 'hide-on-click-modal',
      description: {
        cn: '当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview.',
        en: 'when enabling preview, use this flag to control whether clicking on backdrop can exit preview mode.',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'loading',
      description: {
        cn: '浏览器加载图像的策略，和 [浏览器原生](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading) 能力一致',
        en: 'Indicates how the browser should load the image, same as [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading)',
      },
      type: 'enum',
      default: '—',
      value: ['eager', 'lazy'],
    },
    {
      name: 'lazy',
      description: { cn: '是否使用懒加载', en: 'whether to use lazy load.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'scroll-container',
      description: {
        cn: '开启懒加载功能后，监听 scroll 事件的容器,默认为最近一个 overflow 值为 auto 或 scroll 的父元素',
        en: 'the container to add scroll listener when using lazy load. （The default value is nearest parent container whose overflow property is auto or scroll）',
      },
      type: ['string', 'HTMLElement'],
      default: '—',
      value: [],
    },
    {
      name: 'alt',
      description: { cn: '原生属性 `alt`', en: 'native attribute `alt`.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'referrer-policy',
      description: { cn: '原生属性 `referrerPolicy`', en: 'native attribute `referrerPolicy`.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'preview-src-list',
      description: { cn: '开启图片预览功能', en: 'allow big image preview.' },
      type: 'array',
      default: '—',
      value: [],
    },
    {
      name: 'z-index',
      description: { cn: '设置图片预览的 z-index', en: 'set image preview z-index.' },
      type: 'number',
      default: '—',
      value: [],
    },
    {
      name: 'initial-index',
      description: {
        cn: '初始预览图像索引，小于 `url-list` 的长度',
        en: 'initial preview image index, less than the length of `url-list`.',
      },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'close-on-press-escape',
      description: { cn: '是否可以通过按下 ESC 关闭 Image Viewer', en: 'whether the image-viewer can be closed by pressing ESC' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'preview-teleported',
      description: {
        cn: 'image-viewer 是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 `true`',
        en: 'whether to append image-viewer to body. A nested parent element attribute transform should have this attribute set to `true`.',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  events: [
    {
      name: 'load',
      description: { cn: '图片加载成功触发', en: 'same as native load.' },
      type: 'function',
      param: '(e: Event) =&gt; void',
    },
    {
      name: 'error',
      description: { cn: '图片加载失败触发', en: 'same as native error.' },
      type: 'function',
      param: '(e: Error) =&gt; void',
    },
    {
      name: 'switch',
      description: { cn: '切换图像时触发。', en: 'trigger when switching images.' },
      type: 'function',
      param: '(index: number) =&gt; void',
    },
    {
      name: 'close',
      description: {
        cn: '当点击 X 按钮或者在hide-on-click-modal为 true 时点击遮罩层时触发',
        en: 'trigger when clicking on close button or when `hide-on-click-modal` enabled clicking on backdrop.',
      },
      type: 'function',
      param: '() =&gt; void',
    },
  ],
  slots: [
    {
      name: 'placeholder',
      description: { cn: '当图像尚未加载时，自定义的占位符内容', en: "custom placeholder content when image hasn't loaded yet." },
    },
    {
      name: 'error',
      description: { cn: '自定义图像加载失败的内容', en: 'custom image load failed content.' },
    },
    {
      name: 'viewer',
      description: { cn: '图片描述内容', en: 'description of the image.' },
    },
  ],
};
export default doc;
