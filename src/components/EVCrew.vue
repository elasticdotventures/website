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
      <v-flex xs12 sm4 d-flex :key="who.name" v-for="who in humans" >
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
// write humans to a file
// load file and display
// move human to vue-x; 
// access in other components
// work with filter map applications
// review jest
// develop unit test for human file (is present, has json)
// 
let humans = [
  {
    name: "Brian Horakh",
    channel: "#cyberpunks",
    thumb: "img/team/brianh.png",
    location: "Melbourne, Australia",
    abouts: [
      "Fearless Leader",
      "Fullstack Dev & Engineer",
      "Business Tooling & Networking"
      // 'LinkedIn: https://www.linkedin.com/company/elasticdotventures'
    ]
  },
  {
    name: "Fabio Checchin",
    channel: "#salesvikings",
    thumb: "img/team/fabio2-300x300-whitebg.png",
    abouts: [
        "VP of Worldwide Sales",
        "Business Development",
        "Client Relationship"
        ],
    location: "Washington, CA. USA"
  },
  {
    name: "Margaret Woodfield",
    channel: "#ops",
    thumb: "img/team/margaret-v1-300x300-whitebg.png",
    abouts: [
        "VP of Operations", 
        "#human resources",
        "Organizational Process"
        ],
    location: "Washington, CA. USA"
  },
  {
    name: "Jay Shore",
    isAdvisor: true,
    thumb: "img/team/jay-200x200-whitebg.png",
    company: "MarketMakers",
    url: "http://710decibels.com",
    abouts: [
        "Limited Partnerships",
        "Concept Engineering & Formulation",
        "Business Development",
        "Cannabis & CBD Markets", 
        ],
    location: "San Diego, CA. USA"
  },
  {
    name: "Colin Hankins",
    channel: "#Touit",
    isAdvisor: true,
    url: "http://touit.com",
    thumb: "img/team/colinhankins-780x780-whitebg.png",
    abouts: [
      "Design Review and Validation",
      "Electronics &amp; Sensor Design",
      "Embedded Systems Software",
      "PCB, VSLI, signal processing"
    ],
     location: "San Diego, CA. USA"
  },
  {
    name: "Tamara Hartenthaler",
    isAdvisor: true,
    thumb: "img/team/tamara-730x730.png",
    abouts: [
        "Innovation Consultant", 
        "Process Analyst",
        "Documentation Writing & Review"
        ],
    location: "Indonesia"
  },
  {
    name: "TroubleMaker.site",
    channel: "#troublemaker",
    thumb: "/img/team/TM-LOGO_WHITE-EDGE_250x250px.png",
    url: "https://troublemaker.site",
    isAdvisor: true,
    abouts: [
      'Fabrication','Manufacturing','China Logistics'
    ],
    location: "Shenzhen, CN."
  },
  {
    name:"EV Assistant",
    channel: "#bot_eva",
    isAdvisor: true, 
    thumb: "/img/team/eva-southpark-v1-200x200-whitebg.png",
    abouts: [
      'Metrics & CI Delivery',
      'Async Meeting Facilitator',
      'AR Video Plugin (In Development)'
    ]
  },
  {
    name: "PJ Peckham",
    isAdvisor: true,
    thumb: "/img/team/pj-720x720-transparent.png",
    abouts: [
      'Fabricator',
      'Electrician',
      'Construction'
    ]
  },
  /* 
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
  {
    name: "edvard",
    thumb: "",
    abouts: [
    ]
  }
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