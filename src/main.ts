

import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuejs-logger'

// vue.use docs:
// 🤓 https://vuejs.org/v2/guide/plugins.html

// google analytics. 
// docs: https://matteogabriele.gitbooks.io/vue-analytics/content/
// disable tracking i.e. 'gdpr'
// Vue.$ga.disable()
// Vue.$ga.enable()

import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-54542129-1'
})

// vuelidate has a nice pattern,  need to see i18n
// https://vuelidate.netlify.com/#sub-basic-usage
// import Vuelidate from 'vuelidate'
// Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.config.silent = false; 
Vue.config.devtools = true; 
Vue.config.errorHandler = function(err,vm,info) {  
  // handle error
  // `info` is a Vue-specific error info, e.g. which lifecycle hook
  // the error was found in. Only available in 2.2.0+
  // In 2.2.0+, this hook also captures errors in component lifecycle hooks. Also, when this hook is undefined, captured errors will be logged with console.error instead of crashing the app.
  // In 2.4.0+, this hook also captures errors thrown inside Vue custom event handlers.
  // In 2.6.0+, this hook also captures errors thrown inside v-on DOM listeners. In addition, if any of the covered hooks or handlers returns a Promise chain (e.g. async functions), the error from that Promise chain will also be handled.  
  // Error tracking services Sentry and Bugsnag provide official integrations using this option.
}

Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` is the component hierarchy trace
}

// custom key bindings?? 
Vue.config.keyCodes = {

}


// error on console.log 
// Vue.$observables.msg.subscribe(msg => console.log(msg))
// Vue.$observables.msg.subscribe(msg => Vue.$log.debug(msg)); 

//emit 0 after 1 second then complete, since no second argument is supplied
// const source = timer(1000, ()=>{}); // 
//output: 0

// PER: 
// https://stackoverflow.com/questions/49572854/property-interval-does-not-exist-in-the-type-observable/50438416
// Note that any Observable creation function that previously existed on the Observable type, 
// should now be imported from 'rxjs'.

// for Vue-rx testing. (not used yet)
// import { Observable } from 'rxjs';
// import 'rxjs/add/observable/interval'
//import 'rxjs/add/operator/filter'
// import {map} from 'rxjs/operators';
// import {Observable,of,from} from 'rxjs';


// DOCS: https://github.com/vuejs/vue-rx
import VueRx from 'vue-rx'
Vue.use(VueRx);
// messageObservable = new Observable();
import { Observable } from 'rxjs'



import App from './App.vue'
import router from './router'
import store from './store'
// import './plugins/ev🧠'

import { timer } from 'rxjs';
const source = timer(1000, 2000);
// const subscribe = source.subscribe(val => console.log(val) );


const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});


new Vue({
  router,
  store,
  subscriptions: {
    msg : new Observable
  },
  created() {
    //  this.$log.info("message")

  /* observable.subscribe({
      next(x) { this.$log.info('got value ' + x); },
      error(err) { Vue.$log.warn('something wrong occurred: ' + err); },
      complete() { Vue.$log.info('done'); }
    });
    */

     // this.$log.info('just after subscribe');
  },
  render: h => h(App)
}).$mount('#app')

// $mount 
// .$destroy
// .$set
// .$delete
// .$watch
// .$on
// .$once
// .$off
// .$emit
// .$nextTick
// .$createElement

// a good (or skunky?) way to fire initialization events? 
// store.commit('increment')

// store.commit('change_trustMe',3)


