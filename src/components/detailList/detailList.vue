<template>
  <div class="detail-list">
    <div class="title">
      <span class="ll"></span>
      <p class="title-text">最新业绩</p>
      <span class="rr"></span>
      </div>
    <ul>
      <li v-for="(item, index) in list" :key="index" class="nowrap list-item">
        <span class="active"></span>
        {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      'list':{}
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .detail-list {
    float:right;
    width:282px;
    margin-top:162px;
    .title {
      font-size:18px;
      position: relative;
      margin-bottom:30px;
      p {
        padding:0 5px;
        display:inline-block;
      }
      span {
        width:100px;
        height:1px;
        background:#e0e0e0;
        margin-top:7px;
      }
    }
    .list-item {
      font-size:14px;
      color:#333;
      margin-bottom:20px;
      width:100%;
      transition:.5s;
      cursor: pointer;
      &.active {
        color:@color_5;
        span {
          border-left:6px solid @color_background_1;
        }
      }
      span {
        display:inline-block;
        border-top: 6px solid transparent;
        border-left:6px solid #ddd;
        border-right: 6px solid transparent;
        border-bottom: 6px solid transparent;
        transition:.5s;
      }
    }
    .list-item:hover span{
      border-left:6px solid @color_background_1;
      transition:.5s;
    }
    .list-item:hover {
      color:@color_5;
      transition:.5s;
      transform: translate3d(5px,0,0);
      
    }
  }
</style>
