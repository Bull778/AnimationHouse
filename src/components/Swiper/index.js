// 引入 Swiper.vue 与 SwiperItem.vue
import Swiper from './Swiper.vue'
import SwiperItem from './Swiperitem.vue'

// 暴露
// export default {
//   Swiper,
//   SwiperItem
// }

// ESM 的规范在引入时只是看上去像解构赋值
// 其实不是，需要个命名暴露
export {
  Swiper,
  SwiperItem
}
