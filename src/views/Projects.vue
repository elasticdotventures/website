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
  <v-content id="projects">
  <div class="home">
    <h1>views/Projects.vue (About Link)</h1>
    <ul>
    <li><router-link to="/projects/growbot">GrowPotBot</router-link></li>
    <li><router-link to="/projects/cyberstream">CyberStream</router-link></li>
    <li><router-link to="/projects/spinavision">Holographic Fan</router-link></li>
    </ul>
  </div>
  </v-content>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
   // HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
