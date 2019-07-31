<style lang="scss">

  @font-face {
      font-family: 'nasa';
      /* src: url('./c0re/_Pretty/ttf/nasalization-rg.ttf'); */
      src: url('./assets/nasalization-rg.ttf')
  }
  @font-face {
      font-family: 'cevtauri';
      /* src: url('./c0re/_Pretty/font-cevtauri/cevtauri-v2.woff'); */
      src: url('./assets/cevtauri-v2.woff');
  }

  /* 
  🦨 not used: 
  @font-face {
    font-family: 'forgetica';
    src: url('./c0re/_Pretty/ttf/SansForgetica-Regular.otf') 
    src: url('./assets/SansForgetica-Regular.otf')
  }
  @font-face {
    font-family: 'player2';
    src: url('./c0re/_Pretty/ttf/press_start_2p/PressStart2P.ttf')
  }
*/

@font-face {
  font-family: 'ev_timer';
  /* src: url('./c0re/_Pretty/ttf/heaven-castro_cursed-timer-ulil/CursedTimerULiL.ttf'); */
  src: url('./assets/CursedTimerULiL.ttf');
}
 
v-btn {
   font-size: 12pt;
   font-weight: bold; 
   font-family: nasa;
}

 .active, 
 nav li:hover,
 nav li.router-link-active,
 nav li.router-link-exact-active {
   background-color: yellowgreen;
   cursor: pointer;
   color: blue;
 }

</style>

<template>
  <v-app id="app">
    <!--
      app makes the toolbar dock to the top
    -->
    <v-toolbar app dark elevation="12" 
      style="font-family: nasa" 
      class="secondary--text font-weight-heavy" 
      src="assets/sky.jpg">
    <!--
      v-toolbar-title
      v-toolbar-items
    -->
    <h2>EV Logo</h2>
    <v-spacer />
    <v-toolbar-items>
      <router-link active-class="active" exact to="/">
        <v-btn flat >Home</v-btn>
      </router-link> 
      <v-spacer> | </v-spacer>
      <router-link active-class="active"  to="/about">
        <v-btn flat >About</v-btn>
      </router-link>
      <v-spacer> | </v-spacer>
      <router-link active-class="active"  to="/projects">
        <v-btn flat >Projects</v-btn>
      </router-link>
      <v-spacer> | </v-spacer>
      <router-link active-class="active"  to="/contact">
        <v-btn flat>Contact</v-btn>
      </router-link>

      <v-spacer v-if="$store.trustMe"> | </v-spacer>
      <router-link v-if="$store.trustMe" active-class="active"  to="/intranet">Intranet</router-link>
      
    </v-toolbar-items>

    </v-toolbar>
  
     <v-content>

      <v-container fluid>
          <v-layout row wrap>
            <v-flex>

    <router-view />
    <v-btn v-on:click="greet()">Greet me</v-btn>


        </v-flex>
        </v-layout>
      </v-container>

    </v-content>

    <v-footer>
      <Footer />
    </v-footer>

  </v-app>
</template>

<script type="ts">
// this loads the Vuetifyxx homepage.
// import HelloWorld from "./components/HelloVuetify.vue";
import Vue from 'vue'



import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer      // #compliance
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Click Me" },    // 👈🦨
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  }),
  // define methods under the `methods` object
  methods: {
    // 🦨 not used 👇
    greet: function(event) {
      // `this` inside methods points to the Vue instance
      alert("Hello " + this.name + "!");
      // `event` is the native DOM event
      $store.trustMe = 1; 
      if (event) {
        alert(event.target.tagName);
      }
    }
  }
};
</script>

