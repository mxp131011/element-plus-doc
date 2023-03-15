import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/input.html',
  attributes: [
    {
      name: 'type',
      description: { cn: '类型', en: 'type of input' },
      type: 'string',
      default: "'textarea'",
      value: [
        'text',
        'textarea',
        'checkbox',
        'color',
        'date',
        'email',
        'file',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
    },
    {
      name: 'model-value',
      description: { cn: 'binding value', en: 'binding value' },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'maxlength',
      description: { cn: '最大输入长度', en: 'the max length' },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'minlength',
      description: { cn: '原生属性，最小输入长度', en: 'same as <code>minlength</code> in native input' },
      type: 'number',
      default: '—',
      value: [],
    },
    {
      name: 'show-word-limit',
      description: {
        cn: "是否显示统计字数, 只在 type 为 'text' 或 'textarea' 的时候生效",
        en: "whether show word count, only works when <code>type</code> is 'text' or 'textarea'",
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'placeholder',
      description: { cn: '输入框占位文本', en: 'placeholder of Input' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'clearable',
      description: {
        cn: '是否显示清除按钮，只有当 `type` 不是 textarea时生效',
        en: "whether to show clear button, only works when <code>type</code> is not 'textarea'",
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'formatter',
      description: {
        cn: "指定输入值的格式。(只有当 type 是'text'时才能工作)",
        en: "specifies the format of the value presented input.(only works when <code>type</code> is 'text')",
      },
      type: 'function(value)',
      default: '',
      value: [],
    },
    {
      name: 'parser',
      description: {
        cn: "指定从格式化器输入中提取的值。(仅当 type 是'text'时才起作用)",
        en: "specifies the value extracted from formatter input.(only works when <code>type</code> is 'text')",
      },
      type: 'function(value)',
      default: '—',
      value: [],
    },
    {
      name: 'show-password',
      description: { cn: '是否显示切换密码图标', en: 'whether to show toggleable password input' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'disabled',
      description: { cn: '是否禁用', en: 'whether Input is disabled' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'size',
      description: { cn: "输入框尺寸，只在 type 不为 'textarea' 时有效", en: "size of Input, works when <code>type</code> is not 'textarea'" },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'prefix-icon',
      description: { cn: '自定义前缀图标', en: 'prefix icon component' },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'suffix-icon',
      description: { cn: '自定义后缀图标', en: 'suffix icon component' },
      type: ['string', 'Component'],
      default: '—',
      value: [],
    },
    {
      name: 'rows',
      description: {
        cn: "输入框行数，仅 type 为 'textarea' 时有效",
        en: "number of rows of textarea, only works when <code>type</code> is 'textarea'",
      },
      type: 'number',
      default: '2',
      value: [],
    },
    {
      name: 'autosize',
      description: {
        cn: "textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }",
        en: "whether textarea has an adaptive height, only works when <code>type</code> is 'textarea'. Can accept an object, e.g. <code>{ minRows: 2, maxRows: 6 }</code>",
      },
      type: ['boolean', 'object'],
      default: 'false',
      value: [],
    },
    {
      name: 'autocomplete',
      description: { cn: '原生 `autocomplete` 属性', en: 'same as <code>autocomplete</code> in native input' },
      type: 'string',
      default: 'off',
      value: [],
    },
    {
      name: 'name',
      description: { cn: '等价于原生 input `name` 属性', en: 'same as <code>name</code> in native input' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'readonly',
      description: { cn: '原生 `readonly` 属性，是否只读', en: 'same as <code>readonly</code> in native input' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'max',
      description: { cn: '原生属性，设置最大值', en: 'same as <code>max</code> in native input' },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'min',
      description: { cn: '原生属性，设置最小值', en: 'same as <code>min</code> in native input' },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'step',
      description: { cn: '原生属性，设置输入字段的合法数字间隔', en: 'same as <code>step</code> in native input' },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'resize',
      description: { cn: '控制是否能被用户缩放', en: 'control the resizability' },
      type: 'enum',
      default: "'both'",
      value: ['none', 'both', 'horizontal', 'vertical'],
    },
    {
      name: 'autofocus',
      description: { cn: '原生属性，自动获取焦点', en: 'same as <code>autofocus</code> in native input' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'form',
      description: { cn: '原生属性', en: 'same as <code>form</code> in native input' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'label',
      description: { cn: '等价于原生 input aria-label 属性', en: 'same as <code>aria-label</code> in native input' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'tabindex',
      description: { cn: '输入框的 tabindex', en: 'input tabindex' },
      type: ['string', 'number'],
      default: '—',
      value: [],
    },
    {
      name: 'validate-event',
      description: { cn: '输入时是否触发表单的校验', en: 'whether to trigger form validation' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'input-style',
      description: {
        cn: 'input 元素或 textarea 元素的 style. TS类型: CSSProperties | CSSProperties[] | string[] | string',
        en: 'the style of the input element or textarea element. TS Type: CSSProperties | CSSProperties[] | string[] | string',
      },
      type: ['string', 'object'],
      default: '—',
      value: [],
    },
  ],
  events: [
    {
      name: 'blur',
      description: { cn: '当选择器的输入框失去焦点时触发', en: 'triggers when Input blurs' },
      type: 'function',
      param: '(event: FocusEvent) => void',
    },
    {
      name: 'focus',
      description: { cn: '当选择器的输入框获得焦点时触发', en: 'triggers when Input focuses' },
      type: 'function',
      param: '(event: FocusEvent) => void',
    },
    {
      name: 'change',
      description: {
        cn: '仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发',
        en: 'triggers when the input box loses focus or the user presses Enter, only if the modelValue has changed',
      },
      type: 'function',
      param: '(value: string | number) => void',
    },
    {
      name: 'input',
      description: { cn: '在 Input 值改变时触发', en: 'triggers when the Input value change' },
      type: 'function',
      param: '(value: string | number) => void',
    },
    {
      name: 'clear',
      description: {
        cn: '在点击由 `clearable` 属性生成的清空按钮时触发',
        en: 'triggers when the Input is cleared by clicking the clear button',
      },
      type: 'function',
      param: '() => void',
    },
  ],
  exposes: [
    {
      name: 'blur',
      description: { cn: '使 input 失去焦点', en: 'blur the input element' },
      type: 'function',
      param: '() => void',
    },
    {
      name: 'clear',
      description: { cn: '清除 input 值', en: 'clear input value' },
      type: 'function',
      param: '() => void',
    },
    {
      name: 'focus',
      description: { cn: '使 input 获取焦点', en: 'focus the input element' },
      type: 'function',
      param: '() => void',
    },
    {
      name: 'input',
      description: { cn: 'Input HTML 元素', en: 'HTML input element' },
      type: 'object',
      param: 'Ref<HTMLInputElement>',
    },
    {
      name: 'ref',
      description: { cn: 'HTML元素 input 或 textarea', en: 'HTML element, input or textarea' },
      type: 'object',
      param: 'Ref<HTMLInputElement | HTMLTextAreaElement>',
    },
    {
      name: 'resizeTextarea',
      description: { cn: '改变 textarea 大小', en: 'resize textarea' },
      type: 'function',
      param: '() => void',
    },
    {
      name: 'select',
      description: { cn: '选中 input 中的文字', en: 'select the text in input element' },
      type: 'function',
      param: '() => void',
    },
    {
      name: 'textarea',
      description: { cn: 'HTML textarea 元素', en: 'HTML textarea element' },
      type: 'object',
      param: 'Ref<HTMLTextAreaElement>',
    },
    {
      name: 'textareaStyle',
      description: { cn: 'textarea 的样式', en: 'style of textarea' },
      type: 'object',
      param: 'Ref<StyleValue>',
    },
  ],
  slots: [
    {
      name: 'prefix',
      description: {
        cn: "输入框头部内容，只对非 type='textarea' 有效",
        en: "content as Input prefix, only works when <code>type</code> is not 'textarea'",
      },
    },
    {
      name: 'suffix',
      description: {
        cn: "输入框头部内容，只对非 type='textarea' 有效",
        en: "content as Input suffix, only works when <code>type</code> is not 'textarea'",
      },
    },
    {
      name: 'prepend',
      description: {
        cn: "输入框头部内容，只对非 type='textarea' 有效",
        en: "content to prepend before Input, only works when <code>type</code> is not 'textarea'",
      },
    },
    {
      name: 'append',
      description: {
        cn: "输入框头部内容，只对非 type='textarea' 有效",
        en: "content to append after Input, only works when <code>type</code> is not 'textarea'",
      },
    },
  ],
};
export default doc;