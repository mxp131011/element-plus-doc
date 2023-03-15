import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: '',
      description: { cn: 'message text', en: 'message text' },
      type: 'string',
      default: 'VNode',
      value: [],
    },
    {
      name: '',
      description: { cn: 'message type', en: 'message type' },
      type: "'success'",
      default: "'warning'",
      value: [],
    },
    {
      name: '',
      description: { cn: 'custom icon component, overrides <code>type</code>', en: 'custom icon component, overrides <code>type</code>' },
      type: 'string',
      default: 'Component',
      value: [],
    },
    {
      name: '',
      description: { cn: 'whether <code>message</code> is treated as HTML string', en: 'whether <code>message</code> is treated as HTML string' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: '',
      description: {
        cn: 'display duration, millisecond. If set to 0, it will not turn off automatically',
        en: 'display duration, millisecond. If set to 0, it will not turn off automatically',
      },
      type: 'number',
      default: '3000',
      value: [],
    },
    {
      name: '',
      description: { cn: 'whether to show a close button', en: 'whether to show a close button' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: '',
      description: { cn: 'whether to center the text', en: 'whether to center the text' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: '',
      description: {
        cn: 'callback function when closed with the message instance as the parameter',
        en: 'callback function when closed with the message instance as the parameter',
      },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: '',
      description: { cn: 'set the distance to the top of viewport', en: 'set the distance to the top of viewport' },
      type: 'number',
      default: '20',
      value: [],
    },
    {
      name: '',
      description: { cn: 'set the root element for the message', en: 'set the root element for the message' },
      type: 'string',
      default: 'HTMLElement',
      value: [],
    },
    {
      name: '',
      description: {
        cn: 'merge messages with the same content, type of VNode message is not supported',
        en: 'merge messages with the same content, type of VNode message is not supported',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  exposes: [
    {
      name: '',
      description: { cn: 'close the Message', en: 'close the Message' },
      type: 'function',
      param: '',
    },
  ],
};
export default doc;
