<template>
  <div>
     <li class="indexCardL indexCard">
      <div class="private limit">
        <span class="">限时购</span>
        <div class="countdown">
            <span class="hours" >00</span>
            <span class="colon" >:</span>
            <span class="mins" >30</span>
            <span class="colon" >:</span>
            <span class="secs" >50</span>
        </div>
        <div class="rightArrows">
            <span>更多</span>
            <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
      <div class="commodity">
          <img src="https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="price pad">
              <span>¥233</span>
              <span class="line">¥2331</span>
          </div>
      </div>
      <div class="commodity">
          <img src="https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="price pad">
              <span>¥233</span>
              <span class="line">¥2331</span>
          </div>
      </div>
      <div class="commodity">
          <img src="https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="price pad">
              <span>¥233</span>
              <span class="line">¥2331</span>
          </div>
      </div>
      <div class="commodity">
          <img src="https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=330x330" alt="">
          <div class="price pad">
              <span>¥233</span>
              <span class="line">¥2331</span>
          </div>
      </div>
    </li>
    <li class="indexCardL indexCard">
      <div class="private limit">
        <span class="">新品首发</span>

        <div class="rightArrows">
          <span>更多</span>
          <i class="iconfont icon-jiantou"></i>
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
  export default {
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
      .icon-jiantou
        width 20px
        height 20px
       
        
      
</style>
