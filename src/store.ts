/*

https://flaviocopes.com/vuex/

Vue.js Components communicate using:

props, to pass state down to child components from a parent
events, to change the state of a parent component from a child, 
    or using the root component as an event bus


Authentication:
https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex


*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  /*
  state: the source of truth. 
  */ 
  state: {
    count: 0,
    trustMe: 1
  },
  /*
  mutation: The only way to change the state in a Vuex store is by committing a mutation. 
  */ 
  mutations: {
    change(state, trustMe) {
      state.trustMe = trustMe;
    }, 
    // 🦨👇 increment https://vuex.vuejs.org/guide/
    increment (state) {
      state.count++
    }
  },
  /* 
  Actions are similar to mutations, the differences being that:
  * Instead of mutating the state, actions commit mutations.
  * Actions can contain arbitrary asynchronous operations.
  */ 
  actions: {
  },
  getters: {
    trustMe: state => state.trustMe
  }
})
