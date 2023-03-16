export type BaseLanguage = 'en-US' | 'zh-CN';

/** 官网基础路径 （必须以https或http开头,斜杠结尾） */
export type BaseUrl = `https://${string}/`;

/** 官网 */
export type OfficialWebsite =
  | `https://${string}component/${string}-api`
  | `https://${string}component/${string}-attributes`
  | `https://${string}component/${string}-slots`
  | `https://${string}component/${string}-属性`
  | `https://${string}component/${string}.html`;
