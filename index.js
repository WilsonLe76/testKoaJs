const Koa = require('koa');
const app = new Koa();

const routerRender = require('./router/router.js');
const routerError = require('./router/error.js');

app.use(routerRender.routes());
app.use(routerError.routes());
app.use(async ctx =>{
    if(ctx.status == 404){
        ctx.redirect('/not-found');
    }
});
app.use(routerRender.allowedMethods);
app.listen(3000);