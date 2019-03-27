import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		cnt: 0,
		price: 1000,
		orderState: null
	},
	getters: {
		cnt(state){
			return state.cnt;
		},
		price(state){
			return state.price;
		},
		 total(state){
			return state.cnt * state.price;
		},
		orderState(state){
			return state.orderState;
		}
	},
	mutations: {
		minus(state){
			if(state.cnt > 0){
				state.cnt--
			}
		},
		plus(state){
			state.cnt ++
		},
		orderSend(state){
			state.orderState = 'pending'
		},
		orderDone(state){
			state.orderState = 'done'
		},
		setCnt(state, count){
			if(count < 0){
				count = 0;
			}

			state.cnt = count;
		}
		/*send(state){
			state.orderState = 'done'
		}*/
		/*plus(state, payload){
			state.cnt += payload
		}*/
	},
	actions: {
		sendOrder(store, payLoad){
			store.commit('orderSend')
			console.log(payLoad);
			setTimeout(() => {
				store.commit('orderDone')		
			},1000)
		}
	}
});