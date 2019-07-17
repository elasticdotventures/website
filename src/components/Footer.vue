<template>
  <v-footer>
    <!--
	icons https://material.io/tools/icons/?style=outline
    -->
    &nbsp; <v-icon>copyright</v-icon>
2019 - Elastic Ventures, Inc.
    <!--
	<v-icon>facebook</v-icon>
	<v-icon>twitter</v-icon>
	<v-icon>linkedin</v-icon>
	<v-icon>instagram</v-icon>
    -->

    <v-dialog v-if="showTermsOfService"></v-dialog>

    <div class="text-xs-center">
      <v-dialog v-model="dialog" width="600">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">
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
import EVPrivacyPolicy from "./_Dataphiles/EVPrivacyPolicy.vue";

export default {
  components: {
    // EVTermsOfService,
    EVPrivacyPolicy
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>