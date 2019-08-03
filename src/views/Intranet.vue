<style>
overline {
    font-family: courier;
}
</style>
<template>
  <v-content v-on:enlarge="postFontSize += 0.1" :style="{ fontSize: postFontSize + 'em' }" id="Intranet">
some random text

    <!--
      note: the $emit('chat-start') appears in vue debugger events; but nothing is listening. 
      https://vuejs.org/v2/guide/events.html
      https://vuejs.org/v2/guide/components.html

    -->

    <v-btn v-on:click="greet($event)">Greet me</v-btn>
    <!-- <v-btn @click="hello_world">hello world</v-btn> -->
     <v-btn @click="onClick">Click!</v-btn>
    <p v-if="false">hello world</p>

    <v-btn @click="$emit('enlarge'); postFontSize++;">enlarge</v-btn>

    <myBrain>🧠</myBrain>
  </v-content>
</template>



<script lang="ts">



import { Component, Vue } from 'vue-property-decorator';
// vue-property-decorator looks like vue-class-component
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

/* 
// components is it's own template
let myBrain = Vue.component('myBrain', {
  template: '<button @click="count++">{{count}}</button>' , 
  data () {
    return {
    count : 0
    }
  }
});
*/


@Component({
  components: {
  },
  data: () => ({
        postFontSize : 1
  }),
})
export default class Intranet extends Vue {
  // Class-Style Vue Components
  // https://vuejs.org/v2/guide/typescript.html

  // Initial data can be declared as instance properties
  message : string = 'Hello';


 // Component methods can be declared as instance methods
 onClick (): void {
   this.$router.push({ path: '/projects', query: { more:'sometopic'}})
   this.message = 'themessage'
   window.alert(this.message);
 } 
 
 greet (): void {
   alert('hello world' + this.message);
 }

}
</script>
