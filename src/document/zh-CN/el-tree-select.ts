import { ElDocument } from "@/document";
import { DocumentAttribute } from "@/document";

export const attributes: DocumentAttribute[] = [
  {
    name: "tree",
    description: "el-tree 的 原始属性、方法、事件、插槽",
    type: "-",
    value: "-",
    default: "-",
  },
  {
    name: "select",
    description: "el-select 的 原始属性、方法、事件、插槽",
    type: "-",
    value: "—",
    default: "-",
  },
];

export const document: ElDocument = { attributes };

export default document;
