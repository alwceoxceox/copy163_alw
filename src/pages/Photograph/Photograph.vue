<template>
  <div>
    <div class="PhotographHeader">
      <Header></Header>
      <div class="PhotographNav">
        <div class="PhotographNavList">
          <a class="PhotographNavItem">盛夏特别版</a>
          <a class="PhotographNavItem on">推荐</a>
          <a class="PhotographNavItem">盛夏特别版</a>
          <a class="PhotographNavItem">盛夏特别版</a>
          <a class="PhotographNavItem">盛夏特别版</a>
          <a class="PhotographNavItem">盛夏特别版</a>
        </div>
      </div>
    </div>
    <div class="PhotographCommentWrap">
      <div class="PhotographComment1">
        <img src="https://yanxuan.nosdn.127.net/4d3325dca3fd3955cb3f71049bcb06cf.jpg?imageView&quality=65&thumbnail=690y376" alt="">
      </div>
      <div class="PhotographComment2">
        <div class="PhotographComment2User">
          <img src="https://yanxuan.nosdn.127.net/345ad0e4fdfdd16e1ad9baee2dd26c5f.png?imageView&quality=65&thumbnail=56y56" alt="">
          <span class="PhotographComment2UserName">选妹</span>
        </div>
        <div class="PhotographComment2Title">
          每天在用的纸巾，你会留意原料吗？原生木浆纸巾更安全~
        </div>
        <img src="https://yanxuan.nosdn.127.net/4d3325dca3fd3955cb3f71049bcb06cf.jpg?imageView&quality=65&thumbnail=690y376" alt="">
        <div class="PhotographComment2Rcount">
          <i class="iconfont icon-yj"></i>
          <span>88k人看过</span>
        </div>
      </div>
      <div class="PhotographComment3">
        <div class="PhotographComment3Info">
          <div class="PhotographComment3InfoUser">
            <img src="https://yanxuan.nosdn.127.net/345ad0e4fdfdd16e1ad9baee2dd26c5f.png?imageView&quality=65&thumbnail=56y56" alt="">
            <span class="PhotographComment2UserName">网易有道：莉莉</span>
          </div>
          <div class="PhotographComment3Title">我可以擦厨房，但从不洗抹布</div>
          <div class="PhotographComment3Title2">本色抑菌懒人抹布</div>
          <div class="PhotographComment3InfoRcount">
            <i class="iconfont icon-yj"></i>
            <span>88k人看过</span>
          </div>
        </div>
        <div class="PhotographComment3Img">
          <img src="https://yanxuan.nosdn.127.net/dfb45f7fb44232989b7094e8be4a8dd3.jpg?imageView&quality=65&thumbnail=272y272" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted() {
      let PhotographNav = document.querySelector('.PhotographNav')
      let bs = new BScroll('.PhotographNav', {
        pullUpLoad: true,
        scrollX:true,
        bounce:{
          top: false,
          bottom: false,
          left: false,
          right: false
        }
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.PhotographHeader
  position fixed
  top 0
  width 100%
  .PhotographNav
    width 100%
    overflow hidden
    border-top 1px solid #eee
    border-bottom 1px solid #eee
    .PhotographNavList
      width 200%
      background-color #fff
      .PhotographNavItem
        font-size 14px
        height 35px
        line-height 35px
        margin 0 5px
        padding 0 3px 5px
        &.on
          border-bottom 3px solid #B4282D
          color #B4282D
.PhotographCommentWrap
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
    margin 10px 0
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
