<template>
  <div class="industry">
    <div class="industry-wrap">
      <div class="h-title">公司产业</div>
      <div class="i-swiper-wrap" >
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,index) in list" :key="index">
            <router-link :to="'/information/b/detail/e/'+item.id" >
              <img :src="item.img" >
              <div class="i-text nowrap">{{item.title}}</div>
              </router-link>
          </swiper-slide>
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
  import { query } from '@/api/api'

  export default {
    data () {
      return {
        list:[],
        test:[1,2,3,4],
        swiperOption: {
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            
          },
          autoHeight: true, //高度随内容变化
          effect : 'coverflow',
          slidesPerView: 3,
          spaceBetween : 30,
          notNextTick: true,
          centeredSlides: true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          autoplayDisableOnInteraction: false,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper  
          observeParents:true,//修改swiper的父元素时，自动初始化swiper  
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          loop: true,
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
      query({
        // type: 7
      }).then((res) => {
        if(res.data.code == '200') {
          this.list = res.data.data.rows.slice(0,6)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    wacth: {
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "../../slider/animate.min.css";
  @import "~common/less/variable.less";
  
  .industry {
    overflow:hidden;
    background:url('./image/bg.jpg');
    width:100%;
    position: relative;
    z-index: 100;
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
