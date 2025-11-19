<template>
  <v-container id="home">
  <HelloWorld msg="Elastic.Ventures" />

  <AboutEV />
  
  </v-container>
</template>

<script>
import HelloWorld from '@/components/HelloElasticVentures.vue'; 
import AboutEV from '@/components/AboutEV.vue'; 

export default {
  name: 'Home',
  components: {
    AboutEV, 
    HelloWorld
  }
}
</script>
