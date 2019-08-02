<style>
overline {
    font-family: courier;
}
</style>
<template>
  <v-content id="Intranet">



    <v-btn v-on:click="greet($event)">Greet me</v-btn>

  </v-content>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
  },
  data: () => ({
  }),
  methods: {
    greet: function(event) {
      alert("Hello"); 
    }
  }
})
export default class Contact extends Vue {}
</script>
