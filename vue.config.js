// 项目的配置文件

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://mhd.zhuishushenqi.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/user': {
        target: 'http://111.230.178.132:4000/',
        changeOrigin: true,
        pathRewrite: {
          '^/user': ''
        }
      }
    }
  }
}
