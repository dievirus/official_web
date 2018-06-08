<template>
  <div class="detail ll">
    <section class="section1">
      <div class="nav">首页>公司业绩>获奖工程>详情</div>
      <div class="title">鲁班奖</div>
      <div class="date">2017/10/28</div>
    </section>
    <section class="section2">
      <img src="" alt="">
    </section>
    <section class="">
           “中国建设工程鲁班奖(国家优质工程)”(简称“鲁班奖”)，原名“建筑工程鲁班奖”，是原中国建筑业联合会为贯彻执行“百年大计、质量第一”的方针，促进我国建筑工程质量的全面提高，争创国际先进水平，在建设部的支持下，于1987年设立。
     鲁班奖的定名，创立时曾进行过充分的讨论，提出过金鸡、金龙、百花、长城、鲁班等六七个名称，经过行业人士的反复研究，最后决定将该奖名称以中国建筑业的祖师爷鲁班的名字命名，称为“建筑工程鲁班奖”，简称“鲁班奖”。
     对奖品鲁班金像的设计参考了大量的历史资料，最后没有采用鲁班庙堂中道家神像的造型，而是按照历史传说和记载，把鲁班塑造成一个春秋时期鲁国装束的工匠，左手持墨斗曲于胸前，右手持“班母”拉出墨线停于腰侧。金像底座正面粘贴刻有获奖工程和承建单位名称的镀金标牌。自1987年颁奖以来，奖品的形象也得到了海内外的一致好评。
    </section>
  </div>
</template>

<script>
  export default {
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