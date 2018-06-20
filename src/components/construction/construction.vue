<template>
  <div class="nav">
    <div class="banner">
      <img src="./image/banner2.jpg" alt="">
      <div class="banner-content">
        <h1 class="title1">坚持实施精品战略</h1>
        <h1 class="title2">坚持打造精品工程</h1>
        <p class="text">Adhere to the implementation of the boutique strategy to build a high-quality project.</p>
      </div>
    </div>
    <div class="nav-wrap clearfix about-wrap">
      <div class="clearfix auto-width">
        <router-link to="/construction/a" ><span>公会工作</span></router-link>
        <router-link to="/construction/b" ><span>建筑业协会</span></router-link>
        <router-link to="/construction/c" ><span>党风廉洁</span></router-link>
        <router-link to="/construction/d" ><span>党建工作</span></router-link>
      </div>
      
    </div>
    <transition name="move">
      <router-view class="about-content"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";
  
  .nav {
    position: relative;
    .banner-content {
      position: absolute;;
      width:386px;
      left:280px;
      top:50%;
      margin-top:-110px;
      h1 {
        font-size:48px;
        color:#fff;
        &.title2 {
          margin:20px 0;
        }
        &.title2:after {
          content:"";
          display:block;
          width:80px;
          border-top:2px solid #fff;
          opacity: .5;
          margin-top:20px;
        }
      }
      .text {
        font-size:20px;
        color:@color_2;
        opacity: .5;
        text-align: left;
        line-height:28px;
        font-family: "PingFangSC-Medium"
      
      }
    }
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
