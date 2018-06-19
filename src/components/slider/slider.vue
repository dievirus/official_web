<template>
  <div class="slider">
    <div class="slider-wrap">
      <swiper :options="swiperOption" ref="mySwiper" >
        <swiper-slide >
          <img src="./image/bg1.jpg" >
          <div class="slide1-wrap">
            <div class="slide1-text1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="" swiper-animate-delay="0.5s">50余载匠心如一</div>
            <div class="slide1-text2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="" swiper-animate-delay="1.1s">工程质量至上</div>
            <div class="slide1-text3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="" swiper-animate-delay="1.6s">安全文明施工第一</div>
            <div class="slide1-text4 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="" swiper-animate-delay="2s"></div>
            <div class="slide1-text5 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="" swiper-animate-delay="2.3s">更多精彩，尽在大划建筑</div>
          </div>
          
        </swiper-slide>
        <swiper-slide ><img src="./image/bg1.jpg" ></swiper-slide>
        <swiper-slide ><img src="./image/bg1.jpg" ></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
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
            disableOnInteraction: false
          },
          autoplayDisableOnInteraction: false,
          paginationType:"bullets",
          observer:true,//修改swiper自己或子元素时，自动初始化swiper 
          observeParents:true,//修改swiper的父元素时，自动初始化swiper 
          pagination : {
            el:'.swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              const activeColor = '1'
              const normalColor = '.3'
              let color = ''
              let paginationStyle = ''
              let html = ''
              for (let i = 1; i <= total; i++) {
                if (i === current) {
                  color = activeColor
                } else {
                  color = normalColor
                }
                paginationStyle = `background:#fff;width:50px;height:4px;opacity:${color};border-radius:0;margin-left:15px;margin-right:15px;margin-bottom:20px;`
                html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
              }
              return html
            }
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
  @import "./animate.min.css";
  @import "~common/less/variable.less";
  
  .slider {
    margin-top:70px;
    height:600px;
    overflow: hidden;
    .swiper-wrapper {
      width:100%;
      overflow: hidden;
      position: relative;
      img {
        width:100%;
        display:block;
        height:600px;
      }
    }
    
    .swiper-slider {
      position: relative;
      overflow: hidden;
    }
    .slide1-wrap {
      position:absolute;
      top:25%;
      left:50%;
      margin-left:-216px;
      text-align:center;
      color:#fff;

    }
    .slide1-text1 {
      font-size:60px;
    }
    .slide1-text2,.slide1-text3 {
      font-size:32px;
      margin-top:21px;
    }
    .slide1-text4 {
      background:#fff;
      width:320px;
      margin:21px auto;
      border-top:1px solid #fff;
    }
    .slide1-text5 {
      font-size:20px;
    }
    swiper-pagination {
      width:100px;
      height:100px;
      border:1px solid red;
    }
  }
  
</style>
