<!-- Описание класической схемы -->
<!-- App -->

<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-12">
            <h1>Site</h1>
            <app-cart :cnt="cnt"></app-cart>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-12">
            <app-product
                @minus="onMinus"
                @plus="onPlus"
            >
            </app-product>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppProduct from './components/Product'
import AppCart from './components/Cart'

export default {
  data() {
    return{
      cnt: 1
    }
  },
  components: {
    AppProduct,
    AppCart
  },
  methods: {
    onMinus(){
      if(this.cnt > 1){
        this.cnt--
      }
    },
    onPlus(){
      this.cnt++
    }
  }
}
</script>

<style>

</style>


<!-- Product -->


<template>
  <div>
    <h2>Product title</h2>
    <div class="price">1000</div>
    <hr>
    <button class="btn btn-warning" @click="onMinus">-1</button>
    <button class="btn btn-success" @click="onPlus">+1</button>
    {{cnt}}
  </div>
</template>

<script>


export default {
	methods: {
		onMinus(){
			this.$emit('minus')
		},
		onPlus(){
			this.$emit('plus')
		}
	}
}
</script>

<style>

</style>


<!-- Cart -->


<template>
  <div>
    {{cnt}}
  </div>
</template>

<script>


export default {
  props: ['cnt'],
  components: {
   
  }
}
</script>

<style>

</style>


<!-- Вариант с стейтмом  -->


<!-- App -->

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
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppProduct from './components/Product'
import AppCart from './components/Cart'

export default {
  components: {
    AppProduct,
    AppCart
  }
}
</script>

<style>

</style>

<!-- Product -->


<template>
  <div>
    <h2>Product title</h2>
    <div class="price">1000</div>
    <hr>
    <button class="btn btn-warning" @click="onMinus">-1</button>
    <button class="btn btn-success" @click="onPlus">+1</button>
  </div>
</template>

<script>


export default {
  methods: {
    onMinus(){
      if(this.$store.state.cnt > 1){
        this.$store.state.cnt--
      }
    },
    onPlus(){
      this.$store.state.cnt++
    }
  }
}
</script>

<style>

</style>


<!-- Cart -->


<template>
  <div>
    {{ cnt }}
  </div>
</template>

<script>


export default {
  components: {
    
  },
  computed: {
    cnt(){
      return this.$store.state.cnt
    }
  }
}
</script>

<style>

</style>

