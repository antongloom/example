<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-12">
            <h1>Site</h1>
            <app-cart></app-cart>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-12">
            <app-product></app-product>
            <hr>
            <div class="form-group">
              <label>Name</label>
              <input type="text"
                     class="form-control"
                     v-model="name">
            </div>
            <div class="form-group">
              <label>Phone</label>
              <input type="text"
                     class="form-control"
                     v-model="phone">
            </div>
            <button class="btn btn-primary"
                    :disabled="btnDisabled"
                    @click="onOrder">
              Order now
            </button>
            <div class="alert alert-success"
                 v-if="showResult">
                 Your order is done!  
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppProduct from './components/Product'
import AppCart from './components/Cart'
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      name: '',
      phone: ''
    }
  },
  computed: {
    ...mapGetters([
      'cnt',
      'orderState'
    ]),
    btnDisabled(){
      return this.cnt < 1 || this.orderState !== null
    },
    showResult(){
      return this.orderState == 'done'
    }
  },
  components: {
    AppProduct,
    AppCart
  },
  methods: {
    onOrder(){
      this.$store.dispatch('sendOrder',{
        name: this.name,
        phone: this.phone
      })
    }
  }
}
</script>

<style>
  .alert{
    margin: 10px 0px;
  }
</style>
