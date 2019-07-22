/*
Author: vuetify scaffold, @b

Purpose: vuetify, material design.

*/

// 👇 does not work: 
// iconfont: md 

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

// https://next.vuetifyjs.com/en/customization/theme

// vuetify scaffold: 
Vue.use(Vuetify, {
  iconfont: 'md'
})

/*
   material design icons  
   https://www.npmjs.com/package/vue-material-design-icons

example from https://vuetifyjs.com/en/framework/icons
<template>
  <v-icon>$vuetify.icons.product</v-icon>
  <v-icon v-text="'$vuetify.icons.support'"></v-icon>
  <v-icon v-html="'$vuetify.icons.steam'"></v-icon>
  <v-icon v-text="platform"></v-icon>
</template>

*/
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify, {
  iconfont: 'mdi',
  icons: {
    'pretty':'mdi-steam-box',  // 
    'product': 'mdi-dropbox',
    'support': 'mdi-lifebuoy',
    'steam': 'mdi-steam-box',
    'pc': 'mdi-desktop-classic',
    'xbox': 'mdi-xbox',
    'playstation': 'mdi-playstation',
    'switch': 'mdi-nintendo-switch'
  }
})

/*
*/


// attempting to create custom icons. 
const MY_ICONS = {
  'complete': '',
  'cancel': '',
  'close': '',
  'delete': '', // delete (e.g. v-chip close)
  'clear': '',
  'success': '',
  'info': '',
  'warning': '',
  'error': '',
  'prev': '',
  'next': '',
  'checkboxOn': '',
  'checkboxOff': '',
  'checkboxIndeterminate': '',
  'delimiter': '', // for carousel
  'sort': '',
  'expand': '',
  'menu': '',
  'subgroup': '',
  'dropdown': '',
  'radioOn': '',
  'radioOff': '',
  'edit': ''
}
Vue.use(Vuetify, {
  icons: MY_ICONS
})


// attempting to tweak colors 
// https://next.vuetifyjs.com/en/customization/theme
/*
import colors from 'vuetify/lib/util/colors'

const light = {
  primary: {
    base: colors.purple.base,
    darken1: colors.purple.darken2,
  },
  secondary: colors.indigo,
  // All keys will generate theme styles,
  // Here we add a custom `tertiary` color
  tertiary: colors.pink.base,
}

 
export default new Vuetify({
  theme: {
     themes: { light },
  },
})
*/