/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-26 22:47:43
 * @LastEditTime: 2019-08-26 22:49:37
 */
/*
在参考别人的配置过程中，
发现一个可以在webpack中自定义配置CDN的方式，
主要是利用 html-webpack-plugin 插件的能力，
可以新增自定义属性，将CDN资源链接，配置至此自定义属性中。
通过在 index.html  
模板中遍历属性来自动生成CDN资源引入。

*/
// 插件选项
plugins: [
  // html模板、以及相关配置
  new HtmlWebpackPlugin({
    title: 'Lesson-06',
    template: resolve('../public/index.html'),
    // cdn（自定义属性）加载的资源，不需要手动添加至index.html中,
    // 顺序按数组索引加载
    cdn: {
      css: ['https://cdn.bootcss.com/element-ui/2.8.2/theme-chalk/index.css'],
      js: [
        'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
        'https://cdn.bootcss.com/element-ui/2.8.2/index.js'
      ]
    }
  })
]