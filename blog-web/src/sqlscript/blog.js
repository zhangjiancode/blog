/*
 * @Description: 
 * @Author: 张健66
 * @Date: 2021-08-07 21:48:25
 * @LastEditTime: 2021-08-08 10:17:32
 * @LastEditors: 张健66
 */
const addBlogItem = (author, title, content) => {
  const timestamp = Date.now()
  return `insert into blog_info (title,content,author,createtime)values('${title}','${content}','${author}','${timestamp}')`
}
const deleteBlog = (id) => {
  return `delete from blog_info where id='${id}'`
}
const updateBlog = (id, title, content) => {
  return `update blog_info set title='${title}',content='${content}' where id='${id}'`
}
const getBlogList = (author, keyword) => {
  let baseSql = `select * from blog_info where 1=1`
  if (author) {
    baseSql += ` and author='${author}'`
  }
  if (keyword) {
    baseSql += ` and title like '%${keyword}%'`
  }
  baseSql += ' order by createtime desc'
  return baseSql
}

const getBlogDetail = (id) => {
  return `select * from blog_info where id='${id}'`
}
module.exports = {
  getBlogList,
  getBlogDetail,
  addBlogItem,
  deleteBlog,
  updateBlog
}