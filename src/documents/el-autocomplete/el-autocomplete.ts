import type { Document } from '@/types/document';

const attributes: Document.Attribute[] = [
  {
    name: 'model-value',
    description: 'binding value',
    type: 'string',
    default: '—',
  },
  {
    name: 'placeholder',
    description: 'the placeholder of Autocomplete',
    type: 'string',
    default: '—',
  },
  {
    name: 'clearable',
    description: 'whether to show clear button',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'disabled',
    description: 'whether Autocomplete is disabled',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'value-key',
    description: 'key name of the input suggestion object for display',
    type: 'string',
    default: 'value',
  },
  {
    name: 'debounce',
    description: 'debounce delay when typing, in milliseconds',
    type: 'number',
    default: '300',
  },
  {
    name: 'placement',
    description: 'placement of the popup menu',
    type: `'top' | 'top- start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'`,
    default: 'bottom-start',
  },
  {
    name: 'fetch-suggestions',
    description: 'a method to fetch input suggestions. When suggestions are ready, invoke callback(data:[]) to return them to Autocomplete',
    type: 'function',
    default: 'false',
  },
  {
    name: 'trigger-on-focus',
    description: 'whether show suggestions when input focus',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'select-when-unmatched',
    description: 'whether to emit a `select` event on enter when there is no autocomplete match',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'name',
    description: 'same as `name` in native input',
    type: 'string',
    default: '—',
  },
  {
    name: 'label',
    description: 'whether to hide the loading icon in remote search',
    type: 'string',
    default: '—',
  },
  {
    name: 'hide-loading',
    description: 'whether to hide the loading icon in remote search',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'popper-class',
    description: 'whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'teleported',
    description: 'whether select dropdown is teleported to the body',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'highlight-first-item',
    description: 'whether to highlight first item in remote search suggestions by default',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'fit-input-width',
    description: 'whether the width of the dropdown is the same as the input',
    type: 'boolean',
    default: 'false',
  },
];
export const events: Document.Event[] = [
  { name: 'select', description: 'triggers when a suggestion is clicked', type: 'Function' },
  { name: 'change', description: 'triggers when the icon inside Input value change', type: 'Function' },
];

const slots: Document.Slot[] = [
  { name: 'default', description: 'custom content for input suggestions. The scope parameter is' },
  { name: 'prefix', description: 'content as Input prefix' },
  { name: 'suffix', description: 'content as Input suffix' },
  { name: 'prepend', description: 'content to prepend before Input' },
  { name: 'append', description: 'content to append after Input' },
];

const exposes: Document.Expose[] = [
  { name: 'activated', description: 'if autocomplete activated', type: 'object' },
  { name: 'blur', description: 'blur the input element', type: 'Function' },
  { name: 'close', description: 'collapse suggestion list', type: 'Function' },
  { name: 'focus', description: 'focus the input element', type: 'Function' },
  { name: 'handleSelect', description: 'triggers when a suggestion is clicked', type: 'Function' },
  { name: 'handleKeyEnter', description: 'handle keyboard enter event', type: 'Function' },
  { name: 'highlightedIndex', description: 'the index of the currently highlighted item', type: 'object' },
  { name: 'highlight', description: 'highlight an item in a suggestion', type: 'Function' },
  { name: 'inputRef', description: 'el-input component instance', type: 'object' },
  { name: 'loading', description: 'remote search loading indicator', type: 'object' },
  { name: 'popperRef', description: 'el-tooltip component instance', type: 'object' },
  { name: 'suggestions', description: 'fetch suggestions result', type: '' },
];

export const document: Document.DocumentInstance = {
  attributes,
  events,
  slots,
  exposes,
};

export default document;
