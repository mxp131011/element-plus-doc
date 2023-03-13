import type { TagDoc } from '@/types/tag-doc';

const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'model-value / v-model',
      description: {
        cn: 'binding value',
        en: 'binding value',
      },
      type: 'string',
      default: '—',
      value: [''],
    },
    {
      name: 'placeholder',
      description: {
        cn: 'the placeholder of Autocomplete',
        en: 'the placeholder of Autocomplete',
      },
      type: 'string',
      default: '—',
      value: [''],
    },
    {
      name: 'clearable',
      description: {
        cn: 'whether to show clear button',
        en: 'whether to show clear button',
      },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    {
      name: 'disabled',
      description: {
        cn: 'whether Autocomplete is disabled',
        en: 'whether Autocomplete is disabled',
      },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    {
      name: 'value-key',
      description: {
        cn: 'key name of the input suggestion object for display',
        en: 'key name of the input suggestion object for display',
      },
      type: 'string',
      default: 'value',
      value: [''],
    },
    {
      name: 'debounce',
      description: {
        cn: 'debounce delay when typing, in milliseconds',
        en: 'debounce delay when typing, in milliseconds',
      },
      type: 'number',
      default: '300',
      value: [''],
    },
    {
      name: 'placement',
      description: {
        cn: 'placement of the popup menu',
        en: 'placement of the popup menu',
      },
      type: 'enum',
      default: 'bottom-start',
      value: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'],
    },
    {
      name: 'fetch-suggestions',
      description: {
        cn: 'a method to fetch input suggestions. When suggestions are ready, invoke `callback(data:[])` to return them to Autocomplete',
        en: 'a method to fetch input suggestions. When suggestions are ready, invoke `callback(data:[])` to return them to Autocomplete',
      },
      type: 'function',
      default: '—',
      value: ['queryStringstringcallbackcallbackfnvoid'],
    },
    {
      name: 'trigger-on-focus',
      description: {
        cn: 'whether show suggestions when input focus',
        en: 'whether show suggestions when input focus',
      },
      type: 'boolean',
      default: 'true',
      value: [''],
    },
    {
      name: 'select-when-unmatched',
      description: {
        cn: 'whether to emit a `select` event on enter when there is no autocomplete match',
        en: 'whether to emit a `select` event on enter when there is no autocomplete match',
      },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    {
      name: 'name',
      description: {
        cn: 'same as `name` in native input',
        en: 'same as `name` in native input',
      },
      type: 'string',
      default: '—',
      value: [''],
    },
    {
      name: 'label',
      description: {
        cn: 'label text',
        en: 'label text',
      },
      type: 'string',
      default: '—',
      value: [''],
    },
    {
      name: 'hide-loading',
      description: {
        cn: 'whether to hide the loading icon in remote search',
        en: 'whether to hide the loading icon in remote search',
      },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    {
      name: 'popper-class',
      description: {
        cn: "custom class name for autocomplete's dropdown",
        en: "custom class name for autocomplete's dropdown",
      },
      type: 'string',
      default: '—',
      value: [''],
    },
    {
      name: 'popper-append-to-body<DeprecatedTag />',
      description: {
        cn: 'whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false',
        en: 'whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false',
      },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    {
      name: 'teleported',
      description: {
        cn: 'whether select dropdown is teleported to the body',
        en: 'whether select dropdown is teleported to the body',
      },
      type: 'boolean',
      default: 'true',
      value: [''],
    },
    {
      name: 'highlight-first-item',
      description: {
        cn: 'whether to highlight first item in remote search suggestions by default',
        en: 'whether to highlight first item in remote search suggestions by default',
      },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
    {
      name: 'fit-input-width',
      description: {
        cn: 'whether the width of the dropdown is the same as the input',
        en: 'whether the width of the dropdown is the same as the input',
      },
      type: 'boolean',
      default: 'false',
      value: [''],
    },
  ],
  slots: [],
  exposes: [],
};

export default doc;
