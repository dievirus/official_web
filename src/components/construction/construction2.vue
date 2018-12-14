<template>
  <div class="about4 auto-width">
  	<div class="sub-title">
      <span>建筑业协会</span>
    </div>
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
        transition: all .7s;
        -webkit-transition: all .7s;
    }

    .move-enter,
    .move-leave{
        transform: translate3d(0, 10px, 0);
        -webkit-transform: translate3d(0, 10px, 0);
        opacity: 0;
    }
    .move-enter-to {
      opacity: 1;
    }
</style>
