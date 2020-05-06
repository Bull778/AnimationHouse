<template>
  <div class="page-SearchResults">
    <div class="logo-bar-fix">
      <img src="~@/assets/icon/Seach-logo.png" />
    </div>
    <div class="search-top-bar">
      <form onsubmit="return false;" action="">
        <input type="search" class="search-top-input" v-model="searchVal"/>
      </form>
      <router-link to="/search" class="search-top-btn">取消</router-link>
    </div>

    <section class="search-content">
      <p
          class="item font-28"
          v-for="item in searchIndexList"
          :key="item"
          @click="handleClick(item)"
        >{{ item }}
      </p>
    </section>
  </div>
</template>

<script>
import { searchIndex } from '@/api/user'
export default {
  name: 'SearchResults',
  data () {
    return {
      searchVal: '',
      // 搜索面板数据集合
      searchIndexList: []
    }
  },
  watch: {
    searchVal (newVal, oldVal) {
      if (newVal) {
        // 防抖
        // 清除计时器
        clearTimeout(this.timer)

        this.timer = setTimeout(() => {
          this.searchIndex(newVal)
        }, 500)
      }
    }
  },
  methods: {
    searchIndex (name) {
      searchIndex(name).then(res => {
        this.searchIndexList = res.info
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-SearchResults {
  background: #f7f7f9;
  position: absolute;
  width: 100%;
  padding-top: 123px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  z-index: 1;
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
.search-top-bar {
  height: 54px;
  background-color: #fff;
  position: absolute;
  z-index: 2;
  top: 65px;
  left: 0;
  width: 100%;
  padding-right: 56px;
  padding-left: 12px;
  box-sizing: border-box;
  box-shadow: 0 1px 10px 0 rgba(229,229,229,0.50);
}

.search-top-input {
  height: 34px;
  background-color: #f7f7f9;
  margin: 10px 0;
  display: block;
  width: 100%;
  border-radius: 17px;
  padding-left: 40px;
  box-sizing: border-box;
  background-image: url("~@/assets/icon/search.png");
  background-repeat: no-repeat;
  background-size: 18px 19px;
  background-position: 15px 8px;
  padding-right: 40px;
  font-size: 14px;
  border: 0;
}

.search-top-btn {
  position: absolute;
  width: 56px;
  height: 54px;
  right: 0;
  top: 0;
  line-height: 54px;
  text-align: center;
  font-size: 16px;
  color: #2e2d2d;
}
.search-content {
    margin-top: 6px;
    background-color: #fff;
    .item {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 40px;
      padding-left: 10px;
      font-weight: 600;
      border-bottom: 1px solid #ddd;
    }
  }
</style>
