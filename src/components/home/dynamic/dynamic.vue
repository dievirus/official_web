<template>
  <div class="dynamic">
    <div class="h-title">公司动态</div>
    <div class="dynamic-wrap clearfix">
      <div class="d-left">
        <router-link :to="'/information/b/detail/e/'+leftData.id" class="ll" style="width:100%;">
          <div class="detail-img-wrap">
            <img :src="leftData.img" alt="">
            <span class="detail-time-l">
              <div class="day">{{leftData.day}}</div>
              <div class="year-month">{{leftData.yearMonth}}</div>
            </span>
          </div>
          <div class="detail-info">
            <div class="clearfix d-title-wrap">
              <div class="d-title nowrap ll">{{leftData.title}}</div>
              <div class="d-time rr">{{leftData.yearMonthDay}}</div>
            </div>
            <div class="d-content" v-html="leftData.content"></div>
          </div>
        </router-link>
      </div>
      <div class="d-right">
        <ul>
          <li v-for="(item, index ) in rightData" :key="item.id" class="dynamic-item" :class="{'active-item':activeIndex == index}">
            <router-link :to="'/information/b/detail/e/'+item.id" class="clearfix">
              <div class="img-wrap ll">
                <img :src="item.img" alt="">
              </div>
              <div class="item-info ll">
                <div class="item-info-title">{{item.title}}</div>
                <div class="item-info-time">{{item.createTime}}</div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-link class="show-more" to="/information/b/list">查看更多</router-link>
  </div>
</template>

<script>
  import { query } from '@/api/api'
  import { day , yearMonth , yearMonthDay } from '@/utils/index'

  export default {
    data() {
      return {
        leftData:{},
        rightData:[],
        activeIndex:0,
      }
    },
    mounted() {
      query({
        type: 7
      }).then((res) => {
        if(res.data.code == '200') {
          this.leftData = res.data.data.rows[0]
          console.log(this.leftData.img)
          const date = this.leftData.createTime
          this.leftData.day = day(date)
          this.leftData.yearMonth = yearMonth(date)
          this.leftData.yearMonthDay = yearMonthDay(date)

          this.rightData = res.data.data.rows.slice(1,5)
          this.rightData.map((item) => {
            item.createTime = yearMonthDay(item.createTime)
            if(!item.img) {
              item.img = '/static/image/default3.png'
            }else {
              item.img = 'http://47.96.151.153:9000/' + item.img
            }
          })
          if(!this.leftData.img) {
            this.leftData.img = '/static/image/default2.png'
          }else {
            this.leftData.img = 'http://47.96.151.153:9000/' + this.leftData.img
          }
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    computed: {
      formatDay() {
        let d = 1
        return d+1
      }
    },
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .dynamic {
    overflow:hidden;
    background:#fff;
    position: relative;
    z-index: 100;
    .dynamic-wrap {
      width:1200px;
      margin:0 auto;
      .d-left {
        a {
          text-decoration: none;
        }
        float:left;
        width:680px;
        position:relative;
        .detail-img-wrap {
          height:420px;
          img {
            width:100%;
            height:420px;
          }
          .detail-time-l {
            position:absolute;
            left:0;
            top:0;
            width:120px;
            height:120px;
            background:@color_background_1;
            color:#fff;
            text-align:center;
            .day {
              font-size:60px;
              margin-top:10px;
            }
            .year-month {
              font-size:18px;
              margin-top:10px;
            }
          }
        }
        .detail-info {
          background:@color_background_2;
          padding:30px;
          height:148px;
          box-sizing: border-box;
          .d-title-wrap {
            color:@color_3;
            font-size:18px;
            padding-top:3px;
            .d-title {
              width:70%;
              font-size:18px !important;
            }
            .d-time {
              font-size:14px;
              color:#999;
              margin-top:2px;
            }
          }
          .d-content {
            margin-top:30px;
            line-height:20px;
            font-size:14px;
            color:@color_4;
            overflow: hidden;
            height:40px;
            text-overflow:ellipsis;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2; 
          }
        }
      }
      .d-right {
        float:left;
        width:510px;
        margin-left:10px;
        
        .dynamic-item {
          margin-bottom:15px;
          padding:15px;
          background:@color_background_2;
          transition:.3s;
          .img-wrap {
            width:160px;
            height:100px;
            overflow: hidden;
            img {
              width:100%;
              transform: scale(1);
              transition: .3s;
            }
          }
          .item-info {
            margin-left:20px;
            .item-info-title {
              height:48px;
              font-size:18px;
              color:@color_3;
              line-height:25px;
              width:268px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            .item-info-time {
              font-size:14px;
              color:@color_4;
              margin-top:35px;
            }
          }
          
        }
        .dynamic-item:hover {
          background:@color_background_1;
          transition:.3s;
          cursor: pointer;
          .item-info-time,.item-info-title {
            color:#fff;
          }
          img {
            transform: scale(1.1);
            transition: .3s;
          }
        }
      }
    }
    .show-more {
      display:block;
      width:200px;
      height:48px;
      font-size:16px;
      text-align:center;
      line-height:48px;
      border-radius:24px;
      background:@color_background_1;
      margin:80px auto 80px auto;
      color:#fff;
      text-decoration:none; 
      transition:.3s;
    }
    .show-more:hover {
      opacity: .8;
      transition:.3s;
    }
  }
</style>
