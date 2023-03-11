import type { BaseUrl } from '@/types/index';

/**
 * 是否显示属性值建议
 */
export function isAttrValSuggest(attr: string): boolean {
  return Boolean(attr && attr !== 'v-bind' && attr !== 'v-model' && attr !== 'v-on');
}

/**
 * 是否显示属性建议
 * @param text - 标签
 */
export function isAttrSuggest(text: string): boolean {
  return Boolean(/((v-bind)?:)?[\w-]*$/.test(text));
}

/**
 * 是否显示事件建议
 */
export function isEventSuggest(text: string): boolean {
  return Boolean(/(@|(v-on:))[\w-]*$/.test(text));
}

/**
 * 是否显示标签建议
 */
export function isTagSuggest(tag: string, text: string): boolean {
  return !tag && /<([\w-]*)$/.test(text);
}

/**
 * 验证网址合法性
 * @param {string} str - 网址
 */
export function verifyUrl(str: string | undefined): str is BaseUrl {
  return Boolean(str && /^https:\/\/([\w-]+\.)+[\w-]+(\/[\w-./]*)?\/$/.test(str));
}
