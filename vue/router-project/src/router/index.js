import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList';
import Checkout from '@/components/Checkout';
import Cart from '@/components/Cart';

Vue.use(Router)



export default new Router({
  mode: 'history',		
  routes: [
    {
      path: '/checkout',
      component: Checkout
    }
  ]
})



