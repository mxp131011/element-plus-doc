import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'title', description: { cn: 'Title', en: 'Title' }, type: 'string', default: '—', value: [''] },
    { name: 'confirm-button-text', description: { cn: 'Confirm button text', en: 'Confirm button text' }, type: 'string', default: '—', value: [''] },
    { name: 'cancel-button-text', description: { cn: 'Cancel button text', en: 'Cancel button text' }, type: 'string', default: '—', value: [''] },
    {
      name: 'confirm-button-type',
      description: { cn: 'Confirm button type', en: 'Confirm button type' },
      type: 'enum',
      default: "'success'",
      value: ['primary'],
    },
    { name: 'cancel-button-type', description: { cn: 'Cancel button type', en: 'Cancel button type' }, type: 'enum', default: "'success'", value: ['primary'] },
    { name: 'icon', description: { cn: 'Icon Component', en: 'Icon Component' }, type: 'string', default: 'QuestionFilled', value: ['Component'] },
    { name: 'icon-color', description: { cn: 'Icon color', en: 'Icon color' }, type: 'string', default: '#f90', value: [''] },
    { name: 'hide-icon', description: { cn: 'is hide Icon', en: 'is hide Icon' }, type: 'boolean', default: 'false', value: [''] },
    {
      name: 'hide-after',
      description: { cn: 'delay of disappear, in millisecond', en: 'delay of disappear, in millisecond' },
      type: 'number',
      default: '200',
      value: [''],
    },
    {
      name: 'teleported',
      description: { cn: 'whether popconfirm is teleported to the body', en: 'whether popconfirm is teleported to the body' },
      type: 'boolean',
      default: 'true',
      value: [''],
    },
    {
      name: 'persistent',
      description: {
        cn: 'when popconfirm inactive and <code>persistent</code> is <code>false</code> , popconfirm will be destroyed',
        en: 'when popconfirm inactive and <code>persistent</code> is <code>false</code> , popconfirm will be destroyed',
      },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    {
      name: 'width',
      description: { cn: 'popconfirm width, min width 150px', en: 'popconfirm width, min width 150px' },
      type: 'string',
      default: '150',
      value: ['number'],
    },
  ],
  events: [
    { name: 'confirm', description: { cn: 'triggers when click confirm button', en: 'triggers when click confirm button' }, type: 'function', tsType: '' },
    { name: 'cancel', description: { cn: 'triggers when click cancel button', en: 'triggers when click cancel button' }, type: 'function', tsType: '' },
  ],
  slots: [{ name: 'reference', description: { cn: 'HTML element that triggers Popconfirm', en: 'HTML element that triggers Popconfirm' } }],
};
export default doc;
