<template>
  <div>
    <li class="indexCardL indexCard">
        <div class="private limit">
            <span class="">专题精选</span>

            <div class="rightArrows">
                <span>更多</span>
                <i class="iconfont icon-jiantou"></i>
            </div>
        </div>
        <div class="cosmeticsListWrap">
          <ul class="cosmeticsList" v-if="homeData.topicList">
            <li class="cosmeticsItem" v-for="(item, index) in homeData.topicList" :key="index">
                <img :src="item.itemPicUrl" alt="">
                <h4> {{item.title.length>13?item.title.slice(0,13)+'...':item.title}}</h4>
                <div>{{item.subtitle}}</div>
            </li>
           
          </ul>
        </div>
    </li>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        homeData:state=>state.home.homeData
      })
    },
   async mounted() {
      await this.$store.dispatch('getHomeData')
      this.$nextTick(
        ()=>{
            new BScroll('.cosmeticsListWrap', {
              pullUpLoad: true,
              scrollX:true
            })
        }
      )
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .indexCard
    margin-top 10px
    background-color white
    font-size 16px
    .cosmeticsListWrap
      display flex
      width 100%
      .cosmeticsList
        display flex
        margin 5px 0 10px 5px
        .cosmeticsItem
          float left
          width 225px
          margin-left 10px
          background-color #eee
          padding-bottom 10px
          img
            width 225px
          h4
            font-size 14px
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width 200px
            margin 5px 0 5px 3px
          div
            font-size 12px
            color #7f7f7f
            margin-left 3px
  .indexCardL
    width 100%
    overflow hidden
    flex-wrap wrap
    justify-content center
    .private
      line-height 40px
      padding 0 10px
    .limit
      display flex
      position relative
      .countdown
        margin-left 10px
        span
          &:nth-child(2n+1)
            background-color black
            color: #fff
            border-radius 3px
            font-size 14px
      .rightArrows
        position absolute
        right 0
        margin-right 9px
    
      
</style>
