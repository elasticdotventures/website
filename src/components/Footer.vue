<template>
  <v-footer>
	  <!--
	   icons https://material.io/tools/icons/?style=outline
	  -->
	  <v-icon>copyright</v-icon>
    2019 - Elastic Ventures, Inc. 
    <EVTermsOfService v-if="showTermsOfService" />
    <div v-else>
	  <v-icon>home</v-icon>
      <a href="tos.txt">Terms of Service</a>
    </div>

    <EVPrivacyPolicy v-if="showPrivacyPolicy" />
    <div v-else>
	  <v-icon>bookmark</v-icon>
      <a href="privacypolicy.htm">Privacy Policy</a>
    </div>
  </v-footer>
</template>

<script>
import EVTermsOfService from "./_Dataphiles/EVTermsOfService.vue";
import EVPrivacyPolicy from "./_Dataphiles/EVPrivacyPolicy.vue";

export default {
  data() {
    return {
      showTermsOfService: false,
      showPrivacyPolicy: false
    };
  }
};
</script>