<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-9">
            <h1>Site</h1>
          </div>
          <div class="col col-sm-3">
            <div class="alert alert-default">
              <div>In Cart: </div>
            </div>
          </div>
        </div>
        <hr>
      </div>
    </header>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col col-sm-3 menu">
            <ul class="list-group">
              <li class="list-group-item">Products</li>
              <li class="list-group-item">Cart</li>
              <li class="list-group-item">Checkout</li>
            </ul>
          </div>
          <div class="col col-sm-9">
              <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from './components/Cart';
import Checkout from './components/Checkout';   
import E404 from './components/E404';  
import Product from './components/Product';
import ProductsList from './components/ProductsList';
export default {
  data(){
    return{
     
    }
  },
  computed: {
    
  },
  components: {
    Cart,
    Checkout,
    E404,
    Product,
    ProductsList
  },
  methods: {
   
  }
}
</script>

<style>
  .menu{
    border-right: 1px solid #ddd;
  }

  .list-group-item{
    transition: background 0.3s, color 0.3s;
  }

  .list-group-item a{
    text-decoration: none;
  }

  .list-group-item.active a{
    color: inherit;
  }

  .slide-enter{
    color: inherit;
  }
  
  .slide-enter-active{
    animation: slideIn 0.5s;
  }

  .slide-enter-active{
    animation: slideIn 0.5s;
  }

  .slide-enter-to{
   
  }

  .slide-leave{
   
  }

  .slide-leave-active{
   animation: slideOut 0.5s;
  }

  @keyframes slideIn{
    from {transform: rotateY(90deg);}
    to {transform: rotateY(0deg);}
  }

  @keyframes slideOut{
    from {transform: rotateY(0deg);}
    to {transform: rotateY(90deg);}
    
  }

</style>
