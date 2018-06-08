<template>
  <div class="clearfix auto-width">
    <div class="sub-title auto-width">
      <span>获奖工程</span>
    </div>
    <List1 :ii="jjjj"></List1>
    <!-- <detail></detail>
    <detail-list :list="detaillist"></detail-list> -->
  </div>
</template>

<script>
  import List1 from 'components/list1/list1.vue'
  import DetailList from 'components/detailList/detailList.vue'
  import Detail from 'components/detail/detail.vue'

  export default {
    data() {
      return {
        jjjj: [
          {title:11},
          {title:22},
          {title:'这是一个非常长的标题测试这是一个非常长的标题测试这是一个非常长的标题测试这是一个非常长的标题测试'},
          {title:44},
          {title:55}
        ],
        detaillist: [
          {text:'这是测试详情列表这是测试详情列表这是测试详情列表这是测试详情列表这是测试详情列表这是测试详情列表'},
          {text:'这是测试详情列表'},
          {text:'这是测试详情列表'},
          {text:'这是测试详情列表'},
          {text:'这是测试详情列表'}
        ]
      }
    },
    components: {
      List1,
      DetailList,
      Detail
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
</style>
