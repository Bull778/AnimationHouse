<template>
  <div class="normal-top">
    <div @click="goBack">
      <img
        class="normal-top-back"
        src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/normal-top-back.png"
        alt="后退"
      />
    </div>
    <span class="normal-top-title">{{ title }}</span>
    <div class="normal-top-right" v-if="showRight">
      <router-link to="/search">
        <img
          class="normal-top-right-search"
          src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/top-right-search.png"
        />
      </router-link>
      <router-link to="/my">
        <img
          class="normal-top-right-avatar"
          src="http://css99tel.cdndm5.com/dm5/images/mrtx.gif"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Commonheader',
  props: {
    title: {
      type: String,
      default: '动漫屋'
    },
    showRight: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goBack () {
      // ?使用编程式导航?
      this.$router.back()
    }
  }
}
</script>

<style>
.normal-top {
    height: 45px;
    line-height: 45px;
    padding: 0 5%;
    border-bottom: 1px solid #F4F4F4;
    background-color: #fff;
    position: fixed;
    left: 0;
    width: 90%;
    top: 0;
    z-index: 98;
}

.normal-top-back {
    height: 12px;
    float: left;
    margin-top: 17px;
}
.normal-top-title {
    font-size: 18px;
    color: #252525;
    margin-left: 10px;
    font-weight: bold;
    display: inline-block;
    width: 58%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.normal-top-logo {
    height: 27px;
    vertical-align: top;
    margin-top: 7px;
}
.normal-top-right {
    float: right;
}
.normal-top-right-search {
    height: 22px;
    vertical-align: top;
    margin-top: 13px;
}
.normal-top-right-avatar {
    height: 25px;
    vertical-align: top;
    margin-top: 11px;
    margin-left: 20px;
    width: 25px;
    border-radius: 50%;
}
</style>
