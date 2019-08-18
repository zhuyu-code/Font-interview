/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-16 10:11:15
 * @LastEditTime: 2019-08-16 10:15:47
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})