import { ElDocument } from "@/document";
import { DocumentAttribute } from "@/document";
import { DocumentMethod } from "@/document";
import { DocumentEvent } from "@/document";
import { DocumentSlot } from "@/document";

export const attributes: DocumentAttribute[] = [
  {
    name: "height",
    description: "滚动条高度",
    type: "string / number",
    value: "—",
    default: "—",
  },
  {
    name: "max-height",
    description: "滚动条最大高度",
    type: "string / number",
    value: "—",
    default: "-",
  },
  {
    name: "native",
    description: "是否使用原生滚动条样式",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "wrap-style",
    description: "包裹容器的自定义样式",
    type: "string",
    value: "—",
    default: "-",
  },
  {
    name: "wrap-class",
    description: "包裹容器的自定义类名",
    type: "string",
    value: "-",
    default: "—",
  },
  {
    name: "view-style",
    description: "视图的自定义样式",
    type: "string",
    value: "—",
    default: "-",
  },
  {
    name: "view-class",
    description: "视图的自定义类名",
    type: "string",
    value: "—",
    default: "-",
  },
  {
    name: "noresize",
    description:
      "不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "tag",
    description: "视图的元素标签",
    type: "string",
    value: "—",
    default: "div",
  },
  {
    name: "always",
    description: "滚动条总是显示",
    type: "boolean",
    value: "—",
    default: "false",
  },
  {
    name: "min-size",
    description: "滚动条最小尺寸",
    type: "number",
    value: "—",
    default: "20",
  },
];

export const methods: DocumentMethod[] = [
  {
    name: "scrollTo",
    description: "滚动到一组特定坐标",
    parameter: "(options: ScrollToOptions | number, yCoord?: number)",
  },
  {
    name: "setScrollTop",
    description: "设置滚动条到顶部的距离",
    parameter: "（scrollTop: number）",
  },
  {
    name: "setScrollLeft",
    description: "设置滚动条到左边的距离",
    parameter: "(scrollLeft: number)",
  },
  { name: "update", description: "手动更新滚动条状态", parameter: "-" },
];

export const events: DocumentEvent[] = [
  {
    name: "scroll",
    description: "滚动时触发的事件",
    parameter: "滚动距离 { scrollLeft, scrollTop }",
  },
];

export const slots: DocumentSlot[] = [
  { name: "—", description: "自定义默认内容" },
];

export const document: ElDocument = { attributes, methods, events, slots };

export default document;
