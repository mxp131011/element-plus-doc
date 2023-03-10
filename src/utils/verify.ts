/**
 * 是否显示属性值建议
 * @param tag - 标签
 */
export function isAttrValSuggest(tag: string, attr: string): boolean {
  return Boolean(tag && attr && attr !== 'v-bind' && attr !== 'v-model' && attr !== 'v-on');
}

/**
 * 是否显示属性建议
 * @param tag - 标签
 */
export function isAttrSuggest(tag: string, text: string): boolean {
  return Boolean(tag && /((v-bind)?:)?[\w-]*$/.test(text));
}

/**
 * 是否显示事件建议
 * @param tag - 标签
 */
export function isEventSuggest(tag: string, text: string): boolean {
  return Boolean(tag && /(@|(v-on:))[\w-]*$/.test(text));
}

/**
 * 是否显示标签建议
 */
export function isTagSuggest(tag: string, text: string): boolean {
  return !tag && /<([\w-]*)$/.test(text);
}
