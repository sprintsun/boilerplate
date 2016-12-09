const koa = require('koa')
const serve = require('koa-static')
const app = koa()

app.use(serve('./app'))

app.listen(8080)
console.log('listening on port 8080...')

module.export = app
