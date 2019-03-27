<template>
  <div>
    <h2>Product title</h2>
    <div class="price">{{price}}</div>
    <hr>
    <button class="btn btn-warning" @click="minus">-1</button>
    <button class="btn btn-success" @click="plus">+1</button>
    <input type="text" :value="cnt" @input="onInput">
  </div>
</template>

<script>

import {mapMutations} from 'vuex';
import {mapGetters} from 'vuex';

export default {
	computed: {
		...mapGetters([
			'price',
			'cnt'
		])
	},
	methods: {
		...mapMutations([
				'minus',
				'plus'
			]),
		onInput(e){
			this.$store.commit('setCnt', e.target.value)
		}
		/*onMinus(){
			this.$store.commit('minus')
		},
		onPlus(){
			this.$store.commit('plus')
		}*/
	},
	strict: process.env.NODE_ENV !== 'production'
}
</script>

<style>

</style>


<!-- 

<template>
  <div>
    <h2>Product title</h2>
    <div class="price">{{price}}</div>
    <hr>
    <button class="btn btn-warning" @click="onMinus">-1</button>
    <button class="btn btn-success" @click="onPlus">+1</button>
  </div>
</template>

<script>



export default {
	computed: {
		price(){
			return this.$store.getters.price
		}
	},
	methods: {
		onMinus(){
			this.$store.commit('minus')
		},
		onPlus(){
			this.$store.commit('plus')
		}
	},
	strict: process.env.NODE_ENV !== 'production'
}
</script>

<style>

</style>

-->
