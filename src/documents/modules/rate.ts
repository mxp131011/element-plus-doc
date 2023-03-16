import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/rate.html',
  attributes: [
    {
      name: 'model-value',
      description: { cn: '选中项绑定值', en: 'binding value' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'max',
      description: { cn: '最大分值', en: 'max rating score' },
      type: 'number',
      default: '5',
      value: [],
    },
    {
      name: 'size',
      description: { cn: '尺寸', en: 'size of Rate' },
      type: 'enum',
      default: "'default'",
      value: ['large', 'default', 'small'],
    },
    {
      name: 'disabled',
      description: { cn: '是否为只读', en: 'whether Rate is read-only' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'allow-half',
      description: { cn: '是否允许半选', en: 'whether picking half start is allowed' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'low-threshold',
      description: {
        cn: '低分和中等分数的界限值， 值本身被划分在低分中',
        en: 'threshold value between low and medium level. The value itself will be included in low level',
      },
      type: 'number',
      default: '2',
      value: [],
    },
    {
      name: 'high-threshold',
      description: {
        cn: '高分和中等分数的界限值， 值本身被划分在高分中',
        en: 'threshold value between medium and high level. The value itself will be included in high level',
      },
      type: 'number',
      default: '4',
      value: [],
    },
    {
      name: 'colors',
      description: {
        cn: 'icon 的颜色。 若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色。 TS类型： string[] &#124; Record<number, string>',
        en: 'colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color. TS Type： string[] &#124; Record<number, string>',
      },
      type: 'object',
      default: "['#F7BA2A', '#F7BA2A', '#F7BA2A']",
      value: ['string'],
    },
    {
      name: 'void-color',
      description: { cn: '未选中 icon 的颜色', en: 'color of unselected icons' },
      type: 'string',
      default: '#C6D1DE',
      value: [],
    },
    {
      name: 'disabled-void-color',
      description: { cn: '只读时未选中 icon 的颜色', en: 'color of unselected read-only icons' },
      type: 'string',
      default: '#EFF2F7',
      value: [],
    },
    {
      name: 'icons',
      description: {
        cn: '图标组件 若传入数组，则需要传入 3 个元素，分别为 3 个部分所对应的类名；若传入对象，则可自定义分段，键名为分段的界限值，键值为对应的类名。 TS类型：string[] &#124; Component[] &#124; Record<number, string &#124; Component>',
        en: 'icon components. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon component. TS Type: string[] &#124; Component[] &#124; Record<number, string &#124; Component>',
      },
      type: 'object',
      default: '[StarFilled, StarFilled, StarFilled]',
      value: ['string'],
    },
    {
      name: 'void-icon',
      description: { cn: '未被选中的图标组件', en: 'component of unselected icons' },
      type: 'string',
      default: 'Star',
      value: ['string', 'Component'],
    },
    {
      name: 'disabled-void-icon',
      description: { cn: '禁用状态的未选择图标', en: 'component of unselected read-only icons' },
      type: 'string',
      default: 'StarFilled',
      value: ['string', 'Component'],
    },
    {
      name: 'show-text',
      description: { cn: '是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容', en: 'whether to display texts' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'show-score',
      description: {
        cn: '是否显示当前分数， show-score 和 show-text 不能同时为真',
        en: 'whether to display current score. show-score and show-text cannot be true at the same time',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'text-color',
      description: { cn: '辅助文字的颜色', en: 'color of texts' },
      type: 'string',
      default: '#1F2D3D',
      value: [],
    },
    {
      name: 'texts',
      description: { cn: '辅助文字数组', en: 'text array' },
      type: 'array',
      default: '—',
      value: [],
    },
    {
      name: 'score-template',
      description: { cn: '分数显示模板', en: 'score template' },
      type: 'string',
      default: '{value}',
      value: [],
    },
    {
      name: 'clearable',
      description: { cn: '是否可以重置值为 <code>0</code>', en: 'whether value can be reset to <code>0</code>' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'id',
      description: { cn: '原生 `id` 属性', en: 'native <code>id</code> attribute' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'label',
      description: { cn: '和 Rate 的 aria-label 属性保持一致,用于无障碍访问', en: 'same as <code>aria-label</code> in Rate' },
      type: 'string',
      default: '—',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: '分值改变时触发', en: 'Triggers when rate value is changed' },
      type: 'function',
      param: '(value: number) => void',
    },
  ],
  exposes: [
    {
      name: 'setCurrentValue',
      description: { cn: '设置当前值', en: 'set current value' },
      type: 'function',
      param: '(value: number) => void',
    },
    {
      name: 'resetCurrentValue',
      description: { cn: '重置当前值', en: 'reset current value' },
      type: 'function',
      param: '() => void',
    },
  ],
};
export default doc;
