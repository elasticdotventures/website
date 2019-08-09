  /*
  RX JS offers "observables"
  provide Rx observables with the `subscriptions` option
  
https://www.youtube.com/watch?v=0Jo_Q8NYd3I

import { Observable } from 'rxjs'

Vue.component('foo', {
  subscriptions: function () {
    return {
      msg: new Observable(...)
    }
  }
})

const vm = new Vue({
  subscriptions: {
    msg: messageObservable
  }
})

vm.$observables.msg.subscribe(msg => console.log(msg))

   subscriptions: {
    msg: messageObservable
  },
  */ 

  