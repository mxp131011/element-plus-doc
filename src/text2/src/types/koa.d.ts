import { type $CtxBody, type $CtxSuccess } from './ctx';

declare module 'koa' {
  interface Response {
    status: number;
  }
  interface DefaultState {
    success(ctxBody?: $CtxSuccess): void;
    fail(ctxBody: $CtxBody): void;
  }
  interface ContextDelegatedResponse {
    body: $CtxBody;
  }
}
