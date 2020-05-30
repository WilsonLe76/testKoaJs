const Router = require('koa-router');
const router = new Router();

/*router.get('/', async (ctx, next) => {
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
})*/

router.get('/', getTest);
router.get('/:name/:id', getInformation);
router.post('/', postTest);
router.post('/:name/:id', postInformation);
router.post('/delete/:id', deleteInfomation);
router.put('/put', putTest);
router.put('/:name/:id', postInformation);



function getTest (ctx){
    ctx.body = 'Hello Get';
}
function getInformation (ctx){
    ctx.body = 'Hello ' + ctx.params.name + ' id: ' + ctx.params.id;
}
function postTest (ctx){
    ctx.body = 'Hello Post';
}
function postInformation (ctx){
    ctx.body = 'Hello ' + ctx.params.name + ' id: ' + ctx.params.id;
}
function deleteInfomation (ctx){
    ctx.body = 'Delete information by id: ' + ctx.params.id;
}
function putTest (ctx){
    ctx.body = 'Hello Put';
}

module.exports = router;