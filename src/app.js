import Vue from 'vue'
import axios from 'axios'
import NProgress from 'vue-nprogress'
import App from './App.vue'
import router from './routes/index'
import store from './store'

Vue.prototype.$http = axios
Vue.axios = axios
Vue.use(NProgress)

// Enable devtools
Vue.config.devtools = true

const nprogress = new NProgress({ parent: '.nprogress-container' })

const app = new Vue({
  nprogress,
  router,
  store,
  ...App
})

export { app }
