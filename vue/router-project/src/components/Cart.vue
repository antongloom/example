<template>
	<div>
		<h1>Cart</h1>
		<hr>
		<div v-if="empty"
			 class="alert alert-warning">
			 Your cart is empty
		</div>
		<table v-else>
			<thead>
				<tr>
					
				</tr>
			</thead>
		</table>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default{
		computed: {
			...mapGetters('products', {
        		productsAll: 'items'
    		}),
    		...mapGetters('cart', {
        		productsInCart: 'products'
    		}),
    		products(){
    			return this.productsAll.filter((elem) => {
    				return this.productsInCart.indexOf(elem.id_product) !== -1;
    			});
    		}
  		}
	}
</script>