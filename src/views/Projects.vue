<!--

Study:
destructing syntax? 
https://vuejs.org/v2/guide/components-slots.html#Destructuring-Slot-Prop
Internally, scoped slots work by wrapping slot content in a function passed one argument: slotProps.

That means the value of v-slot can actually accept any valid JavaScript expression 
OR object, method, etc. 
that can appear in the argument position of a function definition. 

So in supported environments (single-file components or modern browsers), 
you can also use ES2015 destructuring to pull out specific slot props, like so:

<current-user v-slot="{ user }">
  {{ user.firstName }}
</current-user>

This can make the template much cleaner, especially when the slot provides many props. 
It also opens other possibilities, such as renaming props, e.g. user to person:

<current-user v-slot="{ user: person }">
  {{ person.firstName }}
</current-user>

You can even define fallbacks, to be used in case a slot prop is undefined:

<current-user v-slot="{ user = { firstName: 'Guest' } }">
  {{ user.firstName }}
</current-user>

-->

<template>
<v-container id="projects">

  <h1>Active Projects</h1>
  <div class="home">
    <router-link to="/projects/_b00t_"><v-btn>_b00t_</v-btn></router-link>
    <router-link to="/projects/GrowPotBot"><v-btn>GrowPotBot</v-btn></router-link>
    <router-link to="/projects/FungibleFarm"><v-btn>Fungible.Farm</v-btn></router-link>
    <!--
      <router-link to="/projects/B2bCbd"><v-btn>B2BCBD</v-btn></router-link>
      <router-link to="/projects/CyberStream"><v-btn>CyberStream</v-btn></router-link>
      <router-link to="/projects/spinavision"><v-btn>Holographic Fan</v-btn></router-link>
    -->
  </div>

  <!-- 
    <B2bCbd v-if="showB2bCbd"></B2bCbd>
  -->
  <GrowPotBot v-if="showGrowPotBot"></GrowPotBot>
<!-- 
  <CyberStream v-if="showCyberStream"></CyberStream>
-->
  <B00T v-if="showB00T"></B00T>
  <FungibleFarm v-if="showFungibleFarm"></FungibleFarm>

</v-container>

</template>

<script>
import GrowPotBot from '@/components/GrowPotBot.vue'; 
import FungibleFarm from '@/components/FungibleFarm.vue'; 
import B00T from '@/components/_b00t_.vue'; 

export default {
  name: 'Projects',
  components: {
    GrowPotBot,
    FungibleFarm, 
    B00T
  },
  data() {
    return {
      showB2bCbd : false,
      showGrowPotBot : false,
      showCyberStream : false,
      showSpinAVision : false,
      showB00T : false,
      showFungibleFarm : false
    }
  },
  methods: {
    greet() {
      // alert('hello');
    }
  },
  watch: {
    '$route.params.topic': {
      handler(topic) {
        switch (topic) {
          case "welcome" : break;
          case "GrowPotBot" : this.showGrowPotBot = true; break;
          case "_b00t_" : this.showB00T = true; break;
          case "FungibleFarm" : this.showFungibleFarm = true; break;
          default : break;
        }
      }
    }
  }
}
</script>

