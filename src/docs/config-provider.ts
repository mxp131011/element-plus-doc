import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'locale',
      description: { cn: 'Locale Object', en: 'Locale Object' },
      type: 'object',
      default: '<a href="https://github.com/element-plus/element-plus/blob/dev/packages/locale/lang/en.ts">en</a>',
      value: [
        'codenamestringelTranslatePaircodeahrefhttpsgithubcomelement-pluselement-plusbloba98ff9b40c0c3d2b9959f99919bd8363e3e3c25apackageslocaleindextsL5aahrefhttpsgithubcomelement-pluselement-plustreedevpackageslocalelanglanguagesa',
      ],
    },
    {
      name: 'size',
      description: { cn: 'global component size', en: 'global component size' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'zIndex',
      description: { cn: 'global Initial zIndex', en: 'global Initial zIndex' },
      type: 'number',
      default: '—',
      value: [],
    },
    {
      name: 'namespace',
      description: {
        cn: 'global component className prefix (cooperated with <a href="https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1">$namespace</a>)',
        en: 'global component className prefix (cooperated with <a href="https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1">$namespace</a>)',
      },
      type: 'string',
      default: 'el',
      value: [],
    },
    {
      name: 'button',
      description: {
        cn: 'button related configuration, <a href="#button-attributes">see the following table</a>',
        en: 'button related configuration, <a href="#button-attributes">see the following table</a>',
      },
      type: 'object',
      default: 'see the following table',
      value: ['codeautoInsertSpacebooleancode'],
    },
    {
      name: 'message',
      description: {
        cn: 'message related configuration, <a href="#message-attributes">see the following table</a>',
        en: 'message related configuration, <a href="#message-attributes">see the following table</a>',
      },
      type: 'object',
      default: 'see the following table',
      value: ['codemaxnumbercode'],
    },
    {
      name: 'experimental-features',
      description: {
        cn: 'features at experimental stage to be added, all features are default to be set to false',
        en: 'features at experimental stage to be added, all features are default to be set to false',
      },
      type: 'object',
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: 'customize default content', en: 'customize default content' },
    },
  ],
};
export default doc;
