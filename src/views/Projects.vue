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

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
// import VueLogger from 'vuejs-logger';
// import Vuex, { mapState, mapMutations } from 'vuex'; 

// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import B2bCbd from '@/components/B2bCbd.vue'; 
import GrowPotBot from '@/components/GrowPotBot.vue'; 
import FungibleFarm from '@/components/FungibleFarm.vue'; 
import B00T from '@/components/_b00t_.vue'; 
// import CyberStream from '@/components/CyberStream.vue';
//import SpinAVision from '@/components/SpinAVision.vue';


@Component({
  components: {
   // HelloWorld,
    // B2bCbd,
    GrowPotBot,
    FungibleFarm, 
    B00T
  //  CyberStream,
   // SpinAVision
  },
  data: () => {
    return({
      showB2bCbd : false,   // 🍰 can't figure out how to set these from the $route notification.
      showGrowPotBot : false,
      showCyberStream : false,  //
      showSpinAVision : false,
      showB00T : false,
      showFungibleFarm : false
    })
  },
  methods: {
    greet : () => {
    //   alert('hello');
    }
  },
  watch: {
    // how does 'watch' work 🤔 -- but the route itself is in router.ts
    '$route.params.topic'  : {
      handler: function(topic) {
        // Vue.$log.info("got topic: ", topic);
        switch (topic) {
          // case "B2bCbd" : this.$data.showB2bCbd = true; break; 
          case "welcome" : alert('welcome'); break;
          case "GrowPotBot" : this.$data.showGrowPotBot = true; break;
          // case "CyberStream" : this.$data.showCyberStream = true; break;
          case "_b00t_" : this.$data.showB00T = true; break;
          case "FungibleFarm" : this.$data.showFungibleFarm = true; break;
          default : alert("unknown choice"); break;
        }
      }
    }
  }
  
})
export default class Projects extends Vue {}
</script>

