<template>
  <div class="nav">
    <div class="banner">
      <img src="./image/banner5.jpg" alt="">
      <div class="banner-content">
        <h1 class="title1">奉献之路 以一片赤忱回馈社会</h1>
        <p class="text">The way of giving is to give back to society in devotion</p>
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
      position: absolute;
      top:40%;
      width:100%;
      h1 {
        font-size:48px;
        color:#fff;
        text-align:center;
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
        width:560px;
        margin:0 auto;
        text-align: center;
        color:@color_2;
        opacity: .5;
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
