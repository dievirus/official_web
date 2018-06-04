<template>
  <div class="list1">
    <ul class="clearfix">
      <li class="ll" v-for="item in ii">
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        k:[
          {w:11},
          {w:22}
        ]
      }
    },
    // props: {
    //   list: [
    //     {
    //       title:'1',
    //       url:'1'
    //     },
    //     {
    //       title:'2',
    //       url:'2'
    //     },
    //     {
    //       title:'3',
    //       url:'3'
    //     },
    //     {
    //       title:'4',
    //       url:'4'
    //     }
    //   ]
    // }
    props:{
      'ii': {
        default: 1
      },
      'jj': {
        default:2
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  
</style>
