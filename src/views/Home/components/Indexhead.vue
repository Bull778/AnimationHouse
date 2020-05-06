<template>
  <div class="normal-top" style="position: fixed;">
      <img
        class="normal-top-logo"
        src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/top-main-logo.png"
      />
      <div class="normal-top-right">
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
  name: 'Indexhead'
}
</script>

<style lang="scss">
  .normal-top {
    height: 45px;
    line-height: 45px;
    padding: 0 5%;
    border-bottom: 1px solid #f4f4f4;
    background-color: #fff;
    width: 90%;
    text-shadow: 0 0 black;
    z-index: 9999;
    img.normal-top-logo {
      height: 27px;
      vertical-align: top;
      margin-top: 7px;
      overflow: hidden;
    }
    fieldset,
    img {
      border: 0;
    }
    .normal-top-right {
      float: right;
      img.normal-top-right-search {
        height: 22px;
        vertical-align: top;
        margin-top: 13px;
      }
      img.normal-top-right-avatar {
        height: 25px;
        vertical-align: top;
        margin-top: 11px;
        margin-left: 20px;
        width: 25px;
        border-radius: 50%;
      }
    }
  }
</style>
