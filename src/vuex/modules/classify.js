/* 
管理用户模块的
*/
import {
  RECEIVE_CLASSIFY,
  RECEIVE_CLASSIFYLIST
} from "../mutation-types"

import {
  reqMockCategory,
  reqMockCategoryList
} from '../../api'

const state = {
  categoryData:{},
  categoryListData:[]//classifyList
}
const mutations = {
  [RECEIVE_CLASSIFYLIST](state, categoryListData) {
    state.categoryListData = categoryListData
  },
  [RECEIVE_CLASSIFY](state, categoryData) {
    state.categoryData = categoryData
  },

 
}
const actions = {
  async getClassifyList({commit}){
      const result = await reqMockCategoryList()
      console.log(result)
      if (result.code===0) {
        const categoryListData = result.data
        commit(RECEIVE_CLASSIFYLIST, categoryListData )
      }
  },
  async getClassify({commit}){
      const result = await reqMockCategory()
      console.log(result)
      if (result.code===0) {
        const categoryData = result.data
        commit(RECEIVE_CLASSIFY, categoryData )
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