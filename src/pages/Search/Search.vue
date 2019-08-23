<template>
  <div class="searchContainer">
    <header class="searchHeader">
      <div class="searchInput" v-if="InitSearch.defaultKeyword">
        <input type="text" :placeholder="InitSearch.defaultKeyword.keyword" @keyup="getInput" v-model="keywordPrefix">
        <i class="iconfont icon-Search"></i>
      </div>
      <div class="searchRight" @click="$router.back()">
        取消
      </div>
    </header>
    <div class="searchContent" v-show="!keywordPrefix">
      <h4>热门搜索</h4>
      <div class="searchNavList">
        <div class="searchNavItem" :class="{highlight:hotItem.highlight}" v-for="(hotItem, index) in InitSearch.hotKeywordVOList" :key="index">{{hotItem.keyword}}</div>
       
      </div>
    </div>
    <div class="searching" v-if="keywordPrefix">
        <ul class="searchingList">
          <li class="searchingItem" v-for="(SearchResultItem, index) in SearchResult" :key="index">
            {{SearchResultItem}}
          </li>
         
        </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        keywordPrefix:''
      }
    },
    computed: {
      ...mapState({
        InitSearch:state=>state.search.InitSearch,
        SearchResult:state=>state.search.SearchResult
      })
    },
    methods: {
      async getInput(){
        const {keywordPrefix}=this
        if(keywordPrefix){
          await this.$store.dispatch('getSearchResult',{keywordPrefix})
        }
        
      }
    },
     mounted() {
       
       this.$store.dispatch('getInitSearch')
       
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.searchContainer
  background-color white
  
  .searchHeader
    display flex
    padding 10px 10px
    .searchInput
      width 80%
      position relative
      font-size 14px
      input
        background-color #eee
        line-height 30px
        padding 0 0px 0 35px
        width 100%
      i
        position absolute
        top 8px
        left 8px

    .searchRight
      margin-top 6px
      margin-left 50px
      white-space nowrap
      font-size 16px
      color #333


  .searchContent
    h4
      font-size 14px
      padding 10px 0 10px 15px
      color #999
    .searchNavList
      display flex
      flex-wrap wrap

      .searchNavItem
        border 1px solid #333
        margin 10px 15px
        padding 5px
      .highlight
        color red
        border 1px solid #f00
  .searching
    .searchingList
      .searchingItem
        width 100%
        font-size 15px
        border-bottom 1px solid #eee
        padding-left 10px
        line-height 25px
</style>
