import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'label',
      description: { cn: 'title of the tab', en: 'title of the tab' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: 'whether Tab is disabled', en: 'whether Tab is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'name',
      description: {
        cn: 'identifier corresponding to the name of Tabs, representing the alias of the tab-pane',
        en: 'identifier corresponding to the name of Tabs, representing the alias of the tab-pane',
      },
      type: 'string / number',
      default: "ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is '0'",
      value: [],
    },
    {
      name: 'closable',
      description: { cn: 'whether Tab is closable', en: 'whether Tab is closable' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'lazy',
      description: { cn: 'whether Tab is lazily rendered', en: 'whether Tab is lazily rendered' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  slots: [
    {
      name: '-',
      description: { cn: "Tab-pane's content", en: "Tab-pane's content" },
    },
    {
      name: 'label',
      description: { cn: "Tab-pane's label", en: "Tab-pane's label" },
    },
  ],
};
export default doc;
