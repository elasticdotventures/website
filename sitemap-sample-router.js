// sample-router.js
 
import VueRouter from 'vue-router';
 
export const router: VueRouter = new VueRouter(
  {
    routes: [
      {
        path:      '/',
        name:      'index',
        component: Index,
      },
    ],
  },
);
