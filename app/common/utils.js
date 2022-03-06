/*
 * @Description:
 * @Author: fengzi
 * @LastEditors: fengzi
 * @Date: 2021-06-29 10:17:20
 * @LastEditTime: 2021-06-29 10:20:34
 * @Email: feng15019496884@163.com
 */
const assert = require('assert');

const throwError = (code, message) => {
  const err = new Error(message);
  err.code = code;
  throw err;
};

module.exports = {
  assert,
  throwError
};
