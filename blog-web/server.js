/*
 * @Description:
 * @Author: 张健66
 * @Date: 2021-08-05 21:39:05
 * @LastEditTime: 2021-08-10 22:21:06
 * @LastEditors: 张健66
 */
const http = require('http')
const serverHandler = require('./serverHandler')

const PORT = 3000
http.createServer(serverHandler).listen(PORT,()=>{
  console.log('server on localhost:'+PORT)
})