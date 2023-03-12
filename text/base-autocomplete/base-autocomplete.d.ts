export interface BaseAutocompleteProps {
  /** #占位文本 */
  placeholder?: string;

  /** 是否可清空 */
  clearable?: boolean;

  /** 自动补全组件是否被禁用 */
  disabled?: boolean;

  /**
   * 输入建议对象中用于显示的键名
   * @default 'value'
   */
  valueKey?: string;

  /** 选中项绑定值 */
  modelValue?: string;

  /**
   * 获取输入建议的防抖延时，单位为毫秒
   * @default 300
   */
  debounce?: number;

  /** 菜单弹出位置 */
  placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'top- start' | 'top-end' | 'top';

  /** 获取输入建议的方法， 仅当你的输入建议数据 resolve 时，通过调用 callback(data:[])  来返回它 */
  fetchSuggestions?: $Props<'ElAutocomplete'>['fetchSuggestions'];

  /**
   * 输入焦点时是否显示建议
   * @default true
   */
  triggerOnFocus?: boolean;

  /** 等价于原生 input name 属性 */
  name?: string;

  /** 在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件 */
  selectWhenUnmatched?: boolean;

  /** 输入框关联的 label 文字 */
  label?: string;

  /** 是否隐藏远程加载时的加载图标 */
  hideLoading?: boolean;

  /**
   * 是否将下拉列表元素插入 append-to 指向的元素下
   * @default true
   */
  teleported?: boolean;

  /** 是否默认高亮远程搜索结果的第一项 */
  highlightFirstItem?: boolean;

  /** 下拉框的宽度是否与输入框相同 */
  fitInputWidth?: boolean;
}
