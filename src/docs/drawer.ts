import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'model-value / v-model',
      description: { cn: 'Should Drawer be displayed', en: 'Should Drawer be displayed' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'append-to-body',
      description: {
        cn: 'Controls should Drawer be inserted to DocumentBody Element, nested Drawer must assign this param to <strong>true</strong>',
        en: 'Controls should Drawer be inserted to DocumentBody Element, nested Drawer must assign this param to <strong>true</strong>',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'lock-scroll',
      description: { cn: 'whether scroll of body is disabled while Drawer is displayed', en: 'whether scroll of body is disabled while Drawer is displayed' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'before-close',
      description: { cn: 'If set, closing procedure will be halted', en: 'If set, closing procedure will be halted' },
      type: 'function(done) (done is function type that accepts a boolean as parameter, calling done with true or without parameter will abort the close procedure)',
      default: '—',
      value: [],
    },
    {
      name: 'close-on-click-modal',
      description: { cn: 'whether the Drawer can be closed by clicking the mask', en: 'whether the Drawer can be closed by clicking the mask' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'close-on-press-escape',
      description: { cn: 'Indicates whether Drawer can be closed by pressing ESC', en: 'Indicates whether Drawer can be closed by pressing ESC' },
      type: 'boolean',
      default: 'true',
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
      name: 'custom-class<deprecatedtag></deprecatedtag>',
      description: { cn: 'Extra class names for Drawer', en: 'Extra class names for Drawer' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'destroy-on-close',
      description: {
        cn: 'Indicates whether children should be destroyed after Drawer closed',
        en: 'Indicates whether children should be destroyed after Drawer closed',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'modal',
      description: { cn: 'Should show shadowing layer', en: 'Should show shadowing layer' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'direction',
      description: { cn: "Drawer's opening direction", en: "Drawer's opening direction" },
      type: 'direction',
      default: 'rtl',
      value: [],
    },
    {
      name: 'show-close',
      description: { cn: 'Should show close button at the top right of Drawer', en: 'Should show close button at the top right of Drawer' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'size',
      description: {
        cn: "Drawer's size, if Drawer is horizontal mode, it effects the width property, otherwise it effects the height property, when size is <code>number</code> type, it describes the size by unit of pixels; when size is <code>string</code> type, it should be used with <code>x%</code> notation, other wise it will be interpreted to pixel unit",
        en: "Drawer's size, if Drawer is horizontal mode, it effects the width property, otherwise it effects the height property, when size is <code>number</code> type, it describes the size by unit of pixels; when size is <code>string</code> type, it should be used with <code>x%</code> notation, other wise it will be interpreted to pixel unit",
      },
      type: 'number / string',
      default: "'30%'",
      value: [],
    },
    {
      name: 'title',
      description: {
        cn: "Drawer's title, can also be set by named slot, detailed descriptions can be found in the slot form",
        en: "Drawer's title, can also be set by named slot, detailed descriptions can be found in the slot form",
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'withHeader',
      description: {
        cn: "Flag that controls the header section's existance, default to true, when withHeader set to false, both <code>title attribute</code> and <code>title slot</code> won't work",
        en: "Flag that controls the header section's existance, default to true, when withHeader set to false, both <code>title attribute</code> and <code>title slot</code> won't work",
      },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'modal-class',
      description: { cn: 'Extra class names for shadowing layer', en: 'Extra class names for shadowing layer' },
      type: 'string',
      default: '-',
      value: [],
    },
    { name: 'z-index', description: { cn: 'set z-index', en: 'set z-index' }, type: 'number', default: '-', value: [] },
  ],
  events: [
    {
      name: 'open',
      description: { cn: 'Triggered before Drawer opening animation begins', en: 'Triggered before Drawer opening animation begins' },
      type: 'function',
      param: '',
    },
    {
      name: 'opened',
      description: { cn: 'Triggered after Drawer opening animation ended', en: 'Triggered after Drawer opening animation ended' },
      type: 'function',
      param: '',
    },
    {
      name: 'close',
      description: { cn: 'Triggered before Drawer closing animation begins', en: 'Triggered before Drawer closing animation begins' },
      type: 'function',
      param: '',
    },
    {
      name: 'closed',
      description: { cn: 'Triggered after Drawer closing animation ended', en: 'Triggered after Drawer closing animation ended' },
      type: 'function',
      param: '',
    },
  ],
  exposes: [
    {
      name: '',
      description: {
        cn: 'In order to close Drawer, this method will call <code>before-close</code>.',
        en: 'In order to close Drawer, this method will call <code>before-close</code>.',
      },
      type: 'function',
      param: '',
    },
  ],
  slots: [
    { name: '—', description: { cn: "Drawer's Content", en: "Drawer's Content" } },
    {
      name: 'header',
      description: {
        cn: 'Drawer header section; Replacing this removes the title, but does not remove the close button.',
        en: 'Drawer header section; Replacing this removes the title, but does not remove the close button.',
      },
    },
    {
      name: 'title<deprecatedtag></deprecatedtag>',
      description: { cn: 'Works the same as the header slot. Use that instead.', en: 'Works the same as the header slot. Use that instead.' },
    },
    { name: 'footer', description: { cn: 'Drawer footer Section', en: 'Drawer footer Section' } },
  ],
};
export default doc;
