<!--
NOTES: 
https://blog.webf.zone/vue-js-forms-components-and-considerations-d81b3ffe9efb

Form best practices. 
* form element for backward compatibility
* label for accessibility.<template>

* consider fieldset
https://www.w3schools.com/tags/tag_fieldset.asp
^^^ does this apply to vuetify? 

Minimum and Viable Styling for state
    Default —input control is untouched
    Error — when validation has failed for given input
    Focus and blur state
    Disabled state
    Read-only state (different from disabled state)

</template>

<script>
export default {

}
</script>

<style>

</style>

-->

<template>
	<v-container id="ContactForm">

		<v-layout wrap justify-space-between>
			<v-flex xs12 md4>

			<v-form ref="form">

			<h1>Contact Form</h1>
      <i>😢 please email us!</i>
      <!--
      {{ sendto }}



      -->
      
<!--
          <v-text-field
            v-model="model"
            :counter="max"
            :rules="rules"
            label="First name"
          ></v-text-field>
-->
        </v-form>


			</v-flex>
		</v-layout>
	</v-container>

<!--

https://alligator.io/vuejs/vuetify-validate-empty-fields/
<v-form>
  <v-text-field
    v-model='gator.login'
    label='Login'
    :rules='loginRules'
    required
  ></v-text-field>
  <v-text-field
    v-model='gator.email'
    :rules='emailRules'
    label='E-mail'
    required
  ></v-text-field>
</v-form> 
-->


<!--


				<div class="col-lg-4">
					<div class="widget-contact">
					</div>
				</div>
			</div>

-->
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  props: ['sendto'],
  components: {
  },
})
export default class ContactForm extends Vue {}
</script>


