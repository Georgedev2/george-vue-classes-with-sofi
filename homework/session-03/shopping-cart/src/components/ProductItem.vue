<script setup>
import { formatNaira } from '../utils/formatNaira'

defineProps({
  product: { type: Object, required: true },
})

const emit = defineEmits(['add-to-cart'])
</script>

<template>
  <li class="product-item">
    <span class="name">{{ product.name }}</span>
    <span class="price">{{ formatNaira(product.price) }}</span>
    <button @click="emit('add-to-cart', product)">Add to Cart</button>
  </li>
</template>

<style scoped>
.product-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
}

.name {
  flex: 1;
}
</style>
