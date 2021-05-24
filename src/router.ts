/*
OFFICIAL DOCS:
https://router.vuejs.org/


    Nested route/view mapping
    ^^^ 🍰
    Modular, component-based router configuration
    ^^^ 🍰
    Route params, query, wildcards
    ^^^ 🍰
    View transition effects powered by Vue.js' transition system
    ^^^ 🍰
    Fine-grained navigation control
    ^^^ 🍰
    Links with automatic active CSS classes
    ^^^ 🍰
    HTML5 history mode or hash mode, with auto-fallback in IE9
    ^^^ how the URI is formatted. 
    Customizable Scroll Behavior
    ^^^ 🍰

CODE EXAMPLES:
https://github.com/vuejs/vue-router/tree/dev/examples

API REFERENCE:
https://router.vuejs.org/api/

*/

import Vue from 'vue'

import Router from 'vue-router'
Vue.use(Router)

const component1 = {
  template:`<h1><div class="title">Page 1</div><h1>`
}
const component2 = {
  template:`<div class="title">Page 2</div>`
}
const component3 = {
  template:`<div class="title">Page 3</div>`
}



/*

vue-router uses path-to-regexp as its path matching engine, 
so it supports many advanced matching patterns such as optional dynamic segments, 
zero or more / one or more requirements, and even custom regex patterns.

notes: 
https://github.com/pillarjs/path-to-regexp
{ path: 'poetry/:id(\\d+)', name: 'poetrycard', component: PoetryCard }

*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    },
    {
      path: '/projects/:topic',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Projects.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Contact.vue')
    },

    // 🦨 some test routes, these don't currently work -- 
    {
      path: '/Intranet',
      name: 'Intranet',
      component: () => import('./views/Intranet.vue')
    },
    {
      path: '/page2',
      name: 'Page 2',
      component: component2,
    },
    {
      path: '/page3',
      name: 'Page Three',
      component: component3,
    },
    // this will globally redirect all unknowns. 
    // 🍰 really want to log all bad routes, need to dive deeper into routing later. 
    // { path: '*', redirect: '/' }
  ]
})
