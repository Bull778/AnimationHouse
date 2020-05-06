<template>
  <section v-show="visible" class="back-to-top" @click="handleClick">
      <div class="icon-arrow-up"></div>
  </section>
</template>

<script>
export default {
  name: 'BackToTop',

  data () {
    return {
      visible: false
    }
  },

  methods: {
    handleClick () {
      this.$el.parentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.back-to-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-align: center;
  position: fixed;
  z-index: 9999;
  bottom: 20px;
  right: 5px;
  color: #fff;
  font-size: 10px;
  .icon-arrow-up {
    width: 50px;
    height: 50px;
    margin: auto;
    background: url("./assets/return-top.png") no-repeat;
    background-size: 100%;
  }
}
</style>
