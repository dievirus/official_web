<template>
  <div id="app">
    <tab></tab>
    <Sidebar></Sidebar>
    <router-view class="content"></router-view>
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
    .content {
      margin-bottom:200px;
    }
  }
</style>
