<template>
  <div class="list2 auto-width">
    <ul>
      <li v-for="item in list" :key="item.id" class="item clearfix" @click="goDetail(1)">
        <router-link :to="url+item.id">
          <div class="img-wrap ll">
            <img src="./image/test.jpg" alt="">
          </div>
          <div class="content ll">
            <div class="title">{{item.title}}</div>
            <div class="info">{{item.contentStr}}</div>
            <div class="date">{{item.createTime}}</div>  
          </div>
        </router-link>  
      </li>
    </ul>
    <pagination :totalPage="totalPage" :pageSize="pageSize" @setPage="setPage"></pagination>
  </div>
</template>

<script>
  import { query } from '@/api/api'
  import Pagination from 'base/pagination/pagination.vue'
  import { yearMonthDay } from '@/utils/index'

  export default {
    data() {
      return {
        text:'',
        list: [],
        type:null,
        totalPage:0,
        pageSize:6,
        url:''
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
      this.$nextTick(() => {
        this.getList()
      })
    },
    methods: {
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
      goDetail(param) {
        this.$emit('goDetail', param)
        //this.$router.push('/about/d/detail')
      },
      setPage(current) {
        this.getList(current)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .list2 {
    
    .item {
      cursor: pointer;
      padding:20px 0;
      border-bottom:1px solid #eee;
      .img-wrap {
        width:240px;
        height:200px;
        img {
          width:100%;
          display:block;
        }
      }
      .content {
        overflow: hidden;
        margin-left:20px;
        position: relative;
        height:200px;
        width:940px;
        .title {
          margin-top:20px;
          color:@color_3;
          font-size:24px;
        }
        .info {
          margin-top:18px;
          color:@color_3;
          font-size:14px;
          line-height:24px;
        }
        .date {
          color:@color_4;
          font-size:14px;
          position:absolute;
          bottom:20px;
        }
      }
    }
    .item:first-child {
      padding-top:0;
    }
    .item:hover .title {
      color:@color_5;
    }
  }
</style>
