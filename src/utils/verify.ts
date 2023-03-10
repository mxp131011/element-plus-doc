/**
 * 是否显示属性值建议
 */
export function isAttrValSuggest(attr: string): boolean {
  return Boolean(attr && attr !== 'v-bind' && attr !== 'v-model' && attr !== 'v-on');
}

/**
 * 是否显示属性建议
 * @param tag - 标签
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
