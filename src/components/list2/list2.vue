<template>
  <div class="list2 auto-width">
    <ul>
      <li v-for="item in list" :key="item.id" class="item clearfix" @click="goDetail(1)">
        <router-link :to="url+item.id">
          <div class="img-wrap ll">
            <img :src="item.img" alt="">
          </div>
          <div class="content ll">
            <div class="title">{{item.title}}</div>
            <div class="info nowrap2">{{item.contentStr}}</div>
            <div class="date">{{item.createTime}}</div>  
          </div>
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
        this.getList(1)
      })
    },
    methods: {
      getList(page) {
        query({
          size:this.pageSize,
          page:page,
          type:this.type
        }).then((res) => {
          if(res.data.code == '200') {
            this.list = res.data.data.rows
            this.totalPage = Math.ceil((res.data.data.count) / this.pageSize)

            this.list.map((item) => {
              item.createTime = yearMonthDay(item.createTime)
              if(!item.img) {
                item.img = '/static/image/default1.png'
              }else {
                item.img = 'http://47.96.151.153:9000/' + item.img
              }
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
        overflow: hidden;
        img {
          width:100%;
          height:100%;
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
          height:44px;

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
