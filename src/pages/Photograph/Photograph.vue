<template>
  <div>
    <div class="PhotographHeader">
      <Header>
        <span class="headerHome" slot="left">
           <i class="iconfont icon-home" @click="$router.push('/home')"></i>
        </span>
        <span  class="headerDiscover" slot="middle">
          <span @click="isOn=!isOn" :class="{on:!isOn}" >发现</span>
          <span @click="isOn=!isOn" :class="{on:isOn}">甄选家</span>
        </span>
         <span class="headerSearch"  slot="right">
            <i class="iconfont icon-Search" @click="$router.push('/search')"></i>
            <i class="iconfont icon-gouwuche" @click="$router.push('/shoppingCart')"></i>
        </span>
      </Header>
      <div class="PhotographNav" ref="PhotographNav">
        <div class="PhotographNavList">
          <a class="PhotographNavItem" :class="{on:index===currteIndex}" @click.stop="getOn(index)" v-for="(tab, index) in tabsData" :key="index" >
            {{tab.tabName}}
          </a>
        </div>
      </div>
    </div>
    <div class="headerClapboard" v-if="recommendData"></div> 
    <div class="PhotographCommentWrap" v-for="(recommendDataItems, index) in recommendData" :key="index">
      <div class="PhotographComment1" v-if="recommendDataItems.ad">
        <img :src="recommendDataItems.ad.picUrl" alt="">
      </div>
      <div v-for="(recommendDataItem, index) in recommendDataItems.topics"  :key="index">
        <div class="PhotographComment2" v-if="recommendDataItem.type===0" >
          <div class="PhotographComment2User">
            <img :src="recommendDataItem.avatar" alt="">
            <span class="PhotographComment2UserName">{{recommendDataItem.nickname}}</span>
          </div>
          <div class="PhotographComment2Title">
            {{recommendDataItem.title}}
          </div>
          <img :src="recommendDataItem.picUrl" alt="">
          <div class="PhotographComment2Rcount">
            <i class="iconfont icon-yj"></i>
            <span>{{recommendDataItem.readCount>9999 ? Math.floor(recommendDataItem.readCount/100)/10+'k' : recommendDataItem.readCount}}人看过</span>
          </div>
        </div>
        <div class="PhotographComment3" v-else-if="recommendDataItem.type===2">
          <div class="PhotographComment3Info">
            <div class="PhotographComment3InfoUser">
              <img :src="recommendDataItem.avatar" alt="">
              <span class="PhotographComment2UserName">{{recommendDataItem.nickname}}</span>
            </div>
            <div class="PhotographComment3Title">{{recommendDataItem.title}}</div>
            <div class="PhotographComment3Title2">{{recommendDataItem.subTitle}}</div>
            <div class="PhotographComment3InfoRcount">
              <i class="iconfont icon-yj"></i>
              <span>{{recommendDataItem.readCount>9999 ? Math.floor(recommendDataItem.readCount/1000)+recommendDataItem.readCount+'k' : recommendDataItem.readCount}}人看过</span>
            </div>
          </div>
          <div class="PhotographComment3Img">
            <img :src="recommendDataItem.picUrl" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        currteIndex:0,
        isOn:false
      }
    },
    mounted() {
      this.$store.dispatch('getTabs')
      this.$store.dispatch('getRecommend')
      let bs = new BScroll(this.$refs.PhotographNav, {
        pullUpLoad: true,
        scrollX:true,
        click:true,
        bounce:{
          top: false,
          bottom: false,
          left: false,
          right: false
        }
      })

    },
   
    methods: {
      getOn(index){
        this.currteIndex=index
      }
    },
    computed: {
      ...mapState({
        tabsData:state=>state.photograph.tabsData,
        recommendData:state=>state.photograph.recommendData
      }),

    },
   
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.headerClapboard
  height 90px
 
.PhotographHeader
  position fixed
  top 0
  width 100%
  .PhotographNav
    width 100%
    display flex
    border-top 1px solid #eee
    border-bottom 1px solid #eee
    .PhotographNavList
      display flex
      background-color #fff
      .PhotographNavItem
        font-size 14px
        height 35px
        white-space: nowrap;
        line-height 35px
        margin 0 5px
        padding 0 3px 5px
        &.on
          border-bottom 3px solid #B4282D
          color #B4282D
.PhotographCommentWrap
  padding-top 90px
  margin-top -90px
  .PhotographComment1
    width 100%
    background-color white
    padding 10px 0
    margin 10px 0
    img
      width 93%
      margin 0px auto
  .PhotographComment2
    width 100%
    background-color white
    padding 10px 0
    margin 10px 0 0
    img
      width 93%
      margin 0px auto
    .PhotographComment2User
      width 93%
      margin 0 auto 12px
      img
        border-radius 50%
        width 30px
        margin 0
        display inline-block
        vertical-align middle
      span
        vertical-align middle
    .PhotographComment2Title
      font-size 18px
      color #333
      width 93%
      margin 0 auto 12px
    .PhotographComment2Rcount
      width 93%
      margin 5px auto 12px
      color #999

  .PhotographComment3
    background-color white
    width 100%
    padding 10px 4%
    margin 10px 0 0

    display flex
    box-sizing border-box
    .PhotographComment3Info
      width 60%
      .PhotographComment3InfoUser
        width 93%
        img
          border-radius 50%
          width 30px
          margin 0
          display inline-block
          vertical-align middle
        span
          vertical-align middle
          font-size 14px

      .PhotographComment3Title
        font-size 18px
        color #333
        margin-top 20px
      .PhotographComment3Title2
        font-size 14px
        color #7f7f7f
        margin 10px 0
      .PhotographComment3InfoRcount
        color #7f7f7f
    .PhotographComment3Img
      width 40%
      img
        width 100%
</style>
