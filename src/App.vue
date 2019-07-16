<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>welcome..</span>
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
          <v-btn color="secondary" dark v-on="on">Menu</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" @click="greet">
            <v-list-item-title>{{ item.title }}</v-list-item-title><br>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <v-parallax dark height="300" src="img/background-circuit1.jpg">
        <h1>Elastic.Ventures</h1>
        <v-img
          :src="require('./assets/elasticventures_text_svg.svg')"
          class="my-3"
          contain
          height="100"
        ></v-img>
              <vue-particles
        color="#ffffff"
        :particleOpacity="0.7"
        linesColor="#ffffff"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="5"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      </v-parallax>
      <HelloWorld />
      <AboutEV />
      <EVCrew />
      <GrowPotBot />
      <Robotics />
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
