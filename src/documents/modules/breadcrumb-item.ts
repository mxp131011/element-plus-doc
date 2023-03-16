import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/breadcrumb.html#breadcrumbitem-api',
  attributes: [
    {
      name: 'to',
      description: {
        cn: '路由跳转目标，同 vue-router 的 `to` 属性',
        en: 'target route of the link, same as `to` of `vue-router`',
      },
      type: ['string', 'object'],
      default: '—',
      value: [],
    },
    {
      name: 'replace',
      description: {
        cn: '如果设置该属性为 `true`, 导航将不会留下历史记录',
        en: 'if `true`, the navigation will not leave a history record',
      },
      type: 'boolean',
      default: 'false',
      value: [],
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
