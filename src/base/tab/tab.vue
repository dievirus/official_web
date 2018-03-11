<template>
  <div class="tab">
    <div class="about-wrap">
      <router-link to="/home">首页</router-link>
      <router-link to="/introduce">公司简介</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .tab a{
    color:@color_test;
  }
</style>
