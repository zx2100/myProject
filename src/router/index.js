import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  // 路由映射列表
const routes = [
  {
    path: '/',
    redirect: "/login"
  },
  {
    path: '/console',
    component:  () => import('@/views/console/Console')
  },
  {
    path: "/login",
    component:  () => import('@/views/login/Login')

  }
    
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
