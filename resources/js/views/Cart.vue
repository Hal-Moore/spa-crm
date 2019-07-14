<template>
    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="">
            Корзина ({{ $store.state.cartCount }})
        </a>

        <div v-if="$store.state.cart.length > 0" class="navbar-dropdown is-boxed is-right">
            <a v-for="posit in $store.state.cart"
                :key="posit.id"
                class="navbar-item"
                href=""
            >
                {{ posit.title }} x{{ posit.quantity }} - ${{ posit.totalPrice }}
            </a>

            <a class="navbar-item" href="">
                Итого: ${{ totalPrice }}
            </a>

            <hr class="navbar-divider">

            <a class="navbar-item" href="">
                К оплате
            </a>
        </div>

        <div v-else class="navbar-dropdown is-boxed is-right">
            <a class="navbar-item" href="">
                Корзина пуста
            </a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
    addToCart(posit) {
        this.$store.commit('addToCart', posit);
    }
}
}
</script>