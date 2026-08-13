<script setup>
import { useCart } from '../composables/useCart'
import { formatNaira } from '../utils/formatNaira'
import CartItem from './CartItem.vue'
import CartSummary from './CartSummary.vue'

const { cartItems, itemCount, cartTotal, increaseQuantity, decreaseQuantity, removeFromCart } =
  useCart()
</script>

<template>
  <section>
    <h2>Cart</h2>
    <p v-if="cartItems.length === 0" class="empty">Your cart is empty.</p>
    <ul v-else class="cart-list">
      <CartItem
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
        @increase="increaseQuantity"
        @decrease="decreaseQuantity"
        @remove="removeFromCart"
      />
    </ul>
    <CartSummary :item-count="itemCount" :cart-total="formatNaira(cartTotal)" />
  </section>
</template>

<style scoped>
.cart-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.empty {
  color: #888;
}
</style>
