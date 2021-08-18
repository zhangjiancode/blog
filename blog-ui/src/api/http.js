/*
 * @Description: 封装axios请求
 * @Author: 张健66
 * @Date: 2021-08-09 15:55:26
 * @LastEditTime: 2021-08-13 16:15:50
 * @LastEditors: 张健66
 */
import axios from 'axios'

const http = axios.create(
  {
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    timeout: 2000,
    withCredentials: true,
    // baseURL: 'http://localhost:3000'
  }
)
http.interceptors.request.use(config=>{
  // return handleReqConfig(config)
  return config
},err=>{
  Promise.reject(err)
})

function handleReqConfig (config) {
  return config
}


export default http