<template>
  <div>
    <List1 :ii="jjjj"></List1>
  </div>
</template>

<script>
  import List1 from 'components/list1/list1.vue'

  export default {
    data() {
      return {
        jjjj: [
          {title:11},
          {title:22}
        ]
      }
    },
    components: {
      List1
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
</style>
