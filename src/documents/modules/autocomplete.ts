import type { TagDoc } from '@/types/tag-doc';

const attributes: TagDoc.Attribute[] = [
  {
    name: 'model-value',
    description: {
      cn: 'binding value',
      en: 'binding value',
    },
    type: 'string',
    default: '—',
    value: [],
  },
  {
    name: 'placeholder',
    description: {
      cn: 'the placeholder of Autocomplete',
      en: 'the placeholder of Autocomplete',
    },
    type: 'string',
    default: '—',
    value: [],
  },
  {
    name: 'clearable',
    description: {
      cn: 'whether to show clear button',
      en: 'whether to show clear button',
    },
    type: 'boolean',
    default: 'false',
    value: [],
  },
  {
    name: 'disabled',
    description: {
      cn: 'whether Autocomplete is disabled',
      en: 'whether Autocomplete is disabled',
    },
    type: 'boolean',
    default: 'false',
    value: [],
  },
  {
    name: 'value-key',
    description: {
      cn: 'key name of the input suggestion object for display',
      en: 'key name of the input suggestion object for display',
    },
    type: 'string',
    default: 'value',
    value: [],
  },
  {
    name: 'debounce',
    description: {
      cn: 'debounce delay when typing, in milliseconds',
      en: 'debounce delay when typing, in milliseconds',
    },
    type: 'number',
    default: '300',
    value: [],
  },
  {
    name: 'placement',
    description: {
      cn: 'placement of the popup menu',
      en: 'placement of the popup menu',
    },
    type: 'enum',
    default: 'bottom-start',
    value: ['top', 'top- start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'],
  },
  {
    name: 'fetch-suggestions',
    description: {
      cn: 'a method to fetch input suggestions. When suggestions are ready, invoke callback(data:[]) to return them to Autocomplete',
      en: 'a method to fetch input suggestions. When suggestions are ready, invoke callback(data:[]) to return them to Autocomplete',
    },
    type: 'function',
    default: 'false',
    value: [],
  },
  {
    name: 'trigger-on-focus',
    description: {
      cn: 'whether show suggestions when input focus',
      en: 'whether show suggestions when input focus',
    },
    type: 'boolean',
    default: 'true',
    value: [],
  },
  {
    name: 'select-when-unmatched',
    description: {
      cn: 'whether to emit a `select` event on enter when there is no autocomplete match',
      en: 'whether to emit a `select` event on enter when there is no autocomplete match',
    },
    type: 'boolean',
    default: 'false',
    value: [],
  },
  {
    name: 'name',
    description: {
      cn: 'same as `name` in native input',
      en: 'same as `name` in native input',
    },
    type: 'string',
    default: '—',
    value: [],
  },
  {
    name: 'label',
    description: {
      cn: 'whether to hide the loading icon in remote search',
      en: 'whether to hide the loading icon in remote search',
    },
    type: 'string',
    default: '—',
    value: [],
  },
  {
    name: 'hide-loading',
    description: {
      cn: 'whether to hide the loading icon in remote search',
      en: 'whether to hide the loading icon in remote search',
    },
    type: 'boolean',
    default: 'false',
    value: [],
  },
  {
    name: 'popper-class',
    description: {
      cn: 'whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false',
      en: 'whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false',
    },
    type: 'boolean',
    default: 'false',
    value: [],
  },
  {
    name: 'teleported',
    description: {
      cn: 'whether select dropdown is teleported to the body',
      en: 'whether select dropdown is teleported to the body',
    },
    type: 'boolean',
    default: 'true',
    value: [],
  },
  {
    name: 'highlight-first-item',
    description: {
      cn: 'whether to highlight first item in remote search suggestions by default',
      en: 'whether to highlight first item in remote search suggestions by default',
    },
    type: 'boolean',
    default: 'false',
    value: [],
  },
  {
    name: 'fit-input-width',
    description: {
      cn: 'whether the width of the dropdown is the same as the input',
      en: 'whether the width of the dropdown is the same as the input',
    },
    type: 'boolean',
    default: 'false',
    value: [],
  },
];
const events: TagDoc.Event[] = [
  {
    name: 'select',
    description: {
      cn: 'triggers when a suggestion is clicked',
      en: 'triggers when a suggestion is clicked',
    },
    type: 'function',
    tsType: '(item: typeof modelValue | any) => void',
  },
  {
    name: 'change',
    description: {
      cn: 'triggers when the icon inside Input value change',
      en: 'triggers when the icon inside Input value change',
    },
    type: 'function',
    tsType: '(value: string | number) => void',
  },
];

const slots: TagDoc.Slot[] = [
  {
    name: 'default',
    description: {
      cn: 'custom content for input suggestions. The scope parameter is',
      en: 'custom content for input suggestions. The scope parameter is',
    },
  },
  {
    name: 'prefix',
    description: {
      cn: 'content as Input prefix',
      en: 'content as Input prefix',
    },
  },
  {
    name: 'suffix',
    description: {
      cn: 'content as Input suffix',
      en: 'content as Input suffix',
    },
  },
  {
    name: 'prepend',
    description: {
      cn: 'content to prepend before Input',
      en: 'content to prepend before Input',
    },
  },
  {
    name: 'append',
    description: {
      cn: 'content to append after Input',
      en: 'content to append after Input',
    },
  },
];

const exposes: TagDoc.Expose[] = [
  {
    name: 'activated',
    description: {
      cn: 'if autocomplete activated',
      en: 'if autocomplete activated',
    },
    type: 'object',
    tsType: 'Ref<boolean>',
  },
  {
    name: 'blur',
    description: {
      cn: 'blur the input element',
      en: 'blur the input element',
    },
    type: 'function',
    tsType: '() => void',
  },
  {
    name: 'close',
    description: {
      cn: 'collapse suggestion list',
      en: 'collapse suggestion list',
    },
    type: 'function',
    tsType: '() => void',
  },
  {
    name: 'focus',
    description: {
      cn: 'focus the input element',
      en: 'focus the input element',
    },
    type: 'function',
    tsType: '() => void',
  },
  {
    name: 'handleSelect',
    description: {
      cn: 'triggers when a suggestion is clicked',
      en: 'triggers when a suggestion is clicked',
    },
    type: 'function',
    tsType: '(item: any) => promise<void>',
  },
  {
    name: 'handleKeyEnter',
    description: {
      cn: 'handle keyboard enter event',
      en: 'handle keyboard enter event',
    },
    type: 'function',
    tsType: '() => promise<void>',
  },
  {
    name: 'highlightedIndex',
    description: {
      cn: 'the index of the currently highlighted item',
      en: 'the index of the currently highlighted item',
    },
    type: 'object',
    tsType: 'Ref<number>',
  },
  {
    name: 'highlight',
    description: {
      cn: 'highlight an item in a suggestion',
      en: 'highlight an item in a suggestion',
    },
    type: 'function',
    tsType: '(itemIndex: number) => void',
  },
  {
    name: 'inputRef',
    description: {
      cn: 'el-input component instance',
      en: 'el-input component instance',
    },
    type: 'object',
    tsType: 'Ref<ElInputInstance>',
  },
  {
    name: 'loading',
    description: {
      cn: 'remote search loading indicator',
      en: 'remote search loading indicator',
    },
    type: 'object',
    tsType: 'Ref<boolean>',
  },
  {
    name: 'popperRef',
    description: {
      cn: 'el-tooltip component instance',
      en: 'el-tooltip component instance',
    },
    type: 'object',
    tsType: 'Ref<ElTooltipInstance>',
  },
  {
    name: 'suggestions',
    description: {
      cn: 'fetch suggestions result',
      en: 'fetch suggestions result',
    },
    type: 'object',
    tsType: 'Ref<record<string, any>>',
  },
];

const document: TagDoc.TagDocInstance = {
  attributes,
  events,
  slots,
  exposes,
};

export default document;
