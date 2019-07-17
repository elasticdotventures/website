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

explanations: xs,sm,md,lg,xl
phone_iphone Extra small	xs	small to large handset	< 600px
tablet Small	sm	small to medium tablet	600px > < 960px
laptop Medium	md	large tablet to laptop	960px > < 1264*
desktop_windows Large	lg	desktop	1264 > < 1904px*
tvExtra large	xl	4k and ultra-wides	> 1904px*

-->

<template>
  <v-container fluid grid-list-md align-start>
    <!--
      v-container: 
        grid-list-xl
        align-start
    -->

    <v-title>
      <h2><font style="font-family: nasa">EV Crew</font></h2>
    </v-title>

    <v-layout row wrap>
      <!--
      v-layout: 
          pa-3 mb-2 justify-center align-center
          align-center:   align items to the center
          justify-center:  justify-content to center
      -->
      <v-flex xs12 sm4 d-flex  v-for="who in humans" >
        <!--
        v-flex properties: 
          order-xs5     
          d-flex
          xs12 sm6 md4 child-flex
          color="blue-grey" dark tile flat
        -->

        <v-card v-if="!who.isAdvisor" hover to="" :key="who.name">        
          <v-avatar size="150" class="avatar">
            <v-img width="150" :src="who.thumb" :alt="who.name" class="img-responsive img-circle" />
          </v-avatar>
          <v-card-title>
            <font style="font-family: nasa">{{ who.name }}</font>
          </v-card-title>
          <v-card-text>
            <div :key="txt" v-for="txt in who.abouts">{{ txt }}</div>
          </v-card-text>
          <!-- todo: v-card-actions -->
        </v-card>

        <!-- to="" will designate the component tag to router-link --> 
        <v-card v-if="who.isAdvisor" hover to="" :key="who.name">        
          <v-avatar size="75" class="avatar">
            <v-img width="75" :src="who.thumb" :alt="who.name" class="img-responsive img-circle" />
          </v-avatar>
          <v-card-title>
            <font style="font-family: nasa">{{ who.name }}</font>
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
let humans = [
  {
    name: "Brian Horakh",
    thumb: "img/team/brianh.png",
    abouts: [
      "Fearless Leader",
      "Fullstack Dev & Engineer",
      "Melbourne Australia"
      // 'LinkedIn: https://www.linkedin.com/company/elasticdotventures'
    ]
  },
  {
    name: "Fabio Chechin",
    thumb: "img/team/fabio2-300x300-whitebg.png",
    abouts: ["Sales Viking", "Digital Nomad", "#Airstream USA"]
  },
  {
    name: "Margaret Woodfield",
    thumb: "img/team/margaret-v1-300x300-whitebg.png",
    abouts: ["Operations Yogi", "Digital Nomad", "#Airstream, USA"]
  },
  {
    name: "Jay Shore",
    isAdvisor: true,
    thumb: "img/team/jay-200x200-whitebg.png",
    abouts: ["Cannabis & CBD Markets", "710decibels.com", "San Diego, CA. USA"]
  },
  {
    name: "Colin Hankins",
    isAdvisor: true,
    thumb: "img/team/colinhankins-780x780-whitebg.png",
    abouts: [
      "Electronics Wizard",
      "PCB, VSLI, signal processing",
      "San Diego, CA. USA"
    ]
  },
  {
    name: "Tamara Hartenthaler",
    isAdvisor: true,
    thumb: "img/team/tamara-730x730.png",
    abouts: ["Innovation Consultant", "Troubleshooter", "Digital Nomad"]
  },
/*  {
    name: "PJ Peckham",
    thumb: "img/team/pj-v1.png",
    abouts: [
    ]
  },
  {
    name: "Anthony Howl",
    thumb: "",
    abouts: [
      "Electronics Wizard",
      "PCB, VSLI, signal processing",
      "San Diego, CA. USA"
    ]
  },
  {
    name: "Paul Spallini",
    thumb: "",
    abouts: [
    ]
  },
  // edvard
  // 
*/


];

export default {
  data() {
    return {
      humans
    };
  }
};
</script>