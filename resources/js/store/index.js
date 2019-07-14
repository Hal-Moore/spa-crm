import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    cartCount: 0,
  },
  mutations: {
    addToCart(state, posit) {
      let found = state.cart.find(product => product.id == posit.id);

    if (found) {
        found.quantity ++;
        found.totalPrice = found.quantity * found.price;
    } else {
        state.cart.push(posit);

        Vue.set(posit, 'quantity', 1);
        Vue.set(posit, 'totalPrice', posit.price);
    }

    state.cartCount++;
  }
  },
  actions: {
    async fetchCurrency(){
      const key = process.env.VUE_APP_FIXER
      const res = await fetch('http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB')
      return await res.json()
    }
  }
})
