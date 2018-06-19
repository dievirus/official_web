<template>
  <div class="cooperation">
    <div class="h-title">合作伙伴</div>
    <div class="cooperation-wrap">
      <ul class="clearfix" >
        <li  v-for="item in list" :key="item.id" class="item ll">
          <div class="img-wrap">
            <img src="" alt="">
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
        list:[
          {id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12}
        ]
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
            background:#333;
          }
        }
      }
    }
  }
</style>
