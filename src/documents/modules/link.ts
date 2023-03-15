import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/link.html',
  attributes: [
    {
      name: 'type',
      description: { cn: '类型', en: 'type' },
      type: 'enum',
      default: "'success'",
      value: ['primary', 'success', 'warning', 'danger', 'info'],
    },
    {
      name: 'underline',
      description: { cn: '是否下划线', en: 'whether the component has underline' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用状态', en: 'whether the component is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'href',
      description: { cn: '原生 `href` 属性', en: "same as native hyperlink's <code>href</code>" },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'icon',
      description: { cn: '图标组件', en: 'icon component' },
      type: ['Component', 'string'],
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '自定义默认内容', en: 'customize default content' },
    },
    {
      name: 'icon',
      description: { cn: '自定义图标组件', en: 'customize icon component' },
    },
  ],
};
export default doc;
