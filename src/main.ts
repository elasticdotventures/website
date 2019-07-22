

import Vue from 'vue'

// vue.use docs:
// 🤓 https://vuejs.org/v2/guide/plugins.html

// google analytics. 
// docs: https://matteogabriele.gitbooks.io/vue-analytics/content/
// disable tracking i.e. 'gdpr'
// Vue.$ga.disable()
// Vue.$ga.enable()
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-54542129-1'
})

import { VueTypedJs } from 'vue-typed-js'; 
Vue.use(VueTypedJs);

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false

import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


