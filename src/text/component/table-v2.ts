const Attributes = `
| Name                      | Description                                                                                                                | Type                                                 | Default   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | --------- |
| cache                     | Number of rows rendered in advance for boosting the performance                                                            | Number                                               | 2         |
| estimated-row-height      | The estimated row height for rendering dynamic height rows                                                                 | Number                                               | -         |
| header-class              | Customized class name passed to header wrapper                                                                             | String/Function<[HeaderClassGetter](#typings)>     | -         |
| header-props              | Customized props name passed to header component                                                                           | Object/Function<[HeaderPropsGetter](#typings)>     | -         |
| header-cell-props         | Customized props name passed to header cell component                                                                      | Object/Function<[HeaderCellPropsGetter](#typings)> | -         |
| header-height             | The height of entire header, when it's array, it will render as many header rows as the given array's length               | Number/Array<Number>                               | 50        |
| footer-height             | The height of the footer element, when presented, it will be part of the calculation of the table's height.                | Number                                               | 0         |
| row-class                 | Customized class name passed to row wrapper                                                                                | String/Function<[RowClassGetter](#typings)>        | -         |
| row-key                   | The key of each row, if not provided, it will be the index of the row                                                      | String/Symbol/Number                                 | id        |
| row-props                 | Customized props name passed to row component                                                                              | Object/Function<[RowPropsGetter](#typings)>        | -         |
| row-height                | The height of each row, used for calculating the total height of the table                                                 | Number                                               | 50        |
| cell-props                | extra props passed to each cell (except header cells)                                                                      | Object/Function<[CellPropsGetter](#typings)>       | -         |
| columns                   | An array of column definitions.                                                                                            | Array<[Column](#column-attribute)>                 | -         |
| data                      | An array of data to be rendered in the table.                                                                              | Array<[Data](#typings)>                            | []        |
| data-getter               | An method which helps customizing the how to fetch the data from the data source.                                          | Function                                             | -         |
| fixed-data                | Data for rendering rows above the main content and below the header                                                        | Array<[Data](#typings)>                            | -         |
| expand-column-key         | The column key indicates which row is expandable                                                                           | String                                               | -         |
| expanded-row-keys         | An array of keys for expanded rows, can be used with \`v-model\`                                                             | Array<[KeyType](#typings)>                         | -         |
| default-expanded-row-keys | An array of keys for default expanded rows, **NON REACTIVE**                                                               | Array<[KeyType](#typings)>                         | -         |
| class                     | Class name for the the virtual table, will be applied to all three tables (left, right, main)                              | String/Array/Object                                  | -         |
| fixed                     | Flag indicates the table column's width is a fixed or flexible.                                                            | Boolean                                              | false     |
| width                     | Width for the table, required                                                                                              | Number                                               | -         |
| height                    | Height for the table, required                                                                                             | Number                                               | -         |
| max-height                | Maximum height for the table                                                                                               | Number                                               | -         |
| h-scrollbar-size          | Indicates the horizontal scrollbar's size for the table, used to prevent the horizontal and vertical scrollbar to collapse | Number                                               | 6         |
| v-scrollbar-size          | Indicates the vertical scrollbar's size for the table, used to prevent the horizontal and vertical scrollbar to collapse   | Number                                               | 6         |
| scrollbar-always-on       | If true, the scrollbar will always be shown instead of when mouse is placed above the table                                | Boolean                                              | false     |
| sort-by                   | Sort indicator                                                                                                             | Object<[SortBy](#typings)>                         | {}        |
| sort-state                | Multiple sort indicator                                                                                                    | Object<[SortState](#typings)>                      | undefined |
`;
const Slots = `
| Name        | Params                          |
| ----------- | ------------------------------- |
| cell        | [CellSlotProps](#typings)       |
| header      | [HeaderSlotProps](#typings)     |
| header-cell | [HeaderCellSlotProps](#typings) |
| row         | [RowSlotProps](#typings)        |
| footer      | -                               |
| empty       | -                               |
| overlay     | -                               |
`;
const Events = `
| Name                 | Description                                                           | Parameters                               |
| -------------------- | --------------------------------------------------------------------- | ---------------------------------------- |
| column-sort          | Invoked when column sorted                                            | Object<ColumnSortParam>                |
| expanded-rows-change | Invoked when expanded rows changed                                    | \`Array<KeyType>\`                         |
| end-reached          | Invoked when the end of the table is reached                          | -                                        |
| scroll               | Invoked after scrolled                                                | Object<[ScrollParams](#typings)>       |
| rows-rendered        | Invoked when rows are rendered                                        | Object<[RowsRenderedParams](#typings)> |
| row-expand           | Invoked when expand/collapse the tree node by clicking the arrow icon | Object<[RowExpandParams](#typings)>    |
| row-event-handlers   | A collection of handlers attached to each row                         | Object<[RowEventHandlers](#typings)>   |
`;
const Exposes = `
| Event Name   | Description                                          | Parameters                                                                 |
| ------------ | ---------------------------------------------------- | -------------------------------------------------------------------------- |
| scrollTo     | Scroll to a given position                           | \`{ scrollLeft?: number, scrollTop?: number}\`                               |
| scrollToLeft | Scroll to a given horizontal position                | \`scrollLeft: number\`                                                       |
| scrollToTop  | Scroll to a given vertical position                  | \`scrollTop: number\`                                                        |
| scrollToRow  | scroll to a given row with specified scroll strategy | \`row: number, strategy?: "auto" |"center" | "end" | "start" | "smart"\` |
`;

export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
  slots: Slots,
};
