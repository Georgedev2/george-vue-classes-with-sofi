<script setup>
import { formatNaira } from '../utils/formatNaira'

const props = defineProps({
  item: { type: Object, required: true },
})

const emit = defineEmits(['increase', 'decrease', 'remove'])
</script>

<template>
  <li class="cart-item">
    <span class="name">{{ item.name }}</span>
    <span class="price">{{ formatNaira(item.price) }}</span>
    <span class="quantity">
      <button @click="emit('decrease', item.id)">-</button>
      {{ item.quantity }}
      <button @click="emit('increase', item.id)">+</button>
    </span>
    <span class="line-total">{{ formatNaira(item.price * item.quantity) }}</span>
    <button @click="emit('remove', item.id)">Remove</button>
  </li>
</template>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
}

.name {
  flex: 1;
}
</style>
