import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: 'component/drawer.html',
  attributes: [
    {
      name: 'model-value',
      description: { cn: '是否显示 Drawer', en: 'Should Drawer be displayed' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'append-to-body',
      description: {
        cn: 'Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 `true`',
        en: 'Controls should Drawer be inserted to DocumentBody Element, nested Drawer must assign this param to <strong>true</strong>',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'lock-scroll',
      description: { cn: '是否在 Drawer 出现时将 body 滚动锁定', en: 'whether scroll of body is disabled while Drawer is displayed' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'before-close',
      description: {
        cn: '关闭前的回调，会暂停 Drawer 的关闭。 传入一个方法（function(done)，done 用于关闭 Drawer）',
        en: 'If set, closing procedure will be halted。 （function(done) (done is function type that accepts a boolean as parameter, calling done with true or without parameter will abort the close procedure)）',
      },
      type: 'function',
      default: '—',
      value: [],
    },
    {
      name: 'close-on-click-modal',
      description: { cn: '是否可以通过点击 modal 关闭 Drawer', en: 'whether the Drawer can be closed by clicking the mask' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'close-on-press-escape',
      description: { cn: '是否可以通过按下 ESC 关闭 Drawer', en: 'Indicates whether Drawer can be closed by pressing ESC' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'open-delay',
      description: { cn: 'Drawer 打开的延时时间，单位毫秒', en: 'Time(milliseconds) before open' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'close-delay',
      description: { cn: 'Drawer 关闭的延时时间，单位毫秒', en: 'Time(milliseconds) before close' },
      type: 'number',
      default: '0',
      value: [],
    },
    {
      name: 'custom-class',
      description: { cn: 'Drawer 的自定义类名 （已废弃）', en: 'Extra class names for Drawer (deprecated)' },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'destroy-on-close',
      description: {
        cn: '控制是否在关闭 Drawer 之后将子元素全部销毁',
        en: 'Indicates whether children should be destroyed after Drawer closed',
      },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'modal',
      description: { cn: '是否需要遮罩层', en: 'Should show shadowing layer' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'direction',
      description: { cn: 'Drawer 打开的方向', en: "Drawer's opening direction" },
      type: 'enum',
      default: 'rtl',
      value: ['rtl', 'ltr', 'ttb', 'btt'],
    },
    {
      name: 'show-close',
      description: { cn: '是否显示关闭按钮', en: 'Should show close button at the top right of Drawer' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'size',
      description: {
        cn: "Drawer 窗体的大小, 当使用 `number` 类型时, 以像素为单位, 当使用 `string` 类型时, 请传入 'x%', 否则便会以 number 类型解释 ",
        en: "Drawer's size, if Drawer is horizontal mode, it effects the width property, otherwise it effects the height property, when size is `number` type, it describes the size by unit of pixels; when size is `string` type, it should be used with `x%` notation, other wise it will be interpreted to pixel unit",
      },
      type: ['string', 'number'],
      default: "'30%'",
      value: [],
    },
    {
      name: 'title',
      description: {
        cn: 'Drawer 的标题，也可通过具名 slot 传入',
        en: "Drawer's title, can also be set by named slot, detailed descriptions can be found in the slot form",
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'withHeader',
      description: {
        cn: '控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效',
        en: "Flag that controls the header section's existance, default to true, when withHeader set to false, both `title attribute` and `title slot` won't work",
      },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'modal-class',
      description: { cn: '遮罩层的自定义类名', en: 'Extra class names for shadowing layer' },
      type: 'string',
      default: '-',
      value: [],
    },
    {
      name: 'z-index',
      description: { cn: '设置 z-index', en: 'set z-index' },
      type: 'number',
      default: '-',
      value: [],
    },
  ],
  events: [
    {
      name: 'open',
      description: { cn: 'Drawer 打开的回调', en: 'Triggered before Drawer opening animation begins' },
      type: 'function',
      param: '',
    },
    {
      name: 'opened',
      description: { cn: 'Drawer 打开动画结束时的回调', en: 'Triggered after Drawer opening animation ended' },
      type: 'function',
      param: '',
    },
    {
      name: 'close',
      description: { cn: 'Drawer 关闭的回调', en: 'Triggered before Drawer closing animation begins' },
      type: 'function',
      param: '',
    },
    {
      name: 'closed',
      description: { cn: 'Drawer 关闭动画结束时的回调', en: 'Triggered after Drawer closing animation ended' },
      type: 'function',
      param: '',
    },
  ],
  exposes: [
    {
      name: 'handleClose',
      description: {
        cn: '用于关闭 Drawer, 该方法会调用传入的 `before-close` 方法.',
        en: 'In order to close Drawer, this method will call `before-close`.',
      },
      type: 'function',
      param: '',
    },
  ],
  slots: [
    {
      name: 'default',
      description: { cn: 'Drawer 的内容', en: "Drawer's Content" },
    },
    {
      name: 'header',
      description: {
        cn: 'Drawer 标题的内容；会替换标题部分，但不会移除关闭按钮。',
        en: 'Drawer header section; Replacing this removes the title, but does not remove the close button.',
      },
    },
    {
      name: 'title',
      description: { cn: '与 header 作用相同 请使用 header (已废弃)', en: 'Works the same as the header slot. Use that instead. (deprecated)' },
    },
    {
      name: 'footer',
      description: { cn: 'Drawer 页脚部分', en: 'Drawer footer Section' },
    },
  ],
};
export default doc;
