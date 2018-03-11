import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import animate from 'animate.css'
// import 'lib-flexible'

import 'common/less/index.less'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(animate)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
