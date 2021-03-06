// 引入 axios
import axios from 'axios'
// 引入 Notify
import { Notify } from 'vant'

// 创建一个 axios 的实例对象
const instance = axios.create({
  // 基准路径
  // 直接将 baseURL 修改为 线上ip地址能够处理问题，但是不够优雅，因为后续会频繁去修改它。
  // 推荐是用环境变量来做控制
  baseURL: process.env.NODE_ENV === 'production' ? 'http://106.52.202.91' : 'http://localhost:8080',
  // 超时时间的设置 ms
  timeout: 50000
})

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    const res = response.data

    if (res.code !== 200) {
      Notify(res.code_msg)

      return Promise.reject(new Error(res.code_msg))
    }

    return response.data
  },
  error => {
    // 对响应错误做点什么
    console.log(error)
    Notify('网络异常，请稍后重试')

    return Promise.reject(error)
  }
)

// 暴露这个实例
export default instance
