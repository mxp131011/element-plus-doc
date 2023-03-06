export type ExtensionLanguage = 'en-US' | 'zh-CN';
export interface ExtensionConfigutation {
  language: ExtensionLanguage;
}

export interface TagObject {
  text: string;
  offset: number;
}
