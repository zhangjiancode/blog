/*
 * @Description: 
 * @Author: 张健66
 * @Date: 2021-08-05 20:52:21
 * @LastEditTime: 2021-08-08 17:05:31
 * @LastEditors: 张健66
 */
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const { getPostData } = require('./src/utils/handleParams')

const ERROR_MSG = '暂无该请求'

const serverHandler = function (req, res) {
  res.writeHead('200', { 'Content-Type': 'application/json;charset=utf-8' })
  // 获取cookie
  req.cookie = {}
  const cookieStr = req.headers.cookie || ''
  cookieStr.split(';').forEach(v=>{
    if(!v) return
    req.cookie[v.split('=')[0]] = v.split('=')[1]
  })
  getPostData(req).then(postData => {
    console.log(postData)
    req.body = postData
    const resultBlogData = handleBlogRouter(req, res)
    if (resultBlogData) {
      resultBlogData.then(blogData => {
        res.end(JSON.stringify(blogData))
      })
      return
    }
    const userData = handleUserRouter(req, res)
    if (userData) {
      userData.then(user=>{
        res.end(JSON.stringify(user))
      })
      return
    }
    res.writeHead('404', { 'Content-type': 'text/plain' })
    res.write('404 Not Found\n')
    res.end()
  })

}

module.exports = serverHandler
