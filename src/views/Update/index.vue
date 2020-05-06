
<template>
  <div class="page-history">
    <Commonheader title="更新"></Commonheader>
    <headertype :types="types" @click="onTypeChange">
      <item class="historyw"></item>
    </headertype>
    <div class="history-main" v-returntop>
      <list :list="cartoonList" isRanking></list>
    </div>
  </div>
</template>

<script>
import Commonheader from '@/components/Commonheader'
import Headertype from '@/components/Headertype'
import List from '@/components/List'
import { getRankList } from '../../api/user'
import { unformat } from '../../utils/apiHeader'
export default {
  name: 'Update',
  components: {
    Commonheader,
    Headertype,
    List
  },
  data () {
    return {
      // 排行榜分类信息不知道从哪里得到写死好了
      types: [
        { id: 1, description: '今天', ranktype: 1 },
        { id: 2, description: '昨天', ranktype: 2 },
        { id: 3, description: '周六', ranktype: 3 },
        { id: 4, description: '周五', ranktype: 4 },
        { id: 5, description: '周四', ranktype: 5 },
        { id: 6, description: '周三', ranktype: 6 },
        { id: 7, description: '周二', ranktype: 7 }
      ],

      rankList: []
    }
  },
  computed: {
    cartoonList () {
      // [{bigbook_id, bigbook_name, }] => [{id, name}]
      return this.rankList.map(item => {
        return {
          id: item.bigbookid,
          coverurl: item.coverurl,
          name: item.name,
          author: item.author,
          view: item.weekhits
        }
      })
    }
  },
  methods: {
    getRankList (ranktype) {
      getRankList(ranktype).then(res => {
        // res.info 解密 JSON.parse 解析
        const info = JSON.parse(unformat(res.info))
        this.rankList = info.ranklist
      })
    },

    /**
     * 切换分类类型时，触发
     */
    onTypeChange (payload) {
      console.log(payload)
      // 取出 payload 中的 type 中的 targetargument
      // const subject = payload.type.targetargument
      const ranktype = payload.type.ranktype
      // // 从新发送 B 接口请求
      this.getRankList(ranktype)
    }
  },

  created () {
    this.getRankList(this.types[0].ranktype)
  }
}
</script>
<style lang="scss" scoped>
.page-history {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100%;
  .history-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
