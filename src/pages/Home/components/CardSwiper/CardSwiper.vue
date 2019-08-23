<template>
  <div>
    <li class="indexCardL indexCard">
      <div class="private">私人订制</div>
      <div class="swiper-container" ref="private">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(personalShop, index) in personalShopArr" :key="index">
            <div class="commodity" v-for="(good, index) in personalShop" :key="index">
              <img :src="good.primaryPicUrl" :alt="good.name">
              <div class="price">
                {{good.name}}
                <span>￥{{good.retailPrice}}</span>
              </div>
            </div>
          </div> 
         
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination" ref="swiperPagination"></div>
      </div>

     
    </li>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import chunk from 'lodash/chunk'
  import {mapGetters,mapState} from 'vuex'
  export default {
   
    computed: {
      // ...mapGetters({
      //   getPersonalShop:'getPersonalShop'
      // }),
      ...mapState({
        homeData:(state)=>state.home.homeData
      }),
      
    //    personalShopArr () {
    //     let arr3 = []
    //     if(this.homeData.personalShop){
    //       this.homeData.personalShop.reduce((arr, shop)=>{
    //         arr.push(shop)
    //         if(arr.length === 3){
    //           arr3.push(arr)
    //           arr = []
    //         }
    //         return arr
    //       }, [])
    //     }
    //     return arr3
    //   }
    // },
       personalShopArr () {
        let arr3 = []
        if(this.homeData.personalShop){
          return chunk(this.homeData.personalShop,3)
          
        }
        return arr3
      }
      
    },
    mounted() {
    this.$store.dispatch('getHomeData')
        
    },
    watch: {
      personalShopArr(){
        this.$nextTick(()=>{
          new Swiper (this.$refs.private, {
            loop: true, // 循环模式选项
            
            // 如果需要分页器
            pagination: {
              el: this.$refs.swiperPagination,
              // clickable: true,
            },
          }) 
        })
      }
          
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
