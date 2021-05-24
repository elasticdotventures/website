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
  <v-container style="width: 100%; padding: 0 0 0 0; margin: 0 0 0 0;">

      <!-- background over the particles -->
      <v-parallax 
        style="border-radius: 10px" dark height="210" 
        src="img/background-staticflow.jpg">

      <v-layout
            column
            align-center
            justify-center
            style="font-family: nasa;" 
          >

          <canvas id='canv'></canvas>


          <div class="layer-z1">
            <h1 class="white--text mb-2 display-1 text-xs-center">
            <vue-typed-js :strings="[evText]">
              <font class="typing header_h1">
              </font>
            </vue-typed-js>
            </h1>
            
            <div class="subheading mb-3 text-xs-center">
            <vue-typed-js :strings="['est. 2014; cybernetics and smart software']">
              <h3 class="typing" style="color: #bbd; font-family: ev_timer, nasa, forgetica; font-size: 16pt;"></h3>
            </vue-typed-js>    
            </div>

            <div class="subheading mb-3 text-xs-center">
            <!--
            <vue-decoded-js :strings="['est. 2014; cybernetics and smart software']">
              <h3 class="typing" style="color: #bbd; font-family: ev_timer, nasa, forgetica; font-size: 16pt;"></h3>
            </vue-decoded-js>    
            -->
            </div>



          </div>
          

        
          <div class="layer-z1">
          <h1>
          <svg width="700">
            <symbol id="ant-text">
              <text class="ant-text--line1" text-anchor="left" x="0%" y="20%">{{evText}}</text>
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
            linesColor="#b2b"
            :particlesNumber="80"
            shapeType="triangle"
            :particleSize="5"
            :linesWidth="2"
            :lineLinked="true"
            :lineOpacity="0.5"
            :linesDistance="150"
            :moveSpeed="5"
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






// https://en.wikipedia.org/wiki/OpenSimplex_noise
// const ctv2jf = require("../CanvasTemplatev2_JacobFoster.js");


var SimplexNoise = require('simplex-noise'),
    noise = new SimplexNoise(Math.random),
    value2d = noise.noise2D(100, 200);


/*

function draw(e) {
  const width = 200;
  

  // var ctx = c.getContext("2d");
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
  var c = canvas; 
  var ctx c.getContext("2d");

	let xCount = 35;
	let yCount = 80;
	let iXCount = 1 / (xCount - 1);
	let iYCount = 1 / (yCount - 1);
	let time = e * 0.001;
	let timeStep = 0.01;
	let grad = ctx.createLinearGradient(-width, 0, width, height);
	let t = time % 1;
	let tSide = floor(time % 2) === 0;
	let hueA = tSide ? 340 : 210;
	let hueB = !tSide ? 340 : 210;
	let colorA = hsl(hueA, 100, 50);
	let colorB = hsl(hueB, 100, 50);
	grad.addColorStop(map(t, 0, 1, THIRD, ZERO), colorA);
	grad.addColorStop(map(t, 0, 1, TWO_THIRDS, THIRD), colorB);
	grad.addColorStop(map(t, 0, 1, ONE, TWO_THIRDS), colorA);
	ctx.globalAlpha = map(cos(time), -1, 1, 0.15, 0.3);
	background(grad);
	ctx.globalAlpha = 1;
	beginPath();
	for(let j = 0; j < yCount; j++) {
		let tj = j * iYCount;
		let c = cos(tj * TAU + time) * 0.1;
		for(let i = 0; i < xCount; i++) {
			let t = i * iXCount;
			let n = noise.noise3D(t, time, c);
			let y = n * height_half;
			let x = t * (width + 20) - width_half - 10;
			(i ? lineTo : moveTo)(x, y);
		}
		time += timeStep;
	}
	compositeOperation(compOper.lighter);
	ctx.filter = 'blur(10px)';
	stroke(grad, 5);
	ctx.filter = 'blur(5px)';
	stroke(hsl(0, 0, 100, 0.8), 2);
}
*/

/*
// coded message
// https://codepen.io/theodore-q/pen/mJqVZo
var toString = "coded message"

// var toString = $('.code').html()
var OGarray = toString.split('');
var genNum = 0
var counter = 0
var cutOffAt = 55
var obfuscated = 1

function getRandom(len) {
  return new Array(len + 1).join('2');
}

function Gen() {
  var length = toString.length;
  // console.log(length)
  genNum = getRandom(length);
  // console.log(genNum)

  // $('.letters').html(genNum);
  // console.log(genNum)
}

function parser(NUarray) {
  $.each(NUarray, function(index, value) {
    if (value == 0) {
      NUarray[index] = OGarray[index]
    } else if (value == OGarray[index]) {
      NUarray[index] = OGarray[index]
    } else if (isNaN(value)) {
      NUarray[index] = OGarray[index]
    } else {
      change = Math.round(Math.random() * 9);
      NUarray[index] = change
    }
  });
  if (NUarray.toString() == OGarray.toString()) {
    obfuscated = 0
    window.clearInterval(interval)
  }
  if (counter == 50) {
    obfuscated = 0
    window.clearInterval(interval)
    NUarray = OGarray

  }
  counter += 1
  return NUarray.join("")

}

function Genletters(stringToChange) {
  var string = stringToChange.toString().split('')
  return genNum = parser(string)
}

function runThis() {
  Genletters(genNum)
  // console.log(genNum)
  // $('.code').html(genNum)
}
Gen();
var interval = setInterval(function() {
  runThis();
}, 100);
*/


// https://gridsome.org https://www.gatsbyjs.org/
// RxJS v6+
import { timer } from 'rxjs';

import { Component, Vue } from 'vue-property-decorator';


// create vue-particles. 
import VueParticles from 'vue-particles';
Vue.use(VueParticles);

// text effects
import { VueTypedJs } from 'vue-typed-js'; 
Vue.use(VueTypedJs);

// 🦨 TODO: vuejs-logger broken in present typescript. 
// import VueLogger from 'vuejs-logger';
// Vue.use(VueLogger);



@Component({
  name: "HelloElasticVentures",
  data: () => {
    return {
      'evText':'ELASTIC.VENTURES'
    }
  },
  components: {
    VueTypedJs,
  //  VueLeetish
  },

})
export default class HelloElasticVentures extends Vue {

// background effects:
// https://codepen.io/collection/ABNwxq/

msg = 123

mounted() {



  async function firstAsync() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("Now it's done!"), 1000)
    });
    // wait until the promise returns us a value
    let result = await promise; 
    //  alert(result);    // outputs 
    let noise = new SimplexNoise();
    }

firstAsync();

}

}


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
