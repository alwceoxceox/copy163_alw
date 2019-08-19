<template>
  <div>
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
              <div class="indexNavListWrap" v-show="isShow">
                <div class="indexNavList " >
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
              </div>
              
              <div class="tabAlter" v-show="!isShow">全部频道</div>
              <transition name="fade">
                <div class="navArrows" @click="hidden">
                    <i class="iconfont icon-jiantou-copy-copy" :class="{arrowsRotate:!isShow}"></i>
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
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  
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
      let indexNavListWrap = document.querySelector('.indexNavListWrap')
      let bs = new BScroll('.indexNavListWrap', {
        pullUpLoad: true,
        scrollX:true
      })
    },  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .allChannelsMask
    position absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color rgba(0,0,0,.5)
    z-index 101
  .indexHeader
    width 100%
    position fixed
    z-index 110
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
      .indexNavListWrap
        width 100%
        overflow hidden  
        .indexNavList
          width 170%
          display flex
          align-items center
          text-align center
          flex-wrap nowrap 
          .tab
            width 25%
            line-height 30px
            font-size 14px
            white-space nowrap
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
  
 
</style>
