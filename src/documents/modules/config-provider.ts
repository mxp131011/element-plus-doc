import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/config-provider.html',
  attributes: [
    {
      name: 'locale',
      description: {
        cn: '翻译文本对象. ([languages](https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang))',
        en: 'Locale Object. ([languages](https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang))',
      },
      type: 'object',
      default: 'en',
      value: [],
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
        cn: '全局组件类名称前缀 (需要配合 [$namespace](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1) 使用)',
        en: 'global component className prefix (cooperated with [$namespace](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1))',
      },
      type: 'string',
      default: 'el',
      value: [],
    },
    {
      name: 'button',
      description: {
        cn: '按钮相关的配置详，详见下面 `button` 表',
        en: 'button related configuration, see the following <code>button</code> table.',
      },
      type: 'object',
      default: '—',
      value: [],
    },
    {
      name: 'message',
      description: {
        cn: '消息相关配置，详见下面 `message` 表',
        en: 'message related configuration, see the following <code>message</code> table.',
      },
      type: 'object',
      default: '—',
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
      name: 'button',
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
      name: 'message',
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
