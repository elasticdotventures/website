<template>
  <v-container id="home">
  <HelloWorld msg="Elastic.Ventures" />

  <AboutEV />
  
  </v-container>
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
