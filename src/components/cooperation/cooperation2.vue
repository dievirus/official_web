<template>
  <div class="about3 auto-width">
    <div class="sub-title">
      <span>合作伙伴</span>
    </div>
    <div class="cooperation-wrap">
      <ul class="clearfix" >
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/1.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/2.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/3.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/4.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/5.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/6.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/7.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/8.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/9.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/10.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/11.jpg" alt="">
          </div>
        </li>
        <li class="item ll">
          <div class="img-wrap">
            <img src="../home/cooperation/image/12.jpg" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Pagination from 'base/pagination/pagination.vue'
  import List1 from 'components/list1/list1.vue'
  

  export default {
    data() {
      return {
        pageSize: 10,
        jjjj: [
          {title:11},
          {title:22},
          {title:'这是一个非常长的标题测试这是一个非常长的标题测试这是一个非常长的标题测试这是一个非常长的标题测试'},
          {title:44},
          {title:55}
        ],
      }
    },
    components: {
      Pagination,
      List1
    },
    methods: {
      setPage(current) {
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
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
            img {
              width:100%;
            }
          }
        }
      }
    }
</style>
