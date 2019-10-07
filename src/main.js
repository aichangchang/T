// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import until from './until'
Vue.use(until)
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
import  vueSwiper from 'vue-awesome-swiper'//根据package.json中的value导入
import 'swiper/dist/css/swiper.css'//引入样式

Vue.use(vueSwiper)
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
