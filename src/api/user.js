// 专门处理 漫画相关的 接口请求

// 引入封装好的 axios 的实例
import request from '@/utils/request'

import { format } from '@/utils/apiHeader'

// 获取搜索数据
export const searchIndex = (name) => {
  return request({
    url: '/api/comic_v2/searchindex?apptype=8&appversion=1.0&channel=web-app&type=2',
    method: 'GET',
    params: {
      name
    }
  })
}
/**
 * 搜索结果页面的请求
 */
export const getSerachResult = (name) => {
  return request({
    url: '/a/comic_v2/searchbookauthor?apptype=8&appversion=1.0&channel=web-app&type=2&pageno=1&pagesize=100',
    method: 'GET',
    params: {
      name
    }
  })
}

/**
 * 获取排行榜数据
 */
export const getRankList = (ranktype, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsrank',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app'
    },
    data: format({
      ranktype,
      pageno,
      pagesize
    })
  })
}
