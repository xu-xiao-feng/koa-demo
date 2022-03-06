/*
 * @Description:
 * @Author: fengzi
 * @LastEditors: fengzi
 * @Date: 2021-06-28 23:37:10
 * @LastEditTime: 2021-06-28 23:51:55
 * @Email: feng15019496884@163.com
 */
const response = () => {
  return async (ctx, next) => {
    ctx.res.fail = ({ code, data, msg }) => {
      ctx.body = {
        code,
        data,
        msg,
      };
    };

    ctx.res.success = msg => {
      ctx.body = {
        code: 200,
        data: ctx.body,
        msg: msg || 'success',
      };
    };

    await next();
  };
};

module.exports = response;
