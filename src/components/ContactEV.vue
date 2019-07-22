<!--

https://alligator.io/vuejs/vuetify-validate-empty-fields/

-->

<template>


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


				<div class="col-lg-4">
					<div class="widget-contact">
						<h5>Main Office</h5>

						<address>
							<strong>Elastic Ventures, Inc.</strong><br>
							30661 Valley Center Rd.<br>
							Valley Center, CA. 92082<br>
							<abbr title="Phone">US:</abbr> +1-619-924-0140
							<abbr title="Phone">UK:</abbr> +44-2035190912
							<abbr title="Phone">AU:</abbr> +61-03-43330007
						</address>

						<address>
							<strong>Email</strong><br>
							<a href="mailto:hello@elastic.ventures">hello@elastic.ventures</a>
						</address>
						<address>
							<strong>We're on social networks</strong><br>
							<ul class="company-social">
								<li class="social-facebook"><a href="http://fb.com/elastic.ventures" target="_blank"><i
											class="fa fa-facebook"></i></a></li>
								<li class="social-linkedin"><a href="http://linked.in/company/elasticdotventures"
										target="_blank"><i class="li li-facebook"></i></a></li>
								<li class="social-github"><a href="http://github.com/elasticdotventures"
										target="_blank"><i class="li li-github"></i></a></li>
								<li>WeChat: elastic_ventures</li>
								<!--
                            <li class="social-twitter"><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                            <li class="social-dribble"><a href="#" target="_blank"><i class="fa fa-dribbble"></i></a></li>
                            <li class="social-google"><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
							-->
							</ul>
						</address>

					</div>
				</div>
			</div>

</template>
