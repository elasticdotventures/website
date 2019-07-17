<!--
 The structure of your layout will be as follows, v-container » v-layout » v-flex.
-->

<template>
  <v-container fluid grid-list-md align-start>
    <v-title>
      <h3>The Team</h3>
    </v-title>
    <!--
      phone_iphoneExtra small	xs	small to large handset	< 600px
tablet Small	sm	small to medium tablet	600px > < 960px
laptop Medium	md	large tablet to laptop	960px > < 1264*
desktop_windows Large	lg	desktop	1264 > < 1904px*
tvExtra large	xl	4k and ultra-wides	> 1904px*
    -->

    <v-layout pa-3 mb-2 align-center row wrap>
      <v-flex d-flex xs12 sm3 md3 child-flex>
        <v-card :key="who.thumb" v-for="who in humans">
        
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
  /* {
    name: "Jay Shore",
    thumb: "img/team/jay-200x200-whitebg.png",
    abouts: ["Cannabis & CBD Markets", "710decibels.com", "San Diego, CA. USA"]
  },
  {
    name: "Colin Hankins",
    thumb: "img/team/colinhankins-780x780-whitebg.png",
    abouts: [
      "Electronics Wizard",
      "PCB, VSLI, signal processing",
      "San Diego, CA. USA"
    ]
  },
  {
    name: "Tamara Hartenthaler",
    thumb: "img/team/tamara-730x730.png",
    abouts: ["Innovation Consultant", "Troubleshooter", "Digital Nomad"]
  }*/
];

export default {
  data() {
    return {
      humans
    };
  }
};
</script>