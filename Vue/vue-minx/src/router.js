/*
 * @Description: 
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-16 22:48:49
 * @LastEditTime: 2019-08-16 23:34:49
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false;
  if (to.path === '/login') {
    next();
  } else {
    alert("请先登录")
    isLogin ? next() : next('/login')
  }
})
export default router;