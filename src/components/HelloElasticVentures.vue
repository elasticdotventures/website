<style lang="scss">


  /* title font ELASTIC.VENTURES */
  .header_h1 {
    font-family: cevtauri, nasa, arial; 
    // need to inherit white--text mb-2 display-1 text-xs-center
  }

  h3 {
    font-size: 1em; 
  }

  /* establish z-layers for header */
	.layer-z1
	{
		position:absolute;
		top: 25px;
		left: 25px;
		z-index: -1;
	}
	.layer-z2
	{
		position:absolute;
		top: 25px;
		left: 25px;
		z-index: 2;
	}

/* 
  TypedJs Styles 
 <link rel="stylesheet" href="/img/vue-typed-js.css"/>
*/ 
.typed-element {
  display: flex;
  align-items: center;
}
.typed-element .typed-cursor {
    opacity: 1;
    animation: typedjsBlink 0.75s infinite;
}
@keyframes typedjsBlink {
50% {
    opacity: 10.0;
}
}
/* 👆 /vue-typed-js styles */


/* 
🚀 Ant effect; pixels on font. 
*/ 

$ant-colors: gold, #031337,#2ad,  #bbb, #b2bcbd;

.ant-text--line1 {
   // from .display-1
   // @b 🦨👎 there is probably a better way to inherit .display-1
  font-size: 34px !important;
  font-weight: 400;
  line-height: 40px !important;
  letter-spacing: normal !important;
 }

$ant-max: 5;
$stroke-step: 1%;   // how long is the ant size

.text-copy {
  fill: none;
  stroke: white;
  font-family: cevtauri, nasa, Arial, Helvetica, sans-serif;
  stroke-dasharray: $stroke-step $stroke-step * ($ant-max - 1);
  stroke-width: 2px;

  // 
  animation: stroke-offset 5s linear infinite; 
  
  @for $item from 1 through $ant-max {
    $stroke-color: nth($ant-colors, $item);
    
    &:nth-child(#{$item}) {
      stroke: $stroke-color;
      stroke-dashoffset: $stroke-step * $item;
      }
    }
  }

@keyframes stroke-offset {
  50% {
    stroke-dashoffset: $stroke-step * $ant-max;  
    stroke-dasharray: 0 $stroke-step * $ant-max*5;
  }
}


</style>

<template>
  <v-container>

      <!-- background over the particles -->
      <v-parallax dark height="210" src="img/background-staticflow.jpg">

      <v-layout
            column
            align-center
            justify-center
            style="font-family: nasa" 
          >

          <div class="layer-z1">
            <h1 class="white--text mb-2 display-1 text-xs-center">
            <vue-typed-js :strings="['ELASTIC.VENTURES']">
              <font class="typing header_h1">
              </font>
            </vue-typed-js>
            </h1>


            
            <div class="subheading mb-3 text-xs-center">
            <vue-typed-js :strings="['est. 2014; cybernetics and smart software']">
              <h3 class="typing" style="color: #bbd; font-family: ev_timer, nasa, forgetica; font-size: 20pt;"></h3>
            </vue-typed-js>    
            </div>
          

          </div>

        
          <div class="layer-z1">
          <h1>
          <svg width="700">
            <symbol id="ant-text">
              <text class="ant-text--line1" text-anchor="left" x="0%" y="20%">ELASTIC.VENTURES</text>
            </symbol>
            
            <g class="g-ants">
              <use xlink:href="#ant-text" class="text-copy"></use>     
              <use xlink:href="#ant-text" class="text-copy"></use>     
              <use xlink:href="#ant-text" class="text-copy"></use>     
              <use xlink:href="#ant-text" class="text-copy"></use>     
              <use xlink:href="#ant-text" class="text-copy"></use>     
            </g>
            
          </svg>
          </h1>
          </div>




          </v-layout>

         <vue-particles
            color="#ffffff"
            :particleOpacity="0.7"
            linesColor="#ffffff"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="5"
            :linesWidth="2"
            :lineLinked="true"
            :lineOpacity="0.5"
            :linesDistance="150"
            :moveSpeed="4"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
          >
          </vue-particles>



        </v-parallax>

    </v-container>
</template>


<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

import VueParticles from 'vue-particles';
Vue.use(VueParticles);


// text effects
// 🦨 import VueTypedJs from './vue-typed-js/components/VueTypedJs.vue' 
import { VueTypedJs } from 'vue-typed-js'; 
Vue.use(VueTypedJs);



@Component({
  name: "HelloElasticVentures",
  components: {
    VueTypedJs,
    // VueParticles
  },
})
export default class HelloElasticVentures extends Vue {}
</script>


<!--
 🚀 https://github.com/SabatinoMasala/vue-text-glitch
 NOTE: glitch was too difficult to read, maintained here for posterity; possibly useful elsewhere. 

import Glitch from 'vue-glitch';
 import VueTextGlitch from 'vue-text-glitch'

  <div class="subheading mb-3 text-xs-center"
     <VueTextGlitch steps="100" text="glitch is too hard to read" highlight1="#FF00FF" highlight2="#FF0000"></VueTextGlitch>
  </div>



<script>
// this loads the Vuetifyxx homepage.
// import HelloWorld from "./components/HelloVuetify.vue";

export default {
  components: {
    // HelloWorld,
    VueTypedJs, 
    'vue-particles':VueParticles
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Click Me" },    // 👈🦨
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  }),
  // define methods under the `methods` object
  methods: {
    // 🦨 not used 👇
    greet: function(event) {
      // `this` inside methods points to the Vue instance
      alert("Hello " + this.name + "!");
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    }
  }
};
</script>

-->
