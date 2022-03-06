/*
 * @Description:
 * @Author: fengzi
 * @LastEditors: fengzi
 * @Date: 2021-06-28 09:06:35
 * @LastEditTime: 2021-06-29 13:14:25
 * @Email: feng15019496884@163.com
 */
const { login } = require('../services/user')
const { indexUserSchema } = require('../schema/user')

const auth = async ctx => {
  // try {
  //   await indexUserSchema.validateAsync(ctx.query)
  //   console.log('验证通过')
  // } catch (error) {
  //   console.log(error)
  //   ctx.res.fail({ code: error.code, msg: error.message });
  //   return
  // }
  const validRes = indexUserSchema.validate(ctx.query)
  console.log(ctx.moment().toString())
  if (validRes.error) {
    ctx.utils.assert('   ', ctx.utils.throwError(400, validRes.error.message))
  }
  ctx.body = await login(ctx.query)
}
module.exports = {
  auth
}
