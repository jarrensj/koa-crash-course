const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const path = require('path');
const render = require('koa-ejs');

const app = new Koa();
const router = new KoaRouter();

// json prettier middleware
app.use(json());

// simple middleware example
// app.use(async ctx => ctx.body = {msg: 'hi'});

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: false
});

// index
router.get('/', async ctx => {
  await ctx.render('index');
});

router.get('/test', ctx => (ctx.body = 'Hello Test'));

// router middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('Server started!'))
