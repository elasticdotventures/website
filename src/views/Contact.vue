<style>
overline {
    font-family: nasa;
}

</style>
<template>
  <v-container id="contact">

      <v-parallax alt="airstream" dark height="375" style="border-radius: 10px"
        src="img/discorocket_toaster_dereksamatha.jpg" 
      >


						<v-container>
							<h2 body-2>Email:</h2>
							<a href="mailto:hello@elastic.ventures">hello@elastic.ventures</a>
							<h2 body-2>Phone:</h2>
							<a href="callto://+13477083850">+1-347-708-3850</a>

						<h2 body-2>Mailing Address</h2>
							<strong>Elastic Ventures, Inc.</strong><br>
							30661 Valley Center Rd.<br>
							San Diego, CA. 92082<br>
						</v-container>

						<v-container>

    <v-btn flat dark class="text-none text--overline" v-for="(item,i) in socials" :key="i"
    >
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.alt }}

        </v-btn>

	</v-container>
    
      </v-parallax>


    <ContactForm sendto="ops+hello@elastic.ventures"></ContactForm>

  </v-container>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

import ContactForm from "../components/ContactForm.vue";

@Component({
  components: {
      ContactForm
  },
  data: () => ({
      socials: [
          { icon:"mdi-facebook", alt:"Facebook", link:"http://fb.com/elastic.ventures" },
          { icon:'mdi-linkedin', alt:'LinkedIn', link:"http://linked.in/company/elasticdotventures" },
          { icon:'mdi-microsoft', alt:'GitHub', link:'http://github.com/elasticdotventures'},
          { icon:'mdi-wechat', alt:'WeChat', link:'wechat://elastic_ventures'}
      ]
  })
})
export default class Contact extends Vue {}
</script>
