<template>
  <div class="tab">
    <div class="tab-wrap">
      <a href="javascript:void(0)" class="logo">
        <img src="./logo.png" alt="">
        大划建筑
      </a>
      <router-link to="/home">公司首页</router-link>
      <router-link to="/introduce">公司简介</router-link>
      <router-link to="/1">关于我们</router-link>
      <router-link to="/2">公司业绩</router-link>
      <router-link to="/3">投资合作</router-link>
      <router-link to="/4">公司资讯</router-link>
      <router-link to="/5">爱心捐赠</router-link>
      <router-link to="/6">公司党建</router-link>
      <span class="phone">
        <img src="./d_call.png" alt="">
        028-82312656
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .tab{
    position:fixed;
    z-index:1000;
    width:100%;
    top:0;
    height:70px;
    line-height:70px;
    text-align:center;
    background:#000;  
    .tab-wrap {
      width:1200px;
    }
    img{
      display:inline-block;
      vertical-align:middle;
    }
    a {
      font-size:18px;
      color:rgba(255,255,255,.4);
      text-decoration:none;
      margin:0 10px;
      &.router-link-active {
        color:@color_2;
      }
      &.logo {
        color:@color_2;
      }
    }
    .phone {
      margin-left:40px;
      img {
        width:30px;
        height:30px;
      }
      font-size:16px;
      color:@color_2;
    }
  }
</style>
