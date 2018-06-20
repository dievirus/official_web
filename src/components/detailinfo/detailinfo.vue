<template>
  <div class="detail ll">
    <section class="section1">
      <div class="nav">{{nav}}</div>
      <div class="title">{{title}}</div>
      <div class="date">{{date}}</div>
    </section>
    <section class="section2">
      <img :src="img" alt="">
    </section>
    <section class="">{{content}}</section>
  </div>
</template>

<script>
  import { query } from '@/api/api'
  import { yearMonthDay } from '@/utils/index'

  export default {
    data() {
      return {
        id: this.$route.params.id,
        title:'',
        date:'',
        img:'',
        content:'',
        nav:''
      }
    },  
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.nav = to.meta.nav
      })
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        this.id = this.$route.params.id
        this.getInfo(this.id)
      }
    },
    mounted() {
      this.getInfo(this.id)
    },
    methods: {
      getInfo(id) {
        query({
          id:id
        }).then((res) => {
          const data = res.data.data.rows[0]
          this.title = data.title
          this.date = yearMonthDay(data.createTime)
          this.img = data.img
          this.content = data.contentStr
        })
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .detail {
    width:800px;
    .section1 {
      margin-top:30px;
      .nav {
        font-size:16px;
        color:@color_4;
      }
      .title {
        margin-top:30px;
        font-size:24px;
        color:@color_3;
      }
      .date {
        margin:20px 0 30px 0;
        font-size:14px;
        color:@color_4;
      }
    }
    .section2 {
      width:100%;
      height:500px;
      background:red;
      opacity: .4;
      margin-bottom:30px;
    }
  }
</style>