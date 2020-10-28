import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import AppLayout from '../layouts/AppLayout.vue';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/about',
        name: 'about',
        component: About,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
});

router.addRoutes(routes);

export default router;
