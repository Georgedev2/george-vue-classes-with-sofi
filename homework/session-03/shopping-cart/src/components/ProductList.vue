<script setup>
import { products } from '../data/products'
import { useCart } from '../composables/useCart'
import ProductItem from './ProductItem.vue'

const { addToCart } = useCart()
</script>

<template>
  <section>
    <h2>Products</h2>
    <ul class="product-list">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </ul>
  </section>
</template>

<style scoped>
.product-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
