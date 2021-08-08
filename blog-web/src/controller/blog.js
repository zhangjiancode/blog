/*
 * @Description: 
 * @Author: 张健66
 * @Date: 2021-08-07 10:00:43
 * @LastEditTime: 2021-08-08 10:19:23
 * @LastEditors: 张健66
 */
const { getBlogList, getBlogDetail, addBlogItem, deleteBlog, updateBlog } = require('../sqlscript/blog')
const { exct } = require('../db/mysql')
const addBlog = (blogItem) => {
  // todo sql add
  return exct(addBlogItem(blogItem.author, blogItem.title, blogItem.content)).then(insertData => {
    console.log(insertData)
    return {
      id: insertData.insertId
    }
  })
}
const delBlog = (id) => {
  // todo sql add
  return exct(deleteBlog(id))
}
const modifyBlog = (id, title, content) => {
  return exct(updateBlog(id, title, content)).then(modifyRes => {
    return modifyRes.affectedRows > 0
  })
}
const getList = (author, keyword) => {
  return exct(getBlogList(author, keyword))
}
const queryDetail = (id) => {
  return exct(getBlogDetail(id)).then(res => {
    return res[0]
  })
}

module.exports = {
  addBlog,
  delBlog, modifyBlog,
  getList,
  queryDetail
}