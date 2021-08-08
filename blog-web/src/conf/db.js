/*
 * @Description: 
 * @Author: 张健66
 * @Date: 2021-08-07 21:29:59
 * @LastEditTime: 2021-08-07 21:33:31
 * @LastEditors: 张健66
 */
const env = process.env.NODE_ENV // 查看当前环境
let MYSQL_CONF
if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'my-blog'
  }
}

if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'my-blog'
  }
}

module.exports = {
  MYSQL_CONF
}