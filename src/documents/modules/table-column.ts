import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/table.html#table-column-attributes',
  attributes: [
    {
      name: 'type',
      description: {
        cn: '对应列的类型。 如果设置了`selection`则显示多选框； 如果设置了 `index` 则显示该行的索引（从 1 开始计算）； 如果设置了 `expand` 则显示为一个可展开的按钮',
        en: 'type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1). If set to `expand`, the column will display expand icon.',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'index',
      description: {
        cn: '如果设置了 &#60;code&#62;type=index&#60;/code&#62; ，可以通过传递 index 属性来自定义索引',
        en: 'customize indices for each row, works on columns with &#60;code&#62;type=index&#60;/code&#62;',
      },
      type: ['number', 'function(index)'],
      default: '—',
      value: [],
    },
    {
      name: 'label',
      description: { cn: '显示的标题', en: 'column label' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'column-key',
      description: {
        cn: 'column 的 key， column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件',
        en: "column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered",
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'prop',
      description: {
        cn: '字段名称 对应列内容的字段名， 也可以使用 &#60;code&#62;property&#60;/code&#62; 属性',
        en: 'field name. You can also use its alias: &#60;code&#62;property&#60;/code&#62;',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'width',
      description: { cn: '对应列的宽度', en: 'column width' },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'min-width',
      description: {
        cn: '对应列的最小宽度， 对应列的最小宽度， 与 &#60;code&#62;width&#60;/code&#62; 的区别是 &#60;code&#62;width&#60;/code&#62; 是固定的， &#60;code&#62;min-width&#60;/code&#62; 会把剩余宽度按比例分配给设置了 &#60;code&#62;min-width&#60;/code&#62; 的列',
        en: 'column minimum width. Columns with &#60;code&#62;width&#60;/code&#62; has a fixed width, while columns with &#60;code&#62;min-width&#60;/code&#62; has a width that is distributed in proportion',
      },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'fixed',
      description: {
        cn: '列是否固定在左侧或者右侧。 &#60;code&#62;true&#60;/code&#62; 表示固定在左侧',
        en: 'whether column is fixed at left / right. Will be fixed at left if &#60;code&#62;true&#60;/code&#62;',
      },
      type: ['string', 'boolean'],
      default: '—',
      value: [],
    },
    {
      name: 'render-header',
      description: { cn: '列标题 Label 区域渲染使用的 Function', en: 'render function for table header of this column' },
      type: 'function({ column, $index })',
      default: '—',
      value: [],
    },
    {
      name: 'sortable',
      description: {
        cn: "对应列是否可以排序， 如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 &#60;code&#62;sort-change&#60;/code&#62; 事件",
        en: "whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the &#60;code&#62;sort-change&#60;/code&#62; event of Table",
      },
      type: ['string', 'boolean'],
      default: 'false',
      value: [],
    },
    {
      name: 'sort-method',
      description: {
        cn: '指定数据按照哪个属性进行排序，仅当 &#60;code&#62;sortable&#60;/code&#62; 设置为 &#60;code&#62;true&#60;/code&#62; 的时候有效。 应该如同 Array.sort 那样返回一个 Number',
        en: 'sorting method, works when &#60;code&#62;sortable&#60;/code&#62; is &#60;code&#62;true&#60;/code&#62;. Should return a number, just like Array.sort',
      },
      type: 'function(a, b)',
      default: '—',
      value: [],
    },
    {
      name: 'sort-by',
      description: {
        cn: '指定数据按照哪个属性进行排序，仅当 &#60;code&#62;sortable&#60;/code&#62; 设置为 &#60;code&#62;true&#60;/code&#62; 且没有设置 &#60;code&#62;sort-method&#60;/code&#62; 的时候有效。 如果 &#60;code&#62;sort-by&#60;/code&#62; 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推',
        en: 'specify which property to sort by, works when &#60;code&#62;sortable&#60;/code&#62; is &#60;code&#62;true&#60;/code&#62; and &#60;code&#62;sort-method&#60;/code&#62; is &#60;code&#62;undefined&#60;/code&#62;. If set to an Array, the column will sequentially sort by the next property if the previous one is equal',
      },
      type: ['string', 'array', 'function(row, index)'],
      default: '—',
      value: [],
    },
    {
      name: 'sort-orders',
      description: {
        cn: '数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。 需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序。数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序',
        en: 'the order of the sorting strategies used when sorting the data, works when &#60;code&#62;sortable&#60;/code&#62; is &#60;code&#62;true&#60;/code&#62;. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array. (the elements in the array need to be one of the following: ascending, descending and null restores to the original order)',
      },
      type: 'array',
      default: "['ascending', 'descending', null]",
      value: ['ascending', 'descending', null],
    },
    {
      name: 'resizable',
      description: {
        cn: '对应列是否可以通过拖动改变宽度（需要在 &#60;code&#62;el-table&#60;/code&#62; 上设置 &#60;code&#62;border&#60;/code&#62; 属性为真）',
        en: 'whether column width can be resized, works when &#60;code&#62;border&#60;/code&#62; of &#60;code&#62;el-table&#60;/code&#62; is &#60;code&#62;true&#60;/code&#62;',
      },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'formatter',
      description: { cn: '用来格式化内容', en: 'function that formats cell content' },
      type: 'function(row, column, cellvalue, index)',
      default: '—',
      value: [],
    },
    {
      name: 'show-overflow-tooltip',
      description: {
        cn: '当内容过长被隐藏时显示 tooltip,当为 `object` 时请参考`el-tooltip`组件的配置',
        en: 'whether to hide extra content and show them in a tooltip when hovering on the cell，For `object` please refer to the configuration of the `el-tooltip` component',
      },
      type: ['boolean', 'object'],
      default: "{ enterable: true, placement: 'top', showArrow: true, hideAfter: 200, popperOptions: { strategy: 'fixed' } }",
      value: [],
    },
    {
      name: 'align',
      description: { cn: '对齐方式', en: 'alignment' },
      type: 'enum',
      default: 'left',
      value: ['left', 'center', 'right'],
    },
    {
      name: 'header-align',
      description: {
        cn: '表头对齐方式， 若不设置该项，则使用表格的对齐方式',
        en: 'alignment of the table header. If omitted, the value of the above &#60;code&#62;align&#60;/code&#62; attribute will be applied',
      },
      type: 'enum',
      default: '—',
      value: ['left', 'center', 'right'],
    },
    {
      name: 'class-name',
      description: { cn: '列的 className', en: 'class name of cells in the column' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'label-class-name',
      description: { cn: '当前列标题的自定义类名', en: 'class name of the label of this column' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'selectable',
      description: {
        cn: '仅对 &#60;code&#62;type&#60;/code&#62; 为 &#60;code&#62;selection&#60;/code&#62; 的列有效，类型为 &#60;code&#62;function&#60;/code&#62;，Function的返回值用来决定这一行的 CheckBox 是否可以勾选',
        en: "function that determines if a certain row can be selected, works when &#60;code&#62;type&#60;/code&#62; is 'selection'",
      },
      type: 'function(row, index)',
      default: '—',
      value: [],
    },
    {
      name: 'reserve-selection',
      description: {
        cn: '仅对 &#60;code&#62;type&#60;/code&#62; 为 &#60;code&#62;selection&#60;/code&#62; 的列有效， 请注意， 需指定 &#60;code&#62;row-key&#60;/code&#62; 来让这个功能生效。',
        en: "whether to reserve selection after data refreshing, works when &#60;code&#62;type&#60;/code&#62; is 'selection'. Note that &#60;code&#62;row-key&#60;/code&#62; is required for this to work",
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'filters',
      description: {
        cn: '数据过滤的选项， 数组格式，数组中的元素需要有 text 和 value 属性。 数组中的每个元素都需要有 text 和 value 属性。TS 类型：Array&#60;{text: string, value: string}&#62;',
        en: 'an array of data filtering options. For each element in this array, &#60;code&#62;text&#60;/code&#62; and &#60;code&#62;value&#60;/code&#62; are required. TS Type：Array&#60;{text: string, value: string}&#62;',
      },
      type: 'array',
      default: '—',
      value: [],
    },
    {
      name: 'filter-placement',
      description: { cn: '过滤弹出框的定位', en: 'placement for the filter dropdown' },
      type: 'enum',
      default: '—',
      value: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'],
    },
    {
      name: 'filter-multiple',
      description: { cn: '数据过滤的选项是否多选', en: 'whether data filtering supports multiple options' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'filter-method',
      description: {
        cn: '数据过滤使用的方法， 如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 &#60;code&#62;true&#60;/code&#62; 就会显示。',
        en: 'data filtering method. If &#60;code&#62;filter-multiple&#60;/code&#62; is on, this method will be called multiple times for each row, and a row will display if one of the calls returns &#60;code&#62;true&#60;/code&#62;',
      },
      type: 'function(value, row, column)',
      default: '—',
      value: [],
    },
    {
      name: 'filtered-value',
      description: {
        cn: '选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。',
        en: 'filter value for selected data, might be useful when table header is rendered with &#60;code&#62;render-header&#60;/code&#62;',
      },
      type: 'array',
      default: '—',
      value: [],
    },
  ],
  slots: [
    {
      name: 'default',
      description: {
        cn: '自定义列的内容 作用域参数为 &#60;code&#62;{ row, column, $index }&#60;/code&#62;',
        en: 'Custom content for table columns. The scope parameter is &#60;code&#62;{ row, column, $index }&#60;/code&#62;',
      },
    },
    {
      name: 'header',
      description: {
        cn: '自定义表头的内容， 作用域参数为&#60;code&#62;{ column, $index }&#60;/code&#62;',
        en: 'Custom content for table header. The scope parameter is &#60;code&#62;{ column, $index }&#60;/code&#62;',
      },
    },
  ],
};
export default doc;
