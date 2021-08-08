/*
 * @Description: 
 * @Author: 张健66
 * @Date: 2021-08-06 22:18:46
 * @LastEditTime: 2021-08-07 16:49:13
 * @LastEditors: 张健66
 */
/**
 * @Author: 张健66
 * @description: 获取get请求url地址栏参数，并转换成key-value的对象
 * @param  {String} url-get请求地址
 * @return {Object} 返回地址栏参数的键值对
 */
const getUrlParams = (url) => {
  const urlSearchParams = new URLSearchParams(url.split('?')[1])
  const params = {}
  for (let name of urlSearchParams.keys()) {
    params[name] = urlSearchParams.get(name)
  }
  return params
}
/**
 * @Author: 张健66
 * @description: 异步获取post请求的data参数
 * @param  {Object} req-request请求头
 * @return {*} 返回promise的结果
 */
const getPostData = (req) => {
  return new Promise((reslove, reject) => {
    if(req.method !== 'POST') {
      reslove({})
      return
    }
    if (!(req.headers['content-type'].includes('application/json'))) {
      reslove({})
      return
    }
    let resData = ''
    req.on('data', chunk => {
      resData += chunk
    })
    req.on('end', () => {
      if (!resData) {
        reslove({})
        return
      }
      reslove(JSON.parse(resData))
    })
  })

}
module.exports = { getUrlParams, getPostData }