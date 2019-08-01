<style lang="scss">

  @font-face {
      font-family: 'nasa';
      /* src: url('./c0re/_Pretty/ttf/nasalization-rg.ttf'); */
      src: url('./assets/nasalization-rg.ttf')
  }
  @font-face {
      font-family: 'cevtauri';
      /* src: url('./c0re/_Pretty/font-cevtauri/cevtauri-v2.woff'); */
      src: url('./assets/cevtauri-v2.woff');
  }

  /* 
  🦨 not used: 
  @font-face {
    font-family: 'forgetica';
    src: url('./c0re/_Pretty/ttf/SansForgetica-Regular.otf') 
    src: url('./assets/SansForgetica-Regular.otf')
  }
  @font-face {
    font-family: 'player2';
    src: url('./c0re/_Pretty/ttf/press_start_2p/PressStart2P.ttf')
  }
*/

@font-face {
  font-family: 'ev_timer';
  /* src: url('./c0re/_Pretty/ttf/heaven-castro_cursed-timer-ulil/CursedTimerULiL.ttf'); */
  src: url('./assets/CursedTimerULiL.ttf');
}
 
v-btn {
   font-size: 12pt;
   font-weight: bold; 
   font-family: nasa;
}

 .active, 
 nav li:hover,
 nav li.router-link-active,
 nav li.router-link-exact-active {
   background-color: yellowgreen;
   cursor: pointer;
   color: blue;
 }

</style>

<template>
  <v-app id="app">
    <!--
      app makes the toolbar dock to the top
    -->
    <v-toolbar app dark elevation="12" 
      style="font-family: nasa; " 
      class="secondary--text font-weight-heavy" 
      src="assets/sky.jpg">
    <!--
      v-toolbar-title
      v-toolbar-items
    -->
    <h2>EV.BetaSite</h2>
    <!-- v-spacer consumes all available horizontal space -->
    <v-spacer />
    <v-toolbar-items>
      <router-link active-class="active" exact to="/">
        <v-btn flat >Home</v-btn>
      </router-link> 
      <v-spacer> | </v-spacer>
      <router-link active-class="active"  to="/about">
        <v-btn flat >About</v-btn>
      </router-link>
      <v-spacer> | </v-spacer>
      <router-link active-class="active"  to="/projects">
        <v-btn flat >Projects</v-btn>
      </router-link>
      <v-spacer> | </v-spacer>
      <router-link active-class="active"  to="/contact">
        <v-btn flat>Contact</v-btn>
      </router-link>

      <v-spacer v-if="$store.trustMe"> | </v-spacer>
      <router-link v-if="$store.trustMe" active-class="active"  to="/intranet">Intranet</router-link>
      
    </v-toolbar-items>

    </v-toolbar>
  
     <v-content>

      <v-container fluid>
          <v-layout row wrap>
            <v-flex>

    <router-view />
    <v-btn v-on:click="greet($event)">Greet me</v-btn>

    <!--
      note: the $emit('chat-start') appears in vue debugger events; but nothing is listening. 
      https://vuejs.org/v2/guide/events.html
    -->
    <v-btn v-on:click="$emit('startChat');">Chat</v-btn>

    <v-btn @click="change_trustMe(!trustMe)">Trust Me: {{ trustMe }}</v-btn>

    <v-btn @click="increment()">increment {{count}} {{localCount}} {{countAlias}} {{countPlusLocalState}} </v-btn>
        </v-flex>
        </v-layout>
      </v-container>

    </v-content>

    <v-footer>
      <Footer />
    </v-footer>

  </v-app>
</template>

<script type="ts">
import Vue from 'vue'
import Footer from "./components/Footer.vue";
// import store from 'vuex';
// 🦨 import { store } from './store'  
// import { mapState, mapGetters, Store } from 'vuex'     // https://vuex.vuejs.org/guide/state.html
import Vuex, { mapState, mapMutations, Store } from 'vuex'; 
// 👆 https://scrimba.com/p/pnyzgAP/ckMZp4HN

export default {
  /*
  
  NOTES: inheritAttributes: false
  A non-prop attribute is an HTML attribute that is passed to a component, 
  but does not have a corresponding prop defined.

  If you do not want the root element of a component to inherit attributes, you can set 
  

  This can be especially useful in combination with the $attrs instance property.
  The $attrs contains attribute names and values passed to a component, such as:

  //  inheritAttributes: false, 
  */
  name: "App",
  components: {
    Footer      // #compliance
  },

  // define new functions under the `methods` object
  // receives $event, value
  methods: {
    // 🦨 not used 👇, just for testing.  
    ...mapMutations(['increment','change_trustMe']),
    greet: function(event) {
      alert("Hello"); 
    }
  },
  // contains local state (separate from VueX)
  data() {
    return {
      localCount: 4
    }
  },
  // computed: mapState({}) 
  computed: {
    // 👇 mapState pulls from src\store.ts (vuex)
    ...mapState(['count','trustMe']),
    // additional local functions: 
    countPlusLocalState (state) {
      return state.count + this.localCount
    },
    // countAlias: 'countPlusLocalState'
    // countAlias: 'count', 🦨 ^^^ can't alias to a mapState property (didn't work?!)
    countAlias (state) {
      return state.count; 
    }
  }

};
</script>

<style>
.v-btn {
  border: solid 5px #b2b;
    clip-path: polygon( 
    calc(0% + 5px) calc(0% + 5px), /* top left */
    calc(100% - 5px) calc(0% + 5px), /* top right */
    calc(100% - 5px) calc(100% - 5px), /* bottom right */
    calc(0% + 5px) calc(100% - 5px) /* bottom left */
  );
  transition: border-width 0.6s linear;
}

.v-btn:hover { 
  border-width: 10px; 
  border: dashed #00c;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

.border-button:hover { box-shadow: 0px 0px 0px 10px #FC5185; }

</style>