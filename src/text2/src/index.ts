import Koa, { type Context } from 'koa';
import { koaBody } from 'koa-body';
import Router from '@koa/router';
import { getErrorData } from './utils/utils';
import { responseMdw } from './middlewares/response';
import { trimAllDoc } from './controller/uploadFile';

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 8083;

const app = new Koa();
const router = new Router();

app.use(koaBody({ multipart: true }));
app.use(responseMdw); // 处理输出的一个中间件(防止非法的输出)
app.use(router.routes());
app.use(router.allowedMethods());

/**
 * 上传源代码
 */
router.get('/', async (ctx: Context) => {
  try {
    trimAllDoc();
    console.log('aaa====');
  } catch (error) {
    console.log('error====', error);
    ctx.state.fail(getErrorData(error));
  }
});

/** 捕获系统错误 */
app.on('error', (error: unknown, ctx: Context) => {
  console.log('打印====', error);
  ctx.body = getErrorData(error);
});

app.listen(PORT, () => {
  console.log(`请求地址： http://localhost:${PORT}`, `env: ${ENV || ''}`);
});
