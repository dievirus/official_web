<template>
  <div class="about3 auto-width">
    <div class="sub-title">
      <span>荣誉资质</span>
    </div>
    <List1 :ii="jjjj"></List1>
  	<pagination :pageSize="pageSize" @setPage="setPage"></pagination>
  </div>
</template>

<script>
  import Pagination from 'base/pagination/pagination.vue'
  import List1 from 'components/list1/list1.vue'
  

  export default {
    data() {
      return {
        pageSize: 10,
        jjjj: [
          {title:11},
          {title:22},
          {title:'这是一个非常长的标题测试这是一个非常长的标题测试这是一个非常长的标题测试这是一个非常长的标题测试'},
          {title:44},
          {title:55}
        ],
      }
    },
    components: {
      Pagination,
      List1
    },
    methods: {
      setPage(current) {
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
</style>
