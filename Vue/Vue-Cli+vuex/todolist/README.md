<!--
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-12 16:24:07
 * @LastEditTime: 2019-08-13 10:54:02
 -->
# 搭建一个Vue-cli+vuex项目
## 环境搭建和基础讲解
markdown中vscode预览ctrl+shift+v  
* 查看脚手架版本
  >vue -V  
* 安装3.0脚手架
  >npm install -g @vue/cli
* vue add命令，用于增加和脚手架融合的插件，如果是vuetify这种UI库就需要这样融合使用，再如果是axios这种和框架没有联系的，则不用使用这种。
  >vue add vuetify
* 配置环境变量
  1. 在根目录建立一个.env的文件。.env文件.env.development文件,.env.production文件，在开发环境下面会自动获取dev中的内容，npm run build自动识别pro中
  2. 在文件里面写入保存的全局路径前缀，VUE_APP_{name}=http://baidu.com...
  3. 在要使用的文件里面data中取出来全局变量的值，url:process.env.VUE_ APP_URL
* 单独运行一个.vue文件,在根目录创建一个文件。
  >vue serve hello.vue
* 配置基础路径
  1. 根目录创建一个固定名字vue.config.js
  2. 写入配置
   ```
   module.exports={
     baseUrl:"/",                 //8080后面紧跟的基础路径
     outputDir:"dist2",           //项目npm run build打包的输出名字
    assetsDir:"assets",           //静态资源目录
    lintOnSave:true,              //开起eslint检查   
   }
   ```
* 配置跨域请求
    1.也是在vue.config.js配置
  ```
module.exports={
  devServer:{
    open:true,      //运行后打开浏览器运行
    host:'localhost',
    port:8081,
    https:false,
    proxy:{        //配置跨域
      '/api':{
        target:"http://localhost:5000/api,
        ws:true,
        changeOrigin: true,
        pathRewrite:{
          '^api':''
        }
      }
    }
  }
}
  ```
## 项目介绍
vue create demo的时候可以选择自己的项目预备安装项目模块munually 。如果自己配置，键盘空格键选中/不选中 ，A全选或者全不选,保存作为一个直接选择项，可以去vuerc文件中寻找配置项删除
