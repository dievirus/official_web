<template>
  <div id="app">
    <!-- <div class="">
      <div>
        <router-link  to="/home">首页</router-link>
        <div class="test" @mouseover="mouseover" @mouseout="mouseout">sdf</div>
      </div>
      <router-link  to="/about">关于我们</router-link>
      <router-link  to="/performance">公司业绩</router-link>
      <router-link  to="/cooperation">投资合作</router-link>
      <router-link  to="/information">公司资讯</router-link>
      <router-link  to="/donate">爱心捐赠</router-link>
      <router-link  to="/construction">公司党建</router-link>
    </div>
    <router-view></router-view> -->

    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
  import Tab from 'base/tab/tab'

  export default {
    components: {
      Tab
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  #app {
    border:1px solid black;
    width:800px;
    margin:0 auto;
  }
</style>
