const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const index = require('./app/routes/index')
const log4js = require('./app/middlewares/log')
const responseUnite = require('./app/middlewares/response')
const errorUnite = require('./app/middlewares/error')
const cors = require('@koa/cors');
const utils = require('./app/common/utils');
const moment = require('moment');
const compose = require('koa-compose')

// error handler---------------> 错误处理程序
onerror(app)

// 各种配置信息
app.context.utils = utils
app.context.moment = moment

// // middlewares ----------------> 中间件
// // 格式化request的body
// app.use(bodyparser({
//   enableTypes: ['json', 'form', 'text']
// }))
// // 格式化response的body
// app.use(json())
// // 控制台打印请求日志
// app.use(logger())
// // 处理静态文件
// app.use(require('koa-static')(__dirname + '/public'))
// // 模板渲染,使用pug模板引擎
// app.use(views(__dirname + '/app/views', {
//   extension: 'pug'
// }))
// // 输出日志文件
// app.use(log4js())
// // 跨域设置
// app.use(cors());
// // 统一返回
// app.use(responseUnite())
// app.use(errorUnite())
// // routes ---------------------> 加载路由,方法
// app.use(index.routes(), index.allowedMethods())

app.use(compose([
  bodyparser({
    enableTypes: ['json', 'form', 'text']
  }),
  json(),
  logger(),
  require('koa-static')(__dirname + '/public'),
  views(__dirname + '/app/views', {
    extension: 'pug'
  }),
  log4js(),
  cors(),
  responseUnite(),
  errorUnite(),
  index.routes(),
  index.allowedMethods()
]));


// error-handling--------------> 错误捕捉
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
