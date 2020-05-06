<template>
  <div class="page-Search">
    <div class="first-page">
      <div class="logo-bar"><img src="~@/assets/icon/Seach-logo.png" alt=""></div>
      <router-link to="/searchresults" class="search-con">
          <span class="search-con-btn">王者天下</span>
      </router-link>
      <div class="rec-con">
        <p class="rec-title">热门推荐</p>
        <div class="rec-list">
          <div class="rec-item">
            <img
              src="https://fm2.soman.com/7/6746/20190222150526_180x240_28.jpg"
              class="rec-item-cover"
            />
            <p class="rec-item-title">王者天下</p>
          </div>
          <div class="rec-item">
            <img
              src="https://fm1.soman.com/39/38247/20191016124904_180x240_26.jpg"
              class="rec-item-cover"
            />
            <p class="rec-item-title">
              失格纹的最强贤者～世界最强的贤者为了变得更强而转生了～
            </p>
          </div>
          <div class="rec-item">
            <img
              src="https://fm7.soman.com/42/41463/20200416230047_180x240_22.jpg"
              class="rec-item-cover"
            />
            <p class="rec-item-title">女汉子骑士也想谈恋爱！</p>
          </div>
          <div class="rec-item">
            <img
              src="https://fm4.soman.com/40/39074/20171028085606_180x240_25.jpg"
              class="rec-item-cover"
            />
            <p class="rec-item-title">白熊转生</p>
          </div>
          <div class="rec-item">
            <img
              src="https://fm5.soman.com/19/18752/20190915215629_180x240_27.jpg"
              class="rec-item-cover"
            />
            <p class="rec-item-title">八男？别闹了！</p>
          </div>
          <div class="rec-item">
            <img
              src="https://fm1.soman.com/10/9114/20190930162956_180x240_26.jpg"
              class="rec-item-cover"
            />
            <p class="rec-item-title">BE BLUES!~化身为青</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { getSeach } from '@/api/user'
export default {
  name: 'Search',
  data () {
    return {
      seachList: []
    }
  }
}
</script>
<style lang="scss">
.first-page {
    background: #F7F7F9;
    min-height: 100%;
    width: 100%;
}
.logo-bar {
    background-color: #fff;
    text-align: center;
    padding-top: 60px;
    position: relative;
}
.logo-bar img{
  width: 33%;
}
.logo-bar.pt0 {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 4px solid #f7f7f9;
}

.logo-bar-fix {
    background-color: #fff;
    text-align: center;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    padding-top: 10px;
}

.logo-bar-fix img {
    height: 55px;
}

.search-con {
    display: block;
    padding-bottom: 10px;
    box-shadow: 0 1px 10px 0 rgba(229,229,229,0.50);
    background: #fff;
    height: 28px;
    line-height: 28px;
    position: relative;
    border-radius: 100px;
    padding: 10px 0;
    margin-top: 10px;;
}
.search-con-btn {
    display: block;
    height: 28px;
    line-height: 28px;
    padding: 0 40px;
    font-size: 14px;
    color: #D0D0D0;
    background: url("~@/assets/icon/search.png") no-repeat;
    background-size: 18px 18px;
    background-position: 15px 6px;
}

.rec-con {
    padding-top: 12px;
}

.rec-title {
    font-size: 16px;
    color: #FF6600;
    font-weight: bold;
    padding-left: 32px;
    background: url("~@/assets/icon/rec-icon.png") no-repeat;
    background-size: 14px 20px;
    background-position: 12px 0;
}

.rec-list {
    margin-top: 16px;
    padding: 0 7px;
    font-size: 0;
}

.rec-item {
    margin-bottom: 12px;
    box-sizing: border-box;
    padding: 0 5px;
    width: 33.33%;
    display: inline-block;
}

.rec-item-cover {
    width: 100%;
}

.rec-item-title {
    font-size: 14px;
    color: #2E2D2D;
    margin-top: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
