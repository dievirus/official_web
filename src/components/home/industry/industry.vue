<template>
  <div class="industry">
    <div class="industry-wrap">
      <div class="h-title">公司产业</div>
      <div class="i-swiper-wrap">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide >
            <img src="./image/w.png" >
            <div class="i-text nowrap">这是一个长的标题，测试不换行测试不换行测试不换行测试不换行</div>
          </swiper-slide>
          <swiper-slide >
            <img src="./image/bg.jpg" >
            <div class="i-text">公司项目案例2</div>
          </swiper-slide>
          <swiper-slide >
            <img src="./image/w.png" >
            <div class="i-text">公司项目案例3</div>
          </swiper-slide>
          <swiper-slide >
            <img src="./image/bg.jpg" >
            <div class="i-text">公司项目案例4</div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data () {
      return {
        swiperOption: {
          autoplay: {
            delay: 300000,
            disableOnInteraction: false,
            
          },
          autoHeight: true, //高度随内容变化
          effect : 'coverflow',
          slidesPerView: 3,
          spaceBetween : 30,
          centeredSlides: true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          autoplayDisableOnInteraction: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          loop: true,
          on:{
            init: function(){
              swiperAnimateCache(this); //隐藏动画元素 
              swiperAnimate(this); //初始化完成开始动画
            }, 
            slideChangeTransitionEnd: function(){ 
              swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            } 
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
    },
    
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "../../slider/animate.min.css";
  @import "~common/less/variable.less";
  
  .industry {
    overflow:hidden;
    background:url('./image/bg.jpg');
    width:100%;
    background:cover;
    .industry-wrap {
      .h-title {
        color:#fff;
      }
      .i-swiper-wrap {
        width:100%;
        margin-bottom:30px;
        .swiper-container {
          width:1000px;
          margin:0 auto;
          img {
            width:100%;
            height:260px;
          }
          .i-text {
            font-size:18px;
            text-align:center;
            color:#333;
            padding:15px;
            box-sizing:border-box;
            background:#fff;
            width:100%;
          }
        }
      }
    }
  }
  

  
</style>
