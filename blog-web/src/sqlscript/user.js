/*
 * @Description: 
 * @Author: 张健66
 * @Date: 2021-08-08 10:27:56
 * @LastEditTime: 2021-08-08 10:29:29
 * @LastEditors: 张健66
 */
const login = (userName,pwd)=>{
  return `select * from user_info where user_name='${userName}' and user_pwd='${pwd}'`
}

module.exports = {
  login
}