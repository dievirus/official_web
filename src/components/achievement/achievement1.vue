<template>
  <div class="clearfix auto-width">
    <div class="sub-title auto-width">
      <span>获奖工程</span>
    </div>
    <div class="list1-wrap">
      <List1 :list="list"></List1>
      <pagination :totalPage="totalPage" :pageSize="pageSize" @setPage="setPage"></pagination>
    </div>
    <div class="list2-wrap">
      <detail></detail>
      <detail-list :list="detaillist"></detail-list>
    </div>
    
  </div>
</template>

<script>
  import List1 from 'components/list1/list1.vue'
  import { query } from '@/api/api'
  import Pagination from 'base/pagination/pagination.vue'
  // import DetailList from 'components/detailList/detailList.vue'
  // import Detail from 'components/detail/detail.vue'

  export default {
    data() {
      return {
        list: [],
        totalPage:0,
        pageSize:12,
        detaillist: [
          {text:'这是测试详情列表这是测试详情列表这是测试详情列表这是测试详情列表这是测试详情列表这是测试详情列表'},
          {text:'这是测试详情列表'},
          {text:'这是测试详情列表'},
          {text:'这是测试详情列表'},
          {text:'这是测试详情列表'}
        ]
      }
    },
    mounted() {
      this.getList(1)
    },
    methods: {
      getList(page) {
        query({
          size:12,
          page:page
        }).then((res) => {
          this.list = res.data.data.rows
          this.totalPage = Math.ceil((res.data.data.count) / 12)
        })
      },
      setPage(current) {
        this.getList(current)
      }
    },
    components: {
      List1,
      Pagination
      // DetailList,
      // Detail
    },
    watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log(this.$route.params)
    }
  }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
</style>
