<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!products.lenght"><i>Please add some products to your cart</i>></p>
        <ul>
           <li
               v-for="product in products"
               :key="product.id">
<!--               {{product.title}} from the products db - id, name, price etc...-->

           </li>
        </ul>
        <p><button :aria-disabled="!products.lenght" @click="checkout(products)">Checkout</button> </p>
        <p v-show="checkoutStatus">Checkout {{checkoutStatus}}}</p>
    </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex'
    export default {
        computed:{
            ...mapState({
                checkoutStatus : state => state.cart.checkoutStatus
            }),
            ...mapGetters('cart',
                {
                    products: 'cartProducts',
                    total: 'cartTotalPrice'
                }),
            methods:
                {
                    checkout(products)
                    {
                        this.$store.dispatch('cart/checkout', products)
                    }
                }
        }
    }
</script>

<style scoped>

</style>
