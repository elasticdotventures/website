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

import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/projects/:topic',
      name: 'projects',
      component: () => import('./views/Projects.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})
