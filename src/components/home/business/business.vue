<template>
  <div class="business">
    <div class="h-title">公司业务</div>
    <div class="business-wrap">
      <ul class="clearfix">
        <li class="b-item" @mouseenter="mouseenter(1)">
          <img v-show="activeIndex!=1" src="./image/fw.png" alt="">
          <img v-show="activeIndex==1" src="./image/fw_on.png" alt="">
          房屋建筑工程施工总承包一级企业
        </li>
        <li class="b-item" @mouseenter="mouseenter(2)">
          <img v-show="activeIndex!=2" src="./image/shiz.png" alt="">
          <img v-show="activeIndex==2" src="./image/shiz_on.png" alt="">
          市政公用工程施工总承包二级
        </li>
        <li class="b-item" @mouseenter="mouseenter(3)">
          <img v-show="activeIndex!=3" src="./image/diji.png" alt="">
          <img v-show="activeIndex==3" src="./image/diji_on.png" alt="">
          地基与基础工程专业承包一级
        </li>
        <li class="b-item" @mouseenter="mouseenter(4)">
          <img v-show="activeIndex!=4" src="./image/xiaof.png" alt="">
          <img v-show="activeIndex==4" src="./image/xiaof_on.png" alt="">
          消防设施工程专业承包一级
        </li>
        <li class="b-item" @mouseenter="mouseenter(5)">
          <img v-show="activeIndex!=5" src="./image/fangs.png" alt="">
          <img v-show="activeIndex==5" src="./image/fangs_on.png" alt="">
          防水防腐保温工程专业承包二级
        </li>
        <li class="b-item" @mouseenter="mouseenter(6)">
          <img v-show="activeIndex!=6" src="./image/zhuangs.png" alt="">
          <img v-show="activeIndex==6" src="./image/zhuangs_on.png" alt="">
          建筑装饰装修工程专业承包一级
        </li>
        <li class="b-item" @mouseenter="mouseenter(7)">
          <img v-show="activeIndex!=7" src="./image/muq.png" alt="">
          <img v-show="activeIndex==7" src="./image/muq_on.png" alt="">
          建筑幕墙工程专业承包二级
        </li> 
        <li class="b-item" @mouseenter="mouseenter(8)">
          <img v-show="activeIndex!=8" src="./image/tez.png" alt="">
          <img v-show="activeIndex==8" src="./image/tez_on.png" alt="">
          特总工程专业承包不分等级
        </li>
        <li class="b-item" @mouseenter="mouseenter(9)">
          <img v-show="activeIndex!=9" src="./image/bans.png" alt="">
          <img v-show="activeIndex==9" src="./image/bans_on.png" alt="">
          模板脚手架专业承包不分等级
        </li>
        <li class="b-item" @mouseenter="mouseenter(10)">
          <img v-show="activeIndex!=10" src="./image/shig.png" alt="">
          <img v-show="activeIndex==10" src="./image/shig_on.png" alt="">
          施工劳务承包不分等级
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: ''
      }
    },
    methods: {
      mouseenter(index) {
        this.activeIndex = index
      },
      mouseleave() {
        this.activeIndex = '';
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .business {
    background:#f8f8f8;
    overflow: hidden;
    .business-wrap {
      width:1200px;
      margin:0 auto;
      .b-item {
        text-align:center;
        float:left;
        width:20%;
        color:@color_4;
        height:135px;
        margin-bottom:60px;
        cursor:pointer;
        img {
          display:block;
          margin:0 auto 20px auto;
        }
      }
    }
  }
</style>
