<template>
  <div class="cooperation">
    <div class="h-title">合作伙伴</div>
    <div class="cooperation-wrap">
      <ul class="clearfix" >
        <li class="item ll">
          <div class="img-wrap">
            <img src="./image/1.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="./image/2.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="./image/3.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="./image/4.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="./image/5.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="./image/6.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="./image/7.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="./image/8.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="./image/9.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="./image/10.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="./image/11.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="./image/12.jpg" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    mounted() {
      // window.onscroll = () => {
        
      // }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .cooperation {
    position: relative;
    z-index: 100;
    background:@color_background_3;
    overflow:hidden;
    .cooperation-wrap {
      margin-bottom:50px;
      ul {
        width:960px;
        margin:0 auto;
        .item {
          cursor:pointer;
          margin:15px;
          .img-wrap {
            width:210px;
            height:140px;
            img {
              width:100%;
            }
          }
        }
      }
    }
  }
</style>
