/*
 * @Description:
 * @Author: fengzi
 * @LastEditors: fengzi
 * @Date: 2021-06-28 09:32:31
 * @LastEditTime: 2021-06-28 19:26:29
 * @Email: feng15019496884@163.com
 */
const log4js = require('log4js');
// 对 category 和 appenders 进行配置
log4js.configure({
  replaceConsole: true,
  appenders: {
    cheese: {
      type: 'file',
      filename: './logs/test.log',
      layout: {
        type: "pattern",
        pattern: '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}'
      },
      encoding: 'utf-8',
      backups: 5,
      compress: false,
      keepFileExt: true,
    },
  },
  categories: {
    default: {
      appenders: ['cheese'],
      // 设置权重
      level: 'debug'
    },
  }
})
let logger = log4js.getLogger();

module.exports = () => {
  return async (ctx, next) => {
    await next()
    logger.info('this is info');
  }
}
