import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'src',
      description: { cn: 'image source, same as native.', en: 'image source, same as native.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'fit',
      description: {
        cn: 'indicate how the image should be resized to fit its container, same as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a>.',
        en: 'indicate how the image should be resized to fit its container, same as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a>.',
      },
      type: "'fill'",
      default: "'contain'",
      value: [],
    },
    {
      name: 'hide-on-click-modal',
      description: {
        cn: 'when enabling preview, use this flag to control whether clicking on backdrop can exit preview mode.',
        en: 'when enabling preview, use this flag to control whether clicking on backdrop can exit preview mode.',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'loading',
      description: {
        cn: 'Indicates how the browser should load the image, same as <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading">native</a>',
        en: 'Indicates how the browser should load the image, same as <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading">native</a>',
      },
      type: "'eager'",
      default: "'lazy'",
      value: [],
    },
    {
      name: 'lazy',
      description: { cn: 'whether to use lazy load.', en: 'whether to use lazy load.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'scroll-container',
      description: { cn: 'the container to add scroll listener when using lazy load.', en: 'the container to add scroll listener when using lazy load.' },
      type: 'string',
      default: 'HTMLElement',
      value: [],
    },
    {
      name: 'alt',
      description: { cn: 'native attribute <code>alt</code>.', en: 'native attribute <code>alt</code>.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'referrer-policy',
      description: { cn: 'native attribute <code>referrerPolicy</code>.', en: 'native attribute <code>referrerPolicy</code>.' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'preview-src-list',
      description: { cn: 'allow big image preview.', en: 'allow big image preview.' },
      type: 'string[',
      default: '—',
      value: [],
    },
    {
      name: 'z-index',
      description: { cn: 'set image preview z-index.', en: 'set image preview z-index.' },
      type: 'number',
      default: '—',
      value: [],
    },
    {
      name: 'initial-index',
      description: {
        cn: 'initial preview image index, less than the length of <code>url-list</code>.',
        en: 'initial preview image index, less than the length of <code>url-list</code>.',
      },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'close-on-press-escape',
      description: { cn: 'whether the image-viewer can be closed by pressing ESC', en: 'whether the image-viewer can be closed by pressing ESC' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'preview-teleported',
      description: {
        cn: 'whether to append image-viewer to body. A nested parent element attribute transform should have this attribute set to <code>true</code>.',
        en: 'whether to append image-viewer to body. A nested parent element attribute transform should have this attribute set to <code>true</code>.',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  events: [
    {
      name: 'load',
      description: { cn: 'same as native load.', en: 'same as native load.' },
      type: '(e: event) => void',
      param: '',
    },
    {
      name: 'error',
      description: { cn: 'same as native error.', en: 'same as native error.' },
      type: '(e: error) => void',
      param: '',
    },
    {
      name: 'switch',
      description: { cn: 'trigger when switching images.', en: 'trigger when switching images.' },
      type: '(index: number) => void',
      param: '',
    },
    {
      name: 'close',
      description: {
        cn: 'trigger when clicking on close button or when <code>hide-on-click-modal</code> enabled clicking on backdrop.',
        en: 'trigger when clicking on close button or when <code>hide-on-click-modal</code> enabled clicking on backdrop.',
      },
      type: '() => void',
      param: '',
    },
  ],
  slots: [
    {
      name: 'placeholder',
      description: { cn: "custom placeholder content when image hasn't loaded yet.", en: "custom placeholder content when image hasn't loaded yet." },
    },
    {
      name: 'error',
      description: { cn: 'custom image load failed content.', en: 'custom image load failed content.' },
    },
    {
      name: 'viewer',
      description: { cn: 'description of the image.', en: 'description of the image.' },
    },
  ],
};
export default doc;
