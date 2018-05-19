<template>
  <div class="footer">
    <div class="footer-wrap">
      <div class="gongzhong">
        <img src="./image/test_code.png" alt="">
        <div class="guanzhu">关注公众号</div>
      </div>
      <div class="detail-info">
        <ul>
          <li class="phone-content">
            <img src="./image/d_call.png" alt="">
            <div class="phone-wrap">
              <div class="phone-text">全国服务热线</div>
              <div class="phone">028-8231-2656</div>  
            </div>
          </li>
          <li class="o-info">地址：四川省崇州市滨江路南一段19号</li>
          <li class="o-info">Copyright &copy 2017 大划建筑版权所有</li>
          <li class="o-info">沪公网安备 31010402000179号 沪ICP备 09000473号-4</li>
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

  .footer {
    min-width:1200px;
    height:200px;
    background:#000;
    .footer-wrap {
      width:960px;
      margin:0 auto;
      position:relative;
      overflow:hidden;
      .gongzhong {
        position:absolute;
        top:44px;
        left:0;
        img {
          vertical-align:middle;
          width:110px;
          height:110px;
          display:inline-block;
        }
        .guanzhu {
          color:#cfcfcf;
          position:absolute;
          top:18px;
          left:120px;
          display:inline-block;
          width:15px;
          height:110px;
        }
      }
      .detail-info {
        color:#fff;
        text-align:center;
        .phone-content {
          margin-top:39px;
          margin-bottom:30px;
          .phone-wrap {
            display:inline-block;
            .phone-text {
              font-size:14px;
              text-align:left;
            }
            .phone {
              margin-top:5px;
              font-size:36px;
            }
          }
        }
        .o-info {
          font-size:14px;
          color:#b9b9b9;
          margin-top:10px;
        }
      }
    }
  }
</style>
