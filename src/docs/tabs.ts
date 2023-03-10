import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'model-value / v-model',
      description: { cn: 'binding value, name of the selected tab', en: 'binding value, name of the selected tab' },
      type: 'string / number',
      default: 'name of first tab',
      value: [],
    },
    { name: 'type', description: { cn: 'type of Tab', en: 'type of Tab' }, type: 'string', default: '—', value: [] },
    { name: 'closable', description: { cn: 'whether Tab is closable', en: 'whether Tab is closable' }, type: 'boolean', default: 'false', value: [] },
    { name: 'addable', description: { cn: 'whether Tab is addable', en: 'whether Tab is addable' }, type: 'boolean', default: 'false', value: [] },
    {
      name: 'editable',
      description: { cn: 'whether Tab is addable and closable', en: 'whether Tab is addable and closable' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    { name: 'tab-position', description: { cn: 'position of tabs', en: 'position of tabs' }, type: 'string', default: 'top', value: [] },
    {
      name: 'stretch',
      description: { cn: 'whether width of tab automatically fits its container', en: 'whether width of tab automatically fits its container' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'before-leave',
      description: {
        cn: 'hook function before switching tab. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, switching will be prevented',
        en: 'hook function before switching tab. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, switching will be prevented',
      },
      type: 'function(activename, oldactivename)',
      default: '—',
      value: [],
    },
  ],
  events: [
    { name: 'tab-click', description: { cn: 'triggers when a tab is clicked', en: 'triggers when a tab is clicked' }, type: '', tsType: '' },
    {
      name: 'tab-change',
      description: { cn: 'triggers when <code>activeName</code> is changed', en: 'triggers when <code>activeName</code> is changed' },
      type: '',
      tsType: '',
    },
    {
      name: 'tab-remove',
      description: { cn: 'triggers when tab-remove button is clicked', en: 'triggers when tab-remove button is clicked' },
      type: '',
      tsType: '',
    },
    { name: 'tab-add', description: { cn: 'triggers when tab-add button is clicked', en: 'triggers when tab-add button is clicked' }, type: '', tsType: '' },
    {
      name: 'edit',
      description: { cn: 'triggers when tab-add button or tab-remove is clicked', en: 'triggers when tab-add button or tab-remove is clicked' },
      type: '',
      tsType: '',
    },
  ],
  slots: [{ name: '-', description: { cn: 'customize default content', en: 'customize default content' } }],
};
export default doc;
