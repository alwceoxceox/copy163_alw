import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
// 注册全局组件
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router// 配置路由器
})