<template>
  <footer id="footer">
    <a href="##" class="home" :class="{cut:$route.path==='/home'}" @click="goto('/home')">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </a>
    <a href="##" class="classify" :class="{cut:$route.path==='/classify'}" @click="goto('/classify')">
      <i class="iconfont icon-iconyihuifu-"></i>
      <span>分类</span>
    </a>
    <a href="##" class="photograph" :class="{cut:$route.path==='/photograph'}" @click="goto('/photograph')">
      <i class="iconfont icon-zhaopian"></i>
      <span>识物</span>
    </a>
    <a href="##" class="shoppingCart" :class="{cut:$route.path==='/shoppingCart'}" @click="goto('/shoppingCart')">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </a>
    <a href="##" class="personage" :class="{cut:$route.path==='/personage'}" @click="goto('/personage')">
      <i class="iconfont icon-geren" ></i>
      <span>个人</span>
    </a>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goto(path){
        this.$router.replace(path)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #footer
    display flex
    position fixed
    bottom: 0
    background-color white
    width 100%
    a
      width 20%
      display flex
      flex-direction column
      align-items center
      justify-content center
      padding 5px 0
      i
        font-size 20px
      span
        font-size 12px
      &.cut
        color #b4282d
 
</style>
