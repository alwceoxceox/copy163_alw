<template>
  <div>
    <Header/>
    
    <div class="ShoppingCartNav">
      <ul class="navList">
        <li class="navItem">
          <span>30天无忧退货</span>
        </li>
        <li class="navItem">
          <span>48小时快速退款</span>
        </li>
        <li class="navItem">
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="ShoppingCartContainer">
      <div class="ShoppingCartImg">

      </div>
      <h4>去添加点什么吧</h4>
      <div class="ShoppingCartToLogin"  @click="$router.replace('/login')">
        登录
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 
   
  .ShoppingCartNav
    width 100%
    background-color #ddd
    color #666
    .navList
      display flex
      height 35px
      line-height 35px
      text-align center
      .navItem
        width 33.33%
  .ShoppingCartContainer
    width 100%
    height 600px
    position relative
    .ShoppingCartImg
      /*position absolute*/
      /*top 30%*/
      /*left 50%*/
      /*transform translateX(-50%)*/
      margin 190px auto 0
      height 124px
      width 124px
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
      background-size 100% 100%
    h4
      color #999
      font-size 14px
      text-align center
      margin-top -5px
      margin-bottom 20px
    .ShoppingCartToLogin
      width 250px
      height 45px
      line-height 45px
      background-color #b4282d
      color white
      text-align center
      font-size 16px
      margin 0 auto

</style>
