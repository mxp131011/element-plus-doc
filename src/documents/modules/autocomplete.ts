import type { TagDoc } from '@/types/tag-doc';

const doc: TagDoc.TagDocInstance = {
  url: 'component/button.html',
  attributes: [
    {
      name: 'model-value',
      description: {
        cn: '选中项绑定值',
        en: 'binding value',
      },
      type: 'string',
      default: '',
      value: [],
    },
    {
      name: 'placeholder',
      description: {
        cn: '占位文本',
        en: 'the placeholder of Autocomplete',
      },
      type: 'string',
      default: '',
      value: [],
    },
    {
      name: 'clearable',
      description: {
        cn: '是否可清空',
        en: 'whether to show clear button',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'disabled',
      description: {
        cn: '自动补全组件是否被禁用',
        en: 'whether Autocomplete is disabled',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'value-key',
      description: {
        cn: '输入建议对象中用于显示的键名',
        en: 'key name of the input suggestion object for display',
      },
      type: 'string',
      default: 'value',
      value: [],
    },
    {
      name: 'debounce',
      description: {
        cn: '获取输入建议的防抖延时，单位为毫秒',
        en: 'debounce delay when typing, in milliseconds',
      },
      type: 'number',
      default: '300',
      value: [],
    },
    {
      name: 'placement',
      description: {
        cn: '菜单弹出位置',
        en: 'placement of the popup menu',
      },
      type: 'enum',
      default: 'bottom-start',
      value: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'],
    },
    {
      name: 'fetch-suggestions',
      description: {
        cn: '获取输入建议的方法， 仅当你的输入建议数据 resolve 时，通过调用 callback(data:[])  来返回它. TS类型：(queryString: string, callback: callbackfn) => void',
        en: 'a method to fetch input suggestions. When suggestions are ready, invoke callback(data:[]) to return them to Autocomplete. TS Type：(queryString: string, callback: callbackfn) => void',
      },
      type: 'function',
      default: 'false',
      value: [],
    },
    {
      name: 'trigger-on-focus',
      description: {
        cn: '输入焦点时是否显示建议',
        en: 'whether show suggestions when input focus',
      },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'select-when-unmatched',
      description: {
        cn: '在输入没有任何匹配建议的情况下，按下回车是否触发 `select` 事件',
        en: 'whether to emit a `select` event on enter when there is no autocomplete match',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'name',
      description: {
        cn: '等价于原生 input `name` 属性',
        en: 'same as `name` in native input',
      },
      type: 'string',
      default: '',
      value: [],
    },
    {
      name: 'label',
      description: {
        cn: '输入框关联的 label 文字',
        en: 'whether to hide the loading icon in remote search',
      },
      type: 'string',
      default: '',
      value: [],
    },
    {
      name: 'hide-loading',
      description: {
        cn: '是否隐藏远程加载时的加载图标',
        en: 'whether to hide the loading icon in remote search',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'popper-class',
      description: {
        cn: '下拉列表的类名',
        en: 'whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'teleported',
      description: {
        cn: '是否将下拉列表元素插入 append-to 指向的元素下',
        en: 'whether select dropdown is teleported to the body',
      },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'highlight-first-item',
      description: {
        cn: '是否默认高亮远程搜索结果的第一项',
        en: 'whether to highlight first item in remote search suggestions by default',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'fit-input-width',
      description: {
        cn: '下拉框的宽度是否与输入框相同',
        en: 'whether the width of the dropdown is the same as the input',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
  ],
  events: [
    {
      name: 'select',
      description: {
        cn: '点击选中建议项时触发',
        en: 'triggers when a suggestion is clicked',
      },
      type: 'function',
      tsType: '(item: typeof modelValue | any) => void',
    },
    {
      name: 'change',
      description: {
        cn: '在 Input 值改变时触发',
        en: 'triggers when the icon inside Input value change',
      },
      type: 'function',
      tsType: '(value: string | number) => void',
    },
  ],
  slots: [
    {
      name: 'default',
      description: {
        cn: '自定义输入建议的内容。 自定义标签',
        en: 'custom content for input suggestions.',
      },
    },
    {
      name: 'prefix',
      description: {
        cn: '输入框头部内容',
        en: 'content as Input prefix',
      },
    },
    {
      name: 'suffix',
      description: {
        cn: '输入框尾部内容',
        en: 'content as Input suffix',
      },
    },
    {
      name: 'prepend',
      description: {
        cn: '输入框前置内容，在 prefix 之前',
        en: 'content to prepend before Input',
      },
    },
    {
      name: 'append',
      description: {
        cn: '输入框后置内容，在 suffix 之后',
        en: 'content to append after Input',
      },
    },
  ],
  exposes: [
    {
      name: 'activated',
      description: {
        cn: '自动补全输入框是否被激活',
        en: 'if autocomplete activated',
      },
      type: 'object',
      tsType: 'Ref<boolean>',
    },
    {
      name: 'blur',
      description: {
        cn: '使 input 失去焦点',
        en: 'blur the input element',
      },
      type: 'function',
      tsType: '() => void',
    },
    {
      name: 'close',
      description: {
        cn: '折叠建议列表',
        en: 'collapse suggestion list',
      },
      type: 'function',
      tsType: '() => void',
    },
    {
      name: 'focus',
      description: {
        cn: '使 input 获取焦点',
        en: 'focus the input element',
      },
      type: 'function',
      tsType: '() => void',
    },
    {
      name: 'handleSelect',
      description: {
        cn: '手动触发选中建议事件',
        en: 'triggers when a suggestion is clicked',
      },
      type: 'function',
      tsType: '(item: any) => promise<void>',
    },
    {
      name: 'handleKeyEnter',
      description: {
        cn: '手动触发键盘回车事件',
        en: 'handle keyboard enter event',
      },
      type: 'function',
      tsType: '() => promise<void>',
    },
    {
      name: 'highlightedIndex',
      description: {
        cn: '当前高亮显示选项的索引',
        en: 'the index of the currently highlighted item',
      },
      type: 'object',
      tsType: 'Ref<number>',
    },
    {
      name: 'highlight',
      description: {
        cn: '在建议中高亮显示一个项目',
        en: 'highlight an item in a suggestion',
      },
      type: 'function',
      tsType: '(itemIndex: number) => void',
    },
    {
      name: 'inputRef',
      description: {
        cn: 'el-input 组件实例',
        en: 'el-input component instance',
      },
      type: 'object',
      tsType: 'Ref<ElInputInstance>',
    },
    {
      name: 'loading',
      description: {
        cn: '远程获取提示内容的加载状态指示器',
        en: 'remote search loading indicator',
      },
      type: 'object',
      tsType: 'Ref<boolean>',
    },
    {
      name: 'popperRef',
      description: {
        cn: 'el-tooltip 组件实例',
        en: 'el-tooltip component instance',
      },
      type: 'object',
      tsType: 'Ref<ElTooltipInstance>',
    },
    {
      name: 'suggestions',
      description: {
        cn: '获取自动补全结果',
        en: 'fetch suggestions result',
      },
      type: 'object',
      tsType: 'Ref<record<string, any>>',
    },
  ],
};

export default doc;
