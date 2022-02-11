var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = '<h1>Index Sayfasina Hosgeldiniz</h1>';
});

router.get('/hakkimda', (ctx, next) => {
    ctx.body = '<h1>Hakkimda Sayfasina Hosgeldiniz</h1>';
});

router.get('/iletisim', (ctx, next) => {
    ctx.body = '<h1>Iletisim Sayfasina Hosgeldiniz</h1>';
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);