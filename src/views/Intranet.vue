<style>
overline {
    font-family: courier;
}
</style>
<template>
  <v-container>
  <v-content v-on:enlarge="postFontSize += 0.1" :style="{ fontSize: postFontSize + 'em' }" id="Intranet">

<!--
!todo https://blog.logrocket.com/vuex-showdown-mutations-vs-actions-f48f2f7df54b/
!todo watch redis timeseries https://www.youtube.com/watch?v=j9-QIwJ0woE
-->


  <v-flex>
    <vue-frappe 
            id="test"
            :labels="[
                '12am-3am', '3am-6am', '6am-9am', '9am-12pm',
                '12pm-3pm', '3pm-6pm', '6pm-9pm', '9pm-12am'
            ]"
            title="My Awesome Chart"
            type="axis-mixed"
            :height="300"
            :colors="['purple', '#ffa3ef', 'light-blue']"
            :dataSets="this.Chart1data">
        </vue-frappe>

<!--
  ! removed labels 
  !todo get scatter fucking graph working. 
-->
      <vue-frappe           
            id="scatter"
            label="Scatter Dataset"
            title="My Awesome Chart"
            type="scatter"
            :height="300"
            :colors="['purple', '#ffa3ef', 'light-blue']"
            :dataSets="this.ScatterChart2data">
            
      </vue-frappe>



<!--
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: ScatterChart2data 😀
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});
-->

      </v-flex>

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
    <!--
      <button-counter></button-counter>
    -->

  </v-content>
  </v-container>
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

import Chart from 'vue2-frappe'
 Vue.use(Chart)



@Component({
  components: {
  //  'button-counter': bc, 
  //  'myBrain' : myBrain
  },
  data: () => ({
        postFontSize : 1, 
            Chart1data: [{
                    name: "Some Data", chartType: 'bar',
                    values: [25, 40, 30, 35, 8, 52, 17, -4]
                },
                {
                    name: "Another Set", chartType: 'bar',
                    values: [25, 50, -10, 15, 18, 32, 27, 14]
                },
                {
                    name: "Yet Another", chartType: 'line',
                    values: [15, 20, -3, -15, 58, 12, -17, 37]
                }],
    ScatterChart2data : [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
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
