<style lang="scss">

// Highlight effect. 
// https://codepen.io/cecilehabran/pen/EvRamr
//  class="underlined" 
.underlined {
  color: black;
  flex: 1;
  line-height: 1.2;
  text-decoration: none;
  background-image: linear-gradient(to right, yellow 0, yellow 100%);
  background-position: 0 1.2em;
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: background .5s;
  &:hover, {
    background-size: 100% 100%;
  }
  &--thin {
    background-image: linear-gradient(to right, black 0, black 100%);
  }
  &--thick {
    background-position: 0 -0.1em;
  }
  &--offset {
    background-position: 0 0.2em;
    //didn't find another solution than mask the underline shape by a box shadow with the same color than the bg
    box-shadow: inset 0 -.5em 0 0 white;
  }
  &--gradient {
    background-position: 0 -0.1em;
    background-image: linear-gradient(to right, yellow 0, purple 100%);
  }
  &--reverse {
    background-position: 100% -0.1em;
    transition: background 1s; //yep, that's a long link
    background-image: linear-gradient(to right, yellow 0, yellow 100%);
  }
}

// end https://codepen.io/cecilehabran/pen/EvRamr


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
    <h2>{{getCompanyName}}</h2>
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

      <router-link active-class="active"  to="/intranet">
        <v-btn v-if='trustMe>1' flat>Intranet</v-btn>
      </router-link>
      <v-spacer v-if="trustMe>1"> | </v-spacer>

      <router-link active-class="active"  to="/projects/welcome">
        <v-btn flat >Projects</v-btn>
      </router-link>
      <v-spacer> | </v-spacer>

      <router-link active-class="active"  to="/contact">
        <v-btn flat>Contact</v-btn>
      </router-link>


        <!--
          <transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
</transition>
          -->

      
    </v-toolbar-items>

    </v-toolbar>
  
     <v-content>

      <v-container fluid>
          <v-layout row wrap>
            <v-flex>

            <transition name="router-anim" enter-active-class="anitmated fadeInDown"
            leave-active-class="animated fadeOutDown">
                <router-view />
            </transition>

    
    <!--
    <v-btn @click="change_trustMe(!trustMe)">Trust Me: {{ trustMe }}</v-btn>
    <v-btn v-stream:click="plus$">v-stream:plus$</v-btn>
    -->

    <!--
    <v-btn @click="increment()">💖 {{count}} {{localCount}} {{countAlias}} {{countPlusLocalState}} </v-btn>
    -->

    <!-- alt-syntax 
      <v-btn v-stream:click="plus$">v-stream:click +</v-btn>
      <button v-stream:click="{ subject: plus$, data: someData }">+</button
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

<script type="ts">
import Vue from 'vue'
import Footer from "./components/Footer.vue";
// import store from 'vuex';
// 🦨 import { store } from './store'  
// import { mapState, mapGetters, Store } from 'vuex'     // https://vuex.vuejs.org/guide/state.html
// import Vuex, { mapState, mapMutations } from 'vuex'; 
// 👆 https://scrimba.com/p/pnyzgAP/ckMZp4HN

// Stream Dom events
// https://github.com/vuejs/vue-rx
// import { Subject } from 'rxjs'
// import { map, startWith, scan } from 'rxjs/operators'


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
    /* 
    Methods to be mixed into the Vue instance. 
    You can access these methods directly on the VM instance, 
    or use them in directive expressions. 
    All methods will have their this context automatically bound to the Vue instance.
    */ 
    // 🦨 not used 👇, just for testing.  
    // ...mapMutations(['increment','change_trustMe']),
    startChat: function(event) {
      Vue.$log.info("Hello World" + JSON.stringify(event)) // working!

    },

  },
  // data() contains local state (separate from VueX)
  /*
  After the instance is created, the original data object can be accessed as vm.$data. 
  The Vue instance also proxies all the properties found on the data object, 
  so vm.a will be equivalent to vm.$data.a.
  */
  data() {
    return {
      localCount: 0,
      company_name : ['elastic.ventures','Elastic.Ventures']

    }
  },
  created() {
    // created() is run once component has been initialized
    /* const obs = Observable.interval(1000)
    obs
      .filter((value) => value % 2 == 0)
      .subscribe(
      (value) => {
        this.localCount = value
      }
    )
    */

    var version = Number(Vue.version.split('.')[0]);
    Vue.$log.info(`vue version ${version}`)

  }, 
  // computed: mapState({}) 
  computed: {
    // 👇 mapState pulls from src\store.ts (vuex)
    // ...mapState(['count','trustMe']),
    // additional local functions: 
    countPlusLocalState (state) {
      // Vue.$log.info("ran countPlusLocalState"); // very cool! 
      return state.count + this.localCount
    },
    // countAlias: 'countPlusLocalState'
    // countAlias: 'count', 🦨 ^^^ can't alias to a mapState property (didn't work?!)
    countAlias (state) {
      return state.count; 
    },
    getCompanyName () {
      var chooseName = (Date.now() % this.company_name.length);
      return this.company_name[ chooseName ];
    }
  }

};

</script>

<style>

/* 
@import "https://cnd.jsdelivr.net/npm/animate.css@3.5.1";
.page {
  position: fixed;
  width: inherit; 
}
*/



.v-btn {
  border: solid 5px #b2b;
    clip-path: polygon( 
    calc(0% + 5px) calc(0% + 5px), /* top left */
    calc(100% - 5px) calc(0% + 5px), /* top right */
    calc(100% - 5px) calc(100% - 5px), /* bottom right */
    calc(0% + 5px) calc(100% - 5px) /* bottom left */
  );
  transition: border-width 0.3s linear;
}

.v-btn:hover { 
  border-width: 10px; 
  border: dashed #00c;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

/* 
.border-button:hover { box-shadow: 1px 1px 1px 1px #FC5185; }
*/




</style>