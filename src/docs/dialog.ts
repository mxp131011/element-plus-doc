import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'model-value / v-model', description: { cn: 'visibility of Dialog', en: 'visibility of Dialog' }, type: 'boolean', default: '—', value: [] },
    {
      name: 'title',
      description: {
        cn: 'title of Dialog. Can also be passed with a named slot (see the following table)',
        en: 'title of Dialog. Can also be passed with a named slot (see the following table)',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    { name: 'width', description: { cn: 'width of Dialog', en: 'width of Dialog' }, type: 'string / number', default: '50%', value: [] },
    {
      name: 'fullscreen',
      description: { cn: 'whether the Dialog takes up full screen', en: 'whether the Dialog takes up full screen' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'top',
      description: { cn: 'value for <code>margin-top</code> of Dialog CSS', en: 'value for <code>margin-top</code> of Dialog CSS' },
      type: 'string',
      default: '15vh',
      value: [],
    },
    { name: 'modal', description: { cn: 'whether a mask is displayed', en: 'whether a mask is displayed' }, type: 'boolean', default: 'true', value: [] },
    {
      name: 'append-to-body',
      description: {
        cn: 'whether to append Dialog itself to body. A nested Dialog should have this attribute set to <code>true</code>',
        en: 'whether to append Dialog itself to body. A nested Dialog should have this attribute set to <code>true</code>',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'lock-scroll',
      description: { cn: 'whether scroll of body is disabled while Dialog is displayed', en: 'whether scroll of body is disabled while Dialog is displayed' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'custom-class<deprecatedtag></deprecatedtag>',
      description: { cn: 'custom class names for Dialog', en: 'custom class names for Dialog' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'open-delay',
      description: { cn: 'Time(milliseconds) before open', en: 'Time(milliseconds) before open' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'close-delay',
      description: { cn: 'Time(milliseconds) before close', en: 'Time(milliseconds) before close' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'close-on-click-modal',
      description: { cn: 'whether the Dialog can be closed by clicking the mask', en: 'whether the Dialog can be closed by clicking the mask' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'close-on-press-escape',
      description: { cn: 'whether the Dialog can be closed by pressing ESC', en: 'whether the Dialog can be closed by pressing ESC' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'show-close',
      description: { cn: 'whether to show a close button', en: 'whether to show a close button' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'before-close',
      description: {
        cn: 'callback before Dialog closes, and it will prevent Dialog from closing',
        en: 'callback before Dialog closes, and it will prevent Dialog from closing',
      },
      type: 'function(done) (done is used to close the dialog)',
      default: '—',
      value: [],
    },
    {
      name: 'draggable',
      description: { cn: 'enable dragging feature for Dialog', en: 'enable dragging feature for Dialog' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'center',
      description: { cn: 'whether to align the header and footer in center', en: 'whether to align the header and footer in center' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'align-center',
      description: { cn: 'whether to align the dialog both horizontally and vertically', en: 'whether to align the dialog both horizontally and vertically' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'destroy-on-close',
      description: { cn: 'Destroy elements in Dialog when closed', en: 'Destroy elements in Dialog when closed' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  events: [
    { name: 'open', description: { cn: 'triggers when the Dialog opens', en: 'triggers when the Dialog opens' }, type: '', tsType: '' },
    {
      name: 'opened',
      description: { cn: 'triggers when the Dialog opening animation ends', en: 'triggers when the Dialog opening animation ends' },
      type: '',
      tsType: '',
    },
    { name: 'close', description: { cn: 'triggers when the Dialog closes', en: 'triggers when the Dialog closes' }, type: '', tsType: '' },
    {
      name: 'closed',
      description: { cn: 'triggers when the Dialog closing animation ends', en: 'triggers when the Dialog closing animation ends' },
      type: '',
      tsType: '',
    },
    {
      name: 'open-auto-focus',
      description: { cn: 'triggers after Dialog opens and content focused', en: 'triggers after Dialog opens and content focused' },
      type: '',
      tsType: '',
    },
    {
      name: 'close-auto-focus',
      description: { cn: 'triggers after Dialog closed and content focused', en: 'triggers after Dialog closed and content focused' },
      type: '',
      tsType: '',
    },
  ],
  slots: [
    { name: '—', description: { cn: 'content of Dialog', en: 'content of Dialog' } },
    {
      name: 'header',
      description: {
        cn: 'content of the Dialog header; Replacing this removes the title, but does not remove the close button.',
        en: 'content of the Dialog header; Replacing this removes the title, but does not remove the close button.',
      },
    },
    {
      name: 'title<deprecatedtag></deprecatedtag>',
      description: { cn: 'Works the same as the header slot. Use that instead.', en: 'Works the same as the header slot. Use that instead.' },
    },
    { name: 'footer', description: { cn: 'content of the Dialog footer', en: 'content of the Dialog footer' } },
  ],
};
export default doc;
