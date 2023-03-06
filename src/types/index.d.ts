import { type CnDocument } from '@/document/zh-CN/index';
import { type EnDocument } from '@/document/en-US/index';

export type ExtensionLanguage = 'en-US' | 'zh-CN';
export interface ExtensionConfigutation {
  language: ExtensionLanguage;
}

export interface TagObject {
  text: string;
  offset: number;
}

/**
 * 文档属性类型
 * @interface DocumentAttribute
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
 * 文档事件类型
 * @interface DocumentEvent
 */
export interface DocumentEvent {
  // 事件名称
  name: string;
  // 说明
  description: string;
  // 参数
  parameter: string;
}

/**
 * 文档方法类型
 * @interface DocumentMethod
 */
export interface DocumentMethod {
  // 方法名称
  name: string;
  // 说明
  description: string;
  // 参数
  parameter: string;
}

/**
 * 文档插槽类型
 * @interface DocumentSlot
 */
export interface DocumentSlot {
  // 插槽名称
  name: string;
  // 说明
  description: string;
}

/**
 * 文档范围方法类型
 * @interface DocumentScopedSlot
 */
export type DocumentScopedSlot = DocumentSlot;

/**
 * 基础文档接口
 * @interface BaseDocument
 */
export interface BaseDocument {
  attributes?: DocumentAttribute[];
  events?: DocumentEvent[];
  methods?: DocumentMethod[];
  scopedSlots?: DocumentScopedSlot[];
  slots?: DocumentSlot[];
}

/**
 * ElementUI文档类型
 * 用于扩展具有其他字段的文档类型
 * @interface ElDocument
 * @augments {BaseDocument}
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
  'zh-CN': CnDocument;
  'en-US': EnDocument;
};
export type LocalDocumentKey<T extends ExtensionLanguage = 'zh-CN'> = keyof LocalDocument[T];
