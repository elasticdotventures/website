<template>
  <v-content id="home">
  <div class="home">
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Elastic.Ventures"/>
    -->
    <h1>views/Home.vue</h1>
  </div>

  <HelloWorld msg="Elastic.Ventures" />

  <AboutEV />
  
  </v-content>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloElasticVentures.vue'; 
import AboutEV from '@/components/AboutEV.vue'; 

@Component({
  components: {
   AboutEV, 
   HelloWorld
  },
})
export default class Home extends Vue {}
</script>
