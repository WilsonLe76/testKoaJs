const Router = require('koa-router');
const router = new Router();

router.get('/not-found', errorMessage);

function errorMessage(ctx){
    ctx.body = 'Sorry we do not have this resource.';
}

module.exports = router;