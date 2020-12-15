// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import router from './router'
import store from './store'
import * as request from "./core/services";

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
Vue.prototype.$request = request;
const accessToken = localStorage.getItem('access_token');
const refreshToken = localStorage.getItem('refresh_token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
