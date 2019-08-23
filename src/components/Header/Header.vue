<template>
    <header id="header">
      <slot name="left">
        
      </slot>
      <slot name="middle">
        
      </slot>
      <slot name="right">
      
      </slot>
      
    </header>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#header
  background-color white
  overflow hidden
  padding 0 15px
  height 44px
  line-height 44px
  font-size 18px
  display flex
  justify-content: space-between;
  i
    font-size 25px
  .headerDiscover
    
    font-size 14px
    .on
      color #b4282d
      font-weight bold
      font-size 20px
    &>span
      margin-left 5px
  .headerSearch
    color #333
    .icon-Search
      padding-right 5px
  .coupon
    font-size 14px
    color #B4282D
  .loginLogo
   font-size 18px
   padding-left 10px
</style>
