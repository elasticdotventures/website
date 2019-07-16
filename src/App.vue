<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      app
    >
    <!--
      !study
    -->
       <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
   <v-toolbar color="cyan" dark fixed app>
      <v-spacer></v-spacer>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    
    <!--
      vtoolbar-old
    -->

    <v-content>

      <v-parallax dark height="275" src="img/background-circuit1.jpg">
      <h1>Elastic.Ventures</h1>

      <vue-particles
        color="#ffffff"
        :particleOpacity="0.7"
        linesColor="#ffffff"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="5"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.5"
        :linesDistance="150"
        :moveSpeed="4"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>


        <v-img
          position="top"
          :src="require('./assets/elasticventures_text_svg.svg')"
          class="my-3"
          contain
          height="100"
        />

      </v-parallax>


      <HelloWorld />
      <v-divider />
      
      <AboutEV />
      <EVCrew />

      <v-divider />
      <GrowPotBot />
      <Robotics />

      <v-divider />
      <Ubuntu />
    </v-content>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
// this loads the Vuetifyxx homepage.
import HelloWorld from "./components/HelloVuetify.vue";

import AboutEV from "./components/AboutEV.vue";
/* 
import B2bCbd from './components/B2bCbd.vue';
import Careers from './components/Careers.vue';
*/

import EVCrew from "./components/EVCrew.vue";
import GrowPotBot from "./components/GrowPotBot.vue";
import Robotics from "./components/Robotics.vue";
import Ubuntu from "./components/Ubuntu.vue";

import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    AboutEV,
    EVCrew,
    GrowPotBot,
    Robotics,
    /*    B2bCbd,
    Careers, */
    Ubuntu,
    Footer
  },
  data: () => ({
     drawer: null, 
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  }),
  // define methods under the `methods` object
  methods: {
    greet: function(event) {
      // `this` inside methods points to the Vue instance
      alert("Hello " + this.name + "!");
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    }
  }
};
</script>
