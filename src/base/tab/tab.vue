<template>
  <div class="tab" :class="{move:isMove}">
    <div class="tab-wrap" >
      <router-link to="/"><img src="./logo.png" alt="" style="margin-top:16px;float:left;margin-right:70px;"></router-link>
      <router-link to="/home" class="item">公司首页</router-link>
      <router-link to="/about" class="item">关于我们</router-link>
      <router-link to="/achievement" class="item">公司业绩</router-link>
      <router-link to="/cooperation" class="item">投资合作</router-link>
      <router-link to="/information" class="item">公司资讯</router-link>
      <router-link to="/donate" class="item">爱心捐赠</router-link>
      <router-link to="/construction" class="item">公司党建</router-link>
      <span class="phone">
        <img src="./d_call.png" alt="">
        028-82312656
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isMove:false
      }
    },
    mounted() {
      this.scroll()
    },
    methods: {
      scroll() {
         window.onscroll= () => {
           let t = document.documentElement.scrollTop||document.body.scrollTop
           if(t > 0) {
             this.isMove = true
           }else {
             this.isMove = false
           }
           
         }
      }
    }
    
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .tab{
    position:fixed;
    z-index:1000;
    width:100%;
    top:0;
    height:70px;
    line-height:70px;
    transition:.3s;
    &.move {
      background:rgba(0,0,0,.8);
      transition:.3s;
    }
    .tab-wrap {
      width:1200px;
      margin:0 auto;
    }
    img{
      display:inline-block;
      vertical-align:middle;
    }
    a {
      font-size:18px;
      color:rgba(255,255,255,.4);
      text-decoration:none;
      margin:0 10px;
      &.router-link-active {
        color:@color_2;
      }
      &.logo {
        color:@color_2;
      }
    }
    .phone {
      margin-left:40px;
      float: right;
      img {
        width:30px;
        height:30px;
      }
      font-size:16px;
      color:@color_2;
    }
    .item {
      transition:.2s;
    }
    .item:hover {
      color:#fff;
      transition:.2s;
    }
  }
</style>
