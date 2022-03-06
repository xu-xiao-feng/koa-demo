/*
 * @Description:
 * @Author: fengzi
 * @LastEditors: fengzi
 * @Date: 2021-06-29 09:33:43
 * @LastEditTime: 2021-06-29 09:48:52
 * @Email: feng15019496884@163.com
 */
const Joi = require('joi');
const indexUserSchema = Joi.object({
  name: Joi.string().trim().required(),
  password: Joi.string().trim().required()
})

module.exports = {
  indexUserSchema
}
