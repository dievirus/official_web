<template>
  <div class="home">
    <slider></slider>
    <Business></Business>
    <Industry></Industry>
    <Dynamic></Dynamic>
    <cooperation></cooperation>
  </div>
</template>

<script>
	import Slider from 'components/slider/slider.vue'
	import Business from 'components/home/business/business.vue'
  import Industry from 'components/home/industry/industry.vue'
	import Dynamic from 'components/home/dynamic/dynamic.vue'
	import Cooperation from 'components/home/cooperation/cooperation.vue'


  export default {
  	components: {
  		Slider,
  		Business,
      Industry,
  		Dynamic,
  		Cooperation
    },
    mounted() {
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
.home {
  overflow: hidden;
}
</style>
