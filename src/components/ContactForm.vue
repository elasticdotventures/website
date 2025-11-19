<!--
NOTES: 
https://blog.webf.zone/vue-js-forms-components-and-considerations-d81b3ffe9efb

Form best practices. 
* form element for backward compatibility
* label for accessibility.<template>

* consider fieldset
https://www.w3schools.com/tags/tag_fieldset.asp

BEST PRACTICES? 
👇 how are these suggestions going to be implemented in our forms? 😉
  
Minimum and Viable Styling for state
    Default —input control is untouched
    Error — when validation has failed for given input
    Focus and blur state
    Disabled state
    Read-only state (different from disabled state)

^^^ does fieldset apply to vuetify?  (no, use vuetify types) 

  v-text-field
  https://vuetifyjs.com/en/components/text-fields
  :rules Accepts an array of functions that take an input value as an argument and return either true / false or a string with an error message
  :success Puts the input in a manual success state
  :value "input value"
  :messages Displays an array of messages or message if using a string
  :label Sets input label
  :hint  
  :autofocus
  :default is a slot
  :counter="max" or :counter=25 (is the length)


<style>

</style>

-->

<template>
	<v-container id="ContactForm">

		<v-layout wrap justify-space-between>
			<v-flex xs12 md4>

			<v-form ref="form">

 
      </v-form>


			</v-flex>
		</v-layout>
	</v-container>

</template>

<script>
import { required, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

/**
Author: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
this probably isn't explicitly necessary since 
we have a type="email"
**/
function isEmailValid(email) {
  // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// As a global instance
// const Log = Vue.log();

export default {
export default {
  name: 'ContactForm',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      email: null,
      msg: 'hi!',
      checked: true,
      picked: 'one',
      selected: 'two',
      multiSelect: ['one', 'three']        
    }
  },
  validations() {
    return {
      email: {
        required,
        minLength: minLength(4)
      }
    }
  }, 
  methods: {

  },
  mounted() {
    console.log('ContactForm mounted!')
  }
}
</script>


