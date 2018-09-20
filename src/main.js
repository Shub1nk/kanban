import Vue from 'vue'
import store from './store/index'
import App from './App.vue'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
