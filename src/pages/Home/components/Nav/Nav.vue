<template>
    <div class="IndexNecessity">
      <ul class="IndexNecessityList">
        <li class="IndexNecessityItem" v-for="(necessity, index) in getKingKongList" :key="index">
          <img :src="necessity.picUrl" alt="新品首发">
          <div>{{necessity.text}}</div>
        </li>
       
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
import {mapState,mapGetters} from 'vuex'
  export default {
   
    computed: {
      ...mapGetters(['getKingKongList'])
    
   },
   mounted() {
     this.$store.dispatch('getHomeData')
   },
   

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.IndexNecessity
  width 100%
  background-color white
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

</style>
