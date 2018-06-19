<template>
  <div class="detail-list">
    <div class="title">
      <span class="ll"></span>
      <p class="title-text">{{title}}</p>
      <span class="rr"></span>
      </div>
    <ul>
      <!-- <li v-for="(item, index) in list" :key="index" class="nowrap list-item">
        <span class="active"></span>
        {{item.text}}
      </li> -->
      <li v-for="(item,index) in list" :key="item.id" class="nowrap list-item" :class="{'active':currentId == item.id}">
        <router-link :to="'/about/d/detail/e/'+item.id"><span>{{item.title}}</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { query } from '@/api/api'

  export default {
    data() {
      return {
        list:[],
        size: 5,
        text: '',
        currentId:''
      }
    },
    props: {
      'title':{}
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        this.currentId = this.$route.params.id
      }
    },
    mounted() {
      this.currentId = this.$route.params.id
      console.log(this.currentId)
      query({
        size:this.size
      }).then((res) => {
        if(res.data.code == '200') {
          this.list = res.data.data.rows
          console.log(this.list)
        }else {
          alert('请求失败')
        }
      })
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
      a {
        text-decoration: none;
        color:#333;
      }
      &.active {
        span {
          color:@color_5;
        }
        
        span:before {
          border-left:6px solid @color_background_1;
        }
      }
      span:before {
        content:"";
        display:inline-block;
        border-top: 6px solid transparent;
        border-left:6px solid #ddd;
        border-right: 6px solid transparent;
        border-bottom: 6px solid transparent;
        transition:.5s;
      }
    }
    .list-item:hover span:before{
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
