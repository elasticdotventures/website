
import Vue from 'vue'

// google analytics. 
// docs: https://matteogabriele.gitbooks.io/vue-analytics/content/
// disable tracking i.e. 'gdpr'
// Vue.$ga.disable()
// Vue.$ga.enable()
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-54542129-1'
})


import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'


import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
