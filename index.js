const Koa = require('koa');
const app = new Koa();

const routerRender = require('./router/router');

app.use(routerRender.routes());
app.use(routerRender.allowedMethods);

app.listen(3000);