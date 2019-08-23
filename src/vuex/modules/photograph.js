/* 
管理识物模块的
*/
import {
  RECEIVE_TABS,
  RECEIVE_RECOMMEN
} from "../mutation-types"

import {
  reqTabs,
  reqRecommendData,
} from '../../api'

const state = {
  // 识物-Tab 懒数据
  tabsData: [],
  // 推荐数据 
  recommendData:[]
}
const mutations = {
  [RECEIVE_TABS](state, {tabsData}) {
    state.tabsData = tabsData
  },
  [RECEIVE_RECOMMEN](state, {recommendData}) {
    state.recommendData = recommendData
  },
 
 
}

const actions = {
  async getTabs({commit}) {
    const result = await reqTabs()
    console.log(result,'getTabs')
    if (result.code==='200') {
      const tabsData = result.data
      console.log(tabsData,'getTabs')
      commit(RECEIVE_TABS, { tabsData })
    }
  },
  async getRecommend({commit}) {
    const result = await reqRecommendData()
    console.log(result,'getRecommend')
    if (result.code==='200') {
      const recommendData = result.data
      console.log(recommendData,'getRecommend')
      commit(RECEIVE_RECOMMEN, { recommendData })
    }
  }
    
  
}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}