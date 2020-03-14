import * as Koa from 'koa';
import socketIo from './socket.io';
import * as socket from 'socket.io';
const app = new Koa();
socketIo(app, socket);

app.use((ctx: any) => {
    ctx.body = {
        code: 0,
        message: 'koa server is running'
    };
});
app.listen(3005);