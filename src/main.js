import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n'
import store from '@/store'
import VeeValidate, { Validator } from 'vee-validate'
import en from 'vee-validate/dist/locale/en'
import VueLoading from 'vuex-loading'
import vuetify from '@/plugins/vuetify'

const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

Validator.localize('en', en)

const config = {
  events: 'input'
}

Vue.use(VueLoading)
Vue.use(VeeValidate, config)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify,
  router,
  i18n,
  store,
  vueLoading: new VueLoading({ useVuex: true }),
  template: '<App/>',
  components: { App }
})
