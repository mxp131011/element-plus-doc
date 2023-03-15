import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'model-value',
      description: { cn: 'binding value', en: 'binding value' },
      type: 'date',
      default: '—',
      value: [],
    },
    {
      name: 'range',
      description: {
        cn: 'time range, including start time and end time. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months.',
        en: 'time range, including start time and end time. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months.',
      },
      type: 'array',
      default: '—',
      value: ['codeDateDate'],
    },
  ],
  slots: [
    {
      name: 'date-cell',
      description: {
        cn: '<code>type</code> indicates which month the date belongs, optional values are prev-month, current-month, next-month; <code>isSelected</code> indicates whether the date is selected; <code>day</code> is the formatted date in the format <code>YYYY-MM-DD</code>; <code>date</code> is date the cell represents',
        en: '<code>type</code> indicates which month the date belongs, optional values are prev-month, current-month, next-month; <code>isSelected</code> indicates whether the date is selected; <code>day</code> is the formatted date in the format <code>YYYY-MM-DD</code>; <code>date</code> is date the cell represents',
      },
    },
    {
      name: 'header',
      description: { cn: 'content of the Calendar header', en: 'content of the Calendar header' },
    },
  ],
};
export default doc;
