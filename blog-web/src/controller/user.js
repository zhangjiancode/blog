/*
 * @Description: 用户相关的接口
 * @Author: 张健66
 * @Date: 2021-08-07 16:56:40
 * @LastEditTime: 2021-08-08 10:45:50
 * @LastEditors: 张健66
 */
const { exct } = require('../db/mysql')
const { login } = require('../sqlscript/user')
const loginCheck = (username, pwd) => {
  return exct(login(username, pwd)).then(loginRes => {
    return loginRes.length>0
  })
}

module.exports = {
  loginCheck
}