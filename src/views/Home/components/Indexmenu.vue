<template>
  <div class="index-menu">
    <div class="index-menu-item">
      <router-link to="/classification">
        <img
          class="index-menu-item-img"
          src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/index-menu-1.png"
        />
        <p class="index-menu-item-title">分类</p>
      </router-link>
    </div>
    <div class="index-menu-item">
      <router-link to="/ranking">
        <img
          class="index-menu-item-img"
          src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/index-menu-2.png"
        />
        <p class="index-menu-item-title">排行</p>
      </router-link>
    </div>
    <div class="index-menu-item">
      <router-link to="/update">
        <img
          class="index-menu-item-img"
          src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/index-menu-3.png"
        />
        <p class="index-menu-item-title">更新</p>
      </router-link>
    </div>
    <div class="index-menu-item">
      <router-link to="/history">
        <img
          class="index-menu-item-img"
          src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/index-menu-4.png"
        />
        <p class="index-menu-item-title">历史</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Indexmenu'
}
</script>
<style lang="scss" scoped>
.index-menu {
  font-size: 0;
  background-color: #fff;
  padding: 0 20px;
  padding-top: 50px;
  padding-bottom: 10px;
  z-index: 2;
  .index-menu-item {
    width: 25%;
    text-align: center;
    display: inline-block;
  .index-menu-item-img {
    width: 35px;
  }
  .index-menu-item-title {
      font-size: 13px;
      color: #212121;
      letter-spacing: 0;
      margin-top: 5px;
    }
  }
}
</style>
