<template>
  <div class="dynamic">
    <div class="h-title">公司动态</div>
    <div class="dynamic-wrap clearfix">
      <div class="d-left">
        <div class="detail-img-wrap">
          <img src="" alt="">
          <span class="detail-time-l">
            <div class="day">24</div>
            <div class="year-month">2018-2</div>
          </span>
        </div>
        <div class="detail-info">
          <div class="clearfix d-title-wrap">
            <div class="d-title nowrap ll">这里是标题xxxxx-确实是标题</div>
            <div class="d-time rr">2018-2-24</div>
          </div>
          <div class="d-content">
            这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容
            这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容这里是内容
          </div>
        </div>
      </div>
      <div class="d-right">
        <ul>
          <li class="dynamic-item active-item clearfix">
            <div class="img-wrap ll">
              <img src="" alt="">
            </div>
            <div class="item-info ll">
              <div class="item-info-title">这里是标题xxxxx-确实是标题这里是标题这里是标题xxxxx-确实是标题这里是标题这里是标题xxxxx-确实是标题这里是标题这里是标题xxxxx-确实是标题这里是标题这里是标题xxxxx-确实是标题这里是标题x</div>
              <div class="item-info-time">2018-02.24</div>
            </div>
          </li>
          <li class="dynamic-item clearfix">
            <div class="img-wrap ll">
              <img src="" alt="">
            </div>
            <div class="item-info ll">
              <div class="item-info-title">这里是标题xxxxx-确实是标题</div>
              <div class="item-info-time">2018-02.24</div>
            </div>
          </li>
          <li class="dynamic-item clearfix">
            <div class="img-wrap ll">
              <img src="" alt="">
            </div>
            <div class="item-info ll">
              <div class="item-info-title">这里是标题xxxxx-确实是标题</div>
              <div class="item-info-time">2018-02.24</div>
            </div>
          </li>
          <li class="dynamic-item clearfix">
            <div class="img-wrap ll">
              <img src="" alt="">
            </div>
            <div class="item-info ll">
              <div class="item-info-title">这里是标题xxxxx-确实是标题</div>
              <div class="item-info-time">2018-02.24</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <a class="show-more" href="javascript:void(0)">查看更多</a>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .dynamic {
    overflow:hidden;
    background:#fff;
    .dynamic-wrap {
      width:1200px;
      margin:0 auto;
      .d-left {
        float:left;
        width:680px;
        height:420px;
        position:relative;
        .detail-img-wrap {
          background:rgba(100,100,100,.4);
          height:420px;
          img {
            width:100%;
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
          .d-title-wrap {
            color:@color_3;
            font-size:18px;
            .d-title {
              width:70%;
            }
          }
          .d-content {
            margin-top:30px;
            line-height:20px;
            font-size:14px;
            color:@color_4;
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
          &.active-item {
            background:@color_background_1;
          }
          .img-wrap {
            width:160px;
            height:100px;
            background:#999;
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
        .dynamic-item {
          &.active-item {
            .item-info {
              .item-info-title,.item-info-time {
                color:#fff;
              }
            }
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
    }
  }
</style>
