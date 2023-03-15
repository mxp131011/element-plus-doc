import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: '', description: { cn: 'title', en: 'title' }, type: 'string', default: '—', value: [] },
    { name: '', description: { cn: 'description text', en: 'description text' }, type: 'string/vue.vnode', default: '—', value: [] },
    {
      name: '',
      description: { cn: 'whether <code>message</code> is treated as HTML string', en: 'whether <code>message</code> is treated as HTML string' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    { name: '', description: { cn: 'notification type', en: 'notification type' }, type: 'string', default: '—', value: [] },
    {
      name: '',
      description: {
        cn: 'custom icon component. It will be overridden by <code>type</code>',
        en: 'custom icon component. It will be overridden by <code>type</code>',
      },
      type: '`string',
      default: '—',
      value: [],
    },
    { name: '', description: { cn: 'custom class name for Notification', en: 'custom class name for Notification' }, type: 'string', default: '—', value: [] },
    {
      name: '',
      description: {
        cn: 'duration before close. It will not automatically close if set 0',
        en: 'duration before close. It will not automatically close if set 0',
      },
      type: 'number',
      default: '4500',
      value: [],
    },
    { name: '', description: { cn: 'custom position', en: 'custom position' }, type: 'string', default: 'top-right', value: [] },
    { name: '', description: { cn: 'whether to show a close button', en: 'whether to show a close button' }, type: 'boolean', default: 'true', value: [] },
    { name: '', description: { cn: 'callback function when closed', en: 'callback function when closed' }, type: 'function', default: '—', value: [] },
    {
      name: '',
      description: { cn: 'callback function when notification clicked', en: 'callback function when notification clicked' },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: '',
      description: {
        cn: 'offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset',
        en: 'offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset',
      },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: '',
      description: { cn: 'set the root element for the notification', en: 'set the root element for the notification' },
      type: 'string / htmlelement',
      default: 'document.body',
      value: [],
    },
    { name: '', description: { cn: 'initial zIndex', en: 'initial zIndex' }, type: 'number', default: '0', value: [] },
  ],
  exposes: [{ name: '', description: { cn: 'close the Notification', en: 'close the Notification' }, type: 'function', param: '' }],
};
export default doc;
