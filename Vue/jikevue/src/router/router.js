/*
 * @Description:
 * @version:
 * @Author: 朱宇
 * @Date: 2019-08-16 10:35:32
 * @LastEditTime: 2019-08-16 20:21:51
 */
import Home from '@/views/Home.vue' // 第一个不用懒加载，进来就要使用
export default [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue') // 懒加载，访问到再去加载
  },
  {
    path: '/arg/:name',
    name: 'name',
    component: () => import('@/views/Arg.vue')
  },
  {
    path: '/parent',
    component: () => import('@/views/Parent.vue'),
    children: [{
      path: 'child',
      component: () => import('@/views/Child.vue')
    }]
  }, { // 加载多路由显示
    path: '/name_many',
    components: {
      default: () => import('@/views/Child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }

  },
  {
    path: '*',
    // redirect: '/parent'
    redirect: {
      name: 'home'
    }
    // redirect: to => {
    //   return '/parent'
    // }
  }
]
