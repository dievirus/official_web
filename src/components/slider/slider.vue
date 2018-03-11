<template>
  <div class="test">
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide >
      <img src="./1.jpg" >
      <div class="he ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0s">test</div>
    </swiper-slide>
    <swiper-slide ><img src="./2.jpg" ></swiper-slide>
    <div class="swiper-pagination" id="test" slot="pagination"></div>
  </swiper>
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
            delay: 3000,
            disableOnInteraction: false
          },
          autoplayDisableOnInteraction: false,
          paginationType:"bullets",
          pagination : {
            el:'.swiper-pagination'
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
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "./animate.min.css";
  
  .swiper-slider {
    position: relative;
  }
  .he {
    position: absolute;
    top:0;
    left:100px;
    font-size:40px;
    color:red;
  }
  img {
    width:100%;
    display:block;
  }
</style>
