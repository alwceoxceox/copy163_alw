<template>
  <div class="loginContainer">
    <Header>
      <span class="headerHome" slot="left">
        <i class="iconfont icon-home" @click="$router.push('/home')"></i>
      </span>
      <span class="loginLogo" slot="middle" @click="$router.push('/home')">
        网易严选
      </span>
      <span class="headerSearch"  slot="right">
        <i class="iconfont icon-Search" @click="$router.push('/search')"></i>
        <i class="iconfont icon-gouwuche" @click="$router.push('/shoppingCart')"></i>
      </span>
    
    </Header>
    <div class="loginContent" v-if="isShow===1">
      <div class="loginLogo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="loginBtn">
        <div class="loginMobile" @click.stop="isShow=2">
          <i class="iconfont icon-shouji"></i>
          <span>手机号快捷登录</span>
        </div>
        <div class="loginEmail" @click.stop="isShow=3">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱帐号登录</span>
        </div>
      </div>
      <div class="thirdWrap">
        <div class="thirdItem">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="thirdItem">
          <i class="iconfont icon-qq"></i>
          <span>qq</span>
        </div>
        <div class="thirdItem">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <div class="phoneLogin"  v-else-if="isShow===2">
      <div class="phoneLoginLogo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <form action="##" >
        <div class="phoneLoginFormWrap">
          <input type="text" placeholder="请输入手机号" name="phone" v-model="phone" v-validate="'required|mobile'">
          <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
          <div class="emailVerify">
            <input type="text" placeholder="请输入短信验证码" v-model="code" name="code" v-validate="{required: true, regex: /^\d{6}$/}">
            <button @click.prevent="sendCode" :disabled="!isRightPhone || computeTime>0">
              {{computeTime>0 ? `短信已发送${computeTime}s` : "获取验证码"}}
            </button>
            <span style="color: red;" v-show="errors.has('code')">{{ errors.first('code') }}</span>
          </div>
          <div class="issue">
            <span>遇到问题？</span>
            <span @click="isShow=3">使用密码验证登录</span>
          </div>
          <button class="btn" @click.prevent="loginBtn">登录</button>
          <div class="clause">
            <h5 @click="">
              <input type="checkbox" checked>
            </h5>
            <div class="contract">
              我同意
              <a href="">《服务条款》</a>
              和
              <a href="">《网易隐私政策》</a>
            </div>
          </div>
        </div>
      </form>
      <div class="otherLogin">
        <span @click="isShow=1">其他登录方式</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
    </div>
    <div class="emailLogin" v-else>
      <div class="emailLoginLogo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <form action="##" >
        <div class="emailLoginLogoFormWrap">
          <input type="text" placeholder="邮箱账号" name="邮箱" v-model="email" v-validate="'required'">
          <span style="color: red;">{{errors.first('邮箱')}}</span>
          <div class="emailVerify">
            <input type="password" placeholder="密码" name="密码" v-model="password" v-validate="'required'">
            <span style="color: red;">{{errors.first('密码')}}</span>
          </div>
          <div class="issue">
            <span>注册账号</span>
            <span>忘记密码</span>
          </div>
          <button class="btn" @click.prevent="loginBtn">登录</button>

        </div>
      </form>
      <div class="otherLogin">
        <span @click="isShow=1">其他登录方式</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {Toast,MessageBox} from 'mint-ui'
  export default {
    data() {
      return {
        isShow:1,//1登录主页2手机登录3邮箱
        phone:'',//手机号
        code:'',//验证码验证
        email:'',//邮箱
        password:'',
        computeTime:0,//计时
        // isRightPhone:false
      }
    },
    computed: {
      isRightPhone(){
        // 手机验证
        return /^1[3456789]\d{9}$/.test(this.phone)
      }
    },
    methods: {
      sendCode(){
        /* 
        发送验证
        */
        // 设置最大时间
        this.computeTime=10
        // 启动循环定时器进行计时
        const timer=setInterval(()=>{
          this.computeTime--
          //一但computeTime=0清除定时器
          if(this.computeTime===0){
            clearInterval(timer)
          }
        },1000)
      },
      async loginBtn(){
        const {isShow, phone, code, email, password}=this
        let names
        if(isShow===2){//短信登录
          names=['phone','code']
        }else{
          names=['邮箱','密码']
        }
        const success = await this.$validator.validateAll(names)
         if(success) {
          Toast('表单验证通过, 发送登陆请求')
        }
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .loginContent
    .loginLogo
      margin 90px 0 100px
      img
        width 35%
        margin 0 auto
    .loginBtn
      padding 0 20px
      &>div
        width 100%
        height 45px
        line-height 45px
        background-color #DD1A21
        text-align center
        margin-bottom 20px
        font-size 14px
        border 1px solid #DD1A21
      .loginMobile
        color white
      .loginEmail
        color #DD1A21
        background-color #eee
    .thirdWrap
      overflow hidden
      margin-top 210px
      margin-left 50px
      .thirdItem
        width 90px
        text-align center
        font-size 14px
        color #333
        float left
        border-right 1px solid #7F7F7F
        &:nth-child(3)
          border-right 0px solid #7F7F7F
  .phoneLogin
    background-color white
    width 100%
    height 800px
    .phoneLoginLogo
      padding  20px 0
      img
        width 100px
        margin 0 auto
    form>.phoneLoginFormWrap
      input
        width 90%
        height 40px
        line-height 40px
        margin 15px auto 15px
        display block
        border-bottom 1px solid #eee
        font-size 14px
      .emailVerify
        position relative
        &>button
          border 1px solid #666
          position absolute
          right: 25px
          bottom 10px
          font-size  14px
          padding 5px
      .issue
        padding 0 5%
        font-size 14px
        margin-top 20px
        overflow hidden
        span
          overflow hidden
          &:nth-child(1)
            float left
            color #7f7f7f
          &:nth-child(2)
            float right
      .btn
        width 90%
        background-color #DD1A21
        color white
        border none
        outline none
        margin 20px auto
        display block
        line-height 45px
        border-radius 2px

      .clause
        padding 0 5%
        display flex
        &>h5
          background-image url(//yanxuan.nosdn.127.net/6830e38fbcc7c038eea164ecb53365ca.png)
          background-size 100% 100%
          width 18px
          height 18px
          color #999
          &>input
            width 100%
            height 100%
            opacity 0
        .contract
          display flex
          align-items center
          padding-left 5px
          &>a
            color #007AFF
    .otherLogin
      padding 0 5%
      text-align center
      margin-top 30px
      font-size 14px
      &>i
        font-size 13px

  .emailLogin
    background-color white
    width 100%
    height 800px
    .emailLoginLogo
      padding  20px 0
      img
        width 100px
        margin 0 auto
    form>.emailLoginLogoFormWrap
      margin-top 80px
      input
        width 90%
        height 40px
        line-height 40px
        margin 15px auto 15px
        display block
        border-bottom 1px solid #eee
        font-size 14px
      .emailVerify
        position relative
        &>div
          border 1px solid #666
          position absolute
          right: 25px
          bottom 10px
          font-size  14px
          padding 5px
      .issue
        padding 0 5%
        font-size 14px
        margin-top 20px
        overflow hidden
        span
          overflow hidden
          &:nth-child(1)
            float left
            color #7f7f7f
          &:nth-child(2)
            float right
      .btn
        width 90%
        background-color #DD1A21
        color white
        border none
        outline none
        margin 20px auto
        display block
        line-height 45px
        border-radius 2px

      .clause
        padding 0 5%
        display flex
        &>h5
          background-image url(//yanxuan.nosdn.127.net/6830e38fbcc7c038eea164ecb53365ca.png)
          background-size 100% 100%
          width 18px
          height 18px
          color #999
          
          &>input
            width 100%
            height 100%
            opacity 0
        .contract
          display flex
          align-items center
          padding-left 5px
          &>a
            color #007AFF
    .otherLogin
      padding 0 5%
      text-align center
      margin-top 30px
      font-size 14px
      &>i
        font-size 13px
</style>
