<template>
  <div class="about5 auto-width">
  	<div class="sub-title">
      <span>联系我们</span>
    </div>
    <div class="content-e  auto-width clearfix">
      <div class="ll">
        <ul class="left">
          <li class="content-e-title">四川省崇州市大划建筑工程有限公司</li>
          <li>纳税人识别号：9151018420262759X8</li>
          <li>地址：四川省崇州市崇阳镇向荣街361号附301号3层</li>
          <li>电话：028-82209286</li>
        </ul>
      </div>
      <div class="rr">
        <ul class="rr">
          <li>收件地址：四川省崇州市滨江路南一段19号大划建筑</li>
          <li>收件人：王雪</li>
          <li>电话：13658068208</li>
          <li>邮编：611230<span>(注：周末节假日不派送)</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .about5 {
    padding-bottom:50px;
    .content-e {
      div {
        padding:40px 0;
        border-top:1px solid #eaeaea;
        border-bottom:1px solid #eaeaea;
        width:50%;
        box-sizing: border-box;
        ul {
          li {
            line-height:30px;
            font-size:16px;
            color:@color_4;
            &.content-e-title {
              color:@color_3;
            }
            span {
              margin-left:40px;
            }
          }
        }
        .left {
          border-right:1px solid #eaeaea;
        }
        .right {
          display:inline-block;

        }
      }
    }
  }
</style>
