import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/carousel.html',
  attributes: [
    {
      name: 'height',
      description: { cn: 'carousel 的高度', en: 'height of the carousel' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'initial-index',
      description: { cn: '初始状态激活的幻灯片的索引，从 0 开始', en: 'index of the initially active slide (starting from 0)' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'trigger',
      description: { cn: '指示器的触发方式', en: 'how indicators are triggered' },
      type: 'enum',
      default: "'hover'",
      value: ['hover', 'click'],
    },
    {
      name: 'autoplay',
      description: { cn: '是否自动切换', en: 'whether automatically loop the slides' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'interval',
      description: { cn: '自动切换的时间间隔，单位为毫秒', en: 'interval of the auto loop, in milliseconds' },
      type: 'number',
      default: '3000',
      value: [],
    },
    {
      name: 'indicator-position',
      description: { cn: '指示器的位置', en: 'position of the indicators' },
      type: 'enum',
      default: '—',
      value: ['outside', 'none'],
    },
    {
      name: 'arrow',
      description: { cn: '切换箭头的显示时机', en: 'when arrows are shown' },
      type: 'enum',
      default: "'hover'",
      value: ['always', 'hover', 'never'],
    },
    {
      name: 'type',
      description: { cn: 'carousel 的类型', en: 'type of the Carousel' },
      type: 'enum',
      default: '—',
      value: ['card', ''],
    },
    {
      name: 'loop',
      description: { cn: '是否循环显示', en: 'display the items in loop' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'direction',
      description: { cn: '展示的方向', en: 'display direction' },
      type: 'enum',
      default: "'horizontal'",
      value: ['horizontal', 'vertical'],
    },
    {
      name: 'pause-on-hover',
      description: { cn: '鼠标悬浮时暂停自动切换', en: 'pause autoplay when hover' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
  ],
  events: [
    {
      name: 'change',
      description: { cn: '幻灯片切换时触发', en: 'triggers when the active slide switches' },
      type: 'function',
      param: {
        cn: 'newIndex目前激活的幻灯片的索引，oldIndex原幻灯片的索引',
        en: 'newIndex: index of the new active slide, oldIndex:index of the old active slide',
      },
    },
  ],
  exposes: [
    {
      name: 'setActiveItem',
      description: { cn: '手动切换幻灯片', en: 'manually switch slide' },
      type: 'function',
      param: {
        cn: 'val:需要切换的幻灯片的索引，从 0 开始；或相应 el-carousel-item 的 name 属性值',
        en: 'val:index of the slide to be switched to, starting from 0; or the name of corresponding el-carousel-item',
      },
    },
    {
      name: 'prev',
      description: { cn: '切换至上一张幻灯片', en: 'switch to the previous slide' },
      type: 'function',
      param: '',
    },
    {
      name: 'next',
      description: { cn: '切换至下一张幻灯片', en: 'switch to the next slide' },
      type: 'function',
      param: '',
    },
  ],
};
export default doc;
