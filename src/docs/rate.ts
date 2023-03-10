import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'model-value / v-model', description: { cn: 'binding value', en: 'binding value' }, type: 'number', default: '0', value: [] },
    { name: 'max', description: { cn: 'max rating score', en: 'max rating score' }, type: 'number', default: '5', value: [] },
    { name: 'size', description: { cn: 'size of Rate', en: 'size of Rate' }, type: 'enum', default: "'default'", value: ['large'] },
    { name: 'disabled', description: { cn: 'whether Rate is read-only', en: 'whether Rate is read-only' }, type: 'boolean', default: 'false', value: [] },
    {
      name: 'allow-half',
      description: { cn: 'whether picking half start is allowed', en: 'whether picking half start is allowed' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'low-threshold',
      description: {
        cn: 'threshold value between low and medium level. The value itself will be included in low level',
        en: 'threshold value between low and medium level. The value itself will be included in low level',
      },
      type: 'number',
      default: '2',
      value: [],
    },
    {
      name: 'high-threshold',
      description: {
        cn: 'threshold value between medium and high level. The value itself will be included in high level',
        en: 'threshold value between medium and high level. The value itself will be included in high level',
      },
      type: 'number',
      default: '4',
      value: [],
    },
    {
      name: 'colors',
      description: {
        cn: 'colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color',
        en: 'colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color',
      },
      type: 'object',
      default: 'Record&lt;number, string>`',
      value: ['string'],
    },
    { name: 'void-color', description: { cn: 'color of unselected icons', en: 'color of unselected icons' }, type: 'string', default: '#C6D1DE', value: [] },
    {
      name: 'disabled-void-color',
      description: { cn: 'color of unselected read-only icons', en: 'color of unselected read-only icons' },
      type: 'string',
      default: '#EFF2F7',
      value: [],
    },
    {
      name: 'icons',
      description: {
        cn: 'icon components. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon component',
        en: 'icon components. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon component',
      },
      type: 'object',
      default: 'Component[]',
      value: ['string'],
    },
    {
      name: 'void-icon',
      description: { cn: 'component of unselected icons', en: 'component of unselected icons' },
      type: 'string',
      default: 'Star',
      value: ['Component'],
    },
    {
      name: 'disabled-void-icon',
      description: { cn: 'component of unselected read-only icons', en: 'component of unselected read-only icons' },
      type: 'string',
      default: 'StarFilled',
      value: ['Component'],
    },
    { name: 'show-text', description: { cn: 'whether to display texts', en: 'whether to display texts' }, type: 'boolean', default: 'false', value: [] },
    {
      name: 'show-score',
      description: {
        cn: 'whether to display current score. show-score and show-text cannot be true at the same time',
        en: 'whether to display current score. show-score and show-text cannot be true at the same time',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    { name: 'text-color', description: { cn: 'color of texts', en: 'color of texts' }, type: 'string', default: '#1F2D3D', value: [] },
    {
      name: 'texts',
      description: { cn: 'text array', en: 'text array' },
      type: 'array',
      default: "['Extremely bad', 'Disappointed', 'Fair', 'Satisfied', 'Surprise']",
      value: ['codestring'],
    },
    { name: 'score-template', description: { cn: 'score template', en: 'score template' }, type: 'string', default: '{value}', value: [] },
    {
      name: 'clearable',
      description: { cn: 'whether value can be reset to <code>0</code>', en: 'whether value can be reset to <code>0</code>' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    { name: 'id', description: { cn: 'native <code>id</code> attribute', en: 'native <code>id</code> attribute' }, type: 'string', default: '???', value: [] },
    {
      name: 'label<a11ytag></a11ytag>',
      description: { cn: 'same as <code>aria-label</code> in Rate', en: 'same as <code>aria-label</code> in Rate' },
      type: 'string',
      default: '???',
      value: [],
    },
  ],
  events: [
    { name: 'change', description: { cn: 'Triggers when rate value is changed', en: 'Triggers when rate value is changed' }, type: 'function', tsType: '' },
  ],
  exposes: [
    { name: 'setCurrentValue', description: { cn: 'set current value', en: 'set current value' }, type: 'function', tsType: '' },
    { name: 'resetCurrentValue', description: { cn: 'reset current value', en: 'reset current value' }, type: 'function', tsType: '' },
  ],
};
export default doc;
