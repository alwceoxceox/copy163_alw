/* 
管理用户模块的
*/
import {
  RECEIVE_HOME_DATA
} from "../mutation-types"

import {
  reqMockHome
} from '../../api'

const state = {
 homeData:{}//home
}
const mutations = {
  [RECEIVE_HOME_DATA](state, homeData) {
    state.homeData = homeData
  },

 
}
const actions = {
  async getHomeData({commit}){
    
      const result = await reqMockHome()
      console.log(result)
      if (result.code===0) {
        const homeData = result.data
        commit(RECEIVE_HOME_DATA, homeData )
      }
  }



 

}
const getters = {
  // 商品导航
 getKingKongList(state){
   if(state.homeData.kingKongModule){
     return state.homeData.kingKongModule.kingKongList
   }
 },
//  私人定制
  getPersonalShop(state){
    if(state.homeData.personalShop){
      console.log(state.homeData.personalShop)
      return state.homeData.personalShop
    }
  }

}

export default {
  state,
  mutations,
  actions,
  getters
}