import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/components/Contact';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/contact',
      name: 'home',
      component: Contact
    },
  ]
})


