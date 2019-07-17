<!--
Purpose: About EV content
Author: @b
Created: 201907

notes:

-->
<script>


var methods = {
    emitClick: function() {
        this.$emit("click");
        
    }
};

export default {
    methods
};


</script>

<template>
  <v-container>
    <v-layout row wrap>
      <h2>About EV</h2>

      <v-flex xs12>
          Elastic Ventures, Inc. "EV" is a California S Corp was established in 2014 as a professional consulting and services company.
          Since 2019 we have expanded globally to offer engineering, software, fabrication, prototyping, manufacturing with partnerships in USA, China, and Malaysia.
          Focusing on planetary scale projects with an emphasis on renewable resources and improving the durability and quality of life through distribution partnerships.

          <!--
          <v-btn icon right @click="emitClick">🤓</v-btn>
          -->

      </v-flex>


        <v-flex xs12>
          EV's modern science hunting for "Dark Swan" innovations 
          using a common automation "Intelligent Automation" bot-assited sales & support system.
        </v-flex>

        <v-flex xs12 d-none>
          The business plan (broadly): 🤓🙏🌎😁💖🤖
          EV practices concious engineering, only projects that don't hurt people or the planet.
          Frequently ideas that are universal 'no brainers' using enviroment sustainability 
          "leave no trace" or ideally better than before yei (we all of us, even the machines) arrived.

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
      </v-flex>
    </v-layout>
  </v-container>
</template>
