import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import Header from './components/Header/Header.vue'
// 注册全局组件
Vue.component('Header',Header)
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router// 配置路由器
})