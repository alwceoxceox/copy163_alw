<template>
  <div class="searchContainer">
    <header class="searchHeader">
      <div class="searchInput">
        <input type="text" placeholder="新上爆品 120平整屋除湿">
        <i class="iconfont icon-Search"></i>
      </div>
      <div class="searchRight">
        取消
      </div>
    </header>
    <div class="searchContent">
      <h4>热门搜索</h4>
      <div class="searchNavList">
        <div class="searchNavItem">轻弹云朵拖鞋9.9元</div>
        <div class="searchNavItem">中秋月饼 上新热卖</div>
        <div class="searchNavItem">9.9元超值专区</div>
        <div class="searchNavItem">轻弹</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.searchContainer
  background-color white
  .searchHeader
    display flex
    padding 10px 10px
    .searchInput
      input
        background-color #eee
        line-height 30px
        padding 0 30px
    .searchRight
      margin-top 1px
      margin-left 50px


</style>
