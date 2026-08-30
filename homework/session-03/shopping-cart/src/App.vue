<template>
  <main class="app">
    <OptionsApi />
    <CompositionApi />
  
  </main>
</template>

<script setup>
//import ProductList from './components/ProductList.vue'
//import ShoppingCart from './components/ShoppingCart.vue'
import OptionsApi from './components/OptionsApi.vue'
import CompositionApi from './components/CompositionApi.vue'
</script>

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
