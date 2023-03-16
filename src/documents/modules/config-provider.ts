import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/config-provider.html',
  attributes: [
    {
      name: 'locale',
      description: { cn: '翻译文本对象', en: 'Locale Object' },
      type: 'object',
      default: '<a href="https://github.com/element-plus/element-plus/blob/dev/packages/locale/lang/en.ts">en</a>',
      value: [
        'codenamestringelTranslatePaircodeahrefhttpsgithubcomelement-pluselement-plusbloba98ff9b40c0c3d2b9959f99919bd8363e3e3c25apackageslocaleindextsL5aahrefhttpsgithubcomelement-pluselement-plustreedevpackageslocalelanglanguagesa',
      ],
    },
    {
      name: 'size',
      description: { cn: '全局组件大小', en: 'global component size' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'zIndex',
      description: { cn: '全局初始化 zIndex 的值', en: 'global Initial zIndex' },
      type: 'number',
      default: '—',
      value: [],
    },
    {
      name: 'namespace',
      description: {
        cn: '全局组件类名称前缀 (需要配合 <a href="https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1">$namespace</a> 使用)',
        en: 'global component className prefix (cooperated with <a href="https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1">$namespace</a>)',
      },
      type: 'string',
      default: 'el',
      value: [],
    },
    {
      name: 'button',
      description: {
        cn: '按钮相关的配置详细配置见下表',
        en: 'button related configuration, <a href="#button-attributes">see the following table</a>',
      },
      type: 'object',
      default: 'see the following table',
      value: [],
    },
    {
      name: 'message',
      description: {
        cn: '消息相关配置， 详见下表',
        en: 'message related configuration, <a href="#message-attributes">see the following table</a>',
      },
      type: 'object',
      default: 'see the following table',
      value: [],
    },
    {
      name: 'experimental-features',
      description: {
        cn: '将要添加的实验阶段的功能，所有功能都是默认设置为 false',
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
      description: { cn: '自定义默认内容', en: 'customize default content' },
    },
  ],
  childAttributes: [
    {
      name: 'CascaderProps',
      list: [
        {
          name: 'autoInsertSpace',
          description: { cn: '自动在两个中文字符之间插入空格', en: 'automatically insert a space between two chinese characters' },
          type: 'boolean',
          default: 'false',
          value: [],
        },
      ],
    },
    {
      name: 'CascaderProps',
      list: [
        {
          name: 'max',
          description: { cn: '可同时显示的消息最大数量', en: 'the maximum number of messages that can be displayed at the same time' },
          type: 'number',
          default: '—',
          value: [],
        },
      ],
    },
  ],
};
export default doc;
