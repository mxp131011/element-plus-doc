import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'model-value / v-model', description: { cn: 'binding value', en: 'binding value' }, type: 'number', default: '0', value: [] },
    { name: 'min', description: { cn: 'minimum value', en: 'minimum value' }, type: 'number', default: '0', value: [] },
    { name: 'max', description: { cn: 'maximum value', en: 'maximum value' }, type: 'number', default: '100', value: [] },
    { name: 'disabled', description: { cn: 'whether Slider is disabled', en: 'whether Slider is disabled' }, type: 'boolean', default: 'false', value: [] },
    { name: 'step', description: { cn: 'step size', en: 'step size' }, type: 'number', default: '1', value: [] },
    {
      name: 'show-input',
      description: {
        cn: 'whether to display an input box, works when <code>range</code> is false',
        en: 'whether to display an input box, works when <code>range</code> is false',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'show-input-controls',
      description: {
        cn: 'whether to display control buttons when <code>show-input</code> is true',
        en: 'whether to display control buttons when <code>show-input</code> is true',
      },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'size',
      description: { cn: 'size of the slider wrapper, will not work in vertical mode', en: 'size of the slider wrapper, will not work in vertical mode' },
      type: 'string',
      default: 'default',
      value: [],
    },
    {
      name: 'input-size',
      description: {
        cn: 'size of the input box, when set <code>size</code>, the default is the value of <code>size</code>',
        en: 'size of the input box, when set <code>size</code>, the default is the value of <code>size</code>',
      },
      type: 'string',
      default: 'default',
      value: [],
    },
    {
      name: 'show-stops',
      description: { cn: 'whether to display breakpoints', en: 'whether to display breakpoints' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'show-tooltip',
      description: { cn: 'whether to display tooltip value', en: 'whether to display tooltip value' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'format-tooltip',
      description: { cn: 'format to display tooltip value', en: 'format to display tooltip value' },
      type: 'function(value)',
      default: '—',
      value: [],
    },
    { name: 'range', description: { cn: 'whether to select a range', en: 'whether to select a range' }, type: 'boolean', default: 'false', value: [] },
    { name: 'vertical', description: { cn: 'vertical mode', en: 'vertical mode' }, type: 'boolean', default: 'false', value: [] },
    {
      name: 'height',
      description: { cn: 'Slider height, required in vertical mode', en: 'Slider height, required in vertical mode' },
      type: 'string',
      default: '—',
      value: [],
    },
    { name: 'label', description: { cn: 'label for screen reader', en: 'label for screen reader' }, type: 'string', default: '—', value: [] },
    {
      name: 'range-start-label',
      description: {
        cn: 'when <code>range</code> is true, screen reader label for the start of the range',
        en: 'when <code>range</code> is true, screen reader label for the start of the range',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'range-end-label',
      description: {
        cn: 'when <code>range</code> is true, screen reader label for the end of the range',
        en: 'when <code>range</code> is true, screen reader label for the end of the range',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'format-value-text',
      description: {
        cn: 'format to display the <code>aria-valuenow</code> attribute for screen readers',
        en: 'format to display the <code>aria-valuenow</code> attribute for screen readers',
      },
      type: 'function(value)',
      default: '—',
      value: [],
    },
    {
      name: 'debounce',
      description: {
        cn: 'debounce delay when typing, in milliseconds, works when <code>show-input</code> is true',
        en: 'debounce delay when typing, in milliseconds, works when <code>show-input</code> is true',
      },
      type: 'number',
      default: '300',
      value: [],
    },
    {
      name: 'tooltip-class',
      description: { cn: 'custom class name for the tooltip', en: 'custom class name for the tooltip' },
      type: 'string',
      default: '—',
      value: [],
    },
    { name: 'placement', description: { cn: 'position of Tooltip', en: 'position of Tooltip' }, type: 'string', default: 'top', value: [] },
    {
      name: 'marks',
      description: {
        cn: 'marks, type of key must be <code>number</code> and must in closed interval <code>[min, max]</code>, each mark can custom style',
        en: 'marks, type of key must be <code>number</code> and must in closed interval <code>[min, max]</code>, each mark can custom style',
      },
      type: 'object',
      default: '—',
      value: [],
    },
    {
      name: 'validate-event',
      description: { cn: 'whether to trigger form validation', en: 'whether to trigger form validation' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: {
        cn: 'triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released)',
        en: 'triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released)',
      },
      type: 'function',
      param: '',
    },
    {
      name: 'input',
      description: {
        cn: "triggers when the data changes (It'll be emitted in real time during sliding)",
        en: "triggers when the data changes (It'll be emitted in real time during sliding)",
      },
      type: 'function',
      param: '',
    },
  ],
};
export default doc;
