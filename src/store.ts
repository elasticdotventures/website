/*

Some thoughts
* 🍰 log state mutations to update Google Analytics, verify operation. 


🤓 n00b notes:
https://flaviocopes.com/vuex/

Vue.js Components communicate using:

props, to pass state down to child components from a parent
events, to change the state of a parent component from a child, 
    or using the root component as an event bus


Authentication:
https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex

#######################
# $emit: 
$emit in Vue is primarily used for sending custom events between 
$emit sends ACTIONS CHILD components UPWARD TO PARENT components (or to a central level vuex store)
Since props (i.e. data) can only flow in a unidirectional format (up)
custom events can be used by child components notify the parent component about something.

*/



import Vue from 'vue'

import Vuex, { Store } from 'vuex'
Vue.use(Vuex)


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
  state: {
    count: 5,
    trustMe: 1
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
    change_trustMe(state, trustMe) {
      state.trustMe = trustMe;
    }, 
    // 🦨👇 increment https://vuex.vuejs.org/guide/
    incrementx (state) {
      alert('hello')
      state.count++
    },
    increment: state => state.count++,
    decrement: state => state.count--
  },
  /* 
  Actions are similar to mutations, the differences being that:
  * Instead of mutating the state, actions commit mutations.
  * Actions can contain arbitrary asynchronous operations.

  Actions Get data from server and send that to mutations to mutate the current state
  */ 
  actions: {
  },
  /*
  Getters compute properties based on the store state. 
  computed properties for the store. 

  Use getters in your actions or directly in your component. 
  This is useful if several components need to calculate the same thing based on the store data, 
   yei can do it in one place instead of having to do it separately for each component.
  */
  getters: {
    trustMe: state => state.trustMe,
    count: state => state.count,
    // doneTodos: state => {
    //  return state.todos.filter(todo => todo.done)
    // }
    // doneTodosCount: (state, getters)=> {
    //  return getters.doneTodos.legnth
    // }
  }
})

