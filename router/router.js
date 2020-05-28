const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = 'Get Data';
});

router.post('/post', async (ctx, next) => {
    ctx.body = 'Post Data';
});

router.put('/put', async (ctx, next) => {
    ctx.body = 'Put Data';
})

router.post('/delete', async(ctx, next) => {
    ctx.body = 'Delete All Data';
})

module.exports = router;