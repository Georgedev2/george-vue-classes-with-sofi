<template>

  <button @click="emit('george', 'YES')">geoge</button>

  <button @click="emit('sofi', 'HENRY')">Click ME and See Wonders {{ label }}</button>
</template>
<script setup>
const emit = defineEmits(['sofi', 'george', 'anything', 'me-and-you'])

defineProps({
 label: {
    type: String,
    required: true
  } 
})
</script>