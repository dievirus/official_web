<template>
  <div class="about3">
  	<pagination :pageSize="pageSize" @setPage="setPage"></pagination>
  </div>
</template>

<script>
  import Pagination from 'base/pagination/pagination.vue'

  export default {
    data() {
      return {
        pageSize: 10
      }
    },
    components: {
      Pagination
    },
    methods: {
      setPage(current) {
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
</style>
