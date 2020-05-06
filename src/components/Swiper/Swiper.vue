<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!--
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
       -->

      <slot />
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" ></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',

  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    const that = this

    /* eslint-disable */
    // this.$el 还可以使用 this.$refs.swiper
    new Swiper(this.$el, {
      pagination: {
        el: ".swiper-pagination"
      },

      loop: this.loop,

      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      } : false,

      on: {
        // 这里不要使用箭头函数，否则里面的this指向指向的是当前的组件实例。而不是想要的 swiper 实例
        slideChangeTransitionEnd: function () {
          // 触发一个自定义事件 change

          that.$emit('change', this.realIndex)
        },
      },
    });
    /* eslint-enable */
  }
}
</script>

<style lang="scss">
.swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: #D9D9D9;
    opacity: 1;
}
.swiper-pagination-bullet-active {
    width: 23px;
    background: #FD113A;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 18px;
    left: 0;
    width: 100%;
}
</style>
