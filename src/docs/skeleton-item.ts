import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'variant',
      description: { cn: 'The current rendering skeleton type', en: 'The current rendering skeleton type' },
      type: "`'p'",
      default: "'text'",
      value: [],
    },
  ],
};
export default doc;
