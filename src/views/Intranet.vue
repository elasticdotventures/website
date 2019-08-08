<style>
overline {
    font-family: courier;
}
</style>
<template>
  <v-content v-on:enlarge="postFontSize += 0.1" :style="{ fontSize: postFontSize + 'em' }" id="Intranet">
    !todo https://blog.logrocket.com/vuex-showdown-mutations-vs-actions-f48f2f7df54b/
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
    <button-counter></button-counter>

    <!-- the click event's propagation will be stopped -->
    <a v-on:click.stop="doThis"></a>

    <!-- the submit event will no longer reload the page -->
    <form v-on:submit.prevent="onSubmit"></form>

    <!-- modifiers can be chained -->
    <a v-on:click.stop.prevent="doThat"></a>

    <!-- just the modifier -->
    <form v-on:submit.prevent></form>

    <!-- use capture mode when adding the event listener -->
    <!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
    <div v-on:click.capture="doThis">...</div>

    <!-- only trigger handler if event.target is the element itself -->
    <!-- i.e. not from a child element -->
    <div v-on:click.self="doThat">...</div>

    <myBrain>🧠</myBrain>
  </v-content>
</template>



<script lang="ts">

// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

import { Vue, Component, Emit } from 'vue-property-decorator';
/* 
 vue-property-decorator looks like vue-class-component
  There are 7 decorators and 1 function (Mixin):

@Prop
@PropSync
@Provide
@Model
@Watch
@Inject
@Provide
@Emit
@Component (provided by vue-class-component)
Mixins (the helper function named mixins provided by vue-class-component)
*/

/*
// components is it's own template
Since components are reusable Vue instances, 
they accept the same options as new Vue, 
such as data, computed, watch, methods, and lifecycle hooks. 
The only exceptions are a few root-specific options like el.

let myBrain = Vue.component('myBrain', {
  template: '<button @click="count++">{{count}}</button>' , 
  data () {
    return {
    count : 0
    }
  }
});
*/

const myBrain = Vue.component('myBrain', {

});

// Define a new component called button-counter
const bc = Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

@Component({
  components: {
    'button-counter': bc, 
    'myBrain' : myBrain
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
  count : number = 0;

  @Emit()
  addToCount(n: number = 2) {
    this.count += n
  }

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
