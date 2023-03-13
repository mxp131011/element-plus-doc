import type { $CtxBody } from '../types/ctx';

/**
 * 是否为纯对象 不包含 Array,undefined function 等等
 */
export function myIsObj(obj: unknown): obj is Record<string, unknown> {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * 得到一个 符合 $CtxBody 类型的对象
 * @param error - $CtxBody类型的对象
 * @param defCtxBody - 默认的一个$CtxBody类型对象
 */
export function getErrorData(error: unknown, defCtxBody?: $CtxBody): $CtxBody {
  let code = defCtxBody && !isNaN(Number(defCtxBody.code)) ? Number(defCtxBody.code) : -1000;
  let message = defCtxBody && typeof defCtxBody.message === 'string' ? defCtxBody.message : '系统错误，-ST1000';
  let data = defCtxBody?.data;

  if (myIsObj(error)) {
    code = isNaN(Number(error.code)) ? code || -1000 : Number(error.code);
    message = typeof error.message === 'string' ? error.message : message || '系统错误，-ST1000';
    data = error.data !== undefined ? error.data : data;
    return { code, message, data };
  }

  return { code, message, data };
}
