import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/timeline.html',
  slots: [
    {
      name: 'default',
      description: { cn: '自定义时间线内容', en: 'Custom content for timeline' },
      subtags: ['Timeline-Item'],
    },
  ],
};
export default doc;
