<style lang="scss">

  @font-face {
      font-family: 'nasa';
      src: url('./eva.c0re/_Pretty/ttf/nasalization-rg.ttf');
  }
  @font-face {
      font-family: 'cevtauri';
      src: url('./eva.c0re/_Pretty/font-cevtauri/cevtauri-v2.woff');
  }
  @font-face {
    font-family: 'forgetica';
    src: url('./eva.c0re/_Pretty/ttf/SansForgetica-Regular.otf')
  }
  @font-face {
    font-family: 'player2';
    src: url('./eva.c0re/_Pretty/ttf/press_start_2p/PressStart2P.ttf')
  }

/* 
🚀 these fonts are all hideous. 
@font-face {
  🦨: 'only lower case';
  font-family: 'ev_font_a';
  src: url('./eva.c0re/_Pretty/ttf/404maciej_retrocraze/retroblaze.ttf');
}
@font-face {
  font-family: 'ev_font_b';
  src: url('./eva.c0re/_Pretty/ttf/404maciej_retrocraze/retrocraze.ttf');
}
@font-face {
  font-family: 'ev_font_c';
  src: url('./eva.c0re/_Pretty/ttf/codeman38_press-start-1/prstart.ttf');
}
@font-face {
  font-family: 'ev_font_d';
  src: url('./eva.c0re/_Pretty/ttf/genshichi-yasui_g7-makaimura/makaimura.TTF');
}
@font-face {
  🦨: 'only upper case';
  font-family: 'ev_font_e';
  src: url('./eva.c0re/_Pretty/ttf/genshichi-yasui_g7-star-force/Star_Force_TTF.ttf');
}
*/
@font-face {
  font-family: 'ev_timer';
  src: url('./eva.c0re/_Pretty/ttf/heaven-castro_cursed-timer-ulil/CursedTimerULiL.ttf');
}



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

/* 
🚀 TypedJS: src/vue-typed-js  
^^^ note: default distro DOES NOT WORK via npm; must build (requires webpack)
!todo rename vue-typed-js to ev-typed-js
/TypedJs  
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
  <v-app>

    <!--
    <v-navigation-drawer v-model="drawer" fixed right app>
      <v-list dense>
        <v-list-tile @click="greet">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="greet">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="#3061e1" fixed app>
      <v-spacer></v-spacer>
      <v-toolbar-title>Menu 👉</v-toolbar-title>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    -->
    <!--
      vtoolbar-old
    -->

    <v-content>

      <!-- background over the particles -->
      <v-parallax dark height="200" src="img/background-staticflow.jpg">

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

        
          <div class="layer-z1" v-on:hover="visible">
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


      <AboutEV />

      <v-container>

        <v-divider />
      </v-container>


      <EVCrew />

      <v-container>

        <v-divider />
      </v-container>

<!--
      <v-divider />
      <GrowPotBot />
      <Robotics />

      <v-divider />
      <Ubuntu />
-->



      <v-container fluid>
          <v-layout row wrap>
            <v-flex>

<!--
<vue-typed-js :strings="[' 🚧👷‍♀️👷‍♂️  😁 This website is (perpetually) under construction. ', 'Please contact us.']">
  <h1 class="typing"></h1>
</vue-typed-js>
-->

        </v-flex>
        </v-layout>
      </v-container>

    </v-content>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
// this loads the Vuetifyxx homepage.
// import HelloWorld from "./components/HelloVuetify.vue";

// text effects
import VueTypedJs from './vue-typed-js/components/VueTypedJs.vue' 


/* 
 🚀 https://github.com/SabatinoMasala/vue-text-glitch
 NOTE: glitch was too difficult to read, maintained here for posterity; possibly useful elsewhere. 

import Glitch from 'vue-glitch';
 import VueTextGlitch from 'vue-text-glitch'

  <div class="subheading mb-3 text-xs-center"
     <VueTextGlitch steps="100" text="glitch is too hard to read" highlight1="#FF00FF" highlight2="#FF0000"></VueTextGlitch>
  </div>
*/


import AboutEV from "./components/AboutEV.vue";
/* 
import B2bCbd from './components/B2bCbd.vue';
import Careers from './components/Careers.vue';
*/

import EVCrew from "./components/EVCrew.vue";
//import GrowPotBot from "./components/GrowPotBot.vue";
//import Robotics from "./components/Robotics.vue";
//import Ubuntu from "./components/Ubuntu.vue";
// import ContactEV from "./components/ContactEV.vue";

import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    VueTypedJs, 
    EVCrew,     // yei directory (loading from file, etc.)
    AboutEV,    // adaptive content

// 🚀 ready for inclusion (post navigation; <ev-crew> element need adaptive content rewrite)
 //   GrowPotBot,
 //   Robotics,
    /*    B2bCbd,
    Careers, */
  //  Ubuntu,
    // ContactEV,
    Footer      // #compliance
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




<!--
<style lang="scss">
  *, :after, :before {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
  }
  body {
    margin: 0;
    background: #34393f;
  }
  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  h3 {
    font-weight: 100;
    font-size: 2rem;
  }
  .white {
    color: #ffffff;
  }
  .teko {
    font-family: 'Teko', sans-serif;
  }
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .particles-js {
    background-image: url("./assets/sky.jpg");
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .wrap-banner {
    position: relative;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-flex;
    display: flex;
    height: 100%;
    justify-content: center;
  }
  .main-section {
    max-width: 650px;
    margin: auto;
    padding: 0 1rem;
  }
  .main-title {
    color: #fff;
    z-index: 999;
    h2 {
      font-size: 7rem;
      font-family: 'Teko', sans-serif;
      text-shadow: 8px 8px #000000;
      text-transform: uppercase;
      margin: 0;
      @media (max-width: 767px) {
        font-size: 3rem;
      }
    }
    p.subtitle {
      font-size: 1.7rem;
      margin: 0;
      @media (max-width: 767px) {
        font-size: 1rem;
      }
    }
  }
  .section-title {
    margin: 2rem 0 0 0;
  }
  .footer {
    margin: 1rem 0;
  }
  /*  Github button */
  .gh-button {
    display: inline-block;
  }
  .gh-button {
    box-sizing: border-box;
    height: 24px;
    font-weight: 500;
    font-size: 11px;
    line-height: 14px;
    padding: 2px 5px 2px 4px;
    color: #333;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    border-radius: 3px;
    padding: 3px 10px 3px 8px;
    font-size: 13px;
    line-height: 16px;
    border-radius: 4px;
    background-color: #eee;
    background-image: linear-gradient(#fcfcfc, #eee);
    border: 1px solid #d5d5d5;
  }
  .gh-button:hover,
  .gh-button:focus {
    text-decoration: none;
    background-color: #ddd;
    background-image: linear-gradient(#eee, #ddd);
    border-color: #ccc;
    color: black;
  }
  .gh-button:active {
    background: #dcdcdc;
    border-color: #b5b5b5;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, .15);
  }
  .gh-button__icon {
    display: inline-block;
    vertical-align: top;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIxMiAxMiA0MCA0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAxMiAxMiA0MCA0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBmaWxsPSIjMzMzMzMzIiBkPSJNMzIsMTMuNGMtMTAuNSwwLTE5LDguNS0xOSwxOWMwLDguNCw1LjUsMTUuNSwxMywxOGMxLDAuMiwxLjMtMC40LDEuMy0wLjljMC0wLjUsMC0xLjcsMC0zLjINCgljLTUuMywxLjEtNi40LTIuNi02LjQtMi42QzIwLDQxLjYsMTguOCw0MSwxOC44LDQxYy0xLjctMS4yLDAuMS0xLjEsMC4xLTEuMWMxLjksMC4xLDIuOSwyLDIuOSwyYzEuNywyLjksNC41LDIuMSw1LjUsMS42DQoJYzAuMi0xLjIsMC43LTIuMSwxLjItMi42Yy00LjItMC41LTguNy0yLjEtOC43LTkuNGMwLTIuMSwwLjctMy43LDItNS4xYy0wLjItMC41LTAuOC0yLjQsMC4yLTVjMCwwLDEuNi0wLjUsNS4yLDINCgljMS41LTAuNCwzLjEtMC43LDQuOC0wLjdjMS42LDAsMy4zLDAuMiw0LjcsMC43YzMuNi0yLjQsNS4yLTIsNS4yLTJjMSwyLjYsMC40LDQuNiwwLjIsNWMxLjIsMS4zLDIsMywyLDUuMWMwLDcuMy00LjUsOC45LTguNyw5LjQNCgljMC43LDAuNiwxLjMsMS43LDEuMywzLjVjMCwyLjYsMCw0LjYsMCw1LjJjMCwwLjUsMC40LDEuMSwxLjMsMC45YzcuNS0yLjYsMTMtOS43LDEzLTE4LjFDNTEsMjEuOSw0Mi41LDEzLjQsMzIsMTMuNHoiLz4NCjwvc3ZnPg0K);
    background-size: contain;
  }
</style>
-->