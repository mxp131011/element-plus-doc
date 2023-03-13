import type { Context, Next } from 'koa';
import type { $CtxSuccess } from '../types/ctx';

/**
 * 添加处理成功或错误的方法
 * @param ctx - koa的上下文
 * @param next - koa的next方法
 */
export async function responseMdw(ctx: Context, next: Next) {
  ctx.state.success = (ctxSuccess?: $CtxSuccess) => {
    if (ctxSuccess) {
      ctx.body = { code: ctxSuccess.code || 200, data: ctxSuccess.data, message: ctxSuccess.message || 'success' };
    } else {
      ctx.body = { code: 200, message: 'success' };
    }
  };
  ctx.state.fail = ({ code = -1001, message = '未知错误', data = undefined }) => {
    ctx.body = { code, data, message };
  };
  await next();
}
