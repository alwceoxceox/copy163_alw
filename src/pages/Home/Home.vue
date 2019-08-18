<template>
  <div id="indexContainer">
    <header class="indexHeader">
      <div class="indexLine">
          <h1 class="logo">
              <a href="##"><img src="/static/imgs/logo.png" alt="logo"></a>
          </h1>
          <div class="indexSearch">
              <i class="iconfont icon-Search"></i>
              <input type="text" placeholder="搜索商品">
          </div>
          <button class="indexLogin">登录</button>
      </div>
      <div class="indexNav">
          <div class="channels">
              <div class="indexNavList " v-show="isShow">
                  <div class="tab active">
                      <span >
                          推荐
                      </span>
                  </div>
                  <div class="tab">
                      <span >
                          推荐
                      </span>
                  </div>
                  <div class="tab">
                      <span >
                          推荐
                      </span>
                  </div>
                  <div class="tab">
                      <span >
                          推荐
                      </span>
                  </div>
              </div>
              <div class="tabAlter" v-show="!isShow">全部频道</div>
              <transition name="fade">
                <div class="navArrows" @click="hidden">
                    <i class="iconfont icon-jiantou-copy-copy" :class="arrowsRotate=!isShow"></i>
                </div>
              </transition>
          </div>
          <ul class="allChannelsList" v-show="!isShow">
              <li class="allChannelsItem on"><div>推荐</div></li>
              <li class="allChannelsItem"><div>推荐</div></li>
              <li class="allChannelsItem"><div>推荐</div></li>
              <li class="allChannelsItem"><div>推荐</div></li>
              <li class="allChannelsItem"><div>推荐</div></li>
          </ul>
      </div>
    </header>
    <div class="allChannelsMask" v-show="!isShow" @click="hidden()"></div>
    <div class="indexContainer">
        <div class="indexCarousel">
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <img class="swiper-slide" 
                  src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0"></img>
                  
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
          </div>
        </div>
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
        <div class="IndexNecessity">
            <ul class="IndexNecessityList">
                <li class="IndexNecessityItem">
                    <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="新品首发">
                    <div>新品首发</div>
                </li>
                <li class="IndexNecessityItem">
                    <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="新品首发">
                    <div>新品首发</div>
                </li>
                <li class="IndexNecessityItem">
                    <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="新品首发">
                    <div>新品首发</div>
                </li>
                <li class="IndexNecessityItem">
                    <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="新品首发">
                    <div>新品首发</div>
                </li>
                <li class="IndexNecessityItem">
                    <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="新品首发">
                    <div>新品首发</div>
                </li>
                <li class="IndexNecessityItem">
                    <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="新品首发">
                    <div>新品首发</div>
                </li>
            </ul>
        </div>
        <div class="indexAdvertisement">
            <img src="https://yanxuan.nosdn.127.net/f4e55920102eef630232f0f34b75cf2e.gif" alt="广告">
        </div>
        <div class="indexCard">
            <div class="cardItem" >
                <div class="overbalance">9.9超值专区首发</div>
                <div class="faddish">180款爆品新定价</div>
                <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
            <div class="cardItem" >
                <div class="overbalance">9.9超值专区首发</div>
                <div class="faddish">180款爆品新定价</div>
                <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
            <div class="cardItem" >
                <div class="overbalance">9.9超值专区首发</div>
                <div class="faddish">180款爆品新定价</div>
                <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
            <div class="cardItem" >
                <div class="overbalance">9.9超值专区首发</div>
                <div class="faddish">180款爆品新定价</div>
                <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
                <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
            </div>
        </div>
        <div id="gift">
            <i class="iconfont icon-liwu"></i>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
  export default {
    data() {
      return {
        isShow:true
      }
    },
    methods: {
      hidden(){
       this.isShow=!this.isShow
      }
    },
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
  #indexContainer
    width: 100%
    height 100%
    overflow hidden
    position relative
    .indexHeader
      width 100%
      position fixed
      z-index 99
      background-color white
      .indexLine
        width 100%
        height 40px
        display flex
        margin-top 10px
        .logo
          width 70px
          padding 5px 5px 0 10px
          img
            width 70px
        .indexSearch
          width 60%
          position relative
          .icon-Search
            position absolute
            left 33px
            top: 7px
          input
            width 100%
            border none
            background-color #eee
            border-radius 5px
            padding-left 45px
            height 28px
            box-sizing border-box
            vertical-align middle
            margin-left 5px
        .indexLogin
          width 40px
          height 20px
          font-size 10px
          margin-left 15px
          margin-top 5px
          color #b4282d
          border 1px solid #b4282d
          border-color #b4282d
          border-radius 5px
          background-color white
      .indexNav
        width 100%
        .channels
          width 100%
          display flex
        .indexNavList
          width 75%
          display flex
          align-items center
          text-align center
          .tab
            width 25%
            line-height 30px
            font-size 14px
            span
              width 80%
              padding 0px 7px 5px
            &.active
              span
                color #b4282d
                border-bottom 2px solid #b4282d
        .navArrows
          width 25%
          i
            float right
            margin-right 12px
            margin-top 5px
            font-size 18px
            .arrowsRotate
            &.fade-enter-active, &.fade-leave-active
              transition all .5s
            &.fade-enter, &.fade-leave-to
              transform rotate(180deg)      
        .tabAlter
          width 75%
          font-size 14px
          margin-left 10px
          margin-top 1px
        .allChannelsList
          width 90%
          margin 10px auto
          font-size 14px
          overflow hidden
          .allChannelsItem
            width 25%
            float left
            text-align center
            div
              border 1px solid #000
              width 80%
              height 25px
              line-height  25px
              margin-bottom 20px
              font-size 12px
            &.on
              div
                border 1px solid #b4282d
                color #b4282d
    .allChannelsMask
      position fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color rgba(0,0,0,.5)
    .indexContainer
      padding-top 82px
      .indexCarousel
        .swiper-container 
          width 100%
          height 200px
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
      .IndexNecessity
        width 100%
        .IndexNecessityList
          width 100%
          display flex
          flex-wrap wrap
          align-items center
          padding 10px
          margin 0 auto
          .IndexNecessityItem
            width 20%
            font-size 14px
            margin 5px 0
            img
              width 55px
              height 55px

      .indexAdvertisement
        img
          width 100%
      .indexCard
        width 90%
        display flex
        flex-wrap wrap
        margin 5px auto 0
        .cardItem
          width 48%
          background-color #F5F5F5
          margin 0 0 3px 3px
          .overbalance
            padding 15px 0 0 15px
          .faddish
            font-size 12px
            margin  8px 0 0 15px
          img
            width 48%
    #gift
      width 60px
      height 40px
      line-height 40px
      background-color rgba(255,255,255,0.9)
      position fixed
      bottom: 140px
      right: 0
      z-index 100
      border-radius 50% 0 0 50%
      i
        font-size 20px
        color #b4282d
        position absolute
        left 50%
        transform translateX(-50%)


 
</style>
