<template>
  <div class="header-type">
    <div
      class="item"
      :class="{'active': index === activeIndex}"
      v-for="(item, index) in types"
      :key="item.id"
      @click="handleClick(item, index)"
    >{{ item.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Headertype',

  props: {
    types: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      // 当前选中的下标
      activeIndex: 0
    }
  },

  methods: {
    handleClick (type, index) {
      // 当前点击的高亮
      this.activeIndex = index
      // 通知父组件
      // payload 如何要传递多个参数，需要弄成对象的形式
      this.$emit('click', { type, index })
    }
  }
}
</script>

<style lang="scss" scoped>
.header-type {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 0;
  margin-top: 46px;
  .item {
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #999;
    position: relative;
    &.active {
      color: #000;
    }
    &.active:after {
      content: '';
      background-color: #fd113a;
      height: 4px;
      border-radius: 2px;
      width: 25px;
      display: block;
      position: absolute;
      left: 50%;
      bottom: -5px;
      margin-left: -12.5px;
    }
  }
}
</style>
