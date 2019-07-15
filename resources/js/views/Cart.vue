<template>
    <table class="highlight">

        <thead>
        <tr>
            <th>Название</th>
            <th>Количество</th>
            <th>Стоимость</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="posit in $store.state.cart"
          :key="posit.id"
          class="navbar-item"
            href="">

          <td>{{ posit.namepost }}</td>
          <td>{{ posit.quantity }}</td>
          <td>{{ posit.totalPrice.toFixed(2) }}</td>
          <button class="removeBtn"
            title="Удалить из корзины"
            @click.prevent="removeFromCart(posit)">
            <i class="material-icons">delete</i>
          </button>
        </tr>
        <button @click.prevent="addOrder()" class="navbar-item btn">
           Итого: {{ totalPrice }}
        </button>

        </tbody>
    </table>

</template>

<script>
import axios from 'axios';
export default {

  data: function() {
    return {
      posit: {
          namepost:'',
          quantity:'',
          totalPrice:'',
      },
      errors: []
    }
  },
  methods: {
    addOrder() {
      let data1 = {cart: JSON.stringify(this.$store.state.cart)}
      axios.post(`/add-order`, data1)
      .then(response => {
        this.$router.push({path:'/order'})
      this.posit = response.data
      })
      .catch(e => {
      this.errors.push(e)
      })
    },
    removeFromCart(posit) {
        this.$store.commit('removeFromCart', posit);
    },
  },
    computed: {
    totalPrice() {
        let total = 0;

        for (let item of this.$store.state.cart) {
            total += item.totalPrice;
        }

        return total.toFixed(2);
    }
  }
}
</script>
<style>
.removeBtn {
    margin-right: 1rem;
    margin-top: 1rem;
    color: red;
}
.btn {
  margin-top: 1rem;
}
</style>
