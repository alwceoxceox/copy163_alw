<template>
  <div>
    <div class="classifyContainer">
      <header id="classifyHeader">
        <input type="text" placeholder="搜索商品, 共21508款好物" class="search">
        <i class="iconfont icon-Search"></i>
      </header>
      <div class="classifyContent">
        <ul class="classifyNav">
          <li class="classifyNavItem active">
            推荐专区
          </li>
          <li class="classifyNavItem">夏凉专区</li>
          <li class="classifyNavItem">夏凉专区</li>
          <li class="classifyNavItem">推荐专区</li>
          <li class="classifyNavItem">推荐专区</li>
        </ul>
        <div class="particulars">
          <div class="banner">
            <img src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196" alt="">
          </div>
          <ul class="list">
            <li class="item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <div class="imgName">优选美食2件85折</div>
            </li>
            <li class="item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <div class="imgName">员工精选好货</div>
            </li>
            <li class="item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <div class="imgName">员工精选好货</div>
            </li>
            <li class="item">
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
              </div>
              <div class="imgName">员工精选好货</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .classifyContainer
    background-color white
    width 100%
    height 667px

    #classifyHeader
      width 100%
      height 45px
      position relative
      border-bottom 1px solid #eee
      margin-bottom 10px
      .search
        width 90%
        height 30px
        background-color #eeeeee
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        padding-left 90px
        box-sizing border-box
        font-size 14px
        border-radius 2px
      .icon-Search
        position absolute
        top 35%
        left 21%
    .classifyContent
      width 100%
      padding  10px 0
      display flex
      font-size 14px
      color #333
      padding 0 5%
      box-sizing border-box
      .classifyNav
        width 20%
        margin-top 5px
        .classifyNavItem
          width 100%
          height 45px
          line-height 45px
          box-sizing border-box
          &.active
            position relative
            color #ab2b2b
            &::before
              width 3px
              content ""
              height 50%
              display inline-block
              background-color #ab2b2b
              position absolute
              top 50%
              transform translateY(-50%)
              left -19px
          &:nth-child(1)
            margin-top -10px

      .particulars
        width 80%
        box-sizing border-box
        padding-left 10px
        .banner
          img
            width 100%
        .list
          width 100%
          display flex
          flex-wrap wrap
          margin-top 10px
          .item
            margin-right 17px
            box-sizing border-box
            font-size 12px
            &:nth-child(3n)
              margin-right  0
            .imgWrap
              img
                width 72px
                margin 0 auto
            .imgName
              width 72px
              text-align center
</style>
