const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const path = require('path');
const render = require('koa-ejs');

const app = new Koa();
const router = new KoaRouter();

// replace with db
const things = ['My Family', 'Programming', 'You'];

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

// routes
router.get('/', index);

// list of things
async function index(ctx) {
  await ctx.render('index', {
    title: 'Things I Love:',
    things: things
  });
}

router.get('/test', ctx => (ctx.body = 'Hello Test'));

// router middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('Server started!'))
