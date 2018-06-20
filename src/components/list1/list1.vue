<template>
  <div class="list1 auto-width">
    <ul class="clearfix">
      <li class="ll" v-for="(item, index) in list" :key="item.id" >
        <router-link :to="url+item.id">
          <div class="img-wrap" :class="{mask:showIndex==index}" @mouseenter="mouseenter(index)" @mouseleave="mouseleave">
            <img class="img-item" src="./image/test.jpg" alt="">
            <img class="jia" :class="{show:showIndex==index}" src="./image/jia.png" alt="">
            <div class="mask"></div>
          </div>
          <p class="nowrap">{{item.title}}</p>
        </router-link>
      </li>
    </ul>
    <pagination v-if="totalPage>1" :totalPage="totalPage" :pageSize="pageSize" @setPage="setPage"></pagination>
  </div>
</template>

<script>
  import { query } from '@/api/api'
  import Pagination from 'base/pagination/pagination.vue'
  import { yearMonthDay } from '@/utils/index'

  export default {
    data() {
      return {
        list:[],
        showIndex: null,
        type: null,
        totalPage:0,
        pageSize:12,
        url: ''
      }
    },
    components: {
      Pagination
    },
     beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.type = to.meta.type
        vm.url = to.meta.url
      })
    },
    mounted() {
      this.getList(1)
    },
    methods: {
      mouseenter(index) {
        this.showIndex = index
      },
      mouseleave() {
        this.showIndex = null
      },
      getList(page) {
        query({
          size:this.pageSize,
          page:page,
          // type:this.type
        }).then((res) => {
          if(res.data.code == '200') {
            this.list = res.data.data.rows
            this.totalPage = Math.ceil((res.data.data.count) / this.pageSize)
          
            this.list.map((item) => { 
              item.createTime = yearMonthDay(item.createTime)
            })

          }else {
            alert('请求失败')
          }
        }).catch((err) => {
          console.log(err)
        })
      },
      setPage(current) {
        this.getList(current)
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
