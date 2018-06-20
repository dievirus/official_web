<template>
  <div class="detailContent clearfix auto-width">
    <transition name="move">
      <router-view></router-view>
    </transition>
    
    <!-- <DetailInfo></DetailInfo> -->
    <DetailList :title="title" :url="url"></DetailList>
  </div>
</template>

<script>
  import DetailInfo from 'components/detailinfo/detailinfo.vue'
  import DetailList from 'components/detailList/detailList.vue'

  export default {
    data() {
      return {
        title: '',
        url:''
      }
    },
    components: {
      DetailInfo,
      DetailList
    },
    mounted() {
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.title = to.meta.text
        vm.url = to.meta.url
      })
    },
    
    // detailside
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .detailContent {
    padding-bottom:50px;
    .move-enter-active, 
    .move-leave-active {
        transition: all 0.7s;
    }

    .move-enter,
    .move-leave{
        transform: translate3d(0, 10px, 0);
        opacity: 0;
    }
    .move-enter-to {
      opacity: 1;
    }
  }
</style>
