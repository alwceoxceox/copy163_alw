<template>
  <div>
    <div class="classifyContainer">
      <header id="classifyHeader">
        <input type="text" placeholder="搜索商品, 共21508款好物" class="search" @click="$router.push('/search')">
        <i class="iconfont icon-Search"></i>
      </header>
      <div class="classifyContent">
        <div ref="classifyNavWRap" class="classifyNavWRap">
          <ul class="classifyNav">
            <li class="classifyNavItem" :class="{active: currentIndex===index}" @click.stop="getActive(index)" v-for="(classifyNavItem, index) in categoryData.categoryL1List" :key="index">
              {{classifyNavItem.name}}
            </li>
          </ul>
        </div>
        
        <div class="particularsWrap" ref="particularsWrap">
            <div class="particulars" v-show="index===currentIndex" v-for="(item, index) in categoryData.categoryL1List" :key="index">
            <div class="banner">
              <img :src="item.bannerUrl" alt="">
            </div>
            <ul class="list">
              <li class="item" v-for="(user, index) in item.subCateList" :key="index">
                <div class="imgWrap">
                  <img :src="user.bannerUrl" alt="">
                </div>
                <div class="imgName">{{user.frontName}}</div>
              </li>
            </ul>
          </div>
        </div>
        

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        isShow:false,
        currentIndex:0
      }
    },
    methods: {
      getActive(index){
        this.currentIndex=index
      }
    },
    computed: {
      ...mapState({
        categoryData:state=>state.classify.categoryData
      })
    },
    async mounted() {
      await this.$store.dispatch('getClassify')
      this.$nextTick(
        ()=>{
            new BScroll(this.$refs.classifyNavWRap, {
              click: true,
              scrollY:true
            })
        }
      )
      this.$nextTick(
        ()=>{
            new BScroll(this.$refs.particularsWrap, {
              click: true,
              scrollY:true
            })
        }
      )
    },
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
      overflow: hidden;
      .classifyNavWRap
        margin-bottom 20px
        .classifyNav
          width 60px
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

      .particularsWrap
        width 100%
        height 100%
        .particulars
          width 100%
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
