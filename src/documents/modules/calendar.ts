import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/calendar.html',
  attributes: [
    {
      name: 'model-value',
      description: { cn: '选中项绑定值', en: 'binding value' },
      type: 'Date',
      default: '—',
      value: [],
    },
    {
      name: 'range',
      description: {
        cn: '时间范围，包括开始时间与结束时间。 开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。',
        en: 'time range, including start time and end time. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months.',
      },
      type: '[Date, Date]',
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: 'date-cell',
      description: {
        cn: "`type` 表示该日期的所属月份，可选值有 prev-month、current-month 和 next-month； `isSelected` 标明该日期是否被选中； `day` 是格式化的日期，格式为 `yyyy-MM-dd` ； `date` 是单元格的日期. (参数为：{ data: { type: 'prev-month' | 'current-month' | 'next-month', isSelected: boolean, day: string, date: Date } })",
        en: "<code>type</code> indicates which month the date belongs, optional values are prev-month, current-month, next-month; <code>isSelected</code> indicates whether the date is selected; <code>day</code> is the formatted date in the format <code>YYYY-MM-DD</code>; <code>date</code> is date the cell represents. (parameter：{ data: { type: 'prev-month' | 'current-month' | 'next-month', isSelected: boolean, day: string, date: Date } })",
      },
    },
    {
      name: 'header',
      description: { cn: '卡片标题内容. (参数：{ date: string })', en: 'content of the Calendar header. (parameter：{ date: string })' },
    },
  ],
};
export default doc;
