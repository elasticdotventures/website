import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

let component1 = {
  template:`<div class="title">Page 1</div>`
}
let component2 = {
  template:`<div class="title">Page 2</div>`
}
let component3 = {
  template:`<div class="title">Page 3</div>`
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    // some test routes
    {
      path: '/page1',
      name: 'Page 1',
      component: component1,
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
    { path: '*', redirect: '/' }
  ]
})
