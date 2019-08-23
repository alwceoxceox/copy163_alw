<template>
  <div class="indexCarousel">
    <div class="swiper-container" ref="swiperContainer">
        <div class="swiper-wrapper">
            <img class="swiper-slide" 
            src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0"></img>
            <img class="swiper-slide" 
            src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0"></img>
            <img class="swiper-slide" 
            src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0"></img>
            <img class="swiper-slide" 
            src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0"></img>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  export default {
    mounted() {
     new Swiper (this.$refs.swiperContainer, {
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
.indexCarousel
  .swiper-container 
    width 100%
    height 200px
    .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          width 100%
          height 100%
    /deep/ .swiper-pagination-bullet
      width 50px
      height 2px      
    /deep/ .swiper-pagination-bullet-active
      width 50px
      height 2px
      background red

</style>
