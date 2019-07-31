<template>
  <v-content id="projects">
  <div class="home">
    <h1>views/Projects.vue (About Link)</h1>
    <ul>
    <li><router-link to="/">/ link</router-link></li>
    <li><router-link to="about">about link</router-link></li>
    <li><router-link to="page1">page1 link</router-link></li>
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
