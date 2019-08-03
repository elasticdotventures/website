<style>
overline {
    font-family: courier;
}
</style>
<template>
  <v-content id="Intranet">


    <!--
      note: the $emit('chat-start') appears in vue debugger events; but nothing is listening. 
      https://vuejs.org/v2/guide/events.html
    -->

    <v-btn v-on:click="greet($event)">Greet me</v-btn>
    <v-btn @click="hello_world">hello world</v-btn>
    <p v-if="false">hello world</p>

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
    hello_world: (event) => {
      // 🍰👇 why doesn't this work? 
      // this.$router.push({ path: '/projects', query: { post_slug: 'hello-world' } })
      
    },
    greet: function(event) {
      alert("Hello"); 
    }
  }
})
export default class Intranet extends Vue {}
</script>
