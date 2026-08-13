<script setup>
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
</script>

<template>
  <main class="app">
    <ProductList />
    <ShoppingCart />
  </main>
</template>

<style scoped>
.app {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
