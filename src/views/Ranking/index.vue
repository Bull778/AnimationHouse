<template>
  <div class="page-ranking">
    <Commonheader title="排行"></Commonheader>
    <headertype :types="types" @click="onTypeChange"></headertype>
    <div class="ranking-main" v-returntop>
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
  name: 'Ranking',
  components: {
    Commonheader,
    Headertype,
    List
  },
  data () {
    return {
      // 排行榜分类信息不知道从哪里得到写死好了
      types: [
        { id: 1, description: '人气榜', ranktype: 1 },
        { id: 2, description: '新番榜', ranktype: 2 },
        { id: 3, description: '收藏榜', ranktype: 3 },
        { id: 4, description: '吐槽榜', ranktype: 4 }
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
.page-ranking {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100%;
  .ranking-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
