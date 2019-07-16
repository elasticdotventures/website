import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

// https://next.vuetifyjs.com/en/customization/theme

Vue.use(Vuetify, {
  iconfont: 'md',
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