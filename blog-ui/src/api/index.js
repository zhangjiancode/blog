/*
 * @Description: 
 * @Author: 张健66
 * @Date: 2021-08-12 15:53:25
 * @LastEditTime: 2021-08-13 15:34:51
 * @LastEditors: 张健66
 */
import http from './http'
let baseUrl = 'http://localhost:3000/'

function login (data) {
  return http({
    method:'post',
    url: baseUrl + 'api/user/login',
    data
  })
}

function getList (params) {
  return http({
    method:'get',
    url: baseUrl + 'api/blog/list',
    params
  })
}

export {
  login,
  getList
}