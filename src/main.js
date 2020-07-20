import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'

import less from 'less'
Vue.use(less)

// 导入viewUI
import './plugins/iview.js'

import '@/assets/css/public.css'

Vue.config.productionTip = false


// 引入字体
import "./plugins/customFont"

// 获取cookies插件
import './plugins/vue-cookies'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
