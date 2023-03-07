export type ExtensionLanguage = 'en-US' | 'zh-CN';
export interface ExtensionConfigutation {
  language: ExtensionLanguage;
}

export interface TagObject {
  text: string;
  offset: number;
}

/**
 * 组件的属性文档
 */
export interface DocumentAttribute {
  // 参数名称
  name: string;
  // 说明
  description: string;
  // 类型
  type: string;
  // 可选值
  value: string;
  // 默认值
  default: any;
}

/**
 * 组件的事件文档
 */
export interface DocumentEvent {
  /** #事件名称 */
  name: string;
  /** #说明 */
  description: string;
  /** #参数 */
  parameter: string;
}

/**
 * 组件的方法文档
 */
export interface DocumentMethod {
  /** #方法名称 */
  name: string;
  /** #说明 */
  description: string;
  /** #参数 */
  parameter: string;
}

/**
 * 组件的插槽文档
 */
export interface DocumentSlot {
  /** #插槽名称 */
  name: string;
  /** #说明 */
  description: string;
}

/**
 * 文档范围方法
 */
export type DocumentScopedSlot = DocumentSlot;

/**
 * 基础文档接口
 */
export interface BaseDocument {
  attributes?: DocumentAttribute[];
  events?: DocumentEvent[];
  methods?: DocumentMethod[];
  scopedSlots?: DocumentScopedSlot[];
  slots?: DocumentSlot[];
}

/**
 * 用于扩展具有其他字段的文档类型
 */
export interface ElDocument extends BaseDocument {
  pickerOptions?: DocumentAttribute[];
  shortcuts?: DocumentAttribute[];
  selectOptions?: DocumentAttribute[];
  props?: DocumentAttribute[];
}

/**
 * 本地化文档类型
 */

export type LocalDocument = {
  'zh-CN': Record<string, ElDocument>;
  'en-US': Record<string, ElDocument>;
};
