<template>
  <div class="page-home" v-returntop>
      <!-- 首页头部 -->
      <Indexhead></Indexhead>
      <!-- 轮播图 -->
      <div class="banner">
        <Swiper
          class="myswiper"
          @change="onChange"
          ref="swiper"
          :autoplay="2500"
        >
          <swiper-item>
            <img
              src="http://mhfm6tel.cdndm5.com/50/49518/20190419151802_880x385.jpg"
              alt="《快穿之拯救世界攻略》更新至64节"
              title="《快穿之拯救世界攻略》更新至64节"
            />
          </swiper-item>
          <swiper-item>
            <img
              src="http://mhfm6tel.cdndm5.com/42/41679/20200409101850_880x385_116.jpg"
              alt="《斗罗大陆》更新至250节"
              title="《斗罗大陆》更新至250节"
            />
          </swiper-item>
          <swiper-item>
            <img
              src="http://mhfm8tel.cdndm5.com/34/33770/20190725100706_880x385.jpg"
              alt="《星武神诀》更新至339节"
              title="《星武神诀》更新至339节"
            />
          </swiper-item>
          <swiper-item>
            <img
              src="http://mhfm2tel.cdndm5.com/53/52494/20190812165637_880x385.jpg"
              alt="《老婆大人有点冷》更新至123节"
              title="《老婆大人有点冷》更新至123节"
            />
          </swiper-item>
          <swiper-item>
            <img
              src="http://mhfm5tel.cdndm5.com/38/37016/20180804094101_880x385.jpg"
              alt="《驭灵师》更新至421节"
              title="《驭灵师》更新至421节"
            />
          </swiper-item>
        </Swiper>
      </div>
      <!-- 轮播图下的白边 -->
      <div class="banner-bottom">
        <img
          src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/banner-bottom.png"
        />
      </div>
      <!-- 导航选择 -->
      <Indexmenu></Indexmenu>
      <!-- APP下载 -->
      <div class="ad-top">
        <a
          href="javascript:window.location.href = 'IOSmanhuaren://';setTimeout(function () {window.location.href = '/download/';}, 2000);"
        >
          <img
            class="ad-top-img"
            src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/ad-center.png"
          />
        </a>
      </div>
      <!-- 强势安利 -->
      <Indexlist1> </Indexlist1>
      <!-- 万人追更和日漫大佬 -->
      <Indexlist2></Indexlist2>
      <!-- 中间隔层 -->
      <div class="box"></div>
      <!-- 精品书单 -->
      <Indexlist3></Indexlist3>
      <!-- VIP专区 -->
      <Indexlist4></Indexlist4>
      <!-- 上升最快 -->
      <Indexlist5></Indexlist5>
      <!-- 排行榜 -->
      <Indexlist6></Indexlist6>
      <!-- 底部 -->
      <a
        href="javascript:window.location.href = 'IOSmanhuaren://';setTimeout(function () {window.location.href = '/download/';}, 2000);"
      >
        <img
          class="index-bottom-ad"
          src="http://css99tel.cdndm5.com/v202004101051/dm5/images/mobile/index-bottom-ad.png"
        />
      </a>
      <!-- 回到顶部按钮 -->
  </div>
</template>

<script>
// 引入Swiper核心和样式
// import BScroll from 'better-scroll'
import { Swiper, SwiperItem } from '@/components/Swiper'
import Indexmenu from './components/Indexmenu'
import Indexhead from './components/Indexhead'
import Indexlist1 from './components/Indexlist1'
import Indexlist2 from './components/Indexlist2'
import Indexlist3 from './components/Indexlist3'
import Indexlist4 from './components/Indexlist4'
import Indexlist5 from './components/Indexlist5'
import Indexlist6 from './components/Indexlist6'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Swiper,
    SwiperItem,
    Indexmenu,
    Indexhead,
    Indexlist1,
    Indexlist2,
    Indexlist3,
    Indexlist4,
    Indexlist5,
    Indexlist6
  },
  methods: {
    onChange (index) {
      console.log('lbt', index)
    }
  }
  // mounted () {
  //   this.scroll = new BScroll('.page-home', {
  //     scrollY: true,
  //     click: true
  //   })
  // }
}
</script>
<style lang="scss">
.page-home {
  padding-top: 0px;
  overflow-y: auto;
  .banner {
    position: relative;
    top: 45px;
    overflow: hidden;
    font-size: 0;
    width: 100%;
    .myswiper img {
      border: 0;
      width: 100%;
    }
  }
  .banner-bottom {
    position: relative;
    width: 100%;
    z-index: 1;
    img {
      position: absolute;
      bottom: -45px;
      width: 100%;
    }
  }
  .ad-top {
    overflow: hidden;
    position: relative;
    font-size: 0;
    .ad-top.mt10 {
      margin-top: 10px;
    }

    .ad-top.mb10 {
      margin-bottom: 10px;
    }

    .ad-top-img {
      width: 100%;
    }

    .ad-top-cross {
      position: absolute;
      height: 100%;
      top: 0;
      left: 3%;
    }
  }
  .box {
    height: 100px;
    background-color: #f8f8f8;
  }
  .index-bottom-ad {
    width: 60%;
    padding: 30px 20%;
  }
}
</style>
