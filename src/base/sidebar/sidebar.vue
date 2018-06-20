<template>
  <div class="sidebar">
    <ul>
        <li @mouseenter="mouseenter(1)" @mouseleave="mouseleave()">
          <img v-show="activeIndex!=1" src="./image/qq.png" alt="">
          <img v-show="activeIndex==1" src="./image/qq_on.png" alt="">
          <div v-show="activeIndex==1" class="tip-wrap tip-wrap-qq" >
            <div class="zx-box">咨询客服
              <div @mouseenter="mouseenterQq" @mouseleave="mouseleaveQq">
                <a target="_blank" href="http://wpa.qq.com/msgrd?v=1&uin=240604093&site=qq&menu=yes">
                  <img v-show="!activeQq" src="./image/dianjizix.png" alt="">
                  <img v-show="activeQq" src="./image/dianjizix_on.png" alt="">
                </a>
              </div>
            </div>
            <ul>
              <li>
                <label>客&nbsp服q q：</label>
                <span>8888888</span>
              </li>
              <li>
                <label>咨询电话：</label>
                <span>028-82312656</span>
              </li>
              <li>
                <label>手&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp机：</label>
                <span>135-6885-0999</span>
              </li>
              <li>
                <label>工作时间：</label>
                <span>周一至周日 9:00—20:00</span>
              </li>
            </ul>
          </div>
        </li>
        <li @mouseenter="mouseenter(2)" @mouseleave="mouseleave()">
          <img v-show="activeIndex!=2" src="./image/weixin.png" alt="">
          <img v-show="activeIndex==2" src="./image/weixin_on.png" alt="">
          <div v-show="activeIndex==2" class="tip-wrap tip-wrap-wei">
            <img src="./image/test_code.png" alt="">
          </div>
        </li>
        <li @mouseenter="mouseenter(3)" @mouseleave="mouseleave()">
          <img v-show="activeIndex!=3" src="./image/call.png" alt="">
          <img v-show="activeIndex==3" src="./image/call_on.png" alt="">
          <div v-show="activeIndex==3" class="tip-wrap tip-wrap-call">028-8231-2625</div>
        </li>
        <li @mouseenter="mouseenter(4)" @mouseleave="mouseleave()" @click="goTop">
          <img v-show="activeIndex!=4" src="./image/back.png" alt="">
          <img v-show="activeIndex==4" src="./image/backtop_on.png" alt="">
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '',
        activeQq:false
      }
    },
    methods: {
      mouseenter(index) {
        this.activeIndex = index
      },
      mouseleave() {
        this.activeIndex = ''
      },
      mouseenterQq() {
        this.activeQq = true
      },
      mouseleaveQq() {
        this.activeQq = false
      },
      goTop() {
        function smoothscroll() {
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
               window.requestAnimationFrame(smoothscroll);
               window.scrollTo (0,currentScroll - (currentScroll/5));
          }
        }
        smoothscroll()
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .sidebar {
    position:fixed;
    right:20px;
    top:50%;
    margin-top:-94px;
    z-index:100000;
    ul {
      position:relative;
    }
    li {
      margin-bottom:3px;
      cursor:pointer;
      .tip-wrap {
        position:absolute;
        right:53px;
        top:0;
        background:#fff;
        border-radius:2px;
        &.tip-wrap-qq {
          width:250px;
          padding:15px;
          .zx-box {
            color:@color_3;
            div {
              display:inline-block;
              img {
                margin-left:10px;
                displyay:inline-block;
                vertical-align:middle;
              }
            }
          }
          ul {
            margin-top:15px;
            font-size:14px;
            color:@color_4;
            li {
              margin-top:10px;
              label {
                display:inline-block;
                width:70px;
              }
            }
            
          }
        }
        &.tip-wrap-wei {
          width:150px;
          height:150px;
          img {
            width:100%;
          }
        }
        &.tip-wrap-call {
          width:150px;
          padding:5px 0;
          text-align:center;
          top:106px;
          color:@color_5;
        }
        &.tip-wrap-qq:after {
          top:15px;
        }
        &.tip-wrap-wei:after {
          top:62px;
        }
        &.tip-wrap-call:after {
          top:8px;
        }
      }
      .tip-wrap:after {
        content:"";
        position: absolute;
        top: 15px;
        right: -15px;
        border-top: 5px solid transparent;
        border-left:10px solid #fff;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
      }

    }
  }
</style>
