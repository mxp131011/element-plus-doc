import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'model-value / v-model', description: { cn: 'binding value', en: 'binding value' }, type: 'string', default: '—', value: [] },
    {
      name: 'disabled',
      description: { cn: 'whether TimeSelect is disabled', en: 'whether TimeSelect is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'editable',
      description: { cn: 'whether the input is editable', en: 'whether the input is editable' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    { name: 'clearable', description: { cn: 'whether to show clear button', en: 'whether to show clear button' }, type: 'boolean', default: 'true', value: [] },
    { name: 'size', description: { cn: 'size of Input', en: 'size of Input' }, type: 'string', default: 'default', value: [] },
    { name: 'placeholder', description: { cn: 'placeholder in non-range mode', en: 'placeholder in non-range mode' }, type: 'string', default: '—', value: [] },
    {
      name: 'name',
      description: { cn: 'same as <code>name</code> in native input', en: 'same as <code>name</code> in native input' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'effect',
      description: {
        cn: 'Tooltip theme, built-in theme: <code>dark</code> / <code>light</code>',
        en: 'Tooltip theme, built-in theme: <code>dark</code> / <code>light</code>',
      },
      type: 'string',
      default: 'light',
      value: [],
    },
    { name: 'prefix-icon', description: { cn: 'Custom prefix icon component', en: 'Custom prefix icon component' }, type: '`string', default: '—', value: [] },
    { name: 'clear-icon', description: { cn: 'Custom clear icon component', en: 'Custom clear icon component' }, type: '`string', default: '—', value: [] },
    { name: 'start', description: { cn: 'start time', en: 'start time' }, type: 'string', default: '09:00', value: [] },
    { name: 'end', description: { cn: 'end time', en: 'end time' }, type: 'string', default: '18:00', value: [] },
    { name: 'step', description: { cn: 'time step', en: 'time step' }, type: 'string', default: '00:30', value: [] },
    {
      name: 'min-time',
      description: { cn: 'minimum time, any time before this time will be disabled', en: 'minimum time, any time before this time will be disabled' },
      type: 'string',
      default: '00:00',
      value: [],
    },
    {
      name: 'max-time',
      description: { cn: 'maximum time, any time after this time will be disabled', en: 'maximum time, any time after this time will be disabled' },
      type: 'string',
      default: '—',
      value: [],
    },
    { name: 'format', description: { cn: 'set format of time', en: 'set format of time' }, type: 'string', default: 'HH:mm', value: [] },
  ],
  events: [
    { name: 'change', description: { cn: 'triggers when user confirms the value', en: 'triggers when user confirms the value' }, type: '', tsType: '' },
    { name: 'blur', description: { cn: 'triggers when Input blurs', en: 'triggers when Input blurs' }, type: '', tsType: '' },
    { name: 'focus', description: { cn: 'triggers when Input focuses', en: 'triggers when Input focuses' }, type: '', tsType: '' },
  ],
  exposes: [
    { name: 'focus', description: { cn: 'focus the Input component', en: 'focus the Input component' }, type: '', tsType: '' },
    { name: 'blur', description: { cn: 'blur the Input component', en: 'blur the Input component' }, type: '', tsType: '' },
  ],
};
export default doc;
