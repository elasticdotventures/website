<template>
  <v-footer>
    <!--
	icons https://material.io/tools/icons/?style=outline
    -->
    <!-- the click event will be triggered at most once -->
    <router-link to="/intranet">&nbsp; <v-icon>copyright</v-icon></router-link>
2019 - Elastic Ventures, Inc.
    <!--
	<v-icon>facebook</v-icon>
	<v-icon>twitter</v-icon>
	<v-icon>linkedin</v-icon>
	<v-icon>instagram</v-icon>


  <div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>

    -->
  
    <div class="text-xs-center">
   <v-btn href="https://github.com/elasticdotventures/eva.c0re">
      <v-icon>bookmark</v-icon>      
      github
    </v-btn>
    </div>

    <div class="text-xs-center">
      <v-dialog v-model="dialog" width="600">

        <template v-slot:activator="{ on }">
          <!--
          😉 v-slot:activator 
          ^^^ NOT WELL DOCUMENTED.  FIX! 
          https://github.com/vuetifyjs/vuetify/issues/6866

          https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots
          https://vuejs.org/v2/api/#v-on

          the activator slot in the component binds the data object from the render function so that its 
          available in the parent scope. 
      
https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth

Originally posted by @YuqiaoS in #6823 (comment)
          -->
          <v-btn v-on="on">
            <!--
              v-on: Listen for a custom event on the current vm. Events can be triggered by vm.$emit. The callback will receive all the additional arguments passed into these event-triggering methods.
            -->
      
            <v-icon>bookmark</v-icon>Terms of Service &amp; Privacy Policy
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

          <v-card-text>
            <!--
              <EVTermsOfService />
            -->
            <EVPrivacyPolicy />
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="dialog = false">I accept</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-footer>
</template>

<script>
// import EVTermsOfService from "./_Dataphiles/EVTermsOfService.vue";
import Vue from 'vue'
import EVPrivacyPolicy from "./_Dataphiles/EVPrivacyPolicy.vue";
import VueLogger from 'vuejs-logger';
import Vuex, { mapState, mapMutations } from 'vuex'; 

export default {
  components: {
    // EVTermsOfService,
    EVPrivacyPolicy
  },
  methods: {
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>