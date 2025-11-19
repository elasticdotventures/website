<template>
  <v-container class="about">
  
    <EVCrew />
 
<!--
      <Robotics />
-->




  </v-container>
</template>

<script>
import AboutEV from "../components/AboutEV.vue";
import EVCrew from "../components/EVCrew.vue";

export default {
  name: 'About',
  components: {
    AboutEV,
    EVCrew
  }
}
</script>