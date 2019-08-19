<template>
  <div>
    <li class="indexCardL indexCard">
      <div class="private">私人订制</div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="commodity">
              <img src="https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="price">
                玩趣彩虹四季拖鞋
                <span>¥233</span>
              </div>
            </div>
            <div class="commodity">
              <img src="https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="price">
                玩趣彩虹四季拖鞋
                <span>¥233</span>
              </div>
            </div>
            <div class="commodity">
              <img src="https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="price">
                玩趣彩虹四季拖鞋
                <span>¥233</span>
              </div>
            </div>
          </div> 
          <div class="swiper-slide">
            <div class="commodity">
              <img src="https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="price">
                玩趣彩虹四季拖鞋
                <span>¥233</span>
              </div>
            </div>
            <div class="commodity">
              <img src="https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="price">
                玩趣彩虹四季拖鞋
                <span>¥233</span>
              </div>
            </div>
            <div class="commodity">
              <img src="https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="price">
                玩趣彩虹四季拖鞋
                <span>¥233</span>
              </div>
            </div>
          </div> 
          <div class="swiper-slide">
            <div class="commodity">
              <img src="https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="price">
                玩趣彩虹四季拖鞋
                <span>¥233</span>
              </div>
            </div>
            <div class="commodity">
              <img src="https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="price">
                玩趣彩虹四季拖鞋
                <span>¥233</span>
              </div>
            </div>
            <div class="commodity">
              <img src="https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=65&thumbnail=330x330" alt="">
              <div class="price">
                玩趣彩虹四季拖鞋
                <span>¥233</span>
              </div>
            </div>
          </div> 
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>

     
    </li>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  export default {
    mounted() {
     new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })        
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.indexCardL
  width 100%
  overflow hidden
  flex-wrap wrap
  justify-content center
  background-color #fff
  .private
    line-height 40px
    padding 0 10px
    font-size 16px
    color #333
  .swiper-container 
    width 100%
    height 200px
    .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          width 100%
          height 100%
    




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
 
</style>
