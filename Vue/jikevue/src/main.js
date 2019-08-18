/*
 * @Description:
 * @version:
 * @Author: 朱宇
 * @Date: 2019-08-16 09:55:52
 * @LastEditTime: 2019-08-16 11:40:58
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
