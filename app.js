const Koa = require('koa');

const app = new Koa();

app.use(async ctx => ctx.body = 'Hi');

app.listen(3000, () => console.log('Server started!'))
