const Koa = require('koa');
const json = require('koa-json');

const app = new Koa();

app.use(json());

app.use(async ctx => ctx.body = {msg: 'hi'});

app.listen(3000, () => console.log('Server started!'))
