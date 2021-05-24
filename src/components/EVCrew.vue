
<!--
 vuetify notes

 The layout structure: v-container » v-layout » v-flex 👉 v-card 
 * interate on the v-flex, not v-card

 https://vuetifyjs.com/en/framework/elevation  (how far off the page the dialog seems)
 https://vuetifyjs.com/en/framework/typography  
  .display-4  h1
  .display-3  h2
  .display-2 h3
  .display-1 h4
  .headline h5
  .title h6
  .subheading supporting text
  .body-2 regular body text with addtional weight
  .body-1 regular body text
  .caption smaller size text

  
    .text-capitalize - Sets text-transform to capitalize
    .text-lowercase - Sets text-transform to lowercase
    .text-none - Sets text-transform to none
    .text-uppercase - Sets text-transform to uppercase


flex explanations: xs,sm,md,lg,xl  (device size)
* xs phone_iphone Extra small	xs	small to large handset	< 600px
* sm tablet Small	sm	small to medium tablet	600px > < 960px
* md laptop Medium	md	large tablet to laptop	960px > < 1264*
* lg desktop_windows Large	lg	desktop	1264 > < 1904px*
* xl tvExtra large	xl	4k and ultra-wides	> 1904px*

-->

<template>
  <v-container fluid grid-list-md align-start>
    <!--
      v-container: 
        grid-list-xl
        align-start
    -->
    <!--
    <font style="courier">
    isLoading: {{ isLoading }} 
    </font>
    -->


    <v-subheader>
      <h2><font style="font-family: nasa">EV Crew</font></h2>
    </v-subheader>

    <v-layout row wrap>
      <!--
      v-layout: 
          pa-3 mb-2 justify-center align-center
          align-center:   align items to the center
          justify-center:  justify-content to center
      -->
      <v-flex d-none xs12 sm4 d-flex v-if="!humans.length">
          <v-card>
          <font color="red">No humans found</font>
          <button v-on:click="alert('hello');">look again</button>
          </v-card>
      </v-flex>

      <v-flex xs12 sm4 d-flex :key="who.name" v-for="who in humans" >
        <!--
        v-flex properties: 
          order-xs5     
          d-flex
          xs12 sm6 md4 child-flex
          color="blue-grey" dark tile flat
        -->

        <!-- should add some transition effect here -->

        <v-card v-if="!who.isAdvisor" hover to="" :key="who.name">        
          <v-avatar size="150" class="avatar">
            <v-img width="150" :src="who.thumb" :alt="who.name" class="img-responsive img-circle" />
          </v-avatar>
          <v-card-title style="font-family: nasa">
            {{ who.name }}
          </v-card-title>
          <v-card-text>
            <div :key="txt" v-for="txt in who.abouts">{{ txt }}</div>
          </v-card-text>
          <!-- todo: v-card-actions -->
        </v-card>

        <!-- to="" will designate the component tag to router-link --> 
        <v-card v-if="who.isAdvisor" hover to="" :key="who.name" class="svg-wrapper">        
          <v-avatar size="75" class="avatar">
            <v-img width="75" :src="who.thumb" :alt="who.name" class="img-responsive img-circle" />
          </v-avatar>
          <v-card-title style="font-family: nasa">
          {{ who.name }}
          </v-card-title>
          <v-card-text>
            <div :key="txt" v-for="txt in who.abouts">{{ txt }}</div>
          </v-card-text>
          <!-- todo: v-card-actions -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// write humans to a file
// load file and display
// move human to vue-x; 
// access in other components
// work with filter map applications
// review jest
// develop unit test for human file (is present, has json)
// 

  /* 

!🦨
  {
    name: "Bob Mullaney"
    abouts : [
      
    ]
  },
  {
    name: "Superior Inflatables",
    channel: "#superior"
    isPartner: true,
  },
  {
    mark karpeles
  },
  {

import Vue from 'vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)

// let humans = require('./assets/crew.json');
// import VueTypedJs from '../vue-typed-js/components/VueTypedJs.vue' 
let humans = [];

// const axios = require('axios');

var api = "http://localhost:3000/c0re/crew.json"
// cake wtf --
// https://github.com/imcvampire/vue-axios#readme

// Make a request for a user with a given ID
axios.get('http://localhost:3000/json/crew.json',{
  responseType: 'blob',
  'Content-Encoding': undefined
})
  .then(function (response) {
    // handle success
    // !why does response.data become garbled in the browser. ?? 🚀🍰😣
    // but work in axios.js
    // 👆 works in vscode. 
    Log.debug(JSON.stringify(response.data));    
    // humans = JSON.parse(response.data);

    
    Log.info('success')
  })
  .catch(function (error) {
    // handle error
    Log.info('err' + error)
    Log.error(error);
  })
  .finally(function () {
    // always executed
    Log.info('always')
  });


function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
*/ 

// humans = ax.get('/c0re/crew.json')
const axios = require('axios');

export default {
  components: {
      // VueTypedJs
  },
  data() {
    return {
      gotError : null,
      isLoading: true,
      humans : []
    };
  },
  mounted () {
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    // The Fetch API provides an interface for fetching 
    // resources (including across the network). 
    // Fetch is similiar to XMLHttpRequest, 
    // but the new API provides a better feature set.

    // fetch('crew.json').then( r => r.json )
    // instead we will do axios .. and our own file.
    // just for the experience. we can always refer back to
    // fetch(), but I like having a bit more bare metal error
    // handling which we can send to our own crash reporting system
    // stuff that happens outside our code may/may not notify EV. 
    fetch('/crew.json')
      .then( r => r.json() )
      .catch( () => {
        this.$log.error('FAILED jsonparse of crew.json')        
      })
      .then( (json) => {
        this.$data.humans = json 
        })
      .catch( () => {
        this.$log.error('FAILED human update from crew.json')        
      })
      .then( () => {
        this.$log.info('EVCrew fetch crew.json success') 
        // this.$data.humans = [ { "name":"Brian"} ]
      })
      .catch( () => {
        this.$log.error('FAILED crew.json unknown')        
      })
      .finally( () => {
        // turn off the loading
        this.isLoading = false; 
      })
  },
  created: function() {
    this.$log.info("EVCrew created")

    /* 
    // 🦨👇 does not work. 
    // https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
    const ax = axios.create({
      baseURL: 'http://localhost:3000'
    })

    this.isLoading = true; 
    ax.get('http://localhost:3000/c0re/crew.json', {
        responseType: 'blob',
        'Content-Encoding': undefined
    })
      .then(function (response) {
        // handle success
        // !why does response.data become garbled in the browser. ?? 🚀🍰😣
        // but work in axios.js
        // 👆 works in vscode. 
        this.$log.debug(JSON.stringify(response.data));    
        this.$data.humans = JSON.parse(response.data);
        //  this.$data.humans = json;
        this.$log.info('finished load evcrew')
        // this.$log.info('axios success')
      })
      .catch(error => {
        this.gotError = true
        this.$log.info('axios caught error')
        this.$log.error( error )
      // handle error
     // this.$log.info(' axios err' + error)
      //.$log.error(error);
      // emit('error ', error)
    })
      .finally( () => this.isLoading = false )
      */
  }

};


function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

</script>

