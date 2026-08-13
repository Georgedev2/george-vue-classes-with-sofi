<script setup>
defineProps({
  itemCount: { type: Number, required: true },
  cartTotal: { type: String, required: true },
})
</script>

<template>
  <div class="cart-summary">
    <div>Items: {{ itemCount }}</div>
    <div>Total: {{ cartTotal }}</div>
  </div>
</template>

<style scoped>
.cart-summary {
  font-weight: bold;
  margin-top: 1rem;
}
</style>
