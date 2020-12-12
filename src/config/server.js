const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

module.exports = () => {


router.get('/', ctx => {
    const { response } = ctx 
    response.body = { message: 'Hello Would '}
})

app.use(router.routes())

app.listen(3000, console.log('Server is run in port'))

}


