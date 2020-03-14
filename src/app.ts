import * as Koa from 'koa';
import * as Router from 'koa-router';

const router = new Router();
const app = new Koa();

router.get('/test', (ctx,next) => {
    next();
    ctx.body = {
        code: 0,
        message: 'test route'
    };
})

router.all("*", async (ctx) => {
    ctx.body = {
        code: 0,
        message: 'koa server is running'
    };
});


app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);