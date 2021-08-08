/*
 * @Description: 
 * @Author: 张健66
 * @Date: 2021-08-07 21:22:40
 * @LastEditTime: 2021-08-07 21:57:05
 * @LastEditors: 张健66
 */
const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db')
const conn = mysql.createConnection(MYSQL_CONF)
// 开始连接数据库
conn.connect()
function exct (sql) {
  return new Promise((reslove, reject) => {
    conn.query(sql, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      reslove(data)
    })
  })
}

module.exports = {
  exct
}