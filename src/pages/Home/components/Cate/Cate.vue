<template>
  <div>
    <li class="indexCard indexFitness">
      <div class="indexFitnessBCImg"></div>
      <div class="indexFitnessListWrap">
        <ul class="indexFitnessList">
          <li class="indexFitnessItem">
            <img src="https://yanxuan-item.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?imageView&quality=65&thumbnail=330x330" alt="">
            <span>全净皓齿变速式声波电动牙刷</span>
            <div class="price pad">
              <span>¥233</span>
              <span class="line">¥2331</span>
            </div>
            <h4>抄底特惠</h4>
          </li>
          <li class="indexFitnessItem">
              <img src="https://yanxuan-item.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span>全净皓齿变速式声波电动牙刷</span>
              <div class="price pad">
                  <span>¥233</span>
                  <span class="line">¥2331</span>
              </div>
              <h4>抄底特惠</h4>
          </li>
          <li class="indexFitnessItem">
              <img src="https://yanxuan-item.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span>全净皓齿变速式声波电动牙刷</span>
              <div class="price pad">
                  <span>¥233</span>
                  <span class="line">¥2331</span>
              </div>
              <h4>抄底特惠</h4>
          </li>
          <li class="indexFitnessItem">
              <img src="https://yanxuan-item.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span>全净皓齿变速式声波电动牙刷</span>
              <div class="price pad">
                  <span>¥233</span>
                  <span class="line">¥2331</span>
              </div>
              <h4>抄底特惠</h4>
          </li>
          <li class="indexFitnessItem">
              <img src="https://yanxuan-item.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?imageView&quality=65&thumbnail=330x330" alt="">
              <span>全净皓齿变速式声波电动牙刷</span>
              <div class="price pad">
                  <span>¥233</span>
                  <span class="line">¥2331</span>
              </div>
              <h4>抄底特惠</h4>
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
      let indexFitnessListWrap = document.querySelector('.indexFitnessListWrap')
      let bs = new BScroll('.indexFitnessListWrap', {
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
  .indexFitness
    width 100%
    .indexFitnessBCImg
      width 100%
      height 200px
      background-image url(https://yanxuan.nosdn.127.net/09272c0588454c163017bfd19eb932ca.jpg?imageView&thumbnail=750x0&quality=75)
      background-size 100% 100%
      margin-bottom 10px
    .indexFitnessList
      width 700px
      margin 0 0 10px 10px
      overflow hidden
      .indexFitnessItem
        width 120px
        font-size 14px
        color #333
        line-height 18px
        margin-left 10px
        float: left
        img
          width 120px
          background-color #eee
        .price
          span:nth-child(1)
            color #b4282d
          span:nth-child(2)
            text-decoration line-through
        h4
          border 1px solid #b4282d
          color #b4282d
          display inline
          border-radius 3px
          font-size 10px

  
</style>
