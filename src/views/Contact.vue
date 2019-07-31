<template>
  <v-content id="contact">

      <v-parallax alt="airstream" dark height="375" 
        src="img/discorocket_toaster_dereksamatha.jpg" 
      >


						<v-container>
							Email:
							<a href="mailto:hello@elastic.ventures">hello@elastic.ventures</a>
						</v-container>

						<v-container>
							Phone:
							<a href="callto://+13477083850">+1-347-708-3850</a>
						</v-container>

						<v-title>Mailing Address</v-title>

						<v-container>
							<strong>Elastic Ventures, Inc.</strong><br>
							30661 Valley Center Rd.<br>
							San Diego, CA. 92082<br>
						</v-container>

						<v-container style="background-color: #b2b ">

<v-list>
    <v-list-item-group>
    <v-list-item v-for="(item,i) in socials" :key="i"
    >
    <v-button>
        <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
            <v-list-item-title>
                {{ item.alt }}
            </v-list-item-title>
        </v-list-item-content>
    </v-button>
    </v-list-item>
    </v-list-item-group>
</v-list>

                        <v-icon>mdi-facebook</v-icon>



							<strong>Social</strong><br>

                            <v-icon>facebook</v-icon>
                            <v-icon>linkedin</v-icon>
                            <v-icon>github</v-icon>
							<ul class="company-social">
								<li class="social-facebook"><a href="" target="_blank"><i
											class="fa fa-facebook"></i></a></li>
								<li class="social-linkedin"><a href=""
										target="_blank"><i class="li li-facebook"></i></a></li>
								<li class="social-github"><a href="http://github.com/elasticdotventures"
										target="_blank"><i class="li li-github"></i></a></li>
								<li>WeChat: elastic_ventures</li>
								
								
                            <li class="social-twitter"><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                            <li class="social-dribble"><a href="#" target="_blank"><i class="fa fa-dribbble"></i></a></li>
                            <li class="social-google"><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
							</ul>
						</v-container>
    
      </v-parallax>


    <ContactForm to="ops+hello@elastic.ventures" />

  </v-content>
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
