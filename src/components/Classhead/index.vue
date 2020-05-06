<template>
  <div class="search-top">
      <div @click="goBack" class="search-top-back">
      </div>
      <div class="search-top-input">
        <img
          src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/search-top-input-logo.png"
        />
        <input type="text" id="searchtxt" placeholder="请输入漫画名或作者名" />
      </div>
      <router-link to="/search" class="search-top-right" style="color: #fff;">
        搜索
      </router-link>
    </div>
</template>

<script>

export default {
  name: 'Classhead',
  methods: {
    goBack () {
      // ?使用编程式导航?
      this.$router.back()
    }
  }
}
</script>

<style>
  .search-top {
  height: 45px;
  line-height: 45px;
  padding: 0 20px;
  border-bottom: 1px solid #f4f4f4;
  background-color: #fd113a;
  position: fixed;
  left: 0;
  width: 90%;
  top: 0;
  z-index: 99;
}
.search-top-back {
  position: absolute;
  top: 50%;
  left: 15px;
  margin-top: -6px;
  width: 24px;
  height: 14px;
  background: url("~@/assets/icon/search-top-input-logo.png") no-repeat;
  background-size: 100%;
  z-index: 999;
}
.search-top-input {
  padding-left: 40px;
  padding-right: 40px;
  position: relative;
}
.search-top-input input {
  margin: 0;
  border: none;
  background: #ffffff;
  border-radius: 2px;
  height: 35px;
  width: 80%;
  outline: none;
  vertical-align: top;
  margin-top: 5px;
  padding: 0 5%;
  padding-left: 15%;
  font-size: 15px;
  font-family: "Microsoft YaHei";
  /* background-image: url(/dm5/images/mobile/search-top-input-logo.png); */
}
.search-top-input img {
  position: absolute;
  z-index: 99;
  width: 15px;
  height: 15px;
  top: 15px;
  left: 50px;
}
.search-top-right {
  height: 45px;
  line-height: 45px;
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 15px;
}
</style>
