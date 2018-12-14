<template>
  <div id="app">
    <tab></tab>
    <Sidebar></Sidebar>
    <!-- <transition name="move"> -->
      <router-view class="content"></router-view>
    <!-- </transition> -->
    <Footer></Footer>
  </div>
</template>

<script>
  import Tab from 'base/tab/tab'
  import Sidebar from 'base/sidebar/sidebar'
  import Footer from 'base/footer/footer'

  export default {
    components: {
      Tab,
      Sidebar,
      Footer
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  #app {
    min-width:1000px;
  }
  // .move-enter-active, 
  // .move-leave-active {
  //     transition: all 1.5s;
  // }

  // .move-enter,
  // .move-leave{
  //     transform: translate3d(0px, 20px, 0);
  //     opacity: 0;
  // }
  // .move-enter-to {
  //   opacity: 1;
  // }
</style>
