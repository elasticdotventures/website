<template>
  <v-app>

    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>
          welcome..
        </span>
        <!--
          <span class="font-weight-light">MATERIAL DESIGN</span>
        -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!--
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
      -->
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="secondary"
          dark
          v-on="on"
        >
          Menu
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click=""
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>        
    </v-toolbar>


    <v-parallax dark height="300" src="img/background-circuit1.jpg">
    <h1>Elastic.Ventures</h1>
      <v-img
          :src="require('./assets/elasticventures_text_svg.svg')"
          class="my-3"
          contain
          height="100"
        ></v-img>
    </v-parallax>


    <v-content>
            <HelloWorld/>
    </v-content>

    <v-footer>
      <Footer />
    </v-footer>

  </v-app>
</template>

<script>
// this loads the Vuetifyxx homepage. 
import HelloWorld from './components/HelloVuetify.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer
  },
  data: () => ({
    items : [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ]
  })
}
</script>
