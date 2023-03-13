const Attributes = `
| Name                                    | Description                                                                                                                                         | Type                                                       | Default                                                                 |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------   | ---------------------------------------------------------- | ----------------------------------------------------------------------- |
| src                                     | image source, same as native.                                                                                                                       | string                                                     | —                                                                       |
| fit                                     | indicate how the image should be resized to fit its container, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).   | 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'       | —                                                                       |
| hide-on-click-modal                     | when enabling preview, use this flag to control whether clicking on backdrop can exit preview mode.                                                 | boolean                                                    | false                                                                   |
| loading                                 | Indicates how the browser should load the image, same as [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading)       | 'eager' | 'lazy'                                           | —                                                                       |
| lazy                                    | whether to use lazy load.                                                                                                                           | boolean                                                    | false                                                                   |
| scroll-container                        | the container to add scroll listener when using lazy load.                                                                                          | string | HTMLElement                                       | the nearest parent container whose overflow property is auto or scroll. |
| alt                                     | native attribute \`alt\`.                                                                                                                           | string                                                     | —                                                                       |
| referrer-policy                         | native attribute \`referrerPolicy\`.                                                                                                                | string                                                     | —                                                                       |
| preview-src-list                        | allow big image preview.                                                                                                                            | string[]                                                   | —                                                                       |
| z-index                                 | set image preview z-index.                                                                                                                          | number                                                     | —                                                                       |
| initial-index                           | initial preview image index, less than the length of \`url-list\`.                                                                                  | number                                                     | 0                                                                       |
| close-on-press-escape                   | whether the image-viewer can be closed by pressing ESC                                                                                              | boolean                                                    | true                                                                    |
| preview-teleported                      | whether to append image-viewer to body. A nested parent element attribute transform should have this attribute set to \`true\`.                     | boolean                                                    | false                                                                   |
`;
const Events = `
| Name   | Description                                                                                         | Type                      |
| -------| -------------------------------------------------------------------------------------------------   | ------------------------- |
| load   | same as native load.                                                                                | (e: Event) => void        |
| error  | same as native error.                                                                               | (e: Error) => void        |
| switch | trigger when switching images.                                                                      | (index: number) => void   |
| close  | trigger when clicking on close button or when \`hide-on-click-modal\` enabled clicking on backdrop. | () => void                |
`;
const Slots = `
| Name          | Description                                              |
| ------------- | -------------------------------------------------------- |
| placeholder | custom placeholder content when image hasn't loaded yet. |
| error      | custom image load failed content.                        |
| viewer     | description of the image.                                |
`;
export default {
  attributes: Attributes,
  events: Events,
  slots: Slots,
};
