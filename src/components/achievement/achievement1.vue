<template>
  <div class="clearfix auto-width">
    <div class="sub-title auto-width">
      <span>获奖工程</span>
    </div>
    <transition name="move">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import List1 from 'components/list1/list1.vue'
  import { query } from '@/api/api'
  import Pagination from 'base/pagination/pagination.vue'

  export default {
    data() {
      return {
        list: [],
        totalPage:0,
        pageSize:12,
      }
    },
    components: {
      List1,
      Pagination
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
