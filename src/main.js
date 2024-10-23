import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HeadTop from '@/components/Head/HeadTop.vue'
import SideNav from '@/components/Side/SideNav.vue'
import FooterV from './components/Footer/FooterV.vue'
import * as THREE from 'three'

import 'animate.css'// THREE.JS
Vue.use(THREE)
Vue.component('HeadTop', HeadTop)
Vue.component('FooterV', FooterV)
Vue.component('SideNav', SideNav)
Vue.config.productionTip = false
new Vue({
  template: '<App/>',
  components: { App },
  router,
  store,
  // 安装全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
  },

  render: h => h(App)
}).$mount('#app')
