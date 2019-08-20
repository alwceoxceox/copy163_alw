<template>
  <div>
    <Header></Header>
    <div class="loginContent" v-show="false">
      <div class="loginLogo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="loginBtn">
        <div class="loginMobile">
          <i class="iconfont icon-shouji"></i>
          <span>手机号快捷登录</span>
        </div>
        <div class="loginEmail">
          <i class="iconfont icon-youxiang"></i>
          <span>手机号快捷登录</span>
        </div>
      </div>
      <div class="thirdWrap">
        <div class="thirdItem">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="thirdItem">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="thirdItem">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
      </div>
    </div>
    <div class="phoneLogin"  v-show="false">
      <div class="phoneLoginLogo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <form action="##" >
        <div class="phoneLoginFormWrap">
          <input type="text" placeholder="请输入手机号">
          <div class="emailVerify">
            <input type="text" placeholder="请输入短信验证码">
            <div >获取验证码</div>
          </div>
          <div class="issue">
            <span>遇到问题？</span>
            <span>使用密码验证登录</span>
          </div>
          <button class="btn">登录</button>
          <div class="clause">
            <h5>
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
        <span>其他登录方式</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
    </div>
    <div class="emailLogin" >
      <div class="emailLoginLogo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <form action="##" >
        <div class="emailLoginLogoFormWrap">
          <input type="text" placeholder="邮箱账号">
          <div class="emailVerify">
            <input type="password" placeholder="密码">

          </div>
          <div class="issue">
            <span>注册账号</span>
            <span>忘记密码</span>
          </div>
          <button class="btn">登录</button>

        </div>
      </form>
      <div class="otherLogin">
        <span>其他登录方式</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
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
    height 600px
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

  .emailLogin
    background-color white
    width 100%
    height 600px
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
