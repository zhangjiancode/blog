/*
 * @Description: 
 * @Author: 张健66
 * @Date: 2021-08-06 21:59:56
 * @LastEditTime: 2021-08-08 10:45:58
 * @LastEditors: 张健66
 */
const { loginCheck } = require('../controller/user')
const { SuccessModel } = require('../model/resModel')
const handleUserRouter = (req, res) => {
  const { method, url } = req
  const path = url.split('?')[0]
  if (method === 'POST' && path === '/api/user/login') {
    const { userName, pwd } = req.body
    const loginResult = loginCheck(userName, pwd)
    return loginResult.then(loginFlag => {
      return new SuccessModel(loginFlag)
    })
  }
}

module.exports = handleUserRouter