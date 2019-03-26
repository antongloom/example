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
			this.$store.commit('minus')
		},
		onPlus(){
			this.$store.commit('plus', 5)
		}
	},
	strict: process.env.NODE_ENV !== 'production'
}
</script>

<style>

</style>
