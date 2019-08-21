/* 
vuex最核心管理对象store
*/
import Vue from 'vue'
import Vuex, {Store} from 'vuex'

import home from './modules/home'
import search from './modules/search'
import classify from './modules/classify'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 声明使用vue插件
Vue.use(Vuex)


export default new Store({
  mutations,
  actions,
  getters,
  // 配置应用中所有的功能相关的配置
  modules: {
    home:home,
    search:search,
    classify:classify
   
  }
})

/* 
vuex管理的总状态的结构:
  {
    msite: {}, // msite
    user: {}, // user
    shop: {}, // shop
  }

*/