import type { OfficialWebsite } from '@/types/index';

type baseType =
  | '[Date, Date]'
  | '[number, number]'
  | '[string, string]'
  | 'array'
  | 'boolean'
  | 'Component'
  | 'CSSProperties'
  | 'CSSSelector'
  | 'Date'
  | 'enum'
  | 'HTMLElement'
  | 'number'
  | 'object'
  | 'regexp'
  | 'string'
  | 'symbol'
  | 'VNode'
  | `function(${string}`
  | `function`;

/** 文档 */
export declare namespace TagDoc {
  /**
   * #属性文档类型
   */
  interface Attribute {
    /** #参数名称 */
    name: string;
    /** #说明 */
    description: { cn: string; en: string };
    /** #类型 */
    type: baseType | baseType[];
    /** #默认值 */
    default: string;
    /** #可选值 */
    value: (string | null)[];
  }

  /**
   * 事件文档类型
   */
  type Event = {
    /** #事件名称 */
    name: string;
    /** #说明 */
    description: { cn: string; en: string };
    /** #类型 */
    type: 'function';
    /** # 回调参数 */
    param: string | { cn: string; en: string };
  };

  /**
   * 组件的插槽文档
   */
  interface Slot {
    /** #插槽名称 */
    name: string;
    /** #说明 */
    description: { cn: string; en: string };
    /** #子标签 */
    subtags?: string[];
  }

  /** 暴露出来的接口或方法文档类型 */
  type Expose = {
    /** #插槽名称 */
    name: string;
    /** #说明 */
    description: { cn: string; en: string };
    /** #参数 */
    param: string | { cn: string; en: string };
    /** #类型 */
    type: 'function' | 'object';
  };

  /** 指令 */
  type Directive = { name: string; list: Attribute[]; url: OfficialWebsite };

  /** 标签文档实例 */
  interface TagDocInstance {
    url: `component/${string}-api` | `component/${string}-attributes` | `component/${string}-slots` | `component/${string}-属性` | `component/${string}.html`;
    attributes?: Attribute[];
    events?: Event[];
    slots?: Slot[];
    exposes?: Expose[];
    childAttributes?: { name: string; list: Attribute[] }[];
  }
}
