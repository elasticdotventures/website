

import VueLeetishJs from './components/VueLeetishJs.vue'

// Install the components
export function install (Vue) {
  Vue.component('vue-leetish-js', VueLeetishJs)
}

// Expose the components
export {
  VueLeetishJs,
}

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
