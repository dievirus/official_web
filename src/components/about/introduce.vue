<template>
  <div>
    <transition enter-active-class="zoomIn" >
      <p v-show="f" class="animated">sdfd</p>
    </transition>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        f: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.f = true
      },1000)
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
</style>
