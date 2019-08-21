/* 
管理用户模块的
*/
import {
  RECEIVE_INITSEARCH,
  RECEIVE_SEARCHRESULT,
 
} from "../mutation-types"

import {
  reqInitSearch,
  reqSearchResult
} from '../../api'

const state = {
  // 搜索 关键字
  InitSearch: {}, 
  // 获取搜索结果
  SearchResult:{}
}
const mutations = {
  [RECEIVE_INITSEARCH](state, {InitSearch}) {
    state.InitSearch = InitSearch
  },
  [RECEIVE_SEARCHRESULT](state, {SearchResult}) {
    state.SearchResult = SearchResult
  },
 
}
const actions = {
  async getInitSearch({commit}) {
    const result = await reqInitSearch()
    console.log(result)
    if (result.code==='200') {
      const InitSearch = result.data
      console.log(InitSearch)
      commit(RECEIVE_INITSEARCH, { InitSearch })
    }
    
  },
 
  async getSearchResult({commit},{keywordPrefix}) {
    const result = await reqSearchResult(keywordPrefix)
    console.log(result)
    if (result.code==='200') {
      const SearchResult = result.data
      console.log(SearchResult)
      commit(RECEIVE_SEARCHRESULT, { SearchResult })
    }
    
  },
}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}