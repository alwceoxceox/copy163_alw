<template>
  <div>
     <li class="indexCardL indexCard">
      <div class="private limit">
        <span class="">限时购</span>
        <div class="countdown">
            <span class="hours" >00</span>
            <span class="colon" >:</span>
            <span class="mins" >30</span>
            <span class="colon" >:</span>
            <span class="secs" >50</span>
        </div>
        <div class="rightArrows">
            <span>更多</span>
            <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
      <div  v-if="homeData.flashSaleModule" >
        <div class="commodity" v-for="(item, index) in homeData.flashSaleModule.itemList" :key="index">
          <img :src="item.picUrl" :alt="item.itemId">
          <div class="price pad">
              <span>¥{{item.activityPrice}}</span>
              <span class="line">¥{{item.originPrice}}</span>
          </div>
        </div>
      </div>
      
    </li>
    <li class="indexCardL indexCard">
      <div class="private limit">
        <span class="">新品首发</span>

        <div class="rightArrows">
          <span>更多</span>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
    <div v-if="homeData.newItemList">
      <div class="commodity" v-for="(newItem, index) in homeData.newItemList" :key="index" v-if="index<6">
          <img :src="newItem.listPicUrl" alt="新品">
          <div class="price pad">
              {{newItem.name.length>14?newItem.name.slice(0,14)+'...':newItem.name}}
              <span>¥{{newItem.retailPrice}}</span>
          </div>
          <p></p>
      </div>
    </div>
      
    

    </li>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        homeData:state=>state.home.homeData
      })
    
    },
    async mounted() {
      await this.$store.dispatch('getHomeData')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.indexCard
  margin-top 10px
  background-color white
.indexCardL
  width 100%
  overflow hidden
  flex-wrap wrap
  justify-content center
  .private
    line-height 40px
    padding 0 10px
    span
      font-size 16px
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
    //  部分indexCard限时购
    .pad
      padding-left 7px
      .line
        text-decoration line-through
        color black
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
      .icon-jiantou
        width 20px
        height 20px
       
        
      
</style>
