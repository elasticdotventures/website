<template>
  <v-content class="about">
    <h1>About.vue</h1>
    <h1>This is an about page</h1>

    <EVCrew />

<!--

      <v-container>

        <v-divider />
      </v-container>      <v-divider />
      <GrowPotBot />
      <Robotics />

      <v-divider />
      <Ubuntu />
-->




  </v-content>
</template>

<script type="ts">
import AboutEV from "../components/AboutEV.vue";
import EVCrew from "../components/EVCrew.vue";

import { Component, Vue } from 'vue-property-decorator';

/* 
import B2bCbd from './components/B2bCbd.vue';
import Careers from './components/Careers.vue';
*/

// import EVCrew from "../components/EVCrew.vue";
//import GrowPotBot from "./components/GrowPotBot.vue";
//import Robotics from "./components/Robotics.vue";
//import Ubuntu from "./components/Ubuntu.vue";

@Component({
  components: {
   // HelloWorld,
    AboutEV,    // adaptive content
    EVCrew,     // yei directory (loading from file, etc.)
  },
})
export default class About extends Vue {}


</script>