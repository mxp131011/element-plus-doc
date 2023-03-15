import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/steps.html',
  attributes: [
    {
      name: 'space',
      description: {
        cn: '每个 step 的间距，不填写将自适应间距。 支持百分比。',
        en: 'the spacing of each step, will be responsive if omitted. Supports percentage.',
      },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'direction',
      description: { cn: '显示方向', en: 'display direction' },
      type: 'enum',
      default: "'horizontal'",
      value: ['vertical', 'horizontal'],
    },
    {
      name: 'active',
      description: { cn: '设置当前激活步骤', en: 'current activation step' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'process-status',
      description: { cn: '设置当前步骤的状态', en: 'status of current step' },
      type: 'enum',
      default: 'process',
      value: ['wait', 'process', 'finish', 'error', 'success'],
    },
    {
      name: 'finish-status',
      description: { cn: '设置结束步骤的状态', en: 'status of end step' },
      type: 'enum',
      default: 'finish',
      value: ['wait', 'process', 'finish', 'error', 'success'],
    },
    {
      name: 'align-center',
      description: { cn: '进行居中对齐', en: 'center title and description' },
      type: 'enum',
      default: 'false',
      value: [],
    },
    {
      name: 'simple',
      description: { cn: '是否应用简洁风格', en: 'whether to apply simple theme' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: '默认插槽', en: 'customize default content' },
      subtags: ['Step'],
    },
  ],
};
export default doc;
