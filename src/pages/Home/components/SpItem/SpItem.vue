<template>
  <div>
     <li class="indexCardL indexCard">
      <div class="private limit">
        <span class="">人气推荐</span>

        <div class="rightArrows">
          <span>更多</span>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
      <div class="spItem">
        <img src="https://yanxuan-item.nosdn.127.net/89d86a4e463115e366daf841b9bcff46.png?imageView&quality=65&thumbnail=280x280" alt="">
        <div class="recommend">
          <span>抄底特惠</span>
          <h5>新色 奢华植鞣头层水牛皮席 凉席三件套</h5>
          <h4>三峡水牛头层皮，高端夏凉必备</h4>
          <div>￥1949</div>
        </div>
      </div>
      <div class="commodity">
        <img src="https://yanxuan-item.nosdn.127.net/6754e5a5ea2005b11849d42e7f27ce3d.png?imageView&quality=65&thumbnail=330x330" alt="">
        <div class="price pad">
          17寸 纯PC“铝框”（非...
          <span>¥233</span>
        </div>
      </div>
      <div class="commodity">
        <img src="https://yanxuan-item.nosdn.127.net/6754e5a5ea2005b11849d42e7f27ce3d.png?imageView&quality=65&thumbnail=330x330" alt="">
        <div class="price pad">
          17寸 纯PC“铝框”（非...
          <span>¥233</span>
        </div>
      </div>
      <div class="commodity">
        <img src="https://yanxuan-item.nosdn.127.net/6754e5a5ea2005b11849d42e7f27ce3d.png?imageView&quality=65&thumbnail=330x330" alt="">
        <div class="price pad">
          17寸 纯PC“铝框”（非...
          <span>¥233</span>
        </div>
      </div>
    </li>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        homeData:state=>state.home.homeData
      })
    },
   async mounted() {
      await this.$store.dispatch('getHomeData')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.indexCard
  margin-top 10px
  background-color white
.indexCardL
  width 100%
  overflow hidden
  flex-wrap wrap
  justify-content center
  .private
    line-height 40px
    padding 0 10px
    span
      font-size 16px
  .commodity
    float left
    margin-left 10px
    img
      width 110px
      height 110px
      background-color #eee
    .price
      font-size 14px
      width 100px
      padding 10px 0
      span
        color red
    //  部分indexCard限时购
    .pad
      padding-left 7px
      .line
        text-decoration line-through
        color black
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
  .spItem
    display flex
    background-color #FEF0DF
    margin 10px 0
    img
      width 40%
    .recommend
      width 59%
      margin-top 25px
      span
        font-size 10px
        color red
        border: 1px solid #b4282d
        background-color #ffffff
      h5
        overflow: hidden;/*超出部分隐藏*/
        text-overflow:ellipsis;/* 超出部分显示省略号 */
        white-space: nowrap;/*规定段落中的文本不进行换行 */
        font-size 14px
        margin-top 5px
      h4
        font-size 12px
        color #7F7F7F
        margin-top 5px
      div
        color #b4282d
        font-size 12px
        margin-top 12px
            
</style>
