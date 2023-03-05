/* eslint-disable space-before-function-paren */
import Vue from 'vue'
// BootstrapVue
import './plugins/BootstrapVue.js'

// Vue Font-Awesome
import './plugins/fontAwesome.js'

import App from './App.vue'
import router from './router'
import store from './store'

// CSS global
import './assets/css/main.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    // Nuestra función
    init() {
      store.dispatch('oauth/getToken')
    }
  },
  // Hook created
  created() {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
