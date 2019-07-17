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

        <v-parallax dark height="200" src="img/background-staticflow.jpg">
      <v-layout
            column
            align-center
            justify-center
            style="font-family: nasa" 
            class="fish"
          >
            <h1 class="white--text mb-2 display-1 text-xs-center">
              <font  style="font-family: nasa">
              <!-- https://vuetifyjs.com/en/framework/typography -->
              Elastic.Ventures
              </font>
            </h1>
            <div class="subheading mb-3 text-xs-center">Est. 2014; cybernetics and smart software.</div>
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

      <v-divider />

      <AboutEV />

      <v-divider />

      <EVCrew />

      <v-divider />

<!--
      <v-divider />
      <GrowPotBot />
      <Robotics />

      <v-divider />
      <Ubuntu />
-->
    🚧👷‍♀️👷‍♂️ This website is (perpetually) under construction.  😁

    </v-content>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
// this loads the Vuetifyxx homepage.
// import HelloWorld from "./components/HelloVuetify.vue";

import AboutEV from "./components/AboutEV.vue";
/* 
import B2bCbd from './components/B2bCbd.vue';
import Careers from './components/Careers.vue';
*/

import EVCrew from "./components/EVCrew.vue";
import GrowPotBot from "./components/GrowPotBot.vue";
import Robotics from "./components/Robotics.vue";
import Ubuntu from "./components/Ubuntu.vue";

import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    EVCrew,
    AboutEV,
    GrowPotBot,
    Robotics,
    /*    B2bCbd,
    Careers, */
    Ubuntu,
    Footer
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  }),
  // define methods under the `methods` object
  methods: {
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

	<style>
	.fishes
	{
		position:absolute;
		top: 10px;
		left: 10px;
		z-index: 1;
	}
	.fish
	{
		position:absolute;
		top: 25px;
		left: 25px;
		z-index: 2;
	}
	</style>


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