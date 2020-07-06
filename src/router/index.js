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

// 挂载全局导航首位
router.beforeEach((to, from, next)=>{
  // console.log(to)
  // 访问登录页,直接放行
  if (to.path ==="/login") return next()
  
  // 访问需要权限页面,需要登录
  if (to.path ==='/console'){
    // 判断是否有cookies

    let cookiesItem =  Vue.$cookies.get("sessionid")
    console.log(cookiesItem)
    return cookiesItem? next(): next("/login")
  }
  
  // 不匹配需要认证的,默认放行
  next()
})

export default router
