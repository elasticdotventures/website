<template>
  <v-container class="about">
  
    <EVCrew />
 
<!--
      <Robotics />
-->




  </v-container>
</template>

<script type="ts">
import AboutEV from "../components/AboutEV.vue";
import EVCrew from "../components/EVCrew.vue";

import { Component, Vue } from 'vue-property-decorator';

/* 
import B2bCbd from './components/B2bCbd.vue';
import Careers from './components/Careers.vue';
*/

//import GrowPotBot from "./components/GrowPotBot.vue";
//import Robotics from "./components/Robotics.vue";

@Component({
  components: {
   // HelloWorld,
    AboutEV,    // adaptive content
    EVCrew,     // yei directory (loading from file, etc.)
  },
})
export default class About extends Vue {}


</script>