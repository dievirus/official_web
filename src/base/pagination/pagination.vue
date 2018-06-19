<template>
  <div class="pagination">
    <ul class="p-wrap clearfix">
      <li class="prev" :class="{'disabled':currentPage <= 1}" @mouseenter="mouseenterPrev" @mouseleave="mouseleavePrev" @click="goPage(currentPage-1)">
        <img v-show="!isPrev" src="./image/prev.png" alt="">
        <img v-show="isPrev" src="./image/prev_on.png" alt="">
      </li>
      <li v-for="item in totalPage" :key="item" class="page" :class="{'active':item == currentPage}" @click="goPage(item)">{{item}}</li>

      <li class="next" :class="{'disabled':currentPage >= totalPage}" @mouseenter="mouseenterNext" @mouseleave="mouseleaveNext" @click="goPage(currentPage+1)">
        <img v-show="!isNext" src="./image/next.png" alt="">
        <img v-show="isNext" src="./image/next_on.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isPrev:'',
        isNext:'',
        currentPage: 1
      }
    },
    props: {
      pageSize: {
        type: Number,
        default: 1
      },
      totalPage: {
        type: Number,
        default:1
      }
    },
    methods: {
      goPage(index) {
        if(index >= this.totalPage) {
          index = this.totalPage
        }
        if(index <= 1) {
          index = 1
        }
        this.currentPage = index
        this.$emit('setPage', index)
      },
      mouseenterPrev() {
        if(this.currentPage > 1) {
          this.isPrev = true
        }
        
      },
      mouseleavePrev() {
        this.isPrev = false
      },
      mouseenterNext() {
        if(this.currentPage < this.totalPage) {
          this.isNext = true
        }
        
      },
      mouseleaveNext() {
        this.isNext = false
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable.less";

  .pagination {
    margin-top:40px;
    margin-bottom:80px;
    .p-wrap {
      text-align: center;
      li {
        display:inline-block;
        width:36px;
        height:36px;
        text-align: center;
        line-height: 36px;
        vertical-align: middle;
        margin:0 4px;
        color:@color_4;
        cursor: pointer;
        border-radius: 3px;
        &.disabled {
          pointer-events: none;
        }
        &.page {
          border:1px solid #eaeaea;
        }
        &.active {
          background:@color_background_1;
          color:#fff;
        }
        img {
          vertical-align: middle;
          display:block;
          border-radius: 3px;
        }
      }
      li.page:hover {
        background:@color_background_1;
        color:#fff;
      }
    }
  }
</style>
