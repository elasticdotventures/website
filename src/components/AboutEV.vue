<!--
Purpose: About EV content
Author: @b
Created: 201907

notes:

    vuetify-spacing notes:
    https://vuetifyjs.com/en/framework/spacing

How vuetify spacing works

Vuetify helper classes apply margin or padding to an element ranging from 0 to 5. 
👆 note: Each size increment was designed to align with common Material Design spacings. 
These classes can be applied using the following format {property}{direction}-{size}.

🍰 can helper classes be applied to all vuetify v-* classes? 

Vuetify spacing helper uses 
the leading character designates "property" either: m,p 
applies the type of spacing:

    m - (margin) applies margin    (outside border)
        --- border ---  
    p - (padding) applies padding  (inside border)
        --- content ---

// 🤓 margin vs. padding: 
DESIGN THEORY: 
TL;DR: By default I use margin everywhere, except when I have a border or background 
and want to increase the space inside that visible box.

margins are outside the element's block; 
padding is inside the element; moves contents away from edges. 

The direction designates the side the property applies to:

    t - applies the spacing for *-top
    b - applies the spacing for *-bottom
    l - applies the spacing for *-left
    r - applies the spacing for *-right
    x - applies the spacing for both *-left and *-right
    y - applies the spacing for both *-top and *-bottom
    a - applies the spacing for the property in all directions

The size controls the increment of the property:

    auto - sets the spacing to auto
    0 - removes the spacing by setting it to 0
    1 - sets the spacing to $spacer * .25
    2 - sets the spacing to $spacer * .5
    3 - sets the spacing to $spacer
    4 - sets the spacing to $spacer * 1.5
    5 - sets the spacing to $spacer * 3

-->

<template>

  <v-container fluid>

<!--
  experiment:
  
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"    
      class="mx-auto"
      width="344"
    >

      <v-img
        :aspect-ratio="16/9"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>
      <v-card-title>
        <div>
          <span class="headline">Cafe Badilico</span>
          <div class="d-flex">
            <v-rating
              :value="value"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="ml-2 grey--text text--darken-2">
              <span>{{ value }}</span>
              <span>({{ reviews }})</span>
            </div>
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon class="mr-0">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-hover>
  --> 


    <!--
    fluid Removes viewport size breakpoints      
    -->
    <v-layout xs12 row wrap>
      <h2><font style="font-family: nasa">About EV</font></h2>

      <v-flex xs12 text-sm-left>
          Elastic Ventures, Inc. "EV" is a California S Corp was established in 2014 as a professional consulting and services company.
          Since 2019 we have expanded globally to offer engineering, software, fabrication, prototyping, manufacturing with partnerships in USA, China, and Malaysia.
          Focusing on planetary scale projects with an emphasis on renewable resources and improving the durability and quality of life through distribution partnerships.

          <v-hover>
            <a @click="emitClick">🤓</a>
          </v-hover>
        
      </v-flex>

      <!--
      adaptive-content notes:

        <div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>

        <v-flex xs12>
          EV provides a boutique <v-link url="https://www.scaledagile.com/partner-opportunities/why-partner/">SAFE</v-link>
          <v-link>SCRUM</v-link>-style consultancy practice and organizationally gamified participation and continuous improvement pipeline "hivemind" program
          using bots to implement organizationally diverse change simultaenously and reward efficient use of software automation rather than creating work for works sake. 
            <eva-try>
                <eva-reveal>
          Similiar to, but independently created from the SAFE framework as an open-source worldwide cyber-organization that rewards efficiency which is measured through metrics and definable goals or tasks.         
          Focusing on the mastery of enlightenment our method starts with a course on adaptive thinking, creating a better tomorrow starting today, literally right now. 
                  <eva-reveal />
            <eva-try>
        </v-flex>

        <v-flex xs12 d-none>
          EV's spent it's youth as a privately funded venture <eva-try delimiter="|">hunting|searching</eva-try>
             for <eva-try delimiter="|">Dark Swan|Unicorn|Life Improving</eva-try> developments in the academic community and 
          identifying <eva-try>#opportunities</eva-try> in <eva-try>communication advancement|forward thinking</eva-try>. 
            <eva-reveal />
        </v-flex>

      -->

<!--
        <ev-flex xs12>
💀 !todo vuetify display helper // how to create? alias reveal to d-none 

          using an internally developed async slack culture,
          organizational framework for automation IA ("Intelligent Amplification") 
          with highly opinionated tooling, automated builds, business process validation and 
          friendly bot-assistance. 
            <eva-reveal />
        </ev-flex>
        -->

        <v-flex xs12>
        <vue-typed-js :strings="['blabla']">
          
          <font class="typed"> The business plan (broadly): 🤓🙏🌎😁💖🤖</font>
          EV practices concious engineering, only projects that don't hurt people or the planet.
          Frequently ideas that are universal 'no brainers' using enviroment sustainability 
          "leave no trace" or ideally better than before yei (we all of us, even the machines) arrived.
        </vue-typed-js>
        </v-flex>

        <v-flex d-none>
          The EV founder @b has prior experience in emerging technologies artificial intelligence, documentation and testing,
          IOT sensor design fabrication, early open source & cloud, first to market e-commerce saas & client/server mobile apps.
          Numerous contributions in early Linux, and DNS Policy discussion; adoption of open source in
          education, libraries, and government technical grant writing and execution.
        </v-flex>
        <v-flex d-none>
          Since 2015; The EV team has been searching for the "Unihorned Dark Swan" 
          while peddling our brainpower to a variety of consulting projects and 
          travelling around the world. 
        </v-flex>
        <v-flex d-none>
          EV scours the latest business and technology opportunities from academic papers looking for opportunities in autonomous vehicles, drones, and has designed and operated dozens of CNC and 3d printing technologies.
          At the same time developing an internal process for tracking these types of designs; a toolchain for new employees to curate the content.
          This includes the exciting emerging fields of aeroponic agriculture, cybernetics, specifically sensor & case design, fabrication,
          closed sensor loops. 
        </v-flex>
        <v-flex d-none>
          EV is tooled differently than other companies; we have a global slack-chat bot "@eva" culture and efficient hive protocols for conversation
          and reaching consensus "Pirate Code, and Roberts Rules of Order". EV offers #human contributors a universal income salary and exemplary benefits package including work-travel
          abroad experience for international collaboration. 
          We provide bonuses based on 🍰 culture and team success. 
        </v-flex>
      
    </v-layout>
  </v-container>
</template>



<script>


var methods = {
    emitClick: function() {
        this.$emit("click");
        
    }
};

/*

🏫 https://blog.bitsrc.io/how-to-build-vue-components-like-a-pro-fd89fd4d524d
vue-class-component reduces the component development process by allowing developers to add data properties and handlers directly as properties to the class


*/


// import VueTypedJs from '../vue-typed-js/components/VueTypedJs.vue' 

export default {
    components: {
      // 'vue-typed-js': VueTypedJs
    },
    methods
};


</script>


