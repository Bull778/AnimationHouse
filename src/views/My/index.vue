<template>
  <div class="page-My">
    <Commonheader title="个人中心" :showRight="false"></Commonheader>
    <div class="center-main">
      <div class="center-main-login">
        <router-link to="/login" class="center-main-login-btn"
          >登录</router-link
        >
        <router-link to="registered" class="center-main-login-btn"
          >注册</router-link
        >
      </div>
    </div>
    <ul class="center-main-list">
      <li>
        <a href="#">
          <img
            class="center-main-list-logo"
            src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/center-main-list-logo-1.png"
          />
          <span class="center-main-list-title">我的收藏</span>
          <img
            class="center-main-list-right"
            src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/wallet-menu-arrow.png"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            class="center-main-list-logo"
            src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/center-main-list-logo-2.png"
          />
          <span class="center-main-list-title">阅读历史</span>
          <img
            class="center-main-list-right"
            src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/wallet-menu-arrow.png"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            class="center-main-list-logo"
            src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/center-main-list-logo-3.png"
          />
          <span class="center-main-list-title">我的钱包</span>
          <img
            class="center-main-list-right"
            src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/wallet-menu-arrow.png"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            class="center-main-list-logo"
            src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/center-main-list-logo-4.png"
          />
          <span class="center-main-list-title">VIP会员</span>
          <img
            class="center-main-list-right"
            src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/wallet-menu-arrow.png"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            class="center-main-list-logo"
            src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/center-main-list-logo-5.png"
          />
          <span class="center-main-list-title">兑换VIP</span>
          <img
            class="center-main-list-right"
            src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/wallet-menu-arrow.png"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            class="center-main-list-logo"
            src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/center-main-list-logo-6.png"
          />
          <span class="center-main-list-title">我要投稿</span>
          <img
            class="center-main-list-right"
            src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/wallet-menu-arrow.png"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            class="center-main-list-logo"
            src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/center-main-list-logo-1.png"
          />
          <span class="center-main-list-title">意见反馈</span>
          <img
            class="center-main-list-right"
            src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/wallet-menu-arrow.png"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Commonheader from '@/components/Commonheader'
export default {
  name: 'My',
  components: {
    Commonheader
  }
}
</script>

<style lang="scss" scoped>
.center-main {
    margin-top: 46px;;
    height: 100px;
    background: url("~@/assets/icon/center-main-bg.png") no-repeat;
    background-size: cover;
}

.center-main-login {
    padding-top: 30px;
    text-align: center;
}

.center-main-login-btn {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: inline-block;
    font-size: 15px;
    color: #FD113A;
    letter-spacing: 0;
    background-color: #f4f4f4;
    border-radius: 2px;
    margin: 0 20px;
}
.center-main-list {
    margin-top: 10px;
}
.center-main-list li {
    border-top: 1px solid #f4f4f4;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
}
.center-main-list li a{
    display: block;
}
.center-main-list-logo {
    width: 22px;
    height: 22px;
    vertical-align: top;
    margin: 14px;
    margin-left: 12px;
    margin-right: 9px;
}

.center-main-list-title {
    font-size: 16px;
    color: #252525;
    letter-spacing: 0;
}

.center-main-list-title-edit {
    font-size: 16px;
    color: #252525;
    letter-spacing: 0;
    margin-left: 20px;
}

.center-main-list-right {
    height: 14px;
    float: right;
    margin: 18px 0;
    margin-right: 14px;
}
</style>
