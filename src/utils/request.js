import axios from 'axios'
import store from '../store'
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // toen发送给后台
    const token = store.getters.token
    if (token) config.headers.Authorization = 'Bearer' + token

    return config
  },
  function (error) {
    // 做一些请求错误的事情
    return Promise.reject(error)
  }
)
// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据执行操作
    return response
  },
  function (error) {
    // 对响应错误执行操作
    return Promise.reject(error)
  }
)

// 统一传参
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return instance(options)
}
export default request
