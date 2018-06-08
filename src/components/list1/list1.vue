<template>
  <div class="list1 auto-width">
    <ul class="clearfix">
      <li class="ll" v-for="(item, index) in ii" :key="index" >
        <div class="img-wrap" :class="{mask:showIndex==index}" @mouseenter="mouseenter(index)" @mouseleave="mouseleave">
          <img class="img-item" src="./image/test.jpg" alt="">
          <img class="jia" :class="{show:showIndex==index}" src="./image/jia.png" alt="">
          <div class="mask"></div>
        </div>
        <p class="nowrap">{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        k:[
          {w:11},
          {w:22}
        ],
        showIndex: null
      }
    },
    props:{
      'ii': {
      },
      'jj': {
        default:2
      }
    },
    methods: {
      mouseenter(index) {
        this.showIndex = index
      },
      mouseleave() {
        this.showIndex = null
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

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
</style>
