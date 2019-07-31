import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
})

// import { mdiAccount } from '@mdi/js'

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

NOTE: this library provides the mdi-xxxx series (facebook, etc.)
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
