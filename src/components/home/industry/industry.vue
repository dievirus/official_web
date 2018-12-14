<template>
  <div class="industry">
    <div class="industry-wrap">
      <div class="h-title">工程案列展示</div>
      <div class="i-swiper-wrap" >
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,index) in list" :key="index">
            <router-link v-for="item1 in item" :key="item1.id" :to="'/achievement/d/detail/e/'+item1.id">
              <img :src="item1.img" >
              <div class="i-text nowrap">{{item1.title}}</div>
              <div class="content nowrap2">{{item1.contentStr}}</div>
              <div class="more-wrap">
                <div class="more">更多</div>
              </div>
              
            </router-link>
          </swiper-slide>
        </swiper> 
        <div class="swiper-pagination1" slot="pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev swiper-button-white"></div>
        <div class="swiper-button-next swiper-button-white"></div>
    
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
          autoHeight: true, //高度随内容变化
          notNextTick: true,
          centeredSlides: true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          autoplayDisableOnInteraction: false,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper  
          observeParents:true,//修改swiper的父元素时，自动初始化swiper  
          pagination : {
            el:'.swiper-pagination1',
            type: 'custom',
            clickable :true,
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
                paginationStyle = `background:#fff;width:10px;height:10px;opacity:${color};border-radius:100%;margin-left:5px;margin-right:5px;margin-bottom:30px;margin-top:30px;`
                html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
              }
              return html
            }
          },
          // 如果需要前进后退按钮
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
        type: 15,
        size:12
      }).then((res) => {
        if(res.data.code == '200') {
          if(res.data.data.rows.length > 3) {
            let list1 = res.data.data.rows.slice(0,3)
            let list2 = res.data.data.rows.slice(3,6)
            let list3 = res.data.data.rows.slice(6,9)
            let list4 = res.data.data.rows.slice(9,12)
              list1.map((item) => {
              if(!item.img) {
                  item.img = '/static/image/default2.png'
                }else {
                  item.img = 'http://47.96.151.153:9000/' + item.img
                }
            })

            list2.map((item) => {
              if(!item.img) {
                  item.img = '/static/image/default2.png'
                }else {
                  item.img = 'http://47.96.151.153:9000/' + item.img
                }
            })
            list3.map((item) => {
              if(!item.img) {
                  item.img = '/static/image/default2.png'
                }else {
                  item.img = 'http://47.96.151.153:9000/' + item.img
                }
            })
            list4.map((item) => {
              if(!item.img) {
                  item.img = '/static/image/default2.png'
                }else {
                  item.img = 'http://47.96.151.153:9000/' + item.img
                }
            })
            this.list.push(list1)
            this.list.push(list2)
            this.list.push(list3)
            this.list.push(list4)
          }else {
            let list1 = res.data.data.rows.slice(0,3)
            list1.map((item) => {
              if(!item.img) {
                  item.img = '/static/image/default2.png'
                }else {
                  item.img = 'http://47.96.151.153:9000/' + item.img
                }
            })
            this.list.push(list1)
          }
          


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
    background:url('./image/bg.jpg') repeat;
    width:100%;
    position: relative;
    z-index: 100;
    background:cover;
    
    .industry-wrap {
      .h-title {
        color:#fff;
      }
      .i-swiper-wrap {
        width:1200px;
        position: relative;
        margin:0 auto;
        margin-top:-30px;
        .swiper-button-next {
          right:-60px;
          transform: scale(.7);
          outline: none;
        }
        .swiper-button-prev {
          left:-60px;
          transform: scale(.7);
          outline: none;
        }
        .swiper-pagination1 {
          width:100%;
          text-align: center;
        }
        .swiper-container {
          width:1200px;
          margin:0 auto;
          position:relative;
          a {
            display:inline-block;
            width:340px;
            text-align:center;
            margin:0 30px;
            box-sizing: border-box;
            text-decoration: none;
          }
          img {
            width:100%;
            height:254px;
            display:block;
            
          }
          .i-text {
            font-size:18px;
            text-align:left;
            color:#333;
            padding:20px;
            box-sizing:border-box;
            background:#fff;
            width:100%;
          }
          .content {
            background:#fff;
            height:40px;
            color:#999;
            text-align: left;
            font-size:14px;
            line-height:20px;
            padding:0 20px;
          }
          .more-wrap {
            background:#fff;
            overflow: hidden;
            .more {
              display: block;
              width: 300px;
              margin:20px;  
              background:#fff;
              box-sizing: border-box;
              border: #E4E4E4 1px solid;
              text-align: center;
              height: 34px;
              line-height:34px;
              color:#333;
              transition:.3s;
              border-radius: 24px;
              font-size:14px;
            }
            .more:hover {
              background:#186FE1;
              color:#fff;
              transition:.3s
            }
          }
          
        }
      }
    }
  }
  
</style>
