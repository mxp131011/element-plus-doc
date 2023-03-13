import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    {
      name: 'type',
      description: {
        cn: 'type of the column. If set to <code>selection</code>, the column will display checkbox. If set to <code>index</code>, the column will display index of the row (staring from 1). If set to <code>expand</code>, the column will display expand icon.',
        en: 'type of the column. If set to <code>selection</code>, the column will display checkbox. If set to <code>index</code>, the column will display index of the row (staring from 1). If set to <code>expand</code>, the column will display expand icon.',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'index',
      description: {
        cn: 'customize indices for each row, works on columns with <code>type=index</code>',
        en: 'customize indices for each row, works on columns with <code>type=index</code>',
      },
      type: 'number / function(index)',
      default: '—',
      value: [],
    },
    { name: 'label', description: { cn: 'column label', en: 'column label' }, type: 'string', default: '—', value: [] },
    {
      name: 'column-key',
      description: {
        cn: "column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered",
        en: "column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered",
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'prop',
      description: { cn: 'field name. You can also use its alias: <code>property</code>', en: 'field name. You can also use its alias: <code>property</code>' },
      type: 'string',
      default: '—',
      value: [],
    },
    { name: 'width', description: { cn: 'column width', en: 'column width' }, type: 'string / number', default: '—', value: [] },
    {
      name: 'min-width',
      description: {
        cn: 'column minimum width. Columns with <code>width</code> has a fixed width, while columns with <code>min-width</code> has a width that is distributed in proportion',
        en: 'column minimum width. Columns with <code>width</code> has a fixed width, while columns with <code>min-width</code> has a width that is distributed in proportion',
      },
      type: 'string / number',
      default: '—',
      value: [],
    },
    {
      name: 'fixed',
      description: {
        cn: 'whether column is fixed at left / right. Will be fixed at left if <code>true</code>',
        en: 'whether column is fixed at left / right. Will be fixed at left if <code>true</code>',
      },
      type: 'string / boolean',
      default: '—',
      value: [],
    },
    {
      name: 'render-header',
      description: { cn: 'render function for table header of this column', en: 'render function for table header of this column' },
      type: 'function({ column, $index })',
      default: '—',
      value: [],
    },
    {
      name: 'sortable',
      description: {
        cn: "whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the <code>sort-change</code> event of Table",
        en: "whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the <code>sort-change</code> event of Table",
      },
      type: 'boolean / string',
      default: 'false',
      value: [],
    },
    {
      name: 'sort-method',
      description: {
        cn: 'sorting method, works when <code>sortable</code> is <code>true</code>. Should return a number, just like Array.sort',
        en: 'sorting method, works when <code>sortable</code> is <code>true</code>. Should return a number, just like Array.sort',
      },
      type: 'function(a, b)',
      default: '—',
      value: [],
    },
    {
      name: 'sort-by',
      description: {
        cn: 'specify which property to sort by, works when <code>sortable</code> is <code>true</code> and <code>sort-method</code> is <code>undefined</code>. If set to an Array, the column will sequentially sort by the next property if the previous one is equal',
        en: 'specify which property to sort by, works when <code>sortable</code> is <code>true</code> and <code>sort-method</code> is <code>undefined</code>. If set to an Array, the column will sequentially sort by the next property if the previous one is equal',
      },
      type: 'function(row, index) / string / array',
      default: '—',
      value: [],
    },
    {
      name: 'sort-orders',
      description: {
        cn: 'the order of the sorting strategies used when sorting the data, works when <code>sortable</code> is <code>true</code>. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array',
        en: 'the order of the sorting strategies used when sorting the data, works when <code>sortable</code> is <code>true</code>. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array',
      },
      type: 'array',
      default: "['ascending', 'descending', null]",
      value: [],
    },
    {
      name: 'resizable',
      description: {
        cn: 'whether column width can be resized, works when <code>border</code> of <code>el-table</code> is <code>true</code>',
        en: 'whether column width can be resized, works when <code>border</code> of <code>el-table</code> is <code>true</code>',
      },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'formatter',
      description: { cn: 'function that formats cell content', en: 'function that formats cell content' },
      type: 'function(row, column, cellvalue, index)',
      default: '—',
      value: [],
    },
    {
      name: 'show-overflow-tooltip',
      description: {
        cn: 'whether to hide extra content and show them in a tooltip when hovering on the cell',
        en: 'whether to hide extra content and show them in a tooltip when hovering on the cell',
      },
      type: 'boolean',
      default: 'Refer to table <a href="#table-attributes">tooltip-options</a>',
      value: [],
    },
    { name: 'align', description: { cn: 'alignment', en: 'alignment' }, type: 'string', default: 'left', value: [] },
    {
      name: 'header-align',
      description: {
        cn: 'alignment of the table header. If omitted, the value of the above <code>align</code> attribute will be applied',
        en: 'alignment of the table header. If omitted, the value of the above <code>align</code> attribute will be applied',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'class-name',
      description: { cn: 'class name of cells in the column', en: 'class name of cells in the column' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'label-class-name',
      description: { cn: 'class name of the label of this column', en: 'class name of the label of this column' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'selectable',
      description: {
        cn: "function that determines if a certain row can be selected, works when <code>type</code> is 'selection'",
        en: "function that determines if a certain row can be selected, works when <code>type</code> is 'selection'",
      },
      type: 'function(row, index)',
      default: '—',
      value: [],
    },
    {
      name: 'reserve-selection',
      description: {
        cn: "whether to reserve selection after data refreshing, works when <code>type</code> is 'selection'. Note that <code>row-key</code> is required for this to work",
        en: "whether to reserve selection after data refreshing, works when <code>type</code> is 'selection'. Note that <code>row-key</code> is required for this to work",
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'filters',
      description: {
        cn: 'an array of data filtering options. For each element in this array, <code>text</code> and <code>value</code> are required',
        en: 'an array of data filtering options. For each element in this array, <code>text</code> and <code>value</code> are required',
      },
      type: '<code>array&lt;{text: string, value: string}></code>',
      default: '—',
      value: [],
    },
    {
      name: 'filter-placement',
      description: { cn: 'placement for the filter dropdown', en: 'placement for the filter dropdown' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'filter-multiple',
      description: { cn: 'whether data filtering supports multiple options', en: 'whether data filtering supports multiple options' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'filter-method',
      description: {
        cn: 'data filtering method. If <code>filter-multiple</code> is on, this method will be called multiple times for each row, and a row will display if one of the calls returns <code>true</code>',
        en: 'data filtering method. If <code>filter-multiple</code> is on, this method will be called multiple times for each row, and a row will display if one of the calls returns <code>true</code>',
      },
      type: 'function(value, row, column)',
      default: '—',
      value: [],
    },
    {
      name: 'filtered-value',
      description: {
        cn: 'filter value for selected data, might be useful when table header is rendered with <code>render-header</code>',
        en: 'filter value for selected data, might be useful when table header is rendered with <code>render-header</code>',
      },
      type: 'array',
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: '—',
      description: {
        cn: 'Custom content for table columns. The scope parameter is <code>{ row, column, $index }</code>',
        en: 'Custom content for table columns. The scope parameter is <code>{ row, column, $index }</code>',
      },
    },
    {
      name: 'header',
      description: {
        cn: 'Custom content for table header. The scope parameter is <code>{ column, $index }</code>',
        en: 'Custom content for table header. The scope parameter is <code>{ column, $index }</code>',
      },
    },
  ],
};
export default doc;
