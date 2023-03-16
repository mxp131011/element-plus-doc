import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/badge.html',
  attributes: [
    {
      name: 'value',
      description: { cn: '显示值', en: 'display value.' },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'max',
      description: {
        cn: '最大值，超过最大值会显示 `{max}+`。 只有当 value 是数字类型时起作用。',
        en: 'maximum value, shows `{max}+` when exceeded. Only works if value is a number.',
      },
      type: 'number',
      default: '99',
      value: [],
    },
    {
      name: 'is-dot',
      description: { cn: '是否显示小圆点。', en: 'if a little dot is displayed.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'hidden',
      description: { cn: '是否隐藏 Badge。', en: 'hidden badge.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'type',
      description: { cn: '徽章类型。', en: 'badge type.' },
      type: 'enum',
      default: "'success'",
      value: ['primary', 'success', 'warning', 'danger', 'info'],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
    },
  ],
};
export default doc;
