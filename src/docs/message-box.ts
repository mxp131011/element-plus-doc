import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: '', description: { cn: 'auto focus when open MessageBox', en: 'auto focus when open MessageBox' }, type: 'boolean', default: 'true', value: [] },
    { name: '', description: { cn: 'title of the MessageBox', en: 'title of the MessageBox' }, type: 'string', default: '—', value: [] },
    { name: '', description: { cn: 'content of the MessageBox', en: 'content of the MessageBox' }, type: '`string', default: '(() => VNode)`', value: [] },
    {
      name: '',
      description: { cn: 'whether <code>message</code> is treated as HTML string', en: 'whether <code>message</code> is treated as HTML string' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: '',
      description: { cn: 'message type, used for icon display', en: 'message type, used for icon display' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: '',
      description: { cn: 'custom icon component, overrides <code>type</code>', en: 'custom icon component, overrides <code>type</code>' },
      type: '`string',
      default: '—',
      value: [],
    },
    { name: '', description: { cn: 'custom class name for MessageBox', en: 'custom class name for MessageBox' }, type: 'string', default: '—', value: [] },
    {
      name: '',
      description: { cn: 'custom inline style for MessageBox', en: 'custom inline style for MessageBox' },
      type: 'cssproperties',
      default: '—',
      value: [],
    },
    {
      name: '',
      description: { cn: "MessageBox closing callback if you don't prefer Promise", en: "MessageBox closing callback if you don't prefer Promise" },
      type: "function(action, instance), where <code>action</code> can be 'confirm', 'cancel' or 'close', and <code>instance</code> is the messagebox instance. you can access to that instance's attributes and methods",
      default: '—',
      value: [],
    },
    {
      name: '',
      description: { cn: 'whether to show close icon of MessageBox', en: 'whether to show close icon of MessageBox' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: '',
      description: {
        cn: 'callback before MessageBox closes, and it will prevent MessageBox from closing',
        en: 'callback before MessageBox closes, and it will prevent MessageBox from closing',
      },
      type: "function(action, instance, done), where <code>action</code> can be 'confirm', 'cancel' or 'close'; <code>instance</code> is the messagebox instance, and you can access to that instance's attributes and methods; <code>done</code> is for closing the instance",
      default: '—',
      value: [],
    },
    {
      name: '',
      description: { cn: 'whether to distinguish canceling and closing the MessageBox', en: 'whether to distinguish canceling and closing the MessageBox' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: '',
      description: { cn: 'whether to lock body scroll when MessageBox prompts', en: 'whether to lock body scroll when MessageBox prompts' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: '',
      description: { cn: 'whether to show a cancel button', en: 'whether to show a cancel button' },
      type: 'boolean',
      default: 'false (true when called with confirm and prompt)',
      value: [],
    },
    { name: '', description: { cn: 'whether to show a confirm button', en: 'whether to show a confirm button' }, type: 'boolean', default: 'true', value: [] },
    { name: '', description: { cn: 'text content of cancel button', en: 'text content of cancel button' }, type: 'string', default: 'Cancel', value: [] },
    { name: '', description: { cn: 'text content of confirm button', en: 'text content of confirm button' }, type: 'string', default: 'OK', value: [] },
    { name: '', description: { cn: 'custom class name of cancel button', en: 'custom class name of cancel button' }, type: 'string', default: '—', value: [] },
    {
      name: '',
      description: { cn: 'custom class name of confirm button', en: 'custom class name of confirm button' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: '',
      description: { cn: 'whether MessageBox can be closed by clicking the mask', en: 'whether MessageBox can be closed by clicking the mask' },
      type: 'boolean',
      default: 'true (false when called with alert)',
      value: [],
    },
    {
      name: '',
      description: { cn: 'whether MessageBox can be closed by pressing the ESC', en: 'whether MessageBox can be closed by pressing the ESC' },
      type: 'boolean',
      default: 'true (false when called with alert)',
      value: [],
    },
    {
      name: '',
      description: { cn: 'whether to close MessageBox when hash changes', en: 'whether to close MessageBox when hash changes' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: '',
      description: { cn: 'whether to show an input', en: 'whether to show an input' },
      type: 'boolean',
      default: 'false (true when called with prompt)',
      value: [],
    },
    { name: '', description: { cn: 'placeholder of input', en: 'placeholder of input' }, type: 'string', default: '—', value: [] },
    { name: '', description: { cn: 'type of input', en: 'type of input' }, type: 'string', default: 'text', value: [] },
    { name: '', description: { cn: 'initial value of input', en: 'initial value of input' }, type: 'string', default: '—', value: [] },
    { name: '', description: { cn: 'regexp for the input', en: 'regexp for the input' }, type: 'regexp', default: '—', value: [] },
    {
      name: '',
      description: {
        cn: 'validation function for the input. Should returns a boolean or string. If a string is returned, it will be assigned to inputErrorMessage',
        en: 'validation function for the input. Should returns a boolean or string. If a string is returned, it will be assigned to inputErrorMessage',
      },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: '',
      description: { cn: 'error message when validation fails', en: 'error message when validation fails' },
      type: 'string',
      default: 'Illegal input',
      value: [],
    },
    {
      name: '',
      description: { cn: 'whether to align the content in center', en: 'whether to align the content in center' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    { name: '', description: { cn: 'whether MessageBox is draggable', en: 'whether MessageBox is draggable' }, type: 'boolean', default: 'false', value: [] },
    { name: '', description: { cn: 'whether to use round button', en: 'whether to use round button' }, type: 'boolean', default: 'false', value: [] },
    {
      name: '',
      description: { cn: 'custom size of confirm and cancel buttons', en: 'custom size of confirm and cancel buttons' },
      type: 'string',
      default: 'default',
      value: [],
    },
    {
      name: '',
      description: { cn: 'set the root element for the message box', en: 'set the root element for the message box' },
      type: 'string',
      default: '—',
      value: [],
    },
  ],
};
export default doc;
