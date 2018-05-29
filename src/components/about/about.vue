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
    <div class="nav-wrap auto-width clearfix about-wrap">
      <router-link to="/about/a" class="ll"><span>公司介绍</span></router-link>
      <router-link to="/about/b" class="ll"><span>发展历程</span></router-link>
      <router-link to="/about/c" class="ll"><span>荣誉资质</span></router-link>
      <router-link to="/about/d" class="ll"><span>大事记</span></router-link>
      <router-link to="/about/e" class="ll"><span>联系方式</span></router-link>
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
  .about-wrap {
    a {
      width:20%;
    }
  }
  .about-content {
    background:#fff;
  }
</style>
