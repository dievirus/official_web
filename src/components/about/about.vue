<template>
  <div class="nav">
    <div class="banner">
      <img src="./image/banner1.jpg" alt="">
      <div class="banner-content">
        <h1>企业经营方针</h1>
        <div class="banner-text1 clearfix">
          <span class="ll banner-text1-l">提高质量意识</span>
          <span class="rr">开拓业务前景</span>
        </div>
        <div class="banner-text2 clearfix">
          <span class="banner-text2-l ll">以质量求生存</span>
          <span class="banner-text2-m ll">以管理求效应</span>
          <span class="banner-text2-r ll">以诚信求发展</span>
        </div>
        <div class="banner-text3">The quality of survival to manage the efficiency of the development of intergrity</div>
      </div>
    </div>
    <div class="nav-wrap clearfix about-wrap auto-width">
      <div>
        <router-link to="/about/a"><span>公司介绍</span></router-link>
        <router-link to="/about/b"><span>发展历程</span></router-link>
        <router-link to="/about/c"><span>荣誉资质</span></router-link>
        <router-link to="/about/d"><span>大事记</span></router-link>
        <router-link to="/about/e"><span>联系方式</span></router-link>
      </div>
      
    </div>
    <router-view class="about-content"></router-view>
  </div>
</template>

<script>
  // import Banner from 'base/banner/banner.vue'

  export default {
    components: {
      // Banner
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .banner-content {
    position: absolute;
    width:362px;
    top:50%;
    left:50%;
    margin-top:-92px;
    margin-left:-181px;
    h1 {
      font-size:60px;
      color:@color_2;
      margin-bottom:15px;
    }
    .banner-text1 {
      font-size:20px;
      color:@color_2;
      border-top:1px solid #fff;
      border-bottom:1px solid #fff;
      padding:10px 0;
      .banner-text1-l {
        border-right:1px solid rgba(255,255,255,.5);
        width:50%;
        text-align: left;
      }
    }
    .banner-text2 {
      font-size:18px;
      color:@color_2;
      opacity: .5;
      padding:10px 0;
      span {
        width:33.3333%;
      }
      .banner-text2-m {
        text-align: center;
      }
      .banner-text2-r {
        text-align: right;
      }
    }
    .banner-text3 {
      font-size:14px;
      color:@color_2;
      opacity: .5;
      text-align: center;
      line-height:18px;
    }
  }
</style>
