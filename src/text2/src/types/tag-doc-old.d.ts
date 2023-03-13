/** 文档 */
export declare namespace TagDocOld {
  /**
   * #属性文档类型
   */
  interface Attribute {
    /** #参数名称 */
    Name: string;
    /** #说明 */
    Description: string;
    /** #类型 */
    Type: string;
    /** #默认值 */
    Default: string;
  }

  /**
   * 事件文档类型
   */
  interface Event {
    /** #事件名称 */
    Name: string;
    /** #说明 */
    Description: string;
    /** #类型 */
    Type: 'function';
  }

  /**
   * 组件的插槽文档
   */
  interface Slot {
    /** #插槽名称 */
    Name: string;
    /** #说明 */
    Description: string;
  }

  /** 暴露出来的接口或方法文档类型 */
  interface Expose {
    /** #插槽名称 */
    Name: string;
    /** #说明 */
    Description: string;
    /** #类型 */
    Type: string;
  }
  /** 标签文档实例 */
  interface TagDocInstanceOld {
    attributes?: Attribute[];
    events?: Event[];
    slots?: Slot[];
    exposes?: Expose[];
  }
  /** 标签文档实例 */
  interface TagDocInstance {
    attributes?: Attribute[];
    events?: Event[];
    slots?: Slot[];
    exposes?: Expose[];
  }
}
