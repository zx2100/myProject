import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

  // 路由映射列表
const routes = [
  {
    path: '/',
    redirect: "/login"
  },
  {
    path: '/console',
    component:  () => import('@/views/console/Console'),
    children:[
      {
        path: "",
        redirect: "hello"
      },
      {
        path: 'hello',
        component: ()=> import('@/views/console/hello/Hello')
      }
    ]
   
  },
  {
    path: "/login",
    component:  () => import('@/views/login/Login')

  }
    
 
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
    // 判断是否有token
    let token = window.sessionStorage.getItem("token")
    // console.log(token)
    return token? next(): next("/login")
  }
  
  // 不匹配需要认证的,默认放行
  next()
})

export default router
