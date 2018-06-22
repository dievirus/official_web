<template>
  <div class="about3 auto-width">
  	<div class="sub-title">
      <span>荣誉资质</span>
    </div>
    <div class="list1 auto-width">
      <ul class="clearfix" v-show="currentPage == 1">
        <li class="ll"  v-for="(item, index) in imgList1" :key="index" >
          <div class="img-wrap" :class="{mask:showIndex==index}" @mouseenter="mouseenter(index)" @mouseleave="mouseleave">
            <img class="img-item" :src="item.src" alt="">
            <img class="jia" :class="{show:showIndex==index}" src="./image/jia.png" alt="">
            <div class="mask"></div>
          </div>
          <p class="nowrap">{{item.title}}</p>
        </li>
      </ul>
      <ul class="clearfix" v-show="currentPage == 2">
        <li class="ll" v-for="(item, index) in imgList2" :key="index" >
          <div class="img-wrap" :class="{mask:showIndex==index}" @mouseenter="mouseenter(index)" @mouseleave="mouseleave">
            <img class="img-item" :src="item.src" alt="">
            <img class="jia" :class="{show:showIndex==index}" src="./image/jia.png" alt="">
            <div class="mask"></div>
          </div>
          <p class="nowrap">{{item.title}}</p>
        </li>
      </ul>
      <ul class="clearfix" v-show="currentPage == 3">
        <li class="ll" v-for="(item, index) in imgList3" :key="index" >
          <div class="img-wrap" :class="{mask:showIndex==index}" @mouseenter="mouseenter(index)" @mouseleave="mouseleave">
            <img class="img-item" :src="item.src" alt="">
            <img class="jia" :class="{show:showIndex==index}" src="./image/jia.png" alt="">
            <div class="mask"></div>
          </div>
          <p class="nowrap">{{item.title}}</p>
        </li>
      </ul>
      <ul class="clearfix" v-show="currentPage == 4">
        <li class="ll" v-for="(item, index) in imgList4" :key="index" >
          <div class="img-wrap" :class="{mask:showIndex==index}" @mouseenter="mouseenter(index)" @mouseleave="mouseleave">
            <img class="img-item" :src="item.src" alt="">
            <img class="jia" :class="{show:showIndex==index}" src="./image/jia.png" alt="">
            <div class="mask"></div>
          </div>
          <p class="nowrap">{{item.title}}</p>
        </li>
      </ul>
    </div>
    <div class="pagination">
    <ul class="p-wrap clearfix">
      <li class="prev" :class="{'disabled':currentPage <= 1}" @mouseenter="mouseenterPrev" @mouseleave="mouseleavePrev" @click="goPage(currentPage-1)">
        <img v-show="!isPrev" src="./image/prev.png" alt="">
        <img v-show="isPrev" src="./image/prev_on.png" alt="">
      </li>
      <li v-for="item in totalPage" :key="item" class="page" :class="{'active':item == currentPage}" @click="goPage(item)">{{item}}</li>

      <li class="next" :class="{'disabled':currentPage >= totalPage}" @mouseenter="mouseenterNext" @mouseleave="mouseleaveNext" @click="goPage(currentPage+1)">
        <img v-show="!isNext" src="./image/next.png" alt="">
        <img v-show="isNext" src="./image/next_on.png" alt="">
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
  import List from '@/components/list3/list3.vue'

  export default {
    data() {
      return {
        showIndex: null,
        totalPage:4,
        isPrev:'',
        isNext:'',
        currentPage: 1,
        imgList1: [
          {
            src:'/static/image/1.JPG',
            title:'重点纳税'
          },
          {
            src:'/static/image/2.JPG',
            title:'达标生产'
          },
          {
            src:'/static/image/3.JPG',
            title:'川建会员单位'
          },
          {
            src:'/static/image/4.JPG',
            title:'川建理事单位'
          },
          {
            src:'/static/image/5.JPG',
            title:'成都市企业诚信促进会会员单位'
          },
          {
            src:'/static/image/6.JPG',
            title:'国家调查企业'
          },
          {
            src:'/static/image/7.JPG',
            title:'文明施工工地'
          },
          {
            src:'/static/image/8.JPG',
            title:'资质证书'
          },
          {
            src:'/static/image/9.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/10.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/11.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/12.JPG',
            title:'安全文明工地'
          },
        ],
        imgList2: [
          {
            src:'/static/image/13.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/14.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/15.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/16.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/17.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/18.JPG',
            title:'安全文明工地'
          },
          {
            src:'/static/image/19.JPG',
            title:'守信企业'
          },
          {
            src:'/static/image/20.JPG',
            title:'守信守法单位'
          },
          {
            src:'/static/image/21.JPG',
            title:'A守信企业'
          },
          {
            src:'/static/image/22.JPG',
            title:'守信守法单位'
          },
          {
            src:'/static/image/23.JPG',
            title:'AA守信企业'
          },
          {
            src:'/static/image/24.JPG',
            title:'三星企业'
          },
        ],
        imgList3: [
          {
            src:'/static/image/25.JPG',
            title:'AAA守信'
          },
          {
            src:'/static/image/26.JPG',
            title:'守信企业'
          },
          {
            src:'/static/image/27.JPG',
            title:'守信企业'
          },
          {
            src:'/static/image/28.JPG',
            title:'诚信优质师范单位'
          },
          {
            src:'/static/image/29.JPG',
            title:'先进党支部'
          },
          {
            src:'/static/image/30.JPG',
            title:'先进单位'
          },
          {
            src:'/static/image/31.JPG',
            title:'先进单位'
          },
          {
            src:'/static/image/32.JPG',
            title:'先进集体'
          },
          {
            src:'/static/image/33.JPG',
            title:'先进集体'
          },
          {
            src:'/static/image/34.JPG',
            title:'优质结构工程'
          },
          {
            src:'/static/image/35.JPG',
            title:'优质结构工程1'
          },
          {
            src:'/static/image/36.JPG',
            title:'先进企业'
          },
        ],
        imgList4: [
          {
            src:'/static/image/37.JPG',
            title:'优质结构工程'
          },
          {
            src:'/static/image/38.JPG',
            title:'质管先进单位'
          },
          {
            src:'/static/image/39.JPG',
            title:'先进企业'
          },
          {
            src:'/static/image/40.JPG',
            title:'优质结构工程'
          },
          {
            src:'/static/image/41.JPG',
            title:'优质结构工程1'
          },
          {
            src:'/static/image/42.JPG',
            title:'质管先进'
          },
          {
            src:'/static/image/43.JPG',
            title:'质管先进'
          },
          {
            src:'/static/image/44.JPG',
            title:'先进党支部'
          },
          {
            src:'/static/image/45.JPG',
            title:'先进党支部'
          },
          {
            src:'/static/image/46.JPG',
            title:'优秀企业'
          },
        ],
        imgList:[ ]
      }
    },
    components: {
      List
    },
    mounted() {
    },
    methods: {
      mouseenter(index) {
        this.showIndex = index
      },
      mouseleave() {
        this.showIndex = null
      },
      
      setPage(current) {
        this.getList(current)
      },
      goPage(index) {
        if(index >= this.totalPage) {
          index = this.totalPage
        }
        if(index <= 1) {
          index = 1
        }
        this.currentPage = index
        this.$emit('setPage', index)
      },
      mouseenterPrev() {
        if(this.currentPage > 1) {
          this.isPrev = true
        }
        
      },
      mouseleavePrev() {
        this.isPrev = false
      },
      mouseenterNext() {
        if(this.currentPage < this.totalPage) {
          this.isNext = true
        }
        
      },
      mouseleaveNext() {
        this.isNext = false
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .about3 {
    .list1 {
      ul {
        width:100%;
        li {
          width:25%;
          padding:0 15px;
          box-sizing: border-box;
          margin-bottom:20px;
          .img-wrap {
            position:relative;
            height:200px;
            box-sizing: border-box;
            overflow: hidden;
            cursor: pointer;
            .img-item {
              display:block;
              width:100%;
              transform: scale(1);
              transition: .5s;
            }
            .jia {
              position: absolute;
              left:50%;
              top:0%;
              margin-left:-30px;
              opacity: 0;
              transition:.5s;
              z-index:10;
              &.show {
                opacity: .5;
                transition:.5s;
                transform:translate3d(0,60px,0);
              }
            }
            .mask {
              position: absolute;
              left:0;
              top:0;
              width:100%;
              height:100%;
              background:rgba(0,0,0,0);
              transition:.5s;
            }
          }
          .img-wrap:hover .img-item{
            transform: scale(1.1);
            transition:.5s;
            width:100%;
          }
          .img-wrap:hover .mask {
            background:rgba(0,0,0,0.5);
            transition:.5s;
          }
          p {
            color:@color_3;
            font-size:18px;
            margin-top:20px;
            width:100%;
          
          }
        }
        
      }
      
    }
  }
  .pagination {
    margin-top:40px;
    margin-bottom:80px;
    .p-wrap {
      text-align: center;
      li {
        display:inline-block;
        width:36px;
        height:36px;
        text-align: center;
        line-height: 36px;
        vertical-align: middle;
        margin:0 4px;
        color:@color_4;
        cursor: pointer;
        border-radius: 3px;
        &.disabled {
          pointer-events: none;
        }
        &.page {
          border:1px solid #eaeaea;
        }
        &.active {
          background:@color_background_1;
          color:#fff;
        }
        img {
          vertical-align: middle;
          display:block;
          border-radius: 3px;
        }
      }
      li.page:hover {
        background:@color_background_1;
        color:#fff;
      }
    }
  }
</style>
