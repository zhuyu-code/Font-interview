/*
 * @Description:
 * @version:
 * @Author: 朱宇
 * @Date: 2019-08-16 09:55:52
 * @LastEditTime: 2019-08-16 11:10:54
 */
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin/' : '/'

module.exports = {
  lintOnSave: false,
  // 配置开发和生产环境的路径
  baseUrl: BASE_URL,
  // 打包时不生成.map文件，增加打包效率
  productionSourceMap: false,
  // 配置全局简写路径
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components/'))
  },
  // 使用devServer配置跨域,没有请求到的请求都代理到指定位置。
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
