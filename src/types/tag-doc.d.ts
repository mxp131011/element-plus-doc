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
    type: string[] | string;
    /** #默认值 */
    default: string;
    value?: string[] | string;
  }

  /**
   * 事件文档类型
   */
  interface Event {
    /** #事件名称 */
    name: string;
    /** #说明 */
    description: { cn: string; en: string };
    /** #类型 */
    type: string;
  }

  /**
   * 组件的插槽文档
   */
  interface Slot {
    /** #插槽名称 */
    name: string;
    /** #说明 */
    description: { cn: string; en: string };
  }

  /** 暴露出来的接口或方法文档类型 */
  interface Expose {
    /** #插槽名称 */
    name: string;
    /** #说明 */
    description: { cn: string; en: string };
    /** #类型 */
    type: string;
  }

  /** 标签文档实例 */
  interface TagDocInstance {
    attributes?: Attribute[];
    events?: Event[];
    slots?: Slot[];
    exposes?: Expose[];
  }
}
