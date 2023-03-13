export type $CtxBody = {
  code: number;
  message: string;
  data?: unknown;
};
export type $CtxSuccess<T = unknown> = {
  code?: number;
  message?: string;
  data?: T;
};
