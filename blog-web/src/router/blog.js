/*
 * @Description: 
 * @Author: 张健66
 * @Date: 2021-08-06 21:59:38
 * @LastEditTime: 2021-08-08 10:11:03
 * @LastEditors: 张健66
 */
const { addBlog, delBlog, modifyBlog, getList, queryDetail } = require('../controller/blog')
const { getUrlParams } = require('../utils/handleParams')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogRouter = (req, res) => {
  const { method, url } = req
  const path = url.split('?')[0]

  // 获取信息列表
  if (method === 'GET' && path === '/api/blog/list') {
    const queryObj = getUrlParams(req.url)
    const result = getList(queryObj.author, queryObj.keyword)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }

  // 获取博客详情
  if (method === 'GET' && path === '/api/blog/detail') {
    const queryObj = getUrlParams(req.url)
    const result = queryDetail(queryObj.id)
    return result.then(blogItem => {
      console.log(blogItem)
      return new SuccessModel(blogItem)
    })
    // return new SuccessModel(blogData)
  }
  if (method === 'POST' && path === '/api/blog/add') {
    const result = addBlog(req.body)
    return result.then(addRes => {
      console.log(addRes)
      return new SuccessModel(addRes)
    })
  }
  if (method === 'POST' && path === '/api/blog/delete') {
    const result = delBlog(req.body.id)
    return result.then(delRes => {
      return new SuccessModel(delRes)
    })
  }
  if (method === 'POST' && path === '/api/blog/modify') {
    const { id, title, content } = req.body
    const result = modifyBlog(id, title, content)
    return result.then(updateResult => {
      return new SuccessModel(updateResult)
    })
  }
}

module.exports = handleBlogRouter