<template>
  <div id="indexContainer">
    <Header></Header><!--头部-->
    <div class="indexContainer">
        <Swiper></Swiper><!--轮播图部分-->
        <div class="quality">
            <ul class="qualityList">
                <li class="qualityItem">
                    <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>
                    <span>网易自营品牌</span>
                </li>
                <li class="qualityItem">
                    <i class="iconfont icon-dunpai"></i>
                    <span>网易自营品牌</span>
                </li>
                <li class="qualityItem">
                    <i class="iconfont icon-zhifu"></i>
                    <span>网易自营品牌</span>
                </li>
            </ul>
        </div>
        <!--首页主导航区-->
        <Nav></Nav>
         <!--广告区-->
         <Advertisement></Advertisement>
         <!--卡片区-->
        <ul class="indexCardAll">
          <!--简单四格卡片区-->
          <CardField></CardField>
          <!--私人订制的卡片区-->
          <CardSwiper></CardSwiper>
          <!--限时购和新品首发的卡片区-->
          <LimitGo></LimitGo>
          <!--人气推荐的卡片区-->
          <SpItem></SpItem>
          <!--一堆的卡片区-->
          <BigCard></BigCard>
          <!--美食发烧节的卡片区-->
          <Cate></Cate>
          <Cate></Cate>
          <Cate></Cate>
          <!--底部的卡片区-->
          <IndexFooter></IndexFooter>
        </ul>
        <!--礼物--> 
        <Gift></Gift>
       
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from './components/Swiper/Swiper.vue'
  import Nav from './components/Nav/Nav.vue'
  import Gift from './components/Gift/Gift.vue'
  import Advertisement from './components/Advertisement/Advertisement.vue'
  import CardField from './components/CardField/CardField.vue'
  import CardSwiper from './components/CardSwiper/CardSwiper.vue'
  import LimitGo from './components/LimitGo/LimitGo.vue'
  import SpItem from './components/SpItem/SpItem.vue'
  import BigCard from './components/BigCard/BigCard.vue'
  import Cate from './components/Cate/Cate.vue'
  import IndexFooter from './components/IndexFooter/IndexFooter.vue'

  export default {
    data() {
      return {
      }
    },
   
    components:{
      Swiper,
      Nav,
      Gift,
      Advertisement,
      CardField,
      CardSwiper,
      LimitGo,
      SpItem,
      BigCard,
      Cate,
      IndexFooter
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #indexContainer
    width: 100%
    height 100%
    overflow hidden
    position relative
   
    .indexContainer
      padding-top 82px
      
      .quality
        .qualityList
          display flex
          align-items center
          text-align center
          padding 0 20px
          .qualityItem
            width 33%
            i
              color #b4282d
              vertical-align middle
            span
              font-size 12px
              vertical-align middle
      

      
    .indexCardAll
      width 100%
      background-color #eee

</style>
