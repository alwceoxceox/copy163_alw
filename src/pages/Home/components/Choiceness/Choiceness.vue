<template>
  <div>
    <li class="indexCardL indexCard">
        <div class="private limit">
            <span class="">专题精选</span>

            <div class="rightArrows">
                <span>更多</span>
                <i class="iconfont icon-jiantou"></i>
            </div>
        </div>
        <div class="cosmeticsListWrap">
          <ul class="cosmeticsList">
            <li class="cosmeticsItem">
                <img src="https://yanxuan.nosdn.127.net/d92e4fa96f4c65e3a3f135d430c459ec.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
                <h4>直男们有救了！严选手把手教你, 送给女生的七夕怎么挑~</h4>
                <div>女士精选礼物大赏</div>
            </li>
            <li class="cosmeticsItem">
                <img src="https://yanxuan.nosdn.127.net/d92e4fa96f4c65e3a3f135d430c459ec.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
                <h4>直男们有救了！严选手把手教你, 送给女生的七夕怎么挑~</h4>
                <div>女士精选礼物大赏</div>
            </li>
            <li class="cosmeticsItem">
                <img src="https://yanxuan.nosdn.127.net/d92e4fa96f4c65e3a3f135d430c459ec.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
                <h4>直男们有救了！严选手把手教你, 送给女生的七夕怎么挑~</h4>
                <div>女士精选礼物大赏</div>
            </li>
          </ul>
        </div>
       
    </li>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted() {
      let cosmeticsListWrap = document.querySelector('.cosmeticsListWrap')
      let bs = new BScroll('.cosmeticsListWrap', {
        pullUpLoad: true,
        scrollX:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .indexCard
    margin-top 10px
    background-color white
    font-size 16px
    .cosmeticsList
      overflow hidden
      width 730px
      margin 5px 0 10px 5px
      .cosmeticsItem
        float left
        width 225px
        margin-left 10px
        background-color #eee
        padding-bottom 10px
        img
          width 225px
        h4
          font-size 14px
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width 200px
          margin 5px 0 5px 3px
        div
          font-size 12px
          color #7f7f7f
          margin-left 3px
  .indexCardL
    width 100%
    overflow hidden
    flex-wrap wrap
    justify-content center
    .private
      line-height 40px
      padding 0 10px
    .limit
      display flex
      position relative
      .countdown
        margin-left 10px
        span
          &:nth-child(2n+1)
            background-color black
            color: #fff
            border-radius 3px
            font-size 14px
      .rightArrows
        position absolute
        right 0
        margin-right 9px
    
      
</style>
