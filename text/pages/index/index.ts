import type { TagDocOld } from '@/types/tag-doc-old';

const attributes: TagDocOld.Attribute[] = [
  {
    Name: 'model-value / v-model',
    Description: 'binding value',
    Type: '^[string]',
    Default: '—',
  },
  {
    Name: 'placeholder',
    Description: 'the placeholder of Autocomplete',
    Type: '^[string]',
    Default: '—',
  },
  {
    Name: 'clearable',
    Description: 'whether to show clear button',
    Type: '^[boolean]',
    Default: 'false',
  },
  {
    Name: 'disabled',
    Description: 'whether Autocomplete is disabled',
    Type: '^[boolean]',
    Default: 'false',
  },
  {
    Name: 'value-key',
    Description: 'key name of the input suggestion object for display',
    Type: '^[string]',
    Default: 'value',
  },
  {
    Name: 'debounce',
    Description: 'debounce delay when typing, in milliseconds',
    Type: '^[number]',
    Default: '300',
  },
  {
    Name: 'placement',
    Description: 'placement of the popup menu',
    Type: "^[enum]`'top' \\| 'top- start' \\| 'top-end' \\| 'bottom' \\| 'bottom-start' \\| 'bottom-end'`",
    Default: 'bottom-start',
  },
  {
    Name: 'fetch-suggestions',
    Description: 'a method to fetch input suggestions. When suggestions are ready, invoke `callback(data:[])` to return them to Autocomplete',
    Type: '^[Function]`(queryString: string, callback: callbackfn) => void`',
    Default: '—',
  },
  {
    Name: 'trigger-on-focus',
    Description: 'whether show suggestions when input focus',
    Type: '^[boolean]',
    Default: 'true',
  },
  {
    Name: 'select-when-unmatched',
    Description: 'whether to emit a `select` event on enter when there is no autocomplete match',
    Type: '^[boolean]',
    Default: 'false',
  },
  {
    Name: 'name',
    Description: 'same as `name` in native input',
    Type: '^[string]',
    Default: '—',
  },
  {
    Name: 'label',
    Description: 'label text',
    Type: '^[string]',
    Default: '—',
  },
  {
    Name: 'hide-loading',
    Description: 'whether to hide the loading icon in remote search',
    Type: '^[boolean]',
    Default: 'false',
  },
  {
    Name: 'popper-class',
    Description: "custom class name for autocomplete's dropdown",
    Type: '^[string]',
    Default: '—',
  },
  {
    Name: 'popper-append-to-body<DeprecatedTag />',
    Description: 'whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false',
    Type: '^[boolean]',
    Default: 'false',
  },
  {
    Name: 'teleported',
    Description: 'whether select dropdown is teleported to the body',
    Type: '^[boolean]',
    Default: 'true',
  },
  {
    Name: 'highlight-first-item',
    Description: 'whether to highlight first item in remote search suggestions by default',
    Type: '^[boolean]',
    Default: 'false',
  },
  {
    Name: 'fit-input-width',
    Description: 'whether the width of the dropdown is the same as the input',
    Type: '^[boolean]',
    Default: 'false',
  },
];

const slots: TagDocOld.Slot[] = [];

const exposes: TagDocOld.Expose[] = [];

const documentInstance: TagDocOld.TagDocInstance = { attributes, slots, exposes };

export default documentInstance;
