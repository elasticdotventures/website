<!--
 The structure of your layout will be as follows, v-container » v-layout » v-flex.
-->
<template>
<v-container fluid grid-list-xl text-xs-center>
  <v-layout class="pa-3 mb-2">

  <h3>The Team</h3>


    <v-flex>
      <v-card xs4>
          <div class="avatar">
            <img width="150" src="img/team/brianh.png" alt class="img-responsive img-circle" />
          </div>
          <h5>Brian Horakh</h5>
          <p class="subtitle">Fearless Leader</p>
          <p class="subtitle">Fullstack Developer & Mechatronic Engineer</p>
          <p class="subtitle">Melbourne, Australia</p>
          <p class="subtitle">LinkedIn: https://www.linkedin.com/company/elasticdotventures</p>

          <!--
								@b's former company "Zoovy/CommerceRack" team provided backend API design testing and validation services for FedEx, UPS, Amazon (Payments), eBay, and PayPal;
          -->
      </v-card>
    </v-flex>

    <v-flex>
      <v-card xs4>
          <div class="avatar">
            <img
              width="150"
              src="img/team/fabio2-300x300-whitebg.png"
              alt
              class="img-responsive img-circle"
            />
          </div>
          <h5>Fabio Chechin</h5>
          <p class="subtitle">Sales Viking</p>
          <p class="subtitle">Digital Nomad</p>
          <p class="subtitle">#Airstream, USA</p>
      </v-card>
    </v-flex>

    <v-flex>
      <v-card xs4>

          <div class="avatar">
            <img
              width="150"
              src="img/team/margaret-v1-300x300-whitebg.png"
              alt
              class="img-responsive img-circle"
            />
          </div>
          <h5>Margaret Woodfield</h5>
          <p class="subtitle">Operations Yogi</p>
          <p class="subtitle">Digital Nomad</p>
          <p class="subtitle">#Airstream, USA</p>
      </v-card>
    </v-flex>
  
  <h3>Specialists &amp; Advisers</h3>

    <v-flex>
      <v-card>
          <div class="avatar">
            <img
              width="75"
              src="img/team/colinhankins-780x780-whitebg.png"
              alt
              class="img-responsive img-circle"
            />
          </div>
          <h5>Colin Hankins</h5>
          <p class="subtitle">Electronics Wizard</p>
          <p class="subtitle">PCB, VLSI, signal processing</p>
          <p class="subtitle">San Diego, California USA</p>
      </v-card>
    </v-flex>
    <v-flex>
      <v-card>
          <div class="avatar">
            <img
              width="75"
              src="img/team/dvizma-v1-300x300-whitebg.png"
              alt
              class="img-responsive img-circle"
            />
          </div>
          <h4>Dvizma Sinha</h4>
          <p class="subtitle">Electronics Wizard</p>
          <p class="subtitle">Prototype Design Review</p>
          <p class="subtitle">India</p>

      </v-card>
    </v-flex>
    <v-flex>
      <v-card>

          <div class="avatar">
            <img width="75" src="img/team/tamara-730x730.png" alt class="img-responsive img-circle" />
          </div>
          <h4>Tamara Hartenthaler</h4>
          <p class="subtitle">Innovation Consultant</p>
          <p class="subtitle">#ops Documentation</p>
          <p class="subtitle">Digital Nomad</p>

      </v-card>
    </v-flex>

    <v-flex>
      <v-card>

          <div class="avatar">
            <img
              width="75"
              src="img/team/jay-200x200-whitebg.png"
              alt
              class="img-responsive img-circle"
            />
          </div>
          <h4>Jay Shore</h4>
          <p class="subtitle">Cannabis &amp; CBD Markets</p>
          <p class="subtitle">
            <a href="http://710decibels.com">710decibel promotions</a>
          </p>
          <p class="subtitle">San Diego, California USA</p>
      </v-card>    
    </v-flex>
  </v-layout>

</v-container>
</template>
