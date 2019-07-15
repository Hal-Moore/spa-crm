import Vue from 'vue'
import Vuex from 'vuex'
let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    cart: cart ? JSON.parse(cart) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
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
    this.commit('saveCart');
    },
    removeFromCart(state, posit) {
    let index = state.cart.indexOf(posit);

    if (index > -1) {
        let product = state.cart[index];
        state.cartCount -= product.quantity;
        state.cart.splice(index, 1);
    }
    this.commit('saveCart');
  },
  saveCart(state) {
    window.localStorage.setItem('cart', JSON.stringify(state.cart));
    window.localStorage.setItem('cartCount', state.cartCount);
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
