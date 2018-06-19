<template>
  <div class="about4 auto-width">
  	<div class="sub-title">
      <span>大事记</span>
    </div>
    <!-- <list2 @goDetail="goDetail"></list2>
    <pagination :pageSize="pageSize" @setPage="setPage(param)"></pagination> -->
    <transition name="move">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import List2 from 'components/list2/list2.vue'
  import { query } from '@/api/api'
  import Pagination from 'base/pagination/pagination.vue'

  export default {
    data() {
      return {
        list:[],
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
      List2,
      Pagination
    },
    
    methods: {
      goDetail(param) {
        console.log(param)
        this.$router.push('/about/d/detail')
      },
      setPage(current) {

      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

.move-enter-active, 
  .move-leave-active {
      transition: all 1.5s;
  }

  .move-enter,
  .move-leave{
      transform: translate3d(0px, 20px, 0);
      opacity: 0;
  }
  .move-enter-to {
    opacity: 1;
  }
</style>
