/*

https://vuex.vuejs.org/guide/state.html

Some thoughts
* 🍰 log state mutations to update Google Analytics, verify operation. 

🤓 n00b notes: 👇 an awful noob tutorial. 
https://flaviocopes.com/vuex/

Vue.js Components communicate using:

props, to pass state down to child components from a parent
events, to change the state of a parent component from a child, 
    or using the root component as an event bus
\



Authentication:
https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex

#######################
# $emit: 
$emit in Vue is primarily used for sending custom events between 
$emit sends ACTIONS CHILD components UPWARD TO PARENT components (or to a central level vuex store)
Since props (i.e. data) can only flow in a unidirectional format (up) from child to parent
custom events can be used by child components notify the parent component about something.
^^^ probably better to use an RxJS queue or same:same? 

*/



import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use(Vuex)

/*
this is a vue-x module as explained by :
https://scrimba.com/p/pnyzgAP/cqKK4psq 
*/
const Authentication = {
  // authentication. 
  state: { 
      showIntranet : false
  },
  mutations: {
      
  },
  getters: {
      
  },
  actions: {
      
  }
}

const moduleB = {
  state: { 
      
  },
  mutations: {
      
  },
  getters: {
      
  },
  actions: {
      
  }
}


/*
Vuex.Store

The Vuex store should only be mutated from within, 
 so outside components can not directly modify the state. 

 To mutate the state, components must 1. dispatch an action OR 2. commit a mutation.

To add a property (at runtime)
https://scrimba.com/p/pnyzgAP/ckMZp4HN
Vue.set(obj, 'new prop', 123)
state.obj = { ...state.obj, newProp: 123 }

*/
export default new Vuex.Store({
  /*
  state: the source of truth. 
  */
 modules: {
   a: Authentication,
   b: moduleB
  },
  state: {
    count: 5,
    trustMe: 0,     // trustLevel (0 = no tracking) 
  },

  /*
  👶 n00b: 
  mutation: The only process to (correctly) update Vuex central state
  is by committing a mutation; the syntax is roughly: 
    
      functionName (state, n)  // n is a number or object. 

    mutations:{ incrementBy (state, payload) { state.count += payload.amount } }
        
    store.commit('incrementBy', { amount: 29 });
    ^^^ (alt syntax):  store.commit({type:'incrementBy', amount: 29 })

  Additional notes:
  ^^^ mutation commits are synchronous (no async operations); since they update state (in VueTools) 
  
  ^^^ actions can also modify state; but don't trigger a Vuex event, 
  ^^^ actions MUST be used to perform asynchronous requests
  ^^^ then dispatch a mutation. 
  ^^^ 🍰  this.$store.dispatch('actionA').then(()=>{ 😋mutation });
  Ideas for composing asynchronous IO patterns:
  🙏 https://scrimba.com/p/pnyzgAP/c6ggR3cG
  */ 
  mutations: {
    change_trustMe(state, trustMeNewValue) {
      // state.a.showIntranet = (trustMeNewValue) ? true: false;  
      alert('new trustme')
      state.trustMe = trustMeNewValue;
    }, 
    // 🦨👇 increment https://vuex.vuejs.org/guide/
    incrementx (state) {
      alert('hello')
      state.count++
    },
    increment: state => state.count++,
    decrement: state => state.count--,
    // this.$store
  },
  /* 
  Actions are similar to mutations, the differences being that:
  * Instead of mutating the state, actions commit mutations.
  * Actions can contain arbitrary asynchronous operations.

  Actions Get data from server and send that to mutations to mutate the current state.
  mutations can't dispatch further actions (without a queue or whatever)
  
  */ 
  actions: {
    thenMutateXYZ : (foo) => {
    },
    gotTrustEgg : ( event ) => {
      // get (getters); actions "got" syntax; something happened. 
      // axios.get('url').then(()=>{}); 
      

    }
  },
  /*
  get() 
   captadores (spanish; acquiriers)

  Getters compute properties based on the store state. 
  computed properties for the store. 

  Use getters in your actions or directly in your component. 
  This is useful if several components need to calculate the same thing based on the store data, 
  yei can better common 'getter' source of truth than having separately for each component.
  */
  getters: {
    trustMe: state => state.trustMe,      // do we trust this person; 
    showIntranet : state => state.trustMe > 1, 
    // count: state => state.count,     🦨 count() is bad, rename to getCount while 👶
    getCount : (state) => { return state.count; }    // an arbitrary function; count++ may be incremented or modified (binary) by functions.
                                          // and it becomes part of the state machine; any modification to the state will result in the count
                                          // being incremented. 
    //  return state.todos.filter(todo => todo.done)
    // }
    // doneTodosCount: (state, getters)=> {
    //  return getters.doneTodos.legnth
    // }
  },

})

