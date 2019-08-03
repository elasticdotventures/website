

import Vue from 'vue'
import './plugins/vuetify'

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

Vue.config.productionTip = false

import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
// import './plugins/ev🧠'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// $mount 
// $destory
// $set
// $delete
// $watch
// $on
// $once
// $off
// $emit
// $nextTick
// $createElement

// a good (or skunky?) way to fire initialization events? 
// store.commit('increment')

// store.commit('change_trustMe',3)


